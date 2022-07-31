import React from "react";
import Icons from "../Icons";

const NavbarMobile = () => {
  return (
    <div>
      <div className="flex justify-between items-center m-6">
        <h1
          className="font-redressed text-3xl font-normal"
          style={{
            lineHeight: "38px",
          }}
        >
          Logo
        </h1>
        <div>
          <Icons.HamBurger className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
