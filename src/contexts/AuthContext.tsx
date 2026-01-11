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
import { TEST_ACCOUNTS } from '../config/test_accounts';
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

const SUPER_ADMIN_EMAIL = 'thanhphucn06@gmail.com';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionId] = useState(getSessionId);

  // This function handles the one-time operation of fetching or creating a user in Firestore.
  const getOrCreateUser = useCallback(async (firebaseUser: FirebaseUser): Promise<User | null> => {
    try {
      // First, try to get the user by UID
      let existingUser = await userService.getUser(firebaseUser.uid);

      // If not found by UID, try to find by Email (pre-created by Admin)
      // Normalize email to avoid case sensitivity issues
      const userEmail = firebaseUser.email ? firebaseUser.email.toLowerCase() : null;

      if (!existingUser && userEmail) {
        try {
            const userByEmail = await userService.findUserByEmail(userEmail);
            if (userByEmail) {
            // Found an invitation document

            if (userByEmail.uid !== firebaseUser.uid) {
                // Migrate the pre-created user data to the correct UID doc
                const { uid: oldUid, ...userData } = userByEmail;

                // Create the real user doc
                await userService.createUser(firebaseUser.uid, {
                    ...userData,
                    // Ensure we keep the role and grade set by admin
                    sessionId: sessionId,
                    joinedAt: userData.joinedAt || new Date() as any
                });

                // IMPORTANT: Delete the old invitation doc to prevent duplicates in Admin list
                if (oldUid) {
                    await userService.deleteUser(oldUid);
                }

                existingUser = await userService.getUser(firebaseUser.uid);
            } else {
                existingUser = userByEmail;
            }
            }
        } catch (error: any) {
            // If we hit a permission error (e.g. non-admin trying to query users),
            // just ignore the invitation check and proceed to create a new user.
            console.warn('Error checking for invitation (likely permission issue), creating new user instead:', error);
        }
      }

      const isSuperAdmin = userEmail === SUPER_ADMIN_EMAIL.toLowerCase();
      const testAccountConfig = TEST_ACCOUNTS[userEmail || ''];

      if (existingUser) {
        // User exists, check if an update is needed
        const updates: Partial<User> = {};
        let needsUpdate = false;

        if (existingUser.sessionId !== sessionId) {
          updates.sessionId = sessionId;
          needsUpdate = true;
        }

        if (isSuperAdmin && (existingUser.role !== 'admin' || !existingUser.isWhitelisted)) {
          updates.role = 'admin';
          updates.isWhitelisted = true;
          needsUpdate = true;
        } else if (testAccountConfig) {
          // Enforce test account configuration
          if (existingUser.role !== testAccountConfig.role ||
              existingUser.isWhitelisted !== testAccountConfig.isWhitelisted ||
              (testAccountConfig.grade !== undefined && existingUser.grade !== testAccountConfig.grade)) {
            updates.role = testAccountConfig.role;
            updates.isWhitelisted = testAccountConfig.isWhitelisted;
            if (testAccountConfig.grade !== undefined) {
              updates.grade = testAccountConfig.grade;
            }
            needsUpdate = true;
          }
        }

        if (needsUpdate) {
          await userService.updateUser(firebaseUser.uid, updates);
          return { ...existingUser, ...updates }; // Return updated user data immediately
        }
        
        return existingUser; // Return existing user data
      } else {
        // User does not exist, and wasn't pre-created. Create a new one.
        const newUser: Omit<User, 'uid'> = {
          email: userEmail || '',
          displayName: firebaseUser.displayName || userEmail?.split('@')[0] || 'User',
          photoURL: firebaseUser.photoURL || `https://ui-avatars.com/api/?name=${userEmail?.[0]}&background=667eea&color=fff&size=200`,
          role: isSuperAdmin ? 'admin' : 'student',
          grade: null, // Default to null
          isWhitelisted: isSuperAdmin,
          sessionId: sessionId,
          joinedAt: null as any, // Will be set by service
        };

        await userService.createUser(firebaseUser.uid, newUser);
        
        // Return the full user object including the UID
        return { ...newUser, uid: firebaseUser.uid };
      }
    } catch (error) {
        console.error("Error getting or creating user:", error);
        // Important: Return null here so we don't crash, but the user state will be null, triggering sign out
        return null;
    }
  }, [sessionId]);


  // Handle auth state changes
  useEffect(() => {
    let unsubscribeUser: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      // First, cancel any existing user subscription
      if (unsubscribeUser) {
        unsubscribeUser();
        unsubscribeUser = null;
      }

      if (firebaseUser) {
        setLoading(true);
        // Get or create the user document in Firestore
        const dbUser = await getOrCreateUser(firebaseUser);

        if (dbUser) {
          // We have the initial user data. Now, set up a real-time listener.
          unsubscribeUser = userService.subscribeToUser(
            firebaseUser.uid,
            (updatedUser) => {
              if (updatedUser) {
                // Enforce single session
                if (updatedUser.sessionId !== sessionId) {
                  alert('Tài khoản của bạn đã được đăng nhập từ một thiết bị khác. Phiên này sẽ được đăng xuất.');
                  sessionStorage.removeItem('sessionId');
                  firebaseSignOut(auth); // This will trigger onAuthStateChanged again
                  return;
                }
                
                // Handle account deactivation
                if (updatedUser.isActive === false) {
                  alert('Tài khoản của bạn đã bị vô hiệu hóa.');
                  sessionStorage.removeItem('sessionId');
                  firebaseSignOut(auth); // This will trigger onAuthStateChanged again
                  return;
                }
                
                // Update state with the latest data
                setUser(updatedUser);
              } else {
                // The user document was deleted from Firestore.
                console.warn(`User document for ${firebaseUser.uid} not found or deleted.`);
                firebaseSignOut(auth); // This will trigger onAuthStateChanged again
              }
              setLoading(false); // Stop loading once we have a definitive state
            },
            (error) => {
              console.error('Error in user subscription:', error);
              firebaseSignOut(auth);
              setLoading(false);
            }
          );
        } else {
          // Failed to get or create the user in Firestore, so sign out.
          firebaseSignOut(auth);
          setLoading(false);
        }
      } else {
        // No Firebase user, so clear our state
        setUser(null);
        setLoading(false);
      }
    });

    // Cleanup function for the component unmounting
    return () => {
      unsubscribeAuth();
      if (unsubscribeUser) {
        unsubscribeUser();
      }
    };
  }, [getOrCreateUser, sessionId]);

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
    sessionStorage.removeItem('sessionId');
    await firebaseSignOut(auth);
  }, []);

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
