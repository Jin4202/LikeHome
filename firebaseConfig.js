// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React, { useContext, useState, useEffect } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  getDoc,
  doc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  deleteField
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3Ai4CR3Rxim8hYpP2P-g5E_6Nc9cGEOE",
  authDomain: "likehome-36ffe.firebaseapp.com",
  projectId: "likehome-36ffe",
  storageBucket: "likehome-36ffe.appspot.com",
  messagingSenderId: "213928354102",
  appId: "1:213928354102:web:0c691228b048d9a88b9397",
  measurementId: "G-TL2KL68ST7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default getFirestore(app);
export const getPropertyByDestinations = (destination) =>
  onSnapshot(doc(db, "destinations", destination), (doc) => {
    console.log("Current data: ", doc.data());
  });

export const auth = getAuth(app);

export const getHotel = async (id) => {
  if (!id) return;
  const querySnapshot = await getDocs(collection(db, "hotelByDestination"));
  const result = {};
  querySnapshot.forEach((doc) => {
    var hotel = doc.data().data.find((hotels) => hotels.id == id);
    if (hotel) {
      result = hotel;
    }
  });
  return result;
};



export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(doc(db, "users", userAuth.uid));
  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getDataUser = async (userAuth) => {
  try {
    const userSnapshot = await getDoc(doc(db, "users", userAuth.uid));
    console.log(userSnapshot.data());
    return userSnapshot.data();
  } catch (error) {
    console.log(error);
  }
};

export const updateFirstname = async (userAuth, newFirstname) => {
  try {
    const userDocRef = doc(db, "users", userAuth.uid);
    await updateDoc(userDocRef, {
      firstname: newFirstname
    })
  } catch (error) {
    console.log(error);
  }
};

export const updateLastname = async (userAuth, newLastname) => {
  try {
    const userDocRef = doc(db, "users", userAuth.uid);
    await updateDoc(userDocRef, {
      lastname: newLastname
    })
  } catch (error) {
    console.log(error);
  }
};

export const updatePhone = async (userAuth, newPhone) => {
  try {
    const userDocRef = doc(db, "users", userAuth.uid);
    await updateDoc(userDocRef, {
      phone: newPhone
    })
  } catch (error) {
    console.log(error);
  }
};

export const deleteAccount = async (userAuth) => {
  try {
    const userDocRef = doc(db, "users", userAuth.uid);
    updateDoc(userDocRef, {
      firstname: deleteField(),
      lastname: deleteField(),
      phone: deleteField(),
      email: deleteField(),
      pwd: deleteField()
    })
    deleteDoc(userDocRef);
  } catch (error) {
    console.log(error);
  }
}


// useEffect(() => {
//   (async () => {
//       const colRef = collection(db, 'destinations')
//       const snapshots = await getDocs(colRef)
//       const docs = snapshots.docs.map((doc)=> doc.data())
//       setProducts(docs)

//   })()
//   console.log(Products)
// }, [])
