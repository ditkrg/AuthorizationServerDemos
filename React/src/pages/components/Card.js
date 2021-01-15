import React from "react";

const Card = ({ component: Component }) => {
  return (
    <div className="xl:w-1/3 lg:w-5/12 md:w-2/4 sm:w-9/12 w-11/12 flex flex-col justify-center shadow md:px-32 sm:px-28 md:py-36 sm:py-36 px-20 py-16 mt-20">
      <Component />
    </div>
  );
};

export default Card;
