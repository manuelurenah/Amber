import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { DEFAULT_MENU_ITEMS } from '../utils/constants';

const Header = styled.header`
  margin-bottom: 1.5rem;
  text-decoration: none;
`;

const ListItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`;

const ListContainer = styled.ul`
  float: right;
  list-style: none;
`;

const MenuItem = ({ title, to }) => (
  <ListItem>
    <Link to={to}>{title}</Link>
  </ListItem>
);

export default () => (
  <Header>
    <Link to="/">
      <h3 style={{ display: 'inline' }}>Amber</h3>
    </Link>
    <ListContainer>
      {DEFAULT_MENU_ITEMS.map(item => (
        <MenuItem title={item.title} to={item.path} />
      ))}
    </ListContainer>
  </Header>
);
