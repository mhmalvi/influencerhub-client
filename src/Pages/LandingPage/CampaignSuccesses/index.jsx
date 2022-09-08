import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Carousel } from "react-circular-carousel";
import "react-circular-carousel/dist/index.css";

const CampaignSuccesses = () => {
  const [activeImage, setActiveImage] = useState(0);
  // const [toggleImage, setToggleImage] = useState(false);
  const [imageNumbers, setImageNumbers] = useState([0, 1, 2, 3, 4]);
  // let imageNumber = [0, 1, 2, 3, 4];

  const models = [
    "https://mediaslide-europe.storage.googleapis.com/thetribe/news_pictures/2022/01/large-1643121976-1620c5431152c0d52c167a4537196963.jpg",
    "https://mediaslide-europe.storage.googleapis.com/thetribe/news_pictures/2022/01/large-1643121968-0f5883a7f36ecdb95154a743efdc8563.jpg",
    "https://mediaslide-europe.storage.googleapis.com/thetribe/news_pictures/2022/01/large-1643187369-181c52032623a5ba1623b3b94fbcf22c.jpg",
    "https://mediaslide-europe.storage.googleapis.com/thetribe/news_pictures/2022/01/large-1643121965-f7c40378613c06b1c6e6c38dc8f2a703.jpg",
    "https://mediaslide-europe.storage.googleapis.com/thetribe/news_pictures/2022/01/large-1643121979-f0e94780f559d1884167fc80cf3959a1.jpg",
  ];

  const handleNextImage = () => {
    const prevImageNumer = [...imageNumbers];
    let imageNumber = [];

    prevImageNumer.forEach((number) => {
      imageNumber.push(number - 1 < 0 ? 4 : number - 1);
    });
    setImageNumbers(imageNumber);
  };

  const handlePrevImage = () => {
    const prevImageNumer = [...imageNumbers];
    let imageNumber = [];

    prevImageNumer.forEach((number) => {
      imageNumber.push(number + 1 > 4 ? 0 : number + 1);
    });
    setImageNumbers(imageNumber);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="page-width mx-auto pb-36">
      <div>
        <h1 className="heading-section">Some of the best camping successes</h1>
      </div>

      {/* <div>
        <Slider {...settings}>
          <div
            className="rounded-3xl border-2 border-blue-500"
            style={{
              width: "238px",
              height: "389px",
            }}
          >
            <img
              className="rounded-3xl min-h-full min-w-full"
              src={models[imageNumbers[3]]}
              alt=""
            />
          </div>

          <div
            className="rounded-3xl border-2 border-blue-500 relative top-24"
            style={{
              width: "311.58px",
              height: "509.26px",
            }}
          >
            <img
              className="rounded-3xl min-h-full min-w-full transition-all delay-300"
              src={models[imageNumbers[2]]}
              alt=""
            />
          </div>

          <div
            className="rounded-3xl border-2 border-blue-500"
            style={{
              width: "238px",
              height: "389px",
            }}
          >
            <img
              className="rounded-3xl min-h-full min-w-full"
              src={models[imageNumbers[1]]}
              alt=""
            />
          </div>
          <div
            className="rounded-3xl border-2 border-blue-500 relative top-24"
            style={{
              width: "311.58px",
              height: "509.26px",
            }}
          >
            <img
              className="rounded-3xl min-h-full min-w-full transition-all delay-300"
              src={models[imageNumbers[2]]}
              alt=""
            />
          </div>

          <div
            className="rounded-3xl border-2 border-blue-500"
            style={{
              width: "238px",
              height: "389px",
            }}
          >
            <img
              className="rounded-3xl min-h-full min-w-full"
              src={models[imageNumbers[1]]}
              alt=""
            />
          </div>
        </Slider>
      </div> */}

      {/* <Carousel height={800} width={250} id={0}>
        <div
          className="rounded-3xl border-2 border-blue-500"
          style={{
            width: "238px",
            height: "389px",
          }}
        >
          <img
            className="rounded-3xl min-h-full min-w-full"
            src={models[imageNumbers[3]]}
            alt=""
          />
        </div>

        <div
          className="rounded-3xl border-2 border-blue-500 relative top-24"
          style={{
            width: "311.58px",
            height: "509.26px",
          }}
        >
          <img
            className="rounded-3xl min-h-full min-w-full transition-all delay-300"
            src={models[imageNumbers[2]]}
            alt=""
          />
        </div>

        <div
          className="rounded-3xl border-2 border-blue-500"
          style={{
            width: "238px",
            height: "389px",
          }}
        >
          <img
            className="rounded-3xl min-h-full min-w-full"
            src={models[imageNumbers[1]]}
            alt=""
          />
        </div>
      </Carousel> */}

      <div className="relative w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center gap-8">
          <div
            className="rounded-3xl border-2 border-blue-500"
            style={{
              width: "238px",
              height: "389px",
            }}
          >
            <img
              className="rounded-3xl min-h-full min-w-full"
              src={models[imageNumbers[3]]}
              alt=""
            />
          </div>

          <div
            className="rounded-3xl border-2 border-blue-500 relative top-24"
            style={{
              width: "311.58px",
              height: "509.26px",
            }}
          >
            <img
              className="rounded-3xl min-h-full min-w-full transition-all delay-300"
              src={models[imageNumbers[2]]}
              alt=""
            />
          </div>

          <div
            className="rounded-3xl border-2 border-blue-500"
            style={{
              width: "238px",
              height: "389px",
            }}
          >
            <img
              className="rounded-3xl min-h-full min-w-full"
              src={models[imageNumbers[1]]}
              alt=""
            />
          </div>
        </div>

        <div className="w-full mx-auto absolute top-28 flex justify-center items-center gap-8">
          <div
            className="rounded-3xl  border-2 border-blue-500"
            style={{
              width: "219.65px",
              height: "359px",
            }}
          >
            <img
              className="rounded-3xl min-h-full min-w-full"
              src={models[imageNumbers[4]]}
              alt=""
            />
          </div>

          <div
            className="rounded-3xl border-2 border-blue-500"
            style={{
              width: "280.83px",
              height: "459px",
            }}
          >
            <img
              className="rounded-3xl min-h-full min-w-full"
              src={models[imageNumbers[0]]}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-7xl flex justify-center items-center mt-60">
        <button className="text-white" onClick={handlePrevImage}>
          {"<"}
        </button>
        <button className="text-white" onClick={handleNextImage}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CampaignSuccesses;
