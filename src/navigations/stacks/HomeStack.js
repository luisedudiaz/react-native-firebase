import React from 'react';

import HomeScreen from '../../screens/Home';

import StackView from './Stack';

const HomeTabs = {
  home: {
    title: 'Inicio',
    component: HomeScreen,
  },
};

function Home({navigation}) {
  return <StackView tabs={HomeTabs} navigation={navigation} />;
}

export default Home;
