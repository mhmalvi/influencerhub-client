import React from "react";

const Creators = () => {
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <div className="w-full flex justify-center px-4 py-2 mb-2 hover:bg-gray-50">
        <img
          className="w-8 h-8 mx-2 rounded-full"
          src="https://i.ibb.co/Z18pJLT/Ellipse-114.png"
          alt=""
        />
        <div className="text-xs w-9/12">
          <h4 className="text-sm font-normal mb-0">Leslie Alexander</h4>
          <p className="text-blue-500 text-xs font-mulish font-light mb-0">
            Submite
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creators;
