import React from 'react';

import FernAndLuke from './FernAndLuke';

const Hero = () => {
  return (
    <article className="flex flex-wrap relative">
      <div className="max-w-lg relative text-xl w-full md:w-1/2">
        <h1 className="font-serif font-bold leading-none text-5xl sm:text-9xl text-gray-800">
          29/02/20
        </h1>
        <h2 className="font-bold leading-none mt-4 text-teal-600 text-4xl">
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
