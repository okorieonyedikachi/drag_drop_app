import React, { useContext, useEffect, useState } from "react";
import {auth} from "./Firestore"

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    
    const signIn = (email,password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) =>{
        return auth.signInWithEmailAndPassword( email, password)
    }

    useEffect(()=> {
       const unsubscribe =  auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
        return unsubscribe
    },[])

    

    const value = {currentUser, signIn,login}

    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    )
}