import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FernAndLuke from '../components/fern-and-luke';

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks!" />
    <article className="relative flex flex-wrap mt-12">
      <div className="relative w-full max-w-lg text-xl md:w-1/2">
        <h1 className="font-serif text-5xl font-bold leading-none text-gray-800 sm:text-9xl">
          Thanks!
        </h1>
        <p className="mt-4">We got your RSVP message.</p>
        <p>Hope to see you there.</p>
      </div>
      <div className="relative w-full md:w-1/2">
        <FernAndLuke className="mt-12 md:mt-0 md:w-full" />
      </div>
    </article>
  </Layout>
);

export default ThanksPage;
