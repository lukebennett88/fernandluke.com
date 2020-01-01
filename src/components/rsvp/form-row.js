import React from 'react';
import PropTypes from 'prop-types';

const FormRow = ({ title, children }) => {
  return (
    <div className="mt-4">
      {title && <p className="font-bold text-gray-800">{title}</p>}
      {children}
    </div>
  );
};

FormRow.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FormRow;
