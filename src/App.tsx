import { createGlobalStyle } from 'styled-components';
import Home from './Home';

const GlobalStyle = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css");
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
