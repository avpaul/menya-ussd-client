import React from 'react';
import './input.scss';

const Input = ({ placeholder }) => {
  return (
    <div className="input--wrapper">
      <input type="text" className="input" placeholder={placeholder} />
    </div>
  );
};

export default Input;
