import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    user-select: none;
  }
  html, body {
    background-color: ${(props) => props.theme.bgColor.themeDefault};
    color: ${(props) => props.theme.textColor.themeDefault};
    font-size: 16px;
  }
  li {
    margin: 0.5rem 0;
  }
`;

export default GlobalStyle;
