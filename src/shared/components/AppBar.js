import React from 'react';
import { View } from 'react-native';

import { Appbar, Button } from 'react-native-paper';
import MenuIcon from '../assets/menu.svg';
import { IconButton } from '../theme/buttons';
import { clearSession } from '../utils/auth';

export default function AppBar(props) {
  const { title, openDrawer } = props;
  const logOut = () => {
    clearSession();
    props.navigation.navigate('Auth');
  }

  return (
    <Appbar.Header>
      <IconButton onPress={() => openDrawer()}>
        <MenuIcon />
      </IconButton>

      <Appbar.Content
        title={title}
      />

      <Button
        color='#000'
        onPress={() => logOut()}
      >
        Sair
      </Button>

    </Appbar.Header>
  );
}
