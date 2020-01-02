import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Venue from '../components/venue';
import Accommodation from '../components/accommodation';
import Gifts from '../components/gifts';

const IndexPage = () => (
  <Layout home>
    <SEO title="#flukefest2020" />
    <Hero />
    <Venue />
    <Accommodation />
    <Gifts />
  </Layout>
);

export default IndexPage;
