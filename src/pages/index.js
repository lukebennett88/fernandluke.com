import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Venue from '../components/venue';
import Accommodation from '../components/accommodation';
import Gifts from '../components/gifts';
// import RSVP from '../components/rsvp';

const IndexPage = () => (
  <Layout>
    <SEO title="#flukefest" />
    <Hero />
    <Venue />
    <Accommodation />
    <Gifts />
    {/* <RSVP /> */}
  </Layout>
);

export default IndexPage;
