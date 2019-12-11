import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthPage from './pages/auth/';
import MainRouter from './pages/main/';

const Routes = createAppContainer(
  createSwitchNavigator({
    Auth: {
      screen: AuthPage,
    },
    Main: {
      screen: MainRouter,
    }
  })
);

export default Routes;