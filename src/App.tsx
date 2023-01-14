import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkState } from './recoilStates';
import Home from './Home';
import { createGlobalStyle } from 'styled-components';
import './reset.css';

const GlobalStyle = createGlobalStyle`
input, span {
    font-size: 18px;
    letter-spacing: -0.5px;
    color: ${(props) => props.theme.textColor};
  }
  input {
    display: block;
    overflow: visible;
    resize: none;
    outline: none;
    background-color: ${(props) => props.theme.bgColor};
    caret-color: ${(props) => props.theme.accentColor};
    &::placeholder{
      color: ${(props) => props.theme.textColor};
      opacity: 0.5;
      font-size: 16px;
      padding-left: 5px;
    }
    ::selection {
        background-color: ${(props) => props.theme.accentColor};
      }
  }

.no-drag {
  cursor: text;
  span {
    ::selection {
      background-color: ${(props) => props.theme.bgColor};
    }
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;
    -o-user-select: none;
    pointer-events:none;
  }
}
.drag {
  -webkit-user-select: all;
  -moz-user-select: all;
  -ms-user-select: all;
  user-select: all;
}
`;

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
