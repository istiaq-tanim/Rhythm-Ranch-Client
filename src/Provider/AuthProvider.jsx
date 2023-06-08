import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const UserContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const goggleProvider=new GoogleAuthProvider();
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }

    const goggleLogin = () =>
    {
          setLoader(true)
          return signInWithPopup(auth,goggleProvider)
    }
         
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
            return () => {
                return unsubscribe()
            }
        })
    }, [auth])

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const authInfo =
    {
        user,
        loader,
        createUser,
        login,
        logout,
        goggleLogin,
        updateUserProfile
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;