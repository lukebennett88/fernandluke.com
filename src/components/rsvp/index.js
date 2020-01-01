import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { IoIosClose } from 'react-icons/io';
import PropTypes from 'prop-types';

import FormRow from './form-row';
import Radio from './radio';
import TextArea from './textarea';
import Input from './input';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const RSVP = ({ setIsModalOpen }) => {
  const [state, setState] = useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="relative w-full px-4 py-8 font-sans text-gray-600 transition-colors ease-in transition-medium"
    >
      <button
        type="button"
        onClick={() => setIsModalOpen(false)}
        className="absolute top-0 right-0 text-4xl text-gray-800"
      >
        <IoIosClose />
      </button>
      <h2 className="font-serif text-2xl leading-none text-gray-800">
        Fern &amp; Luke’s <span className="line-through">Wedding</span>{' '}
        Marriage&nbsp;Party RSVP Form
      </h2>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />

      {/* RSVP (Yes/No) */}
      <FormRow title="Hello! Will you be attending our wedding?">
        <Radio
          name="rsvp"
          id="rsvp-yes"
          handleChange={handleChange}
          value="Heck yeah!"
        />
        <Radio
          name="rsvp"
          id="rsvp-no"
          handleChange={handleChange}
          value="Nah mate..."
        />
      </FormRow>

      {/* Who is attending? */}
      <FormRow title="How many people will you be RSVPing for?">
        <TextArea
          name="who"
          id="who"
          value="Write their names below"
          placeholder="Arnold Schwarzenegger"
          handleChange={handleChange}
        />
      </FormRow>

      {/* Is RSVPing a word? (Yes/No) */}
      <FormRow title="Is RSVPing even a real word?">
        <Radio
          name="is-rsvp-a-real-word"
          id="is-rsvp-a-real-word-yes"
          handleChange={handleChange}
          value="It’s a perfectly cromulent word!"
        />
        <Radio
          name="is-rsvp-a-real-word"
          id="is-rsvp-a-real-word-no"
          handleChange={handleChange}
          value="Pretty sure you made it up..."
        />
      </FormRow>

      {/* Will you be camping? */}
      <FormRow title="Will you be camping?">
        <Radio
          name="camping"
          id="camping-yes"
          handleChange={handleChange}
          value="Fo shizzle"
        />
        <Radio
          name="camping"
          id="camping-no"
          handleChange={handleChange}
          value="Yeah nah..."
        />
      </FormRow>

      {/* Anything we need to know? */}
      <FormRow>
        <TextArea
          name="need-to-know"
          id="need-to-know"
          value="Anything we need to know?"
          bold
          placeholder="I am deathly allergic to coriander"
          handleChange={handleChange}
        />
      </FormRow>

      {/* Lose yourself to dance */}
      <FormRow>
        <Input
          name="name-a-song"
          id="name-a-song"
          value="Name a song that will always make you dance"
          bold
          placeholder="Safety Dance: Men Without Hats"
          handleChange={handleChange}
        />
      </FormRow>

      {/* Favourite cheesecake flavour */}
      <FormRow>
        <Input
          name="cheesecake"
          id="cheesecake"
          value="What is your favourite flavour of cheesecake?"
          bold
          placeholder="Vintage Cheddar"
          handleChange={handleChange}
        />
      </FormRow>

      <p className="leading-tight">
        <small>
          Please note: neither of the above options will have any effect on the
          wedding. Management can (and will) refuse any entry that suggests
          “Horses” by Daryl Braithwaite.
        </small>
      </p>

      <p className="mt-4">
        <button
          type="submit"
          className="inline-block px-4 py-1 font-bold text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white"
        >
          Send
        </button>
      </p>
    </form>
  );
};

RSVP.propTypes = {
  setIsModalOpen: PropTypes.func,
};

export default RSVP;
