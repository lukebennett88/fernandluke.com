import PropTypes from 'prop-types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="bg-orange-600 mb-6 sticky top-0 z-40">
    <nav className="max-w-4xl mx-auto px-4 py-4 text-white">
      <ul className="flex font-medium -mx-2 overflow-x-scroll">
        <li>
          <AnchorLink
            offset="56"
            className="hover:text-black px-2"
            href="#venue"
          >
            Venue
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            offset="56"
            className="hover:text-black px-2"
            href="#accommodation"
          >
            Accommodation
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            offset="56"
            className="hover:text-black px-2"
            href="#gifts"
          >
            Gifts
          </AnchorLink>
        </li>
        {/* <li>
          <AnchorLink
            offset="56"
            className="hover:text-black px-2"
            href="#rsvp"
          >
            RSVP
          </AnchorLink>
        </li> */}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
