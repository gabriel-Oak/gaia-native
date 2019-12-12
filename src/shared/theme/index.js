import { DarkTheme } from 'react-native-paper';

export const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#33d353',
    accent: '#008c3a',
    text: '#fff',
    surface : '#424242',
    background : '#424242',
  },
  dark: true,
  mode : 'exact'
};
