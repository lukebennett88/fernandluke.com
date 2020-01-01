import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ name, id, handleChange, value }) => {
  return (
    <label htmlFor={id} className="inline-block w-full">
      <input
        type="radio"
        name={name}
        id={id}
        onChange={handleChange}
        className="text-black form-radio"
      />
      <span className="ml-1">{value}</span>
    </label>
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export default Radio;
