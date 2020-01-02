import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ value, name, id, required = false, handleChange, label }) => {
  return (
    <label htmlFor={id} className="inline-block w-full">
      <input
        type="radio"
        value={value}
        name={name}
        id={id}
        required={required}
        onChange={handleChange}
        className="text-black form-radio"
      />
      <span className="ml-1">{label}</span>
    </label>
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
};

export default Radio;
