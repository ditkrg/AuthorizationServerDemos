import React from "react";

const Main = ({ Component, styles = {} }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-4/5"
      style={{ ...styles, marginTop: "90px" }}
    >
      <Component />
    </div>
  );
};

export default Main;
