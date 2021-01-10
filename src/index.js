import React from 'react';

import {StatusBar} from 'react-native';

import Providers from './providers';
import Router from './navigations';

StatusBar.setBarStyle('dark-content', true);

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;
