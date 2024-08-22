import React from 'react';

const Button = ({ children, onClick, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded transition-colors duration-200 ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;