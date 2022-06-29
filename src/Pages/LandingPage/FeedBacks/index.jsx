import React from "react";
import FeedBack from "./FeedBack";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import feedbackData from "./feedbackData.json";

const FeedBacks = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="page-width mx-auto my-20">
      <div className="mb-20 w-6/12 mx-auto">
        <h1 className="text-heading font-bold font-abhaya text-center px-28 mb-4">
          What the people think about us
        </h1>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="relative">
          <Slider {...settings}>
            {feedbackData.map((feedback) => (
              <FeedBack feedback={feedback} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeedBacks;
