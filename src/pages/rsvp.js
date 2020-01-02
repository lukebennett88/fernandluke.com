import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RSVP from '../components/rsvp';

const RSVPPage = () => (
  <Layout>
    <SEO title="RSVP Form" />
    <RSVP />
  </Layout>
);

export default RSVPPage;
