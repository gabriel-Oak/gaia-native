import React from 'react';

import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setTitle } from '../mainActions';
import { RectButton } from 'react-native-gesture-handler';
import AppBar from '../../../shared/components/AppBar';

// import { Container } from './styles';

const HomePage = props => {
  const dispatch = useDispatch();

  dispatch(setTitle('Home'));

  return (
    <>
      <AppBar
        title='Home'
        openDrawer={props.navigation.openDrawer}
        navigation={props.navigation}
      />
      
      <View>
        <Text> OI 2 </Text>
        <RectButton onPress={() => {
          console.log(props.navigation);

          props.navigation.openDrawer(); // open drawer
        }}>
          <Text>Yolooo</Text>
        </RectButton>
      </View>
    </>
  );
}

export default HomePage;
