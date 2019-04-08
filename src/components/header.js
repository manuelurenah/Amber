import React from 'react';
import { Link, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { DEFAULT_MENU_ITEMS, QUERY_SITE_METADATA } from '../utils/constants';
import { rhythm } from '../utils/typography';

const Header = styled.header`
  margin-bottom: ${rhythm(1.5)};
  text-decoration: none;
`;

const ListItem = styled.li`
  display: inline-block;
  margin-right: ${rhythm(1)};
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
  <StaticQuery
    query={QUERY_SITE_METADATA}
    render={data => (
      <Header>
        <Link to="/">
          <h3 style={{ display: 'inline' }}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ListContainer>
          {DEFAULT_MENU_ITEMS.map(item => (
            <MenuItem title={item.title} to={item.path} />
          ))}
        </ListContainer>
      </Header>
    )}
  />
);
