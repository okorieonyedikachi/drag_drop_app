import React, { useContext, useEffect, useState } from "react";
import { auth } from "./Firestore";
import { onAuthStateChanged } from "firebase/auth";

const Auth

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = () => {
    const [currentUser, setCurrentUser] = useState(null)
  

    const value = {currentUser}
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    )
}