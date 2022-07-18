import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Icons";
import profilePicture from "../../../assets/Images/profile.png";
import { Dropdown, Menu } from "antd";

const NavbarSm = ({ loggedin }) => {
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
    <div className="navbarsm-width mr-auto my-14">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-pacifico text-2xl cursor-pointer">LOGO</div>

        {/* Menu */}
        <div className="w-7/12">
          <div className="flex justify-between items-center">
            <div className="w-8/12 flex justify-evenly items-center text-base font-normal leading-6">
              {loggedin && (
                <>
                  <Link to={"/campaigns"} className="cursor-pointer mr-2">
                    Find Camping
                  </Link>
                  <Link
                    to={"/creator-dashboard"}
                    className="cursor-pointer mr-2"
                  >
                    Dashboard
                  </Link>
                </>
              )}
              {!loggedin && (
                <div className="cursor-pointer mr-2">Band & Agencie</div>
              )}
              {!loggedin && <div className="cursor-pointer mr-2">Creator</div>}
              <div className="cursor-pointer mr-2">Studio</div>
              <div className="cursor-pointer mr-2">Insight</div>
              {!loggedin && <div className="cursor-pointer mr-2">About</div>}
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
                <div className="mr-5 cursor-pointer">
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <img src={profilePicture} alt="avatar" />
                  </Dropdown>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSm;
