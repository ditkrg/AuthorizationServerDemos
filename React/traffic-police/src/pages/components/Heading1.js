import React from "react";

const Heading1 = ({ text, classes = "", styles = {} }) => (
  <h1
    className={`font-playfair text-black-custom text-6xl mb-12 ${classes}`}
    style={{ ...styles }}
  >
    {text}
  </h1>
);

export default Heading1;
