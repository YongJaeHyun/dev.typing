import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: {
      themeDefault: string;
    };
    textColor: {
      themeDefault: string;
      white: string;
      gray: string;
      light_black: string;
      black: string;
    };
    accentColor: {
      themeDefault: string;
      // LightTheme props
      green: string;
      yellow: string;
      light_green: string;
      // DarkTheme props
      purple: string;
    };
  }
}
