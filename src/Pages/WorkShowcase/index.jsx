import { Modal } from "antd";
import React, { useRef, useState } from "react";
import { BigPlayButton, Player } from "video-react";
import "video-react/dist/video-react.css";
import vidoPlay from "../../assets/Images/play-circle.png";
import workShowcaseBanner from "../../assets/Images/work-showcase.png";
import NavbarSm from "../../Components/Shared/Navbar/NavbarSm";

const WorkShowcase = () => {
  const [visible, setVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [socialMedia, setCampaignType] = useState(0);
  const player = useRef(null);

  const socialMediums = [
    { id: 0, title: "Facebook" },
    { id: 1, title: "Youtube" },
    { id: 2, title: "Instagram" },
    { id: 3, title: "Tiktolk" },
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
    <div className="page-width mx-auto">
      <div className="flex items-start">
        <div className="relative work-showcase-banner">
          <img
            className="work-showcase-banner min-h-screen"
            src={workShowcaseBanner}
            alt=""
          />
          <div className="min-h-full min-w-full absolute top-0 flex justify-center items-center">
            <div className="block w-59 px-3 py-36 rounded-xl bg-black bg-opacity-10 text-center">
              <h1 className="font-abhaya font-bold leading-10 text-2xl text-white">
                Get Results for Online Courses Uk. Find Quick Results from
                Multiple Sources.
              </h1>
            </div>
          </div>
        </div>

        <div className="ml-16 font-mulish">
          <div>
            <NavbarSm loggedin={true} />
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
                <BigPlayButton position="center" />
              </Player>
            </Modal>
          </div>

          <div className="ml-12">
            <div className="text-sm flex justify-start items-center mb-3">
              {socialMediums.map((type) => (
                <div
                  key={type.title}
                  className={`cursor-pointer text-sm font-mulish leading-5 mr-2.5 ${
                    socialMedia === type.id ? "font-normal" : "font-light"
                  }`}
                  onClick={() => setCampaignType(type.id)}
                >
                  {type.title}
                </div>
              ))}
            </div>

            <div
              className="flex items-start overflow-y-scroll"
              style={{
                height: "calc(100vh - 180px)",
              }}
            >
              <div className="w-59">
                <div
                  className="relative cursor-pointer my-6"
                  onClick={() => {
                    showModal();
                    setVideoUrl(
                      "https://static.videezy.com/system/resources/previews/000/000/150/original/waterdrop.mp4"
                    );
                  }}
                >
                  <video
                    className="w-full rounded-2xl"
                    src="https://static.videezy.com/system/resources/previews/000/000/150/original/waterdrop.mp4"
                  ></video>
                  <img
                    className="absolute bottom-4 left-4"
                    src={vidoPlay}
                    alt=""
                  />
                </div>
                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/C63qS0S/Rectangle-6590.jpg"
                    alt=""
                  />
                </div>
                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/C63qS0S/Rectangle-6590.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-59 mx-6">
                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/9s1rT30/Post.png"
                    alt=""
                  />
                </div>

                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/xHyXWbp/Post-1.png"
                    alt=""
                  />
                </div>

                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/9s1rT30/Post.png"
                    alt=""
                  />
                </div>

                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/xHyXWbp/Post-1.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="w-59">
                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/nscHQDH/Post-2.png"
                    alt=""
                  />
                </div>

                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/2YWbPdw/Post-3.png"
                    alt=""
                  />
                </div>

                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/n3c9j7N/Post-4.png"
                    alt=""
                  />
                </div>

                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/xHyXWbp/Post-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShowcase;
