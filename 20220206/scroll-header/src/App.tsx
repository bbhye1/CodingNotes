import styled from 'styled-components';

import Layout from './Layout';

const Content = styled.div`
    background-color: #a8d8ff;
    height: 5000px;
    ${'padding: 0 calc((100vw - min(70vw, 800px)) / 2);'};    
    padding-top: 4em;
`;

export default function App() {
  return (
    <Layout>
      <Content>
        <h1>Hello, world!</h1>
      </Content>
    </Layout>
  );
}
