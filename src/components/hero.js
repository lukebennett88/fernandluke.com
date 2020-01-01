import React, { useState } from 'react';
import Modal from 'react-modal';
import { animated, useTransition } from 'react-spring';

import RSVP from './rsvp';
import FernAndLuke from './FernAndLuke';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalAnimations = useTransition(isModalOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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
        <p className="mt-6">
          <button
            type="button"
            id="rsvp"
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="inline-block px-6 py-1 font-bold text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800"
          >
            RSVP
          </button>
        </p>
      </div>
      <div className="relative w-full md:w-1/2">
        <FernAndLuke className="md:absolute md:inset-0 md:h-full" />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="RSVP form"
          overlayClassName="bg-transparent-black blur fixed overflow-y-scroll flex items-start justify-center inset-0 z-50"
          className="inset-0 flex justify-center outline-none"
        >
          {modalAnimations.map(
            ({ item, key, props }) =>
              item && (
                <animated.div
                  key={key}
                  style={props}
                  className="w-full max-w-xl mx-auto"
                >
                  <div className="mx-4 my-12 bg-white border-2 border-black shadow-2xl">
                    <RSVP setIsModalOpen={setIsModalOpen} />
                  </div>
                </animated.div>
              )
          )}
        </Modal>
      </div>
    </article>
  );
};

export default Hero;

Modal.setAppElement('#___gatsby');
