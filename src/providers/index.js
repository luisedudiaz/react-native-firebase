import React from 'react';

import AuthProvider, {AuthContext} from './AuthProvider';
import UserProvider, {UserContext} from './UserProvider';
import ReactElementsProvider from './ReactElemetsProvider';

export const context = {auth: AuthContext, user: UserContext};

function Providers(props) {
  return (
    <AuthProvider>
      <UserProvider>
        <ReactElementsProvider>{props.children}</ReactElementsProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default Providers;
