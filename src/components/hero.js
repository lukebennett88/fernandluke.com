import React from 'react';
import { Link } from 'gatsby';

import FernAndLuke from './FernAndLuke';

const Hero = () => {
  return (
    <article className="relative flex flex-wrap">
      <div className="relative w-full max-w-lg text-xl md:w-1/2">
        <h1 className="font-serif text-5xl font-bold leading-none text-gray-800 sm:text-9xl">
          29/02/20
        </h1>
        <h2 className="mt-4 text-4xl font-bold leading-none text-teal-600">
          #flukefest2020
        </h2>
        <p className="mt-4">Fern and Luke are getting married!</p>
        <p className="mt-4">
          We hope our website can help you with any questions you may have,
          additional info will be added as we get closer to the date! We are so
          excited to share our special day with you and hope you’re ready to
          party hard!
        </p>
        <p id="rsvp" className="mt-6">
          <Link
            to="/rsvp"
            className="inline-block px-6 py-1 font-bold text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800"
          >
            Click here to RSVP
          </Link>
        </p>
      </div>
      <div className="relative w-full md:w-1/2">
        <FernAndLuke className="md:absolute md:inset-0 md:h-full" />
      </div>
    </article>
  );
};

export default Hero;
