import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Text } from 'react-native';
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
        <Appbar.Header>
        
          <Appbar.Action onPress={() => { }}>
            <Text>OI</Text>
          </Appbar.Action>

          <Appbar.Content
            title='Title'
          />

          <Appbar.Action onPress={() => { }}>
            <Text>Sair</Text>
          </Appbar.Action>
        </Appbar.Header>
        <MainRoutes />
      </>
    );
  }
}
