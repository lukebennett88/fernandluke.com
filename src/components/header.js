import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="sticky top-0 z-40 mb-6 bg-white">
    <nav className="max-w-4xl px-4 py-4 mx-auto text-teal-600">
      <ul className="flex -mx-2 overflow-x-scroll font-medium">
        {[
          // {
          //   id: 0,
          //   title: "RSVP",
          //   href: "#rsvp"
          // },
          {
            id: 1,
            title: 'Venue',
            href: '#venue',
          },
          {
            id: 2,
            title: 'Accommodation',
            href: '#accommodation',
          },
          {
            id: 3,
            title: 'Gifts',
            href: '#gifts',
          },
        ].map(navlink => (
          <li key={navlink.id}>
            <AnchorLink
              offset="56"
              className="px-2 hover:text-black"
              href={navlink.href}
            >
              {navlink.title}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
