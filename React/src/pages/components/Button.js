import React from 'react';

const Button = ({onClickEvent}) => (
  <button onClick={onClickEvent} className="bg-blue-custom border-0 font-inter font-semibold rounded text-xl m-0">
    Login
  </button>
);

export default Button;
