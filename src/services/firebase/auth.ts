import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';

import { app } from './config';

export const auth = getAuth(app);

export const loginWithEmail = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    await SecureStore.setItemAsync('userToken', await userCredential.user.getIdToken());
    return userCredential;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const registerWithEmail = async (
  email: string,
  password: string,
  displayName: string
): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName });
    await SecureStore.setItemAsync('userToken', await userCredential.user.getIdToken());
    return userCredential;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    await SecureStore.deleteItemAsync('userToken');
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUserProfile = async (user: User, data: { displayName?: string; photoURL?: string }) => {
  try {
    await updateProfile(user, data);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};
