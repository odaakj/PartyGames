//SignUp og LogIn for brukere
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up: ', userCredential.user);
        // You can store additional user info in Firestore if needed
    } catch (error) {
        console.error('Error signing up: ', error);
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in: ', userCredential.user);
        // userCredential.user has uid, email, etc.
    } catch (error) {
        console.error('Error signing in: ', error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
        console.log('User logged out successfully');
    } catch (error) {
        console.error('Error logging out:', error);
        throw error; // You can handle this error in the UI
    }
};