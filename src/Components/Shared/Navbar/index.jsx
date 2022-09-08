import { Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { themeSelector } from "../../utils/selector";
import { handleSignUpAudio } from "../../utils/sounds";
import Icons from "../Icons";
import { brandMenu, creatorMenu, insightMenu } from "./Menus";

const Navbar = ({ loggedin }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [toggleActiveSection, setToggleActiveSection] = useState(false);
  const [toggleSignup, setToggleSignup] = useState(false);

  useEffect(() => {
    setActiveSection(localStorage.getItem("activeSection"));
  }, [toggleActiveSection]);

  const handleActiveSection = (item) => {
    setToggleActiveSection(!toggleActiveSection);
    localStorage.setItem("activeSection", item);
  };

  return (
    <div className="page-width mx-auto px-28  font-mulish">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="cursor-pointer">
          <Icons.BrandLogo />
        </Link>

        {/* Menu */}
        <div
          className=" ml-auto"
          style={{
            width: "80%",
          }}
        >
          <div className="text-lg font-bold leading-6 flex items-center">
            <div
              className={`py-12 ${
                activeSection === "home" && "active-item-bg"
              } mr-3`}
            >
              <Link
                to={"/"}
                className={`cursor-pointer px-0.5 hover:text-current text-xl font-extrabold text-center leading-6 ${
                  activeSection === "home" ? "active-item" : "text-white"
                }`}
                onClick={() => handleActiveSection("home")}
              >
                Home
              </Link>
            </div>
            <div
              className={`py-12 ${
                activeSection === "brand_agencies" && "active-item-bg"
              } mr-3`}
            >
              <Dropdown overlay={brandMenu} trigger={["click"]}>
                <div
                  className={`cursor-pointer px-0.5 ${
                    activeSection === "brand_agencies"
                      ? "active-item"
                      : "text-white"
                  }`}
                  onClick={() => handleActiveSection("brand_agencies")}
                >
                  Brand & Agencies
                </div>
              </Dropdown>
            </div>

            <div
              className={`py-12 ${
                activeSection === "creator" && "active-item-bg"
              } mr-3`}
            >
              <Dropdown overlay={creatorMenu} trigger={["click"]}>
                <div
                  className={`cursor-pointer px-0.5 ${
                    activeSection === "creator" ? "active-item" : "text-white"
                  }`}
                  onClick={() => handleActiveSection("creator")}
                >
                  Creator
                </div>
              </Dropdown>
            </div>

            <div
              className={`py-12 ${
                activeSection === "studio" && "active-item-bg"
              } mr-3`}
            >
              <Link
                to={"/studio"}
                className={`cursor-pointer px-0.5 ${themeSelector}-text hover:text-current ${
                  activeSection === "studio" ? "active-item" : "text-white"
                }`}
                onClick={() => handleActiveSection("studio")}
              >
                Studio
              </Link>
            </div>

            <div
              className={`py-12 ${
                activeSection === "insight" && "active-item-bg"
              } mr-3`}
            >
              <Dropdown overlay={insightMenu} trigger={["click"]}>
                <div
                  className={`cursor-pointer px-0.5 ${
                    activeSection === "insight" ? "active-item" : "text-white"
                  }`}
                  onClick={() => handleActiveSection("insight")}
                >
                  Insight
                </div>
              </Dropdown>
            </div>
            <div
              className={`py-12 ${
                activeSection === "about" && "active-item-bg"
              } mr-3`}
            >
              <div
                className={`cursor-pointer px-0.5 ${
                  activeSection === "about" ? "active-item" : "text-white"
                }`}
                onClick={() => handleActiveSection("about")}
              >
                About
              </div>
            </div>
            <div className="flex justify-center items-center text-lg font-bold leading-6 ml-4">
              <div
                className={`py-12 mr-5 ${
                  activeSection === "login" && "active-item-bg"
                }`}
              >
                <Link
                  to={"/login"}
                  className={`px-0.5 cursor-pointer  ${themeSelector}-text hover:text-current ${
                    activeSection === "login" ? "active-item" : "text-white"
                  }`}
                  onClick={() => handleActiveSection("login")}
                >
                  Login
                </Link>
              </div>

              <div
                className={`py-12 mr-5 ${
                  activeSection === "login" && "active-item-bg"
                }`}
              >
                <Link
                  to={"/signup"}
                  className={`border border-white text-xl font-extrabold text-white hover:text-white px-8 py-3 rounded-full cursor-pointer hover:btn-grad`}
                  onMouseOver={() => {
                    setToggleSignup(!toggleSignup);
                  }}
                  onMouseOut={() => setToggleSignup(!toggleSignup)}
                  onClick={handleSignUpAudio}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          {/* <div
            className={`flex justify-between items-center ${themeSelector}-text`}
          >
            <div className=" flex justify-evenly items-center text-lg font-bold leading-6">
              {loggedin && (
                <>
                  <Link to={"/campaigns"} className="cursor-pointer mr-2">
                    Find Camping
                  </Link>
                  <Link
                    to={"/creator-dashboard"}
                    className="cursor-pointer mr-2 "
                  >
                    Dashboard
                  </Link>
                </>
              )}
              {!loggedin && (
                <>
                  <Link to={"/"} className="cursor-pointer mr-2">
                    Home
                  </Link>
                  <Dropdown overlay={brandMenu} trigger={["click"]}>
                    <div className="cursor-pointer">Brand & Agencies</div>
                  </Dropdown>
                </>
              )}
              {!loggedin && (
                <>
                  <Dropdown overlay={creatorMenu} trigger={["click"]}>
                    <div className="cursor-pointer">Creator</div>
                  </Dropdown>
                </>
              )}
              <Link
                to={"/studio"}
                className={`cursor-pointer  ${themeSelector}-text hover:text-current`}
              >
                Studio
              </Link>
              <Dropdown overlay={insightMenu} trigger={["click"]}>
                <div className="cursor-pointer">Insight</div>
              </Dropdown>
              {!loggedin && <div className="cursor-pointer">About</div>}
            </div>
            {!loggedin && (
              <div className="flex justify-center items-center text-lg font-bold leading-6">
                <Link
                  to={"/login"}
                  className={`mr-5 cursor-pointer  ${themeSelector}-text hover:text-current`}
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className={`border border-white text-xl font-extrabold text-white hover:text-white px-8 py-3 rounded-full cursor-pointer`}
                  onMouseOver={() => {
                    setToggleSignup(!toggleSignup);
                  }}
                  onMouseOut={() => setToggleSignup(!toggleSignup)}
                  onClick={handleSignUpAudio}
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
                <Link to={"/find-campaign"} className="cursor-pointer">
                  <Dropdown overlay={profileMenu} trigger={["click"]}>
                    <img src={profilePicture} alt="avatar" />
                  </Dropdown>
                </Link>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
