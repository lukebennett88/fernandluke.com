/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-600">
      <Header />
      <main id="main" className="flex-1 w-full max-w-4xl px-4 pb-6 mx-auto">
        {children}
      </main>
      <footer className="text-center">
        <div className="w-full max-w-4xl p-4 mx-auto">
          For all wedding related enquires, please contact us via{' '}
          <a
            className="font-bold text-teal-600 hover:underline"
            href="mailto:hello@fernandluke.com?subject=%23flukefest"
          >
            email
          </a>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
