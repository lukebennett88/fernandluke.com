import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FernAndLuke from '../components/fern-and-luke';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <article className="relative flex flex-wrap mt-12">
      <div className="relative w-full max-w-lg text-xl md:w-1/2">
        <h1 className="font-serif text-5xl font-bold leading-none text-gray-800 sm:text-9xl">
          404: Page Not Found
        </h1>
        <p className="mt-4">You goofed something up.</p>
        <p>Maybe go back to the home page?</p>
        <p className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-1 font-bold text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800"
          >
            Home
          </Link>
        </p>
      </div>
      <div
        style={{ transform: `rotate(180deg)` }}
        className="relative w-full md:w-1/2"
      >
        <FernAndLuke className="mt-12 md:mt-0 md:w-full" />
      </div>
    </article>
  </Layout>
);

export default NotFoundPage;
