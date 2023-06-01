/* eslint-disable react/jsx-props-no-spreading */

import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import type { AppProps } from 'next/app';

import GlobalStyle from '../styles/GlobalStyle';
import DefaultTheme from '../styles/defaultTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
