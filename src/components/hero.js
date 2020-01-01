import React from 'react';

import FernAndLuke from './FernAndLuke';

const Hero = () => {
  return (
    <article className="relative flex flex-wrap">
      <div className="relative w-full max-w-lg text-xl md:w-1/2">
        <h1 className="font-serif text-5xl font-bold leading-none text-gray-800 sm:text-9xl">
          29/02/20
        </h1>
        <h2 className="mt-4 text-4xl font-bold leading-none text-teal-600">
          #flukefest
        </h2>
        <p className="mt-4">Fern and Luke are getting married!</p>
        <p className="mt-4">
          We hope our website can help you with any questions you may have,
          additional info will be added as we get closer to the date! We are so
          excited to share our special day with you and hope you’re ready to
          party hard!
        </p>
      </div>
      <div className="relative w-full md:w-1/2">
        <FernAndLuke className="md:absolute md:inset-0 md:h-full" />
      </div>
    </article>
  );
};

export default Hero;
