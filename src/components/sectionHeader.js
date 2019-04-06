import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Header = styled.h1`
  margin: 1em 0;
  padding: 0;
`;

const HeaderWrapper = styled.div`
  width: 100%;
`;

export default ({ title }) => (
  <HeaderWrapper>
    <Header>{title}</Header>
  </HeaderWrapper>
);
