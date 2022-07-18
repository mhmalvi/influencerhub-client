import React from "react";

const Profile = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-gray-600 text-3.5xl font-bold leading-10 pl-16">
            Profile Settings
          </h1>
          <div className="flex">
            <div className="text-base font-semibold leading-6 flex flex-col justify-evenly items-end text-black">
              <div className="flex items-center my-2">
                <h4>Name</h4>
                <h6 className="ml-7 mr-20">:</h6>
              </div>
              <div className="flex items-center my-2">
                <h4 className="whitespace-nowrap">About Company </h4>
                <h6 className="ml-7 mr-20">:</h6>
              </div>
              <div className="flex items-center my-2">
                <h4>Country</h4>
                <h6 className="ml-7 mr-20">:</h6>
              </div>
              <div className="flex items-center my-2">
                <h4>Custom url</h4>
                <h6 className="ml-7 mr-20">:</h6>
              </div>
            </div>

            <div className="flex flex-col justify-evenly text-base font-semibold items-start text-gray-500">
              <div className="my-2">
                <h4>Pathao</h4>
              </div>
              <div className="my-2">
                <h4 className="whitespace-nowrap">
                  To give a written or spoken report of how...
                </h4>
              </div>
              <div className="my-2">
                <h4>Bangladesh</h4>
              </div>
              <div className="my-2">
                <h4>facebook.com/md.pranto.3110</h4>
              </div>
            </div>
          </div>
          <div className="float-right">
            <button className="px-14 py-2 mt-8 mr-40 text-sm font-normal rounded-xl bg-dark-blue text-white flex justify-center items-center">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
