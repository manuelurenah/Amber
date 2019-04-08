import React from 'react';
import { graphql } from 'gatsby';
import SectionHeader from '../components/sectionHeader';
import Layout from '../components/layout';
import { DEFAULT_MENU_ITEMS } from '../utils/constants';

export default ({ data }) => (
  <Layout menuItems={DEFAULT_MENU_ITEMS}>
    <SectionHeader title={`About ${data.site.siteMetadata.title}`} />
    <p>{data.site.siteMetadata.description}</p>
  </Layout>
);

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
