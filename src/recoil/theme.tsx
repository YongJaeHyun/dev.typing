import { DefaultTheme } from 'styled-components';

const commonBgColor = {
  white: 'whitesmoke',
  gray: '#5e5e5e',
  black: '#353b48',
};

const commonTextColor = {
  white: '#f5f6fa',
  gray: '#9E9E9E',
  light_black: '#404040',
  black: '#212121',
};

const commonAccentColor = {
  purple: '#8c7ae6',
  yellow: '#fbc531',
  green: '#44bd32',
  light_green: '#2ecc71',
};

export const darkTheme: DefaultTheme = {
  bgColor: { ...commonBgColor, themeDefault: '#353b48' },
  textColor: { ...commonTextColor, themeDefault: '#f5f6fa' },
  accentColor: { ...commonAccentColor, themeDefault: '#8c7ae6' },
};

export const lightTheme: DefaultTheme = {
  bgColor: { ...commonBgColor, themeDefault: 'whitesmoke' },
  textColor: { ...commonTextColor, themeDefault: '#404040' },
  accentColor: { ...commonAccentColor, themeDefault: '#2ecc71' },
};
