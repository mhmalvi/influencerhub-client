import React, { useState } from "react";
import Slider from "react-slick";
import signupBg from "../../assets/Images/signup-bg.jpg";
import carouselData from "./carouselData.json";
import google from "../../assets/Images/google-logo.png";
import facebook from "../../assets/Images/facebook-logo.png";
import { Link } from "react-router-dom";
import { handlesignUpSuccessfullAudio } from "../../Components/utils/sounds";

const Signup = () => {
  const [ifBrand, setIfBrand] = useState(true);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="min-h-screen page-width mx-auto"
      // style={{ background: "#F5F5F5" }}
    >
      <div className="flex justify-between items-center">
        <div>
          <div
            style={{
              backgroundImage: `url(${signupBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
            }}
            className="signup-banner relative flex justify-center items-center"
          >
            <div
              className="w-9/12 mx-auto backdrop-blur-md border border-white rounded-xl flex justify-center items-end"
              style={{
                height: "90vh",
              }}
            >
              <div className="w-11/12 mx-auto">
                <Slider className="cutom-carousel mx-auto" {...settings}>
                  {carouselData.map((model, index) => (
                    <div key={index} className="mx-auto mt-auto">
                      <img
                        className="mx-auto"
                        style={{ maxHeight: "38.75rem", maxWidth: "19rem" }}
                        src={model.image}
                        alt=""
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-6/12 flex flex-col justify-start py-10  lg:mr-auto">
          <div className="flex w-9/12 mx-auto px-3">
            <h4
              className="font-bold font-abhaya leading-10"
              style={{ fontSize: "25px" }}
            >
              Create Account
            </h4>
          </div>
          <div className="w-9/12 mx-auto px-2 mb-8 flex justify-between items-center font-mulish font-semibold">
            <button
              className={`${
                ifBrand
                  ? "bg-dark-blue text-white"
                  : "bg-transparent text-light-gray"
              } w-full mx-auto py-3 mt-4 rounded-lg mr-3 border border-gray-300`}
              type="submit"
              onClick={() => setIfBrand(true)}
            >
              Our Brand & Agencys
            </button>
            <button
              className={`${
                !ifBrand
                  ? "bg-dark-blue text-white"
                  : "bg-transparent text-light-gray"
              } w-full mx-auto py-3 mt-4 rounded-lg mr-3 border border-gray-300`}
              type="submit"
              onClick={() => setIfBrand(false)}
            >
              I am Creator
            </button>
          </div>

          <form className="mb-8 font-mulish text-base font-light">
            <div className="w-9/12 mx-auto px-3 mb-6">
              <input
                className="w-full block text-gray-700 border-b border-gray-300 rounded py-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="fullname"
                required
                placeholder="Full Name"
              />
            </div>

            <div className="w-9/12 mx-auto px-3 mb-6">
              <input
                className="w-full block text-gray-700 border-b border-gray-300 rounded py-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                required
                placeholder="Email"
              />
            </div>

            <div className="w-9/12 mx-auto px-3 mb-6">
              <input
                className="w-full block text-gray-700 border-b border-gray-300 rounded py-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="password"
                required
                placeholder="Password"
              />
            </div>

            <div className="w-9/12 mx-auto px-3 flex justify-between items-center">
              <div className="flex items-center">
                <input
                  className="bg-gray-200 cursor-pointer"
                  type="checkbox"
                  name="terms&conditions"
                  id="terms&conditions"
                  value="terms&conditions"
                  required
                />
                <label
                  htmlFor="terms&conditions"
                  className="ml-3 cursor-pointer font-light font-mulish"
                >
                  agree to all the{" "}
                  <Link to={"/"} className="text-blue-600">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link to={"/"} className="text-blue-600">
                    Privacy policy
                  </Link>
                </label>
              </div>
            </div>

            <div className="w-9/12 mx-auto px-3 mt-2">
              <button
                className="w-full text-white font-semibold mx-auto text-base btn-grad bg-dark-blue py-3 mt-4 rounded-lg"
                type="submit"
                onClick={handlesignUpSuccessfullAudio}
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Google Signin process*/}
          <div className="w-11/12 pl-21 mt-3">
            <p className="text-gray-400 mb-6 text-center">OR </p>
            <div className="flex justify-center items-center">
              <button className="w-full py-2 px-2 text-black font-semibold mx-auto bg-white rounded-lg border border-gray-300 mr-4 flex justify-center items-center">
                <img className="mr-3" src={google} alt="" />
                <p className="m-0">Continue with Google</p>
              </button>
              <button className="w-full py-2 px-2 text-black font-semibold mx-auto bg-white rounded-lg border border-gray-300  flex justify-center items-center">
                <img className="mr-3" src={facebook} alt="" />
                <p className="m-0">Continue with Facebook</p>
              </button>
            </div>
          </div>

          <div className="w-9/12 px-2 mx-auto">
            <p className="font-normal text-gray-400 pb-4 mt-24">
              Already have an account?{" "}
              <span>
                <Link
                  className="text-blue-600 hover:text-opacity-80"
                  to={"/login"}
                >
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
