import React from 'react';

import styled from 'styled-components';

import Header from './Header';

const Wrapper = styled.div`
    display: 'flex';
    flex-direction: 'column';
    min-height: 100vh;
    width: 100vw;
    font-size: 1em; 
    color: red;
`;

export default function Layout({ children } : { children : React.ReactNode }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
