'use client'
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "@/firebase/firebase.config";

export const UserContext = createContext(null)
const auth = getAuth(app)

const AuthContext = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    // User sign up 
    const userSignUp = (email , password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User sign in 

    const userSignIn = (email , password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password)
    }

    // Sign In With Google

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth , googleProvider)
    }

    // Sign In With Facebook

    const facebookLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth , facebookProvider)
    }

    // Logout impliment

    const logOut = () => {
        return signOut(auth);
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };



    // Manage users 

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
           return unsubscribe();
        }
    },[])



    const authInformation = {
        user,
        loading,
        userSignUp,
        userSignIn,
        googleSignIn,
        facebookLogin,
        updateUserProfile,
        logOut,
    }
    return (
        <UserContext.Provider value={authInformation}>
        {children}
      </UserContext.Provider>
    );
};

export default AuthContext;