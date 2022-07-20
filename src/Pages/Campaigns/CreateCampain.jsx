import React, { useState } from "react";
import Icons from "../../Components/Shared/Icons";
import Navbar from "../../Components/Shared/Navbar";
import coverImage from ".././../assets/Images/dashboard-image.jpg";
import { Menu, Dropdown, Space } from "antd";

const CreateCampain = () => {
  const [activeSection, setActiveSection] = useState(0);

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a
              className='w-66 text-black hover:text-black'
              href='https://www.antgroup.com'
            >
              1st menu item
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a
              className='w-66 text-black hover:text-black'
              href='https://www.aliyun.com'
            >
              2nd menu item
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <div className='page-width mx-auto'>
      <div>
        <Navbar />
      </div>
      <div className='w-full px-46 bg-red-100 flex'>
        <div className='w-66 flex flex-col items-start'>
          <div>
            <h1 className='font-abhaya text-4.5xl font-bold leading-12'>
              Creat camping
            </h1>
            <p className='font-mulish font-light text-base leading-5 text-light-gray pr-2'>
              Fill in the camping data. It will take a couple of minutes. All
              you need information submit.
            </p>
          </div>
          <div className='flex items-center -ml-3'>
            <div className='flex flex-col justify-between items-center'>
              <div
                className={`w-3 h-3 mb-4 ${
                  activeSection === 0
                    ? "bg-blue-500"
                    : "border-gray-400 bg-white"
                } rounded-full cursor-pointer`}
                onClick={() => setActiveSection(0)}
              ></div>
              <div>
                <hr
                  className='inline-block bg-gray-400 w-10 rotate-90'
                  style={{ height: "1.2px" }}
                />
              </div>
              <div
                className={`w-3 h-3 border ${
                  activeSection === 1
                    ? "bg-blue-500"
                    : "border-gray-400 bg-white"
                } rounded-full mt-6 mb-4 cursor-pointer`}
                onClick={() => setActiveSection(1)}
              ></div>
              <div>
                <hr
                  className='inline-block bg-gray-400 w-10 rotate-90'
                  style={{ height: "1.2px" }}
                />
              </div>
              <div
                className={`w-3 h-3 border ${
                  activeSection === 2
                    ? "bg-blue-500"
                    : "border-gray-400 bg-white"
                } rounded-full mt-6 cursor-pointer`}
                onClick={() => setActiveSection(2)}
              ></div>
            </div>
            <div>
              <img
                className='w-60 h-74 mt-4 mb-8'
                src='https://i.ibb.co/PjXk05V/unsplash-q19-HE3i7j-JI.jpg'
                alt=''
              />
            </div>
          </div>
          <p className='font-mulish font-light text-base leading-5 text-light-gray pr-2'>
            Fill in the camping data. It will take a couple of minutes. All you
            need information submit.
          </p>
        </div>

        {/* Form */}
        <div>
          <div>
            <div>
              <div>
                <h4 className='text-base font-semibold text-light-gray leading-6'>
                  Title
                </h4>
                <input
                  type='text'
                  placeholder='ABCDEFGHIJKLMNOP'
                  className='w-66 py-1 px-4 border-b border-gray-400 bg-transparent outline-none'
                />
              </div>
              <div className='mt-5'>
                <h4 className='text-base font-semibold text-light-gray leading-6'>
                  Description
                </h4>
                <textarea
                  placeholder='ABCDEFGHIJKLMNOP'
                  className='w-66 h-8 py-1 px-4 border-b border-gray-400 bg-transparent outline-none'
                />
              </div>
              <div className='mt-5'>
                <h4 className='text-base font-semibold text-light-gray leading-6'>
                  Attached
                </h4>
                <label
                  htmlFor='attached'
                  className='flex justify-between items-center w-66 px-4 cursor-pointer border-b border-gray-400 bg-transparent'
                >
                  <p className='m-0 py-1'>PDF OR JPG</p>
                  <Icons.DoubleClip className='p-1 bg-white shadow-md text-black w-5 rounded' />
                </label>
                <input id='attached' hidden type='file' />
              </div>

              <div className='mt-5'>
                <h4 className='text-base font-semibold text-light-gray leading-6'>
                  Campaign Category
                </h4>
                <Dropdown
                  className=' py-1 px-4 border-b border-gray-400 bg-transparent'
                  overlay={menu}
                  trigger={["click"]}
                >
                  <a
                    className='text-black hover:text-black'
                    href='/'
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space className='w-38 flex justify-between items-center px-4 pb-2 rounded-br-xl border-gray-200 border-b border-r'>
                      <p className='m-0 font-light text-sm'>Influencer</p>
                      <Icons.DownArror className='ml-auto' />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampain;
