import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import navLinks from '../nav-links';

const DesktopNav = ({ home }) => {
  return (
    <ul className="hidden px-4 py-4 -mx-2 md:flex">
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
  );
};

DesktopNav.propTypes = {
  home: PropTypes.bool,
};

export default DesktopNav;
