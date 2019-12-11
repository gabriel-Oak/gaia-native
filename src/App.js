import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { theme } from './shared/theme/';

import Routes from './routes';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle='dark-content' backgroundColor='#00c853' />
      <Routes />
    </PaperProvider>
  );
};

export default App;
