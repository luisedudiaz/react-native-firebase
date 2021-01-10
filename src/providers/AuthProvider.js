import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

import {Colors} from '../styles';

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [initializing, setInitializing] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = async (email, password, name) => {
    console.log(email, password);
    console.log('handleSignUp');
    if (email && password && name) {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        Snackbar.show({
          text: 'Tu cuenta ha sido creada.',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: Colors.SUCCESS,
        });
        const currentUser = auth().currentUser;
        try {
          await currentUser.updateProfile({displayName: name});
        } catch (e) {
          console.log(e);
        }
      } catch (e) {
        Snackbar.show({
          text: 'Email Invalido',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: Colors.ALERT,
        });
      }
    } else {
      Snackbar.show({
        text: 'Completa todos los campos',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.ALERT,
      });
    }
  };

  const handleSignIn = async (email, password) => {
    console.log('handleSignIn');
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      Snackbar.show({
        text: 'Intente nuevamente',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.ALERT,
      });
    }
  };

  const handleSignOut = () => {
    console.log('handleSignOut');
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const onAuthStateChanged = (currentUser) => {
    setIsLoggedIn(!!currentUser);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged);
  });

  if (initializing) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        handleSignIn,
        handleSignOut,
        handleSignUp,
        auth,
        isLoggedIn,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
