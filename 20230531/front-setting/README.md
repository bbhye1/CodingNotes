# NextJS + TypeScript + React

## NextJS

설치

```bash
npm install next@latest
```

`package.json`에 명령어 추가

```json
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint",
      // ...
    }
  }
```

custom App 생성 -> `src/pages/_app.tsx` 생성

```typescript
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
```

Custom document -> `src/pages/_document.tsx` 생성

```typescript
  /* eslint-disable react/jsx-props-no-spreading */

  import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
  } from 'next/document';

  import { ServerStyleSheet } from 'styled-components';

  export default class MegapteraDocument extends Document {
    static async getInitialProps(
      ctx: DocumentContext,
    ) : Promise<DocumentInitialProps> {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
        ctx.renderPage = () => originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

        const initialProps = await Document.getInitialProps(ctx);

        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        };
      } finally {
        sheet.seal();
      }
    }

    render() {
      return (
        <Html lang="ko">
          <Head>
            <meta charSet="UTF-8" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
```

`src/pages/index.tsx` 생성

```typescript
  export default function Page() {
    return <h1>Hello, world!</h1>;
  }
```

## Jest

`jest.config.js` 추가

```javascript
  const nextJest = require('next/jest');

  const createJestConfig = nextJest({
    dir: './',
  });

  const customJestConfig = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
      '<rootDir>/src/setupTests.ts',
    ],
    transform: {
      '^.+\\.(t|j)sx?$': ['@swc/jest', {
        jsc: {
          parser: {
            syntax: 'typescript',
            jsx: true,
            decorators: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
            legacyDecorator: true,
            decoratorMetadata: true,
          },
        },
      }],
    },
  };

  module.exports = createJestConfig(customJestConfig);
```

## Styled-component

`next.config.js`에 컴파일 설정 추가

```javascript
  /**
   * @type {import('next').NextConfig}
   */

  const nextConfig = {
    compiler: {
      styledComponents: true,
    },
    // ...
  };

  module.exports = nextConfig;
```


`app/layout.tsx`

```typescript
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
```
