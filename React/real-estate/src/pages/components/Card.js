import React from "react";

const Card = ({ children, classes = "", styles = {} }) => {
  return (
    <div
      style={{ ...styles }}
      className={`xl:w-1/3 lg:w-5/12 md:w-2/4 sm:w-9/12 w-11/12 flex flex-col justify-center shadow md:px-32 sm:px-28 sm:py-36 px-20 py-16 my-20 rounded ${classes}`}
    >
      {children}
    </div>
  );
};

export default Card;
