import React from "react";

const Message = () => {
  return (
    <>
      <div className="flex  mr-auto px-2 mb-2">
        <img
          className="w-6 h-6 mx-2 rounded-full"
          src="https://i.ibb.co/Z18pJLT/Ellipse-114.png"
          alt=""
        />
        <div className="text-xs w-9/12">
          <p className="rounded-md border border-gray-600 p-2 font-normal mb-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
            mollis leo proin turpis.
          </p>
          <span className="text-gray-400">10:15 pm</span>
        </div>
      </div>
    </>
  );
};

export default Message;
