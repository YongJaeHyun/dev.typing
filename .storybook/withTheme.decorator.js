import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../src/recoil/theme';

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

export const withTheme = (Story, context) => {
  const { theme } = context.globals;
  return (
    <RecoilRoot>
      <ThemeProvider theme={THEMES[theme] || THEMES['light']}>
        <Story />
      </ThemeProvider>
    </RecoilRoot>
  );
};
