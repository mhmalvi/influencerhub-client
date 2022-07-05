import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Icons";
import profilePicture from "../../../assets/Images/profile.png";

const NavbarSm = ({ loggedin }) => {
  return (
    <div className="navbarsm-width mr-auto my-14">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-pacifico text-2xl cursor-pointer">LOGO</div>

        {/* Menu */}
        <div className="w-7/12">
          <div className="flex justify-between items-center">
            <div className="w-8/12 flex justify-evenly items-center">
              {loggedin && (
                <>
                  <div className="cursor-pointer">Find Camping</div>
                  <div className="cursor-pointer">Dashboard</div>
                </>
              )}
              {!loggedin && (
                <div className="cursor-pointer">Band & Agencie</div>
              )}
              {!loggedin && <div className="cursor-pointer">Creator</div>}
              <div className="cursor-pointer">Studio</div>
              <div className="cursor-pointer">Insight</div>
              {!loggedin && <div className="cursor-pointer">About</div>}
            </div>
            {!loggedin && (
              <div className="flex justify-center items-center">
                <Link
                  to={"/login"}
                  className="mr-5 cursor-pointer text-black hover:text-black"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="btn-gradtext-white px-8 py-3 rounded-full cursor-pointer font-thin font-mulish"
                >
                  Sign up
                </Link>
              </div>
            )}
            {loggedin && (
              <div className="flex justify-center items-center">
                <Link to={"/login"} className="mr-5 cursor-pointer">
                  <Icons.Mail />
                </Link>
                <Link to={"/login"} className="mr-5 cursor-pointer">
                  <Icons.Notification />
                </Link>
                <Link to={"/find-campaign"} className="mr-5 cursor-pointer">
                  <img src={profilePicture} alt="" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSm;
