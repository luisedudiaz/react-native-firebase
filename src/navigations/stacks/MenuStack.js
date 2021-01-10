import React, {useContext} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import {context} from '../../providers';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './HomeStack';

import {Colors, Mixins} from '../../styles';

const Drawer = createDrawerNavigator();

const DrawerItems = {
  home: {
    title: 'Inicio',
    component: Home,
  },
};

const icons = ['home-outline', 'list-outline'];

function Menu() {
  const {handleSignOut} = useContext(context.auth);
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: true}}
      drawerContentOptions={{
        activeTintColor: Colors.PRIMARY,
        activeBackgroundColor: Colors.WHITE,
        itemStyle: [Mixins.padding(0, 0, 0, 30)],
        justifyContent: 'center',
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              icon={() => (
                <Icon name="power-outline" size={20} color="#000000" />
              )}
              activeTintColor={Colors.PRIMARY}
              style={[Mixins.padding(0, 0, 0, 30)]}
              label="Cerrar Sesión"
              onPress={() => handleSignOut()}
            />
          </DrawerContentScrollView>
        );
      }}>
      {Object.entries({
        ...DrawerItems,
      }).map(([route, options], i) => {
        return (
          <Drawer.Screen
            name={route}
            options={{
              title: options.title,
              drawerIcon: (config) => (
                <Icon size={20} color={config.color} name={icons[i]} />
              ),
            }}
            component={options.component}
            key={i}
          />
        );
      })}
    </Drawer.Navigator>
  );
}

export default Menu;
