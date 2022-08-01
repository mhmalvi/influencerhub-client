import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Icons from "../../../Components/Shared/Icons";

const CompainesMobile = () => {
  const settings = {
    // className: "center",
    // centerMode: true,
    // infinite: true,
    // slidesToShow: 3,
    // speed: 500,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
  };

  const companies = [
    { id: 0, icon: <Icons.Netflix className="h-28 px-6 text-gray-400" /> },
    { id: 1, icon: <Icons.Airbnb className="h-28 px-6 text-gray-400" /> },
    {
      id: 2,
      icon: <Icons.FacebookLarge className="h-28 px-4 text-gray-400" />,
    },
    { id: 3, icon: <Icons.Amazon className="h-28 px-6 text-gray-400" /> },
    { id: 4, icon: <Icons.Grab className="h-24 px-6 text-gray-400" /> },
  ];

  return (
    <div className="pt-20">
      <div>
        <div className="w-64 px-2 mx-auto">
          <h1 className="text-2.5xl font-bold font-abhaya text-center leading-8">
            Trusted by 5,000+ Companies Worldwide
          </h1>
        </div>
        <Slider className="w-full mx-auto flex items-center" {...settings}>
          {companies.map((company, id) => company.icon)}
        </Slider>
      </div>
    </div>
  );
};

export default CompainesMobile;
