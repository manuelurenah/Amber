import React from 'react';
import styled from 'styled-components';
import Header from './header';

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 2rem auto;
  max-width: 80vw;
  padding: 0 1rem;
`;

export default ({ children }) => (
  <LayoutContainer>
    <Header />
    {children}
  </LayoutContainer>
);
