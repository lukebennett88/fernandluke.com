import React from 'react';
import Headroom from 'react-headroom';
import PropTypes from 'prop-types';

import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

const Header = ({ home }) => (
  <header>
    <Headroom>
      <MobileNav home={home} />
      <nav className="max-w-4xl mx-auto font-medium text-teal-600 bg-white">
        <DesktopNav home={home} />
      </nav>
    </Headroom>
  </header>
);

Header.propTypes = {
  home: PropTypes.bool,
};

export default Header;
