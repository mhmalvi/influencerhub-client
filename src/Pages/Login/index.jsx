import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import loginBg from "../../assets/Images/loginBg.png";
import carouselData from "./carouselData.json";
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
    <div className='min-h-screen page-width px-30 mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='login-form pt-18'>
          <div className='font-pacifico text-2xl cursor-pointer pb-8'>
            <Link to={"/"}>LOGO</Link>
          </div>
          <div className=' pl-21'>
            <div className='flex mb-5'>
              <h4 className='text-2xl font-bold font-abhaya'>
                Login to your account
              </h4>
            </div>
            <form className='mb-8'>
              <div className=' mx-auto mb-6'>
                <input
                  className='w-full block text-gray-700 border border-gray-300 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  type='email'
                  required
                  placeholder='Email'
                />
              </div>

              <div className='mx-auto mb-6'>
                <input
                  className='block w-full text-gray-700 border border-gray-300 rounded py-3 px-6 mx mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  type='password'
                  required
                  placeholder='Password'
                />
              </div>

              <div className='mx-auto flex justify-between items-center text-sm font-mulish'>
                <div className='flex items-center'>
                  <input
                    className='bg-gray-200 cursor-pointer'
                    type='radio'
                    name='rememberme'
                    id='rememberme'
                    value='rememberme'
                  />
                  <label
                    htmlFor='rememberme'
                    className='ml-3 cursor-pointer text-gray-400 font-mulish'
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <Link
                    className='text-blue-600 hover:text-opacity-80'
                    to={"/signup"}
                  >
                    Forget password?
                  </Link>
                </div>
              </div>

              <div className='mx-auto mt-2'>
                <button
                  className='w-full text-white font-medium mx-auto text-base bg-dark-blue py-3 mt-4 rounded-lg font-mulish'
                  type='submit'
                >
                  Login
                </button>
              </div>
            </form>

            {/* Google Signin process*/}
            <div className='mx-auto mt-4'>
              <p className='text-gray-400 mb-3 font-mulish'>Sing-in with </p>
              <div className='flex justify-center items-center'>
                <button className='w-full py-2 text-black font-semibold mx-auto text-xl bg-white rounded-lg border border-gray-300 mr-4'>
                  <img className='mx-auto' src={google} alt='' />
                </button>
                <button className='w-full py-2 text-black font-semibold mx-auto text-xl bg-white rounded-lg border border-gray-300'>
                  <img className='mx-auto' src={facebook} alt='' />
                </button>
              </div>
            </div>

            <div className='font-medium text-gray-400 px-2 mx-auto font-mulish'>
              <p className=' pb-4 mt-24'>
                Dont have an account?{" "}
                <span>
                  <Link
                    className='text-blue-600 hover:text-opacity-80'
                    to={"/signup"}
                  >
                    Join free today
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='login-banner mt-14'>
          <div
            style={{
              backgroundImage: `url(${loginBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vh",
            }}
            className='login-banner relative rounded-xl flex justify-center items-center'
          >
            <div
              className='w-10/12 mx-auto backdrop-blur-md border border-white rounded-xl flex justify-center items-end'
              style={{
                height: "34.5rem",
              }}
            >
              <div className='w-11/12 mx-auto'>
                <Slider className='custom-carousel mx-auto' {...settings}>
                  {carouselData.map((model, index) => (
                    <div key={index} className='mx-auto mt-auto'>
                      <img
                        className='mx-auto'
                        style={{ maxHeight: "32rem" }}
                        src={model.image}
                        alt=''
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
