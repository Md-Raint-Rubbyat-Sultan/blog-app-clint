import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthProvider = createContext();

const auth = getAuth(app);


const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleAuthProvider = new GoogleAuthProvider();

    const googleSingin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    const createAccount = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmail = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const emailVerification = () => {
        setLoader(true);
        return sendEmailVerification(auth.currentUser);
    }

    const resetPass = (email) => {
        setLoader(true);
        return sendPasswordResetEmail(auth, email);
    }

    const deleteProfile = ()=>{
        setLoader(true);
        return deleteUser(user);
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser?.emailVerified) {
                setUser(currentUser);
            }
            setLoader(false);
        })

        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        googleSingin,
        createAccount,
        loginWithEmail,
        emailVerification,
        resetPass,
        deleteProfile,
        logOut,
        loader,
        setLoader
    }

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;