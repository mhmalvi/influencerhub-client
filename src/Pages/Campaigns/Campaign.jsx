import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../Components/Shared/Icons";

const Campaingn = () => {
  return (
    <div to={"/campaign/1"} className='flex items-center ml-3.5 mb-5'>
      <Link to={"/campaign/1"} className='mr-6'>
        <img
          className='w-48 h-50 rounded-tl-3xl rounded-bl-3xl'
          src='https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
      </Link>
      <div className='font-mulish flex'>
        <Link to={"/campaign/1"}>
          <div className='pr-32 text-black hover:text-black'>
            <h3 className='text-2xl font-normal'>
              he popularity of this megastar fashion house is evident{" "}
            </h3>
            <p className='text-xs font-light mb-1'>
              Please Share your Past Work of home Page Design. Must Share some
              Figma Projects Links.
            </p>
          </div>
          <div className='text-sm font-normal text-blue-400 mt-2'>
            <Link className='mr-4' to={"/"}>
              Tik Tok
            </Link>
            <Link className='mr-4' to={"/"}>
              Facebook
            </Link>
            <Link className='mr-4' to={"/"}>
              Youtube
            </Link>
            <Link to={"/"}>Instagram</Link>
          </div>
        </Link>
        <div className='pr-3'>
          <div className='text-sm font-normal flex items-center mb-4'>
            <Icons.People className='text-3xl mr-2' />
            <span className='mr-1'>30</span>
            <h4 className='m-0'>Creator</h4>
          </div>
          <div className='text-sm font-normal flex items-center mb-4'>
            <Icons.Clock className='text-3xl mr-2' />
            <h4 className='m-0'>Deadline</h4>
          </div>

          <Link
            to={"/bid/1"}
            className='py-2 px-8 font-light bg-dark-blue text-white hover:text-white
             rounded-lg'
          >
            Bid
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Campaingn;
