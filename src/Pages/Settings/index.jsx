import { Upload } from "antd";
import { useState } from "react";
import Icons from "../../Components/Shared/Icons";
import Navbar from "../../Components/Shared/Navbar";
import BusinessInformation from "./BusinessInformation";
import Notification from "./Notification";
import Profile from "./Profile";
import Security from "./Security";
import SocialSetiing from "./SocialField";
import Verification from "./Verification";

const Settings = () => {
  const [fileList, setFileList] = useState([]);
  const [activeOption, setActiveOption] = useState("profile");

  const settingsOptions = [
    {
      id: "profile",
      title: "Profile",
      component: <Profile />,
    },
    {
      id: "social",
      title: "Social Field",
      component: <SocialSetiing />,
    },
    {
      id: "business",
      title: "Business Information",
      component: <BusinessInformation />,
    },
    {
      id: "notification",
      title: "Notification",
      component: <Notification />,
    },
    {
      id: "verification",
      title: "Verification",
    },
    {
      id: "security",
      title: "Security",
    },
  ];

  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    newFileList = fileList.slice(-2);

    newFileList = fileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }

      return file;
    });
    setFileList(newFileList);
  };

  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: handleChange,
    multiple: true,
  };

  return (
    <div className="page-width mx-auto font-mulish">
      <div className="ml-4">
        <Navbar loggedin={true} />
      </div>
      <div className="mx-30">
        <div>
          <img
            className="shadow-md rounded-tl-2xl rounded-tr-2xl"
            src="https://i.ibb.co/k6kMjq0/Rectangle-6611.jpg"
            alt=""
          />
          <div className="ml-auto mr-4 w-4 cursor-pointer -mt-8">
            <Upload {...props} fileList={fileList}>
              <Icons.Edit className="w-4" />
            </Upload>
          </div>
        </div>
        <div className="w-29 h-29 ml-16 -mt-16 flex flex-col justify-center items-center">
          <img
            className="rounded-full"
            src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
            alt=""
          />
          <div className="-mt-7">
            <Upload {...props} fileList={fileList}>
              <Icons.Edit className="cursor-pointer" />
            </Upload>
          </div>
        </div>
        <div className="w-full bg-white shadow-md -mt-16 pb-10">
          <div className="w-60 pt-20 px-24 pb-24 flex justify-between items-start">
            {/* Profile Details  */}
            <div className="">
              {settingsOptions.map((option) => (
                <h4
                  key={option.id}
                  className={`${
                    activeOption === option.id ? "text-2xl" : "text-base"
                  } font-normal leading-8 cursor-pointer w-40`}
                  onClick={() => setActiveOption(option.id)}
                >
                  {option.title}
                </h4>
              ))}
            </div>
            <div>
              <Icons.VerticalBorderStock className="mx-20" />
            </div>
            {/*  Settings  */}
            {activeOption === "profile" && <Profile />}
            {activeOption === "social" && <SocialSetiing />}
            {activeOption === "business" && <BusinessInformation />}
            {activeOption === "notification" && <Notification />}
            {activeOption === "verification" && <Verification />}
            {activeOption === "security" && <Security />}
          </div>
          <div className="w-full">
            <img
              className="w-50 h-24 ml-16 -mt-20 rounded-xl bg-red-300"
              src="https://i.ibb.co/mv3PtqF/Rectangle-6616.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
