import React from "react";

const Heading3 = ({ children, styles = {} }) => {
  return (
    <h3
      style={{ ...styles }}
      className="font-light font-inter text-black-custom my-20 self-start"
    >
      {children}
    </h3>
  );
};

export default Heading3;
