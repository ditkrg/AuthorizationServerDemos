import React from 'react';

const Main = ({ Component }) => {
  return (
    <div className="flex flex-col items-center justify-center h-3/4">
      <Component />
    </div>
  );
};

export default Main;
