import React from "react";

const Models = ({ model }) => {
  return (
    <div>
      <img className="min-w-full" src={model.image} alt="model" />
    </div>
  );
};

export default Models;
