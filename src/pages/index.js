import React from 'react';
import SectionHeader from '../components/sectionHeader';
import Layout from '../components/layout';
import { DEFAULT_MENU_ITEMS } from '../utils/constants';

export default () => (
  <Layout menuItems={DEFAULT_MENU_ITEMS}>
    <SectionHeader title="Welcome to Amber" />
  </Layout>
);
