import React from 'react';

const Main = ({ Component }) => {
  return (
    <div className="flex flex-col items-center justify-center h-4/5">
      <Component />
    </div>
  );
};

export default Main;