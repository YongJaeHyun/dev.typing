import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
  input, span {
    font-size: 18px;
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.textColor};
  }
  input {
    display: block;
    overflow: visible;
    resize: none;
    outline: none;
    background-color: ${({ theme }) => theme.bgColor};
    caret-color: ${({ theme }) => theme.accentColor};
    &::placeholder{
      color: ${({ theme }) => theme.textColor};
      opacity: 0.5;
      font-size: 16px;
      padding-left: 5px;
    }
    ::selection {
        background-color: ${({ theme }) => theme.accentColor};
      }
  }

  .no-drag {
    cursor: text;
    span {
      ::selection {
        background-color: ${({ theme }) => theme.bgColor};
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

export default GlobalStyle;
