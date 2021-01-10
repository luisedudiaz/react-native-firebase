import React from 'react';
import {ThemeProvider} from 'react-native-elements';

export default function ReactElementsProvider({children}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
