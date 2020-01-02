import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import navLinks from '../nav-links';

const MobileNav = ({ home }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-4 font-medium"
      >
        <span className="pb-1">Menu</span>
        <IoIosMenu className="ml-1 text-2xl" />
      </button>
      <ul className={`${isOpen ? 'border-b' : 'hidden'}`}>
        {navLinks.map(navlink => (
          <li key={navlink.id} className="border-t hover:bg-gray-100">
            {home ? (
              <AnchorLink
                href={navlink.href}
                offset="56"
                className="block px-4 py-1 font-medium hover:text-black"
                onClick={() => setIsOpen(!isOpen)}
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
  );
};

MobileNav.propTypes = {
  home: PropTypes.bool,
};

export default MobileNav;
