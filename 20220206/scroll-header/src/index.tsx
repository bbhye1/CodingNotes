import * as ReactDOM from 'react-dom';

import { createGlobalStyle } from 'styled-components';
import App from './App';

import reset from './assets/reset';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  ${reset}
`;

const container = document.getElementById('app');
ReactDOM.render(
  (
    <>
      <App />
      <GlobalStyle />
    </>
  ), container,
);
