import React, { useRef, useState } from "react";
import { BigPlayButton, Player } from "video-react";
import "video-react/dist/video-react.css";
import vidoPlay from "../../../assets/Images/play-circle.png";
import Icons from "../../../Components/Shared/Icons";
import Navbar from "../../../Components/Shared/Navbar";
import { Modal } from "antd";

const AcademicVideos = () => {
  const [activeOption, setActiveOption] = useState("all");
  const [visible, setVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const player = useRef(null);

  const settingsOptions = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "gamers",
      title: "Gamers",
    },
    {
      id: "sports",
      title: "Sports and Fitness",
    },
    {
      id: "bloggers",
      title: "Bloggers/Vloggers",
    },
    {
      id: "photographers",
      title: "Photographers",
    },
    {
      id: "travel",
      title: "Travel",
    },
    {
      id: "beauty",
      title: "Beauty",
    },
    {
      id: "fashion",
      title: "Fashion",
    },
    {
      id: "parenting",
      title: "Parenting",
    },
  ];

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const pause = (r) => {
    r.actions.pause();
  };

  return (
    <div className='page-width mx-auto'>
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className='mx-28 flex items-start'>
        <div className='relative work-showcase-banner'>
          <h2
            className='text-base font-semibold font-mulish leading-6'
            style={{
              color: "#151D48",
            }}
          >
            Category
          </h2>
          <Icons.BottomBorder className='my-4 -ml-9' />

          <div className=''>
            {settingsOptions.map((option) => (
              <h4
                key={option.id}
                className={`${
                  activeOption === option.id
                    ? "text-2xl font-normal leading-5"
                    : "text-base font-light leading-8"
                } font-mulish cursor-pointer w-40 mt-2.5`}
                onClick={() => setActiveOption(option.id)}
              >
                {option.title}
              </h4>
            ))}
          </div>
        </div>

        <div>
          <Modal
            visible={visible}
            footer={null}
            onCancel={() => hideModal()}
            afterClose={() => pause(player.current)}
            bodyStyle={{ padding: 0 }}
          >
            <Player playsInline autoPlay src={videoUrl} ref={player}>
              <BigPlayButton position='center' />
            </Player>
          </Modal>
        </div>

        <div className='ml-16 font-mulish'>
          <div className='ml-12'>
            <div
              className='flex items-start overflow-y-scroll pr-4'
              style={{
                height: "calc(100vh - 180px)",
              }}
            >
              <div className='w-59'>
                <div className='my-6 rounded-2xl hover:bg-black hover:bg-opacity-80 hover:text-white shadow-sm'>
                  <div
                    className='relative cursor-pointer'
                    onClick={() => {
                      showModal();
                      setVideoUrl(
                        "https://static.videezy.com/system/resources/previews/000/000/150/original/waterdrop.mp4"
                      );
                    }}
                  >
                    <img
                      className='w-full'
                      src='https://i.ibb.co/sQc824P/Share-Image-3.png'
                      alt=''
                    />
                    <img
                      className='absolute bottom-20 left-24 w-12'
                      src={vidoPlay}
                      alt=''
                    />
                  </div>
                  <p className='text-base leading-6 font-semibold font-mulish py-3 px-4'>
                    More than thousands of customizable
                  </p>
                </div>

                <div className='my-6 rounded-2xl hover:bg-black hover:bg-opacity-80 hover:text-white shadow-sm'>
                  <img
                    className='w-full rounded-tl-2xl rounded-tr-2xl'
                    src='https://i.ibb.co/tqcm46X/Share-Image.png'
                    alt=''
                  />
                  <p className='text-base leading-6 font-semibold font-mulish py-3 px-4'>
                    More than thousands of customizable
                  </p>
                </div>
              </div>
              <div className='w-59 mx-6'>
                <div className='my-6 rounded-2xl hover:bg-black hover:bg-opacity-80 hover:text-white shadow-sm'>
                  <img
                    className='w-full rounded-tl-2xl rounded-tr-2xl'
                    src='https://i.ibb.co/KwCdnKB/Share-Image-2.png'
                    alt=''
                  />
                  <p className='text-base leading-6 font-semibold font-mulish py-3 px-4'>
                    More than thousands of customizable
                  </p>
                </div>

                <div className='my-6 rounded-2xl hover:bg-black hover:bg-opacity-80 hover:text-white shadow-sm'>
                  <img
                    className='w-full rounded-2xl'
                    src='https://i.ibb.co/2YWbPdw/Post-3.png'
                    alt=''
                  />
                  <p className='text-base leading-6 font-semibold font-mulish py-3 px-4'>
                    More than thousands of customizable
                  </p>
                </div>

                <div className='my-6 rounded-2xl hover:bg-black hover:bg-opacity-80 hover:text-white shadow-sm'>
                  <img
                    className='w-full rounded-2xl'
                    src='https://i.ibb.co/cv0JRLT/jess-bailey-n-Oe-Vi8-Ds-N8-U-unsplash-1.png'
                    alt=''
                  />
                  <p className='text-base leading-6 font-semibold font-mulish py-3 px-4'>
                    More than thousands of customizable
                  </p>
                </div>
              </div>

              <div className='w-59 '>
                <div className='my-6 rounded-2xl hover:bg-black hover:bg-opacity-80 hover:text-white shadow-sm'>
                  <img
                    className='w-full rounded-tl-2xl rounded-tr-2xl'
                    src='https://i.ibb.co/tqcm46X/Share-Image.png'
                    alt=''
                  />
                  <p className='text-base leading-6 font-semibold font-mulish py-3 px-4'>
                    More than thousands of customizable
                  </p>
                </div>

                <div className='my-6 rounded-2xl hover:bg-black hover:bg-opacity-80 hover:text-white shadow-sm'>
                  <img
                    className='w-full rounded-tl-2xl rounded-tr-2xl'
                    src='https://i.ibb.co/tqcm46X/Share-Image.png'
                    alt=''
                  />
                  <p className='text-base leading-6 font-semibold font-mulish py-3 px-4'>
                    More than thousands of customizable
                  </p>
                </div>

                <div className='my-6 rounded-2xl hover:bg-black hover:bg-opacity-80 hover:text-white shadow-sm'>
                  <img
                    className='w-full rounded-tl-2xl rounded-tr-2xl'
                    src='https://i.ibb.co/tqcm46X/Share-Image.png'
                    alt=''
                  />
                  <p className='text-base leading-6 font-semibold font-mulish py-3 px-4'>
                    More than thousands of customizable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicVideos;
