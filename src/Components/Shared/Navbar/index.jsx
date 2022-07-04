import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleSignup, setToggleSignup] = useState(false);

  return (
    <div className="page-width mx-auto px-28 my-14">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-pacifico text-2xl cursor-pointer">LOGO</div>

        {/* Menu */}
        <div className="w-7/12">
          <div className="flex justify-between items-center">
            <div className="w-8/12 flex justify-around items-center">
              <div className="cursor-pointer">Band & Agencie</div>
              <div className="cursor-pointer">Creator</div>
              <div className="cursor-pointer">Studio</div>
              <div className="cursor-pointer">Insight</div>
              <div className="cursor-pointer">About</div>
            </div>
            <div className="flex justify-center items-center">
              <Link to={"/login"} className="mr-5 cursor-pointer">
                Login
              </Link>
              <Link
                to={"/signup"}
                className={`${
                  toggleSignup ? "btn-grad" : "btn-grad-reverse"
                } text-white px-8 py-3 rounded-full cursor-pointer font-thin font-mulish`}
                onClick={() => setToggleSignup(!toggleSignup)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
