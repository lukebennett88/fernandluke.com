import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  id,
  value,
  bold = false,
  placeholder,
  handleChange,
}) => {
  return (
    <label htmlFor={id} className="inline-block w-full">
      <span className={`${bold && 'font-bold text-gray-800'}`}>{value}</span>
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        className="w-full px-2 py-1 border-2 rounded-none shadow-none outline-none appearance-none form-textarea focus:border-black hover:bg-gray-100"
      />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  bold: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
