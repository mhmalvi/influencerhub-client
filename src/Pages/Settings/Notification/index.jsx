import React, { useState } from "react";

const Notification = () => {
  const [browserStatus, setBrowserStatus] = useState(true);
  const [phoneStatus, setPhoneStatus] = useState(true);
  const [emailStatus, setEmailStatus] = useState(false);

  return (
    <div>
      <h1 className="text-gray-600 text-3.5xl font-bold leading-10 pl-4 whitespace-nowrap">
        Notification Setting
      </h1>
      <div className="flex">
        <div className="text-base font-semibold leading-6 flex flex-col justify-evenly items-end text-black">
          <div className="flex items-center my-2">
            <h4>Browser</h4>
            <h6 className="ml-7 mr-20">:</h6>
          </div>
          <div className="flex items-center my-2">
            <h4 className="whitespace-nowrap">Phone</h4>
            <h6 className="ml-7 mr-20">:</h6>
          </div>
          <div className="flex items-center my-2">
            <h4>Email</h4>
            <h6 className="ml-7 mr-20">:</h6>
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-start">
          <div className="my-2 flex justify-between items-center">
            <h4
              className={`${
                browserStatus ? "text-blue-500" : "text-gray-400"
              } text-base font-semibold cursor-pointer`}
              onClick={() => setBrowserStatus(true)}
            >
              Enable
            </h4>
            <h4
              className={`${
                !browserStatus ? "text-blue-500" : "text-gray-400"
              } text-base font-semibold cursor-pointer pl-5`}
              onClick={() => setBrowserStatus(false)}
            >
              Disable
            </h4>
          </div>
          <div className="my-2 flex justify-between items-center">
            <h4
              className={`${
                phoneStatus ? "text-blue-500" : "text-gray-400"
              } text-base font-semibold cursor-pointer`}
              onClick={() => setPhoneStatus(true)}
            >
              Enable
            </h4>
            <h4
              className={`${
                !phoneStatus ? "text-blue-500" : "text-gray-400"
              } text-base font-semibold cursor-pointer pl-5`}
              onClick={() => setPhoneStatus(false)}
            >
              Disable
            </h4>
          </div>
          <div className="my-2 flex justify-between items-center">
            <h4
              className={`${
                emailStatus ? "text-blue-500" : "text-gray-400"
              } text-base font-semibold cursor-pointer`}
              onClick={() => setEmailStatus(true)}
            >
              Enable
            </h4>
            <h4
              className={`${
                !emailStatus ? "text-blue-500" : "text-gray-400"
              } text-base font-semibold cursor-pointer pl-5`}
              onClick={() => setEmailStatus(false)}
            >
              Disable
            </h4>
          </div>
        </div>
      </div>
      <div className="float-right">
        <button className="px-14 py-2 mt-8 -mr-5 text-sm font-normal rounded-xl bg-dark-blue text-white flex justify-center items-center">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Notification;
