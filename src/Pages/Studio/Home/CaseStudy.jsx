import React, { useRef, useState } from "react";
import { Modal } from "antd";
import { BigPlayButton, Player } from "video-react";
import vidoPlay from "../../../assets/Images/play-rounded-button-blue.png";

const CaseStudy = () => {
  const [visible, setVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const player = useRef(null);

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
      <div className='mx-28 flex items-center'>
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
        <div className='w-7/12'>
          <div className='rounded-3xl'>
            <div
              className='relative cursor-pointer my-6'
              onClick={() => {
                showModal();
                setVideoUrl(
                  "https://static.videezy.com/system/resources/previews/000/000/150/original/waterdrop.mp4"
                );
              }}
            >
              <img
                className='min-w-full min-h-full rounded-3xl'
                src='https://i.ibb.co/BgHDgQJ/unsplash-bzq-U01v-G54.png'
                alt='Banner'
              />
              <img
                className='absolute bottom-1/2 left-64'
                src={vidoPlay}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='w-5/12'>
          <div className='ml-10'>
            <h3
              className='font-bold font-abhaya leading-10'
              style={{ fontSize: "25px" }}
            >
              WE HAVE PRIORITY FOR CAN CREATE DREAM HOME DESIGN
            </h3>
            <p className='mt-6 font-light text-base leading-5 font-mulish'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
