import { graphql } from 'gatsby';

export const DEFAULT_MENU_ITEMS = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
];

export const QUERY_SITE_METADATA = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
