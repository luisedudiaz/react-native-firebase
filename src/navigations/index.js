import React, {useContext} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Menu from './stacks/MenuStack';
import Authentication from './stacks/AuthStack';

import {context} from '../providers';

/* TODO: Splachscreen
 https://medium.com/@appstud/add-a-splash-screen-to-a-react-native-app-810492e773f9
 */

const RootStack = createStackNavigator();

function Router() {
  const {isLoggedIn} = useContext(context.auth);
  console.log(isLoggedIn);
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <>
            <RootStack.Screen name="Menu" component={Menu} />
          </>
        ) : (
          <RootStack.Screen name="Authentication" component={Authentication} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
