# React + TypeScript + Parcel 프로젝트 세팅

## 프로젝트 생성, 초기화

```bash
mkdir demo

cd demo

npm init -y 

touch .gitignore
```

## Typscript 세팅

```bash
npm i -D typescript

npx tsc -init 
```

`tsconfig.json`에 설정 추가

```json
"jsx": "react-jsx",
```

`check` 명령어 추가

```json
{
  "scripts": {
    // ...
    "check": "tsc --noEmit"
  }
}
```

문법 오류 체크

```bash
npm run check
```

## ESLint 세팅

```bash
npm i -D eslint

npx eslint --init
```

```txt
? How would you like to use ESLint? …
❯ To check syntax, find problems, and enforce code style

? What type of modules does your project use? …
❯ JavaScript modules (import/export)

? Which framework does your project use? …
❯ React

? Does your project use TypeScript?
› Yes

? Where does your code run? …
✔ Browser

? How would you like to define a style for your project? …
❯ Use a popular style guide

? Which style guide do you want to follow? …
❯ Airbnb: https://github.com/airbnb/javascript

? What format do you want your config file to be in? …
❯ JavaScript

? Would you like to install them now with npm?
› Yes
```

`.eslintrc.js`에 설정 추가

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  // ... 
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-trailing-spaces': 'error',
    curly: 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
    }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
  },
};
```

`.eslintignore`파일 작성

```txt
/node_modules/
/dist/
```

`lint` 명령어 추가

```json
{
  "scripts": {
    // ...
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx ."
  }
}
```

Lint and fix all

```bash
npm run lint
```

## React 세팅

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

### React 기본 코드 작성

`index.html` 코드 작성

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>React Demo</title>
</head>
<body>
  <div id="app">
    Loading...
  </div>
  <script type="module" src="./src/index.jsx"></script>
</body>
</html>

```

`src/App.tsx` 코드 작성

```javascript
export default function App() {
  return (
    <p>Hello, World!</p>
  );
}
```

`src/index.jsx` 코드 작성

```javascript
import ReactDOM from 'react-dom/client';

import App from './App';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

## Jest 세팅

```bash
npm i -D jest ts-jest @types/jest @types/jest \
@swc/core @swc/jest jest-environment-jsdom \
@testing-library/react @testing-library/jest-dom
```

`jest.config.js` 파일 작성

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
};
```

`.eslintrc.js` 파일에 설정 추가

```javascript
module.exports = {
  env: {
    // ...
    jest: true,
  },
  // ...
};
```

`src/App.test.tsx` 파일 작성

```javascript
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders greeting message', () => {
    render(<App />);

    screen.getByText('Hello, world!');
  });
});
```

`test` 명령 추가

```json
{
  "scripts": {
    // ...
    "test": "jest",
    "watch": "test --watchAll",
  }
}
```

```bash
npm test

npm run watch
```

## Parcel 설치

```bash
npm i -D parcel
```

`start` 명령 추가

```json
{
  "scripts": {
    "start": "parcel index.html --port 8080",
    // ...
  }
}
```

```bash
npm start
```

`.gitignore`, `.eslintignore`에 Parcel 캐시 추가

```txt
/node_modules/
/dist/
/.parcel-cache/
```

## Visual Studio Code 세팅

```bash
mkdir .vscode
touch .vscode/settings.json
```

```json
{
    "editor.rulers": [
        80
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "trailing-spaces.trimOnSave": true
}
```

## CodeceptJs 세팅

간단 설치

```bash
npx create-codeceptjs .
```

간단 설치로 인한 들여 쓰기 원상복구

```bash
sed "s/    /  /g" package.json > package.json.tmp
rm package.json
mv package.json.tmp package.json
```

필요없는 예제 제거

```bash
npm uninstall @codeceptjs/examples
```

`demo` 명령어 제거

```json
{
  "scripts": {
    // ...
    "codeceptjs": "codeceptjs run --steps",
    "codeceptjs:headless": "HEADLESS=true codeceptjs run --steps",
    "codeceptjs:ui": "codecept-ui --app",
    // 제거
    //"codeceptjs:demo": "codeceptjs run --steps -c node_modules/@codeceptjs/examples",
    // "codeceptjs:demo:headless": "HEADLESS=true codeceptjs run --steps -c node_modules/@codeceptjs/examples",
    // "codeceptjs:demo:ui": "codecept-ui --app  -c node_modules/@codeceptjs/examples"
  },
}
```

설정 세팅

```bash
npx codeceptjs init
```

```bash
? Do you plan to write tests in TypeScript? 
# No
? Where are your tests located? 
# ./tests/**/*_test.js
? What helpers do you want to use? 
# Playwright
? Where should logs, screenshots, and reports to be stored? 
# ./output
? Do you want to enable localization for tests? http://bit.ly/3GNUBbh 
# English (no localization)
Configure helpers...
? [Playwright] Base url of site to be tested 
# http://localhost:8080
? [Playwright] Show browser window 
# Yes
? [Playwright] Browser in which testing will be performed. Possible options: chromium, firefox, webkit or electron 
# chromium

Creating a new test...
----------------------

? Feature which is being tested (ex: account, login, etc) 
# Welcome
? Filename of a test 
# welcome_test.js
```

불필요한 파일 삭제

```bash
rm jsconfig.json
rm steps_file.js
```

`codecept.conf.js`파일에서 `include` 부분 삭제

```javascript
  // 아래 3줄 삭제
  include: {
    I: './steps_file.js',
  },
  // ...
```

`.gitignore`에 실패 기록 위치 추가

```txt
/output/
```

`eslint-plugin-codeceptjs` 설치

```bash
npm install --save-dev eslint-plugin-codeceptjs
```

`tests/.eslintrc.js` 파일 작성

```javascript
module.exports = {
  extends: ['plugin:codeceptjs/recommended'],
};
```

`tests/welcome_test.js` 파일에 테스트 추가

```javascript
Feature('Welcome');

Scenario('Visit the home page', ({ I }) => {
  I.amOnPage('/');

  I.see('Hello, World!');
});
```
