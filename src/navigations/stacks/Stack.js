import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors, Mixins} from '../../styles';
import {DrawerActions} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function StackView({navigation, screens, headerShown = true}) {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: headerShown}}
      drawerContentOptions={{
        activeTintColor: Colors.PRIMARY,
        itemStyle: [Mixins.padding(0, 0, 0, 30)],
        justifyContent: 'center',
      }}>
      {Object.entries({
        ...screens,
      }).map(([route, options], i) => {
        return (
          <Stack.Screen
            options={{
              title: options.title,
              headerShown: headerShown,
              headerLeft: () => {
                return options.headerLeft ? (
                  options.headerLeft(navigation)
                ) : (
                  <Icon
                    style={Mixins.margin(0, 0, 0, 20)}
                    size={30}
                    color={Colors.PRIMARY}
                    selectionColor={Colors.PRIMARY}
                    onPress={() =>
                      navigation.dispatch(DrawerActions.openDrawer())
                    }
                    name="menu"
                  />
                );
              },
              headerRight: () => {
                return options.headerRight
                  ? options.headerRight(navigation)
                  : null;
              },
            }}
            name={route}
            component={options.component}
            key={i}
          />
        );
      })}
    </Stack.Navigator>
  );
}
export default StackView;
