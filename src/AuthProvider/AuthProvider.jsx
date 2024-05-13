import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (data) => {
        return updateProfile(auth.currentUser, {
            displayName: data.name,
            photoURL: data.photo
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            setUser(currentUser)
            setLoading(false)
            const loggedUser = { userEmail };
            if (currentUser) {
                axios.post('https://food-unity-server-gamma.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => console.log(res.data))
            }
            else {
                axios.post('https://food-unity-server-gamma.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleLogIn = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const GithubLogIn = () => {
        setLoading(true)
        const githubProvider = new GithubAuthProvider()
        return signInWithPopup(auth, githubProvider)
    }

    const AuthInfo = { createAccount, updateUser, user, loading, logOut, logIn, GoogleLogIn, GithubLogIn }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;