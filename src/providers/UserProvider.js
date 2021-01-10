import React, {useContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {AuthContext} from './AuthProvider';

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const {isLoggedIn, auth} = useContext(AuthContext);

  useState(() => {
    if (isLoggedIn) {
      firestore()
        .collection('users')
        .doc(auth().currentUser.email)
        .get()
        .then((value) => {
          setUser(value.data());
        });
    } else {
      setUser(null);
    }
  });

  return (
    <UserContext.Provider
      value={{
        user,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
