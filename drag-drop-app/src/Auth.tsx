import React, { useContext, useEffect, useState } from "react";
import {auth} from "./Firestore"
import { User } from "firebase/auth";

interface AuthProps {
    currentUser: User | null; // Assuming User is the type for your user data
    signIn: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;

}

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({children}:AuthProps) => {
    const [currentUser, setCurrentUser] = useState<User | null>()
    
   
    const signIn = (email:string,password:string):Promise<void>=> {
            return auth.createUserWithEmailAndPassword(email, password)
    
    }

    const login = (email:string, password:string): Promise<AuthProps>=>{
        return auth.signInWithEmailAndPassword( email, password)
    }

    useEffect(():Promise<AuthProps>=> {
       const unsubscribe =  auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
        return() => {unsubscribe }; 
    },[])

    

    const value = {currentUser, signIn,login}

    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    )
}