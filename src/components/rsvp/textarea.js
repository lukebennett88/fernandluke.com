import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  name,
  id,
  value,
  bold = false,
  placeholder,
  required = false,
  rows = 4,
  handleChange,
}) => {
  return (
    <label htmlFor={id} className="inline-block w-full">
      <span className={`${bold && 'font-bold text-gray-800'}`}>{value}</span>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        rows={rows}
        onChange={handleChange}
        className="w-full px-2 py-1 border-2 rounded-none shadow-none outline-none appearance-none form-textarea focus:border-black hover:bg-gray-100"
      />
    </label>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  bold: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  handleChange: PropTypes.func,
};

export default TextArea;
