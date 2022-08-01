import React from "react";
import FeedBack from "./FeedBack";
import Slider from "react-slick";
import feedbackData from "./feedbackData.json";

const FeedBackMobile = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" mx-auto my-20">
      <div className="w-58 mb-6 mx-auto">
        <h1 className="text-2.5xl font-bold leading-7 text-center font-abhaya">
          What the people think about us
        </h1>
      </div>
      <div className="w-10/12  mx-auto">
        <div className="relative">
          <Slider className="feedback" {...settings}>
            {feedbackData.map((feedback, index) => (
              <FeedBack key={index} feedback={feedback} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeedBackMobile;
