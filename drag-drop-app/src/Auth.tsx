/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useEffect, useState } from "react";
import {auth} from "./Firestore"
import { User } from "firebase/auth";

interface AuthProps {
    currentUser: User | null; // Assuming User is the type for your user data
    signIn: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;

}

const AuthContext = React?.createContext("")

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({children}:any) => {
    const [currentUser, setCurrentUser] = useState<User | null>()
    
   
    const signIn = (email:string,password:string):Promise<void>=> {
            //@ts-ignore
            return auth?.createUserWithEmailAndPassword(email, password)
    
    }

    const login = (email:string, password:string): Promise<AuthProps>=>{
        //@ts-ignore
        return auth.signInWithEmailAndPassword( email, password)
    }

    useEffect(() => {
       const unsubscribe =  auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
        return() => {unsubscribe }; 
    },[])

    

    const value = {currentUser, signIn,login}

    return (

      <AuthContext.Provider 
        //@ts-ignore
        value={value}>
        {children}
      </AuthContext.Provider>
    )
}