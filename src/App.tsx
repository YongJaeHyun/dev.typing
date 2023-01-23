import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './recoil/theme';
import { useRecoilValue } from 'recoil';
import { isDarkState } from './recoil/recoilStates';
import Home from './components/pages/Home';
import '../assets/styles/_reset.css';
import GlobalStyle from '../assets/styles/GlobalStyle';

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
