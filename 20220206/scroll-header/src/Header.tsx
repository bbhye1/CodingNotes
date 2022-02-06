import styled from 'styled-components';

import { useState, useEffect } from 'react';

interface Props {
    readonly fixed: boolean;
}

const Container = styled.nav<Props>`
  position: ${(props) => (props.fixed ? 'fixed' : 'absolute')} ;
  top: 0;
  right: 0;
  left:0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 4em;
  background-color: ${(props) => (props.fixed ? '#004c8a' : 'transparent')};
  color: ${(props) => (props.fixed ? '#fff' : '#000')};
  transition: 0.2s ease-in-out;
  ${'padding: 0 calc((100vw - min(70vw, 800px)) / 2);'}
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: .5em;
`;

export default function Header() {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY || 0;

      setFixed(top > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container fixed={fixed}>
      <p>Logo</p>
      <Menu>
        <li>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
      </Menu>
    </Container>
  );
}
