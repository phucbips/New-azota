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

  // This function handles the one-time operation of fetching or creating a user in Firestore.
  const getOrCreateUser = useCallback(async (firebaseUser: FirebaseUser): Promise<User | null> => {
    try {
      const existingUser = await userService.getUser(firebaseUser.uid);
      const isSuperAdmin = firebaseUser.email === import.meta.env.VITE_SUPER_ADMIN_EMAIL;

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
        }

        if (needsUpdate) {
          await userService.updateUser(firebaseUser.uid, updates);
          return { ...existingUser, ...updates }; // Return updated user data immediately
        }
        
        return existingUser; // Return existing user data
      } else {
        // User does not exist, create a new one
        const newUser: Omit<User, 'uid'> = {
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
          photoURL: firebaseUser.photoURL || `https://ui-avatars.com/api/?name=${firebaseUser.email?.[0]}&background=667eea&color=fff&size=200`,
          role: isSuperAdmin ? 'admin' : 'student',
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
