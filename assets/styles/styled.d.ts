import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBgColor: string;
    mainTextColor: string;
    textColor: {
      white: string;
      gray: string;
      light_black: string;
      black: string;
    };
    accentColor: {
      // LightTheme props
      green: string;
      yellow: string;
      // DarkTheme props
      purple: string;
    };
  }
}
