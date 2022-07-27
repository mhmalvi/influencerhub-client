import React, { useState } from "react";
import Icons from "../../../Components/Shared/Icons";
import deleteBox from "../../../assets/Images/delete-box.png";

const Message = () => {
  const [popupDelete, setPopupDelete] = useState(false);
  return (
    <>
      <div className='relative flex mr-auto px-2 mb-2'>
        <div className='flex flex-col items-center'>
          <img
            className='w-6 h-6 mx-2 rounded-full'
            src='https://i.ibb.co/Z18pJLT/Ellipse-114.png'
            alt=''
          />
          <div>
            <Icons.ThreeDots
              className='mt-1.5 cursor-pointer'
              onClick={() => setPopupDelete(!popupDelete)}
              style={{
                zIndex: 9999,
              }}
            />
          </div>
        </div>
        <div className='text-xs w-9/12'>
          <p className='rounded-md border border-gray-600 p-2 font-normal mb-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
            mollis leo proin turpis.
          </p>
          <span className='text-gray-400'>10:15 pm</span>
        </div>

        {/* <div
           className='absolute top-0.5 left-3 delete-message-wrapper w-38 h-14'
          style={{
            zIndex: 1,
          }}
        ></div> */}
        {popupDelete && (
          <img className='absolute top-0.5 left-3' src={deleteBox} alt='' />
        )}
        
      </div>
    </>
  );
};

export default Message;
