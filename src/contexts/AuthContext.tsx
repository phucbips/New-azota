import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
  User as FirebaseUser,
} from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';
import { auth } from '../config/firebase';
import { userService } from '../services/user.service';
import { analyticsService } from '../services/analytics.service';
import { User, AuthContextType } from '../types';
import { AuthContext } from './AuthContextDefinition';
import { toast } from 'sonner';

interface AuthProviderProps {
  children: React.ReactNode;
}

// Function to get or create a sessionId from localStorage (safe for iOS Safari Private Mode / WebViews)
const getSessionId = () => {
  const generateId = () => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  try {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = generateId();
      localStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  } catch {
    return generateId();
  }
};

const safeRemoveSessionId = () => {
  try {
    localStorage.removeItem('sessionId');
  } catch {
    // Ignore storage errors on iOS Private Mode
  }
};

const detectDevice = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) return 'iOS';
  if (ua.includes('android')) return 'Android';
  return 'PC';
};

const SUPER_ADMIN_EMAILS = ['thanhphucn06@gmail.com', 'thanhphucn4u@gmail.com'];

const buildFallbackUser = (firebaseUser: FirebaseUser, sessionId: string): User => {
  const userEmail = firebaseUser.email ? firebaseUser.email.toLowerCase() : '';
  const isSuperAdmin = SUPER_ADMIN_EMAILS.includes(userEmail);
  return {
    uid: firebaseUser.uid,
    email: userEmail,
    displayName: firebaseUser.displayName || userEmail.split('@')[0] || 'User',
    photoURL:
      firebaseUser.photoURL ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(userEmail[0] || 'U')}&background=4f46e5&color=fff&size=200`,
    role: isSuperAdmin ? 'admin' : 'student',
    grade: null,
    sessionId,
    joinedAt: Timestamp.now(),
    lastDevice: detectDevice(),
    lastLoginAt: Timestamp.now(),
  };
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionId] = useState(getSessionId);
  const currentUidRef = useRef<string | null>(null);

  const getOrCreateUser = useCallback(
    async (firebaseUser: FirebaseUser): Promise<User> => {
      const userEmail = firebaseUser.email ? firebaseUser.email.toLowerCase() : null;
      const isSuperAdmin = Boolean(userEmail && SUPER_ADMIN_EMAILS.includes(userEmail));
      const currentDevice = detectDevice();

      try {
        let existingUser = await userService.getUser(firebaseUser.uid);

        if (!existingUser && userEmail) {
          try {
            const userByEmail = await userService.findUserByEmail(userEmail);
            if (userByEmail) {
              if (userByEmail.uid !== firebaseUser.uid) {
                const { uid: oldUid, ...userData } = userByEmail;
                await userService.createUser(firebaseUser.uid, {
                  ...userData,
                  sessionId,
                  joinedAt: userData.joinedAt || Timestamp.now(),
                  lastLoginAt: Timestamp.now(),
                });
                if (oldUid) {
                  try {
                    await userService.deleteUser(oldUid);
                  } catch (delErr) {
                    console.warn('Could not delete old invitation doc:', delErr);
                  }
                }
                existingUser = await userService.getUser(firebaseUser.uid);
              } else {
                existingUser = userByEmail;
              }
            }
          } catch (error) {
            console.warn('Error checking for invitation, creating new user instead:', error);
          }
        }

        if (existingUser) {
          const updates: Partial<User> = {};
          let needsUpdate = false;

          analyticsService.logVisit(firebaseUser.uid);

          if (existingUser.sessionId !== sessionId) {
            updates.sessionId = sessionId;
            needsUpdate = true;
          }

          if (existingUser.lastDevice !== currentDevice) {
            updates.lastDevice = currentDevice;
            needsUpdate = true;
          }

          updates.lastLoginAt = Timestamp.now();
          needsUpdate = true;

          if (isSuperAdmin && existingUser.role !== 'admin') {
            updates.role = 'admin';
            needsUpdate = true;
          }

          if (needsUpdate) {
            try {
              await userService.updateUser(firebaseUser.uid, updates);
            } catch (updateErr) {
              console.warn('Could not update user metadata:', updateErr);
            }
            return { ...existingUser, ...updates };
          }

          return existingUser;
        } else {
          const fallback = buildFallbackUser(firebaseUser, sessionId);
          const { uid: _uid, ...newUser } = fallback;
          await userService.createUser(firebaseUser.uid, newUser);
          analyticsService.logVisit(firebaseUser.uid);
          return fallback;
        }
      } catch (error) {
        console.error('Error getting or creating user in Firestore, using auth fallback:', error);
        return buildFallbackUser(firebaseUser, sessionId);
      }
    },
    [sessionId]
  );

  useEffect(() => {
    let unsubscribeUser: (() => void) | null = null;
    let isMounted = true;

    // Safety timer for iOS Safari / WebViews where IndexedDB or network might stall auth initialization
    const authBootTimeout = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 7000);

    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      clearTimeout(authBootTimeout);

      if (unsubscribeUser) {
        unsubscribeUser();
        unsubscribeUser = null;
      }

      if (firebaseUser) {
        if (currentUidRef.current !== firebaseUser.uid) {
          setLoading(true);
        }

        // Prevent Firestore hang on iPhone cellular / WebViews from blocking login indefinitely
        const dbUser = await Promise.race([
          getOrCreateUser(firebaseUser),
          new Promise<User>((resolve) =>
            setTimeout(() => resolve(buildFallbackUser(firebaseUser, sessionId)), 6000)
          ),
        ]);

        if (!isMounted) return;
        currentUidRef.current = firebaseUser.uid;
        setUser(dbUser);
        setLoading(false);

        unsubscribeUser = userService.subscribeToUser(
          firebaseUser.uid,
          (updatedUser) => {
            if (updatedUser) {
              if (updatedUser.sessionId && updatedUser.sessionId !== sessionId) {
                toast.error('Tài khoản đã được đăng nhập nơi khác. Đang đăng xuất...');
                safeRemoveSessionId();
                firebaseSignOut(auth);
                return;
              }

              if (updatedUser.isActive === false) {
                toast.error('Tài khoản của bạn đã bị vô hiệu hóa.');
                safeRemoveSessionId();
                firebaseSignOut(auth);
                return;
              }

              setUser(updatedUser);
            }
            setLoading(false);
          },
          (error) => {
            console.warn('Error in user subscription (using initial profile):', error);
            setLoading(false);
          }
        );
      } else {
        currentUidRef.current = null;
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      clearTimeout(authBootTimeout);
      unsubscribeAuth();
      if (unsubscribeUser) {
        unsubscribeUser();
      }
    };
  }, [getOrCreateUser, sessionId]);

  const signInWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error('Google sign in error:', error);

      // Fallback to redirect if popup was blocked by browser
      if (error.code === 'auth/popup-blocked') {
        await signInWithRedirect(auth, provider);
        return;
      }

      let message = `Đăng nhập Google thất bại: ${error.message}`;

      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
        message = 'Đăng nhập bị hủy bởi người dùng.';
      } else if (error.code === 'auth/operation-not-allowed') {
        message = 'Phương thức Đăng nhập Google chưa được bật trong Firebase Console (Authentication -> Sign-in method).';
      } else if (error.code === 'auth/unauthorized-domain') {
        const domain = typeof window !== 'undefined' ? window.location.hostname : '';
        message = `Tên miền "${domain}" chưa được cấp phép trong Firebase. Hãy thêm "${domain}" vào Firebase Console -> Authentication -> Settings -> Authorized domains.`;
      }

      toast.error(message);
      throw new Error(message);
    }
  }, []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error('Email sign in error:', error);
      let message = 'Đăng nhập thất bại.';

      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/invalid-credential'
      ) {
        message = 'Email hoặc mật khẩu không chính xác.';
      } else if (error.code === 'auth/operation-not-allowed') {
        message = 'Phương thức Đăng nhập Email/Password chưa được kích hoạt trong Firebase.';
      }

      toast.error(message);
      throw new Error(message);
    }
  }, []);

  const signUpWithEmail = useCallback(async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error('Email sign up error:', error);
      let message = 'Đăng ký thất bại.';

      if (error.code === 'auth/weak-password') {
        message = 'Mật khẩu quá yếu (phải có ít nhất 6 ký tự).';
      } else if (error.code === 'auth/email-already-in-use') {
        message = 'Email đã được sử dụng.';
      } else if (error.code === 'auth/operation-not-allowed') {
        message = 'Phương thức Đăng nhập Email/Password chưa được kích hoạt trong Firebase.';
      }

      toast.error(message);
      throw new Error(message);
    }
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    const trimmed = email.trim();
    if (!trimmed) {
      const msg = 'Vui lòng nhập địa chỉ email của bạn.';
      toast.error(msg);
      throw new Error(msg);
    }
    try {
      auth.languageCode = 'vi';
      await sendPasswordResetEmail(auth, trimmed);
      toast.success('Đã gửi email đặt lại mật khẩu. Vui lòng kiểm tra hộp thư (kể cả mục Spam).');
    } catch (error: any) {
      console.error('Password reset error:', error);
      let message = 'Không thể gửi email đặt lại mật khẩu.';

      if (error.code === 'auth/invalid-email') {
        message = 'Địa chỉ email không hợp lệ.';
      } else if (error.code === 'auth/user-not-found') {
        message = 'Không tìm thấy tài khoản nào với email này.';
      } else if (error.code === 'auth/too-many-requests') {
        message = 'Bạn đã yêu cầu quá nhiều lần. Vui lòng thử lại sau ít phút.';
      }

      toast.error(message);
      throw new Error(message);
    }
  }, []);

  const signOut = useCallback(async () => {
    safeRemoveSessionId();
    await firebaseSignOut(auth);
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    resetPassword,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
