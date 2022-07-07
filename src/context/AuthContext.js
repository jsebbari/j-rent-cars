import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged, 
  updateProfile,
  signOut, 
  sendEmailVerification } from 'firebase/auth';
 import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();


export function AuthContextProvider({children}) {

  const signUp = (email, password) => createUserWithEmailAndPassword(auth, email,password)
  const signIn = (email, password) =>signInWithEmailAndPassword(auth, email, password)
  const updateDisplayName = (displayName) => updateProfile(auth.currentUser, {
    displayName: displayName
  })
 
  


  const [currentUser,setCurrentUser] = useState(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {

   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {  
    setCurrentUser(currentUser)
    setLoadingData(false)
  })

    return unsubscribe
    
  }, [])
  


  return (
    <AuthContext.Provider value={{ currentUser, updateDisplayName, signUp, signIn }}>
      {!loadingData&&children}
    </AuthContext.Provider>
  )
}

