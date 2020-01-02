import React, { useState } from 'react';
import { navigate } from 'gatsby';

import FormRow from './form-row';
import Radio from './radio';
import TextArea from './textarea';
import Input from './input';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const RSVP = () => {
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
      name="rsvp-form"
      method="post"
      action="/thanks/"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="w-full mt-12 font-sans text-gray-600 transition-colors ease-in transition-medium"
    >
      <h1 className="font-serif text-4xl leading-none text-gray-800">
        Fern &amp; Luke’s <span className="line-through">Wedding</span>{' '}
        Marriage&nbsp;Party RSVP&nbsp;Form
      </h1>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />

      {/* RSVP (Yes/No) */}
      <FormRow title="Hello! Will you be attending our wedding? *">
        <Radio
          label="Heck yeah!"
          name="rsvp"
          id="rsvp-yes"
          value="yes"
          required
          handleChange={handleChange}
        />
        <Radio
          label="Nah mate..."
          name="rsvp"
          id="rsvp-no"
          value="no"
          required
          handleChange={handleChange}
        />
      </FormRow>

      {/* Who is attending? */}
      <FormRow title="How many people will you be RSVPing for? *">
        <TextArea
          name="who"
          id="who"
          value="Write their names below"
          placeholder="Arnold Schwarzenegger"
          required
          handleChange={handleChange}
        />
      </FormRow>

      {/* Is RSVPing a word? (Yes/No) */}
      <FormRow title="Is RSVPing even a real word?">
        <Radio
          label="It’s a perfectly cromulent word!"
          name="is-rsvp-a-real-word"
          id="is-rsvp-a-real-word-yes"
          value="yes"
          handleChange={handleChange}
        />
        <Radio
          label="Pretty sure you made it up..."
          name="is-rsvp-a-real-word"
          id="is-rsvp-a-real-word-no"
          value="no"
          handleChange={handleChange}
        />
      </FormRow>

      {/* Will you be camping? */}
      <FormRow title="Will you be camping? *">
        <Radio
          label="Fo shizzle"
          name="camping"
          id="camping-yes"
          value="yes"
          required
          handleChange={handleChange}
        />
        <Radio
          label="Yeah nah..."
          name="camping"
          id="camping-no"
          value="no"
          required
          handleChange={handleChange}
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

      <p className="mt-4 leading-tight">
        <small>
          Please note: the previous 2 questions are for consideration only, and
          may not have any effect on the wedding. Management can (and will)
          refuse entry to anyone that suggests “Horses” by Daryl Braithwaite.
        </small>
      </p>

      <p className="mt-8">
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

export default RSVP;
