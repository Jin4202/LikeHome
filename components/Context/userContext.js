import { createContext, useState, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getDataUser
} from '../../firebaseConfig';

export const UserContext = createContext({
  setCurrentUser: ({}) => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({tri: 'tri'});
  const value = { currentUser, setCurrentUser };


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};