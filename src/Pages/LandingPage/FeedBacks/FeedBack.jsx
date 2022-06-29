import React from "react";

const FeedBack = ({ feedback }) => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center max-w-md">
        <div className="relative w-44">
          <div>
            <img
              src={feedback.avatar}
              className="absolute top-8 -right-5 rounded-md h-22 w-22 z-50 mb-2"
              alt="avatar"
            />
          </div>
          <div
            className="w-38 h-50 px-2 relative rounded-md text-white flex flex-col items-center justify-center shadow-md"
            style={{
              backgroundImage: `url(${feedback.coverimg})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-38 h-50 absolute rounded-md bg-gray-800 bg-opacity-50"></div>
            <div className="z-50 mt-auto mb-4 ml-auto mr-4 text-base font-mulish">
              <h2>{feedback.name}</h2>
              <h2>{feedback.position}</h2>
            </div>
          </div>
        </div>
        <div className="ml-12">
          <p>{feedback.message}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
