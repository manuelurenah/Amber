import React from 'react';
import styled from 'styled-components';
import Header from './header';
import { rhythm } from '../utils/typography';

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: ${rhythm(2)} auto;
  max-width: 80vw;
  padding: 0 ${rhythm(1)};
`;

export default ({ children }) => (
  <LayoutContainer>
    <Header />
    {children}
  </LayoutContainer>
);
