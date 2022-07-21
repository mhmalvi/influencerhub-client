import { Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <div>
      <h1 className="text-gray-600 text-3.5xl font-bold leading-10 pl-16">
        Security Setting
      </h1>
      <div className="flex">
        <div className="text-base font-semibold leading-6 flex flex-col justify-evenly items-end text-black">
          <div className="flex items-center my-2">
            <h4>Email</h4>
            <h6 className="ml-7 mr-20">:</h6>
          </div>
          <div className="flex items-center my-2">
            <h4 className="whitespace-nowrap">Old Password </h4>
            <h6 className="ml-7 mr-20">:</h6>
          </div>
          <div className="flex items-center my-2">
            <h4 className="whitespace-nowrap">New Password</h4>
            <h6 className="ml-7 mr-20">:</h6>
          </div>
        </div>

        <div className="flex flex-col justify-evenly text-base font-semibold items-start text-gray-500">
          <div className="my-2 flex justify-between items-center">
            <Input
              type="email"
              className="pass-inpt"
              placeholder="example@example.com"
            />
          </div>
          <div className="my-2">
            <Input.Password className="pass-inpt" placeholder="********" />
          </div>
          <div className="my-2">
            <Input.Password className="pass-inpt" placeholder="********" />{" "}
          </div>
        </div>
      </div>
      <div className="mr-48">
        <Link to={"/settings/souraav"}>
          <p className="font-medium text-base leading-6 text-blue-400 text-right">
            Forgot
          </p>
        </Link>
      </div>

      <div className="float-right">
        <button className="px-14 py-2 mr-20 mt-8 text-sm font-normal rounded-xl bg-dark-blue text-white flex justify-center items-center">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Security;
