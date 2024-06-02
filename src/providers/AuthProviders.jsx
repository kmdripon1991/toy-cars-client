import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);


  const createUser = (email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUser = async (name, photo)=>{
    try {
      await updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      });
      return console.log('profile updated');
    } catch (error) {
      return console.error(error);
    }
  }

  const loginUser = (email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  useEffect(()=>{
    setLoader(true)
    const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
      setUser(loggedUser)
      setLoader(false)
    })
    return ()=>{
     unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loader,
    createUser,
    updateUser,
    loginUser,
    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
