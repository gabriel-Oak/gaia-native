import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomePage from './home/';

// import { Container } from './styles';

const MainRoutes = createAppContainer(
  createDrawerNavigator({
    Home: HomePage
  })
);

export default class MainRouter extends Component {
  render() {
    return (
      <>
        <Appbar>
        </Appbar>

        <MainRoutes />
      </>
    );
  }
}
