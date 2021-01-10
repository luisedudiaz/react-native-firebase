import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../../screens/Welcome';
import {Colors} from '../../styles';

const AuthenticationStack = createStackNavigator();

const AuthScreens = {
  Welcome: WelcomeScreen,
  // Login: LoginScreen,
  // Register: RegisterScreen,
};

function Authentication() {
  return (
    <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
      {Object.entries({
        ...AuthScreens,
      }).map(([name, component], i) => {
        return (
          <AuthenticationStack.Screen
            options={{
              headerShown: i !== 0,
              headerBackTitle: 'Regresar',
              headerTitle: '',
              headerTintColor: Colors.PRIMARY,
            }}
            name={name}
            component={component}
            key={i}
          />
        );
      })}
    </AuthenticationStack.Navigator>
  );
}

export default Authentication;
