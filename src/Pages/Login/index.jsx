import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import loginBg from "../../assets/Images/loginBg.png";
import modelData from "./modelData.json";
import google from "../../assets/Images/google-logo.png";
import facebook from "../../assets/Images/facebook-logo.png";

const Login = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen py-28 page-width mx-auto">
      {/* <div className="w-10/12 mx-auto"> */}
      <div className="font-pacifico text-2xl cursor-pointer pl-10">LOGO</div>
      <div className="md:flex justify-between items-center px-10">
        <div className="md:w-5/12 flex flex-col py-10 md:mx-auto lg:mx-auto">
          <div className="flex w-9/12 mx-auto px-3 mb-10">
            <h4 className="text-2xl font-bold font-abhaya">
              Login to your account
            </h4>
          </div>

          <form className="mb-8">
            <div className="w-9/12 mx-auto px-3 mb-6">
              <input
                className="w-full block text-gray-700 border border-gray-300 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                required
                placeholder="Email"
              />
            </div>

            <div className="w-9/12 mx-auto px-3 mb-6">
              <input
                className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-6 mx mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="password"
                required
                placeholder="Password"
              />
            </div>

            <div className="w-9/12 mx-auto px-3 flex justify-between items-center">
              <div className="flex items-center">
                <input
                  className="bg-gray-200 cursor-pointer"
                  type="radio"
                  name="rememberme"
                  id="rememberme"
                  value="rememberme"
                />
                <label htmlFor="rememberme" className="ml-3 cursor-pointer">
                  Remember me
                </label>
              </div>
              <div>
                <Link
                  className="text-blue-600 hover:text-opacity-80"
                  to={"/signup"}
                >
                  Forget password?
                </Link>
              </div>
            </div>

            <div className="w-9/12 mx-auto px-3 mt-2">
              <button
                className="w-full text-white font-semibold mx-auto text-xl bg-dark-blue py-3 mt-4 rounded-lg"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>

          {/* Google Signin process*/}
          <div className="w-9/12 px-2 mx-auto mt-4">
            <p className="text-gray-500 mb-3">Sing-in with </p>
            <div className="flex justify-center items-center">
              <button className="w-full py-2 text-black font-semibold mx-auto text-xl bg-white rounded-lg border border-gray-300 mr-4">
                <img className="mx-auto" src={google} alt="" />
              </button>
              <button className="w-full py-2 text-black font-semibold mx-auto text-xl bg-white rounded-lg border border-gray-300">
                <img className="mx-auto" src={facebook} alt="" />
              </button>
            </div>
          </div>

          <div className="w-9/12 px-2 mx-auto">
            <p className="font-semibold pb-4 mt-24">
              Dont have an account?{" "}
              <span>
                <Link
                  className="text-blue-600 hover:text-opacity-80"
                  to={"/signup"}
                >
                  Join free today
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="md:w-7/12 flex justify-center items-center">
          <div
            style={{
              backgroundImage: `url(${loginBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "70vh",
            }}
            className="w-10/12 rounded-xl flex justify-center items-center"
          >
            <div
              className="w-10/12 backdrop-blur-md border border-white rounded-xl flex justify-center items-end"
              style={{
                height: "61vh",
              }}
            >
              <div className="w-10/12 mx-auto">
                <div id="login" className="relative">
                  <Slider {...settings}>
                    {modelData.map((model, index) => (
                      <div key={index} className="min-h-full mt-auto">
                        <img className="" src={model.image} alt="" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              {/* <div>
                  {modelData.map((model) => (
                    <Models model={model} />
                  ))}
              </div> */}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
