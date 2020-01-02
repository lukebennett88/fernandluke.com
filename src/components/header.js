import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import navLinks from './nav-links';

const Header = ({ home }) => (
  <header className="sticky top-0 z-40 mb-6 bg-white">
    <nav className="max-w-4xl px-4 py-4 mx-auto text-teal-600">
      <ul className="flex -mx-2 overflow-x-scroll font-medium">
        {navLinks.map(navlink => (
          <li key={navlink.id}>
            {home ? (
              <AnchorLink
                href={navlink.href}
                offset="56"
                className="px-2 hover:text-black"
              >
                {navlink.title}
              </AnchorLink>
            ) : (
              <Link
                to={navlink.href}
                offset="56"
                className="px-2 hover:text-black"
              >
                {navlink.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  home: PropTypes.bool,
};

export default Header;
