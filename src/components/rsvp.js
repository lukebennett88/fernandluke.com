import React from 'react';

import Form from '../components/form';

const RSVP = () => {
  return (
    <article id="rsvp" className="flex flex-wrap-reverse mt-12 -mx-4">
      <div className="p-4 w-full md:w-1/2">
        <h2 className="font-serif leading-none text-gray-800 text-4xl">RSVP</h2>
      </div>
      <div className="p-4 w-full md:w-1/2">
        <Form />
      </div>
    </article>
  );
};

export default RSVP;
