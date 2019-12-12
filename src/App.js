import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { theme } from './shared/theme/';

import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle='dark-content' backgroundColor='#00c853' />
        <Routes />
      </PaperProvider>
    </Provider>
  );
};

export default App;
