import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    user-select: none;
  }
  html, body {
    background-color: ${(props) => props.theme.mainBgColor};
    color: ${(props) => props.theme.mainTextColor};
    font-size: 16px;
  }
`;

export default GlobalStyle;
