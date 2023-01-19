import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkState } from './recoilStates';
import Home from './Home';
import GlobalStyle from './_setting/GlobalStyle';
import './_setting/_reset.css';

function App() {
  const isDark = useRecoilValue(isDarkState);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
