import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import profilePicture from "../../../assets/Images/profile.png";
import Icons from "../Icons";

const Navbar = ({ loggedin }) => {
  const [toggleSignup, setToggleSignup] = useState(false);

  const menu = (
    <Menu
      className="rounded-3xl top-2"
      items={[
        {
          icon: <Icons.Settings />,
          label: (
            <Link to={"/"} className="font-mulish leading-5">
              Account Setting
            </Link>
          ),
          key: "0",
        },
        {
          icon: <Icons.User />,
          label: (
            <Link to={"/"} className="font-mulish leading-5">
              Profile
            </Link>
          ),
          key: "1",
        },
        {
          icon: <Icons.Wallet />,
          label: (
            <Link to={"/"} className="font-mulish leading-5">
              Wallet
            </Link>
          ),
          key: "2",
        },
        {
          icon: <Icons.LogOut />,
          label: (
            <Link to={"/"} className="font-mulish leading-5">
              Log Out
            </Link>
          ),
          key: "3",
        },
      ]}
    />
  );

  return (
    <div className="page-width mx-auto px-28 py-14">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-pacifico text-2xl cursor-pointer">LOGO</div>

        {/* Menu */}
        <div className="w-7/12">
          <div className="flex justify-between items-center">
            <div className="w-8/12 flex justify-evenly items-center text-base font-normal leading-6">
              {loggedin && (
                <>
                  <Link
                    to={"/campaigns"}
                    className="cursor-pointer mr-2 text-black hover:text-black"
                  >
                    Find Camping
                  </Link>
                  <Link
                    to={"/creator-dashboard"}
                    className="cursor-pointer mr-2 text-black hover:text-black"
                  >
                    Dashboard
                  </Link>
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
              <div className="flex justify-center items-center  text-base font-normal leading-6">
                <Link
                  to={"/login"}
                  className="mr-5 cursor-pointer text-black hover:text-black"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className={`btn-grad text-white hover:text-white px-8 py-3 rounded-full cursor-pointer font-thin font-mulish`}
                  onMouseOver={() => setToggleSignup(!toggleSignup)}
                  onMouseOut={() => setToggleSignup(!toggleSignup)}
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
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <img src={profilePicture} alt="avatar" />
                  </Dropdown>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
