import React from "react";
import Slider from "react-slick";
// import Icons from "../../../Components/Shared/Icons";

const CompainesMobile = () => {
  // const companies = [
  //   <Icons.Google />,
  //   <Icons.Netflix />,
  //   <Icons.Airbnb />,
  //   <Icons.Amazon />,
  //   <Icons.Amazon />,
  //   <Icons.Grab />,
  // ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="page-width-mobile mx-auto pt-20 pb-20">
      <div className="w-8/12 mx-auto">
        <div>
          <h1 className="text-2.5xl font-bold font-abhaya text-center mb-12 leading-8">
            Trusted by 5,000+ Companies Worldwide
          </h1>
        </div>
        <Slider {...settings}>
          {/* <div className="mx-6">
            <Icons.Netflix />
          </div>
          <Icons.Airbnb className="mx-6" />
          <Icons.Amazon className="mx-6" />
          <Icons.FacebookLarge className="mx-6" />
          <Icons.Grab className="mx-6" /> */}
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CompainesMobile;
