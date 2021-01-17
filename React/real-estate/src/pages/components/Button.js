import React from "react";

const Button = ({ onClickEvent, text, classes = "" }) => (
  <button
    onClick={onClickEvent}
    className={`bg-blue-custom border-0 font-inter font-semibold rounded text-xl m-0 ${classes}`}
  >
    {text}
  </button>
);

export default Button;
