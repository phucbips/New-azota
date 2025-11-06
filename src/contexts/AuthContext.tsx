import React, { createContext, useEffect, useState, useCallback } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  User as FirebaseUser,
} from 'firebase/auth';
import { auth } from '../config/firebase';
import { userService } from '../services/user.service';
import { User, AuthContextType } from '../types';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: React.ReactNode;
}

// Function to get or create a sessionId from sessionStorage
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionId] = useState(getSessionId);

  const handleUserLogin = useCallback(async (firebaseUser: FirebaseUser) => {
    try {
      const userData = await userService.getUser(firebaseUser.uid);
      const isSuperAdmin = firebaseUser.email === import.meta.env.VITE_SUPER_ADMIN_EMAIL;

      if (!userData) {
        // Create new user
        const newUserData: Omit<User, 'uid'> = {
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
          photoURL: firebaseUser.photoURL || `https://ui-avatars.com/api/?name=${firebaseUser.email?.[0]}&background=667eea&color=fff&size=200`,
          role: isSuperAdmin ? 'admin' : 'student',
          isWhitelisted: isSuperAdmin,
          sessionId: sessionId,
          joinedAt: null as any, // Will be set by service
        };

        await userService.createUser(firebaseUser.uid, newUserData);
      } else {
        // Update session ID for the new login if it's different
        if (userData.sessionId !== sessionId) {
            const updates: Partial<User> = { sessionId };
            if (isSuperAdmin && (userData.role !== 'admin' || !userData.isWhitelisted)) {
              updates.role = 'admin';
              updates.isWhitelisted = true;
            }
            await userService.updateUser(firebaseUser.uid, updates);
        }
      }

      // Subscribe to user document changes
      return userService.subscribeToUser(
        firebaseUser.uid,
        (updatedUser) => {
          if (!updatedUser) {
            firebaseSignOut(auth);
            return;
          }

          // Enforce single session: if DB sessionId is different, log out this client
          if (updatedUser.sessionId !== sessionId) {
            alert('Tài khoản của bạn đã được đăng nhập từ một thiết bị khác. Phiên này sẽ được đăng xuất.');
            sessionStorage.removeItem('sessionId');
            firebaseSignOut(auth);
            return;
          }

          // Handle account deactivation
          if (updatedUser.isActive === false) {
            alert('Tài khoản của bạn đã bị vô hiệu hóa.');
            sessionStorage.removeItem('sessionId');
            firebaseSignOut(auth);
            return;
          }

          setUser(updatedUser);
          setLoading(false);
        },
        (error) => {
          console.error('Error in user subscription:', error);
          firebaseSignOut(auth);
        }
      );
    } catch (error) {
      console.error('Error handling user login:', error);
      firebaseSignOut(auth);
      setLoading(false);
      return null;
    }
  }, [sessionId]);

  // Handle auth state changes
  useEffect(() => {
    let unsubscribeUser: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      if (unsubscribeUser) {
        unsubscribeUser();
        unsubscribeUser = null;
      }

      if (firebaseUser) {
        const newUnsubscribeUser = await handleUserLogin(firebaseUser);
        if (newUnsubscribeUser) {
          unsubscribeUser = newUnsubscribeUser;
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeUser) unsubscribeUser();
    };
  }, [handleUserLogin]);

  const signInWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error('Google sign in error:', error);
      let message = `Đăng nhập Google thất bại: ${error.message}`;
      
      if (error.code === 'auth/popup-closed-by-user') {
        message = 'Đăng nhập bị hủy bởi người dùng.';
      } else if (error.code === 'auth/operation-not-allowed') {
        message = 'Lỗi cấu hình Firebase: Phương thức Đăng nhập Google chưa được kích hoạt.';
      } else if (error.code === 'auth/unauthorized-domain') {
        message = 'Lỗi cấu hình Firebase: Tên miền ứng dụng chưa được thêm vào Authorized domains.';
      }
      
      throw new Error(message);
    }
  }, []);

  const signInWithEmail = useCallback(
    async (email: string, password: string) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        console.error('Email sign in error:', error);
        let message = 'Đăng nhập thất bại.';
        
        if (error.code === 'auth/user-not-found' || 
            error.code === 'auth/wrong-password' || 
            error.code === 'auth/invalid-credential') {
          message = 'Email hoặc mật khẩu không chính xác.';
        } else if (error.code === 'auth/operation-not-allowed') {
          message = 'Lỗi cấu hình Firebase: Phương thức Đăng nhập Email/Password chưa được kích hoạt.';
        }
        
        throw new Error(message);
      }
    },
    []
  );

  const signUpWithEmail = useCallback(
    async (email: string, password: string) => {
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
          message = 'Lỗi cấu hình Firebase: Phương thức Đăng nhập Email/Password chưa được kích hoạt.';
        }
        
        throw new Error(message);
      }
    },
    []
  );

  const signOut = useCallback(async () => {
    try {
        if (user) {
          // Invalidate the session on the server to prevent reuse
          await userService.updateUser(user.uid, { sessionId: crypto.randomUUID() });
        }
    } catch (error) {
        console.error("Error invalidating session on server:", error);
        // Don't block logout if this fails, just log it
    } finally {
        // Always clear local session and sign out from Firebase
        sessionStorage.removeItem('sessionId');
        await firebaseSignOut(auth);
    }
  }, [user]);

  const value: AuthContextType = {
    user,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
