import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ name, id, required = false, handleChange, value }) => {
  return (
    <label htmlFor={id} className="inline-block w-full">
      <input
        type="radio"
        required={required}
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
  required: PropTypes.bool,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export default Radio;
