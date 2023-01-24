import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  mainBgColor: '#353b48',
  mainTextColor: '#f5f6fa',
  textColor: {
    white: '#f5f6fa',
    gray: '#9E9E9E',
    light_black: '#404040',
    black: '#212121',
  },
  accentColor: { purple: '#8c7ae6', yellow: '#fbc531', green: '#44bd32' },
};

export const lightTheme: DefaultTheme = {
  ...darkTheme,
  mainBgColor: 'whitesmoke',
  mainTextColor: '#212121',
};
