import React, { useState } from "react";
import Icons from "../../Components/Shared/Icons";
import Navbar from "../../Components/Shared/Navbar";

const Blog = () => {
  const [activeOption, setActiveOption] = useState("all");

  const settingsOptions = [
    {
      id: "all",
      title: "All",
      //   component: <Profile />,
    },
    {
      id: "gamers",
      title: "Gamers",
      //   component: <SocialSetiing />,
    },
    {
      id: "sports",
      title: "Sports and Fitness",
      //   component: <BusinessInformation />,
    },
    {
      id: "bloggers",
      title: "Bloggers/Vloggers",
      //   component: <Notification />,
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

  return (
    <div className="page-width mx-auto">
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className="mx-28 flex items-start">
        <div className="relative work-showcase-banner">
          <h2
            className="text-base font-semibold font-mulish leading-6"
            style={{
              color: "#151D48",
            }}
          >
            Category
          </h2>
          <Icons.BottomBorder className="my-4 -ml-9" />

          <div className="">
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

        <div className="ml-16 font-mulish">
          <div className="ml-12">
            <div
              className="flex items-start overflow-y-scroll"
              style={{
                height: "calc(100vh - 180px)",
              }}
            >
              <div className="w-59">
                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/4FqypkV/P-03-1.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h2 className="text-base leading-5 font-normal font-mulish mt-2.5 mb-1.5">
                      CLINIQUE for It Online Learning
                    </h2>
                    <div className="flex items-center">
                      <p className="m-0 text-xs leading-5 font-mulish font-light">
                        15.1. 2022
                      </p>
                      <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                        Digital
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/vXN7Dmh/bryan-garces-fhwcv-LL8xw-I-unsplash-1.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h2 className="text-base leading-5 font-normal font-mulish mt-2.5 mb-1.5">
                      CLINIQUE for It Online Learning
                    </h2>
                    <div className="flex items-center">
                      <p className="m-0 text-xs leading-5 font-mulish font-light">
                        15.1. 2022
                      </p>
                      <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                        Digital
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-59 mx-6">
                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/4FqypkV/P-03-1.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h2 className="text-base leading-5 font-normal font-mulish mt-2.5 mb-1.5">
                      CLINIQUE for It Online Learning
                    </h2>
                    <div className="flex items-center">
                      <p className="m-0 text-xs leading-5 font-mulish font-light">
                        15.1. 2022
                      </p>
                      <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                        Digital
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/2YWbPdw/Post-3.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h2 className="text-base leading-5 font-normal font-mulish mt-2.5 mb-1.5">
                      CLINIQUE for It Online Learning
                    </h2>
                    <div className="flex items-center">
                      <p className="m-0 text-xs leading-5 font-mulish font-light">
                        15.1. 2022
                      </p>
                      <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                        Digital
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/cv0JRLT/jess-bailey-n-Oe-Vi8-Ds-N8-U-unsplash-1.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h2 className="text-base leading-5 font-normal font-mulish mt-2.5 mb-1.5">
                      CLINIQUE for It Online Learning
                    </h2>
                    <div className="flex items-center">
                      <p className="m-0 text-xs leading-5 font-mulish font-light">
                        15.1. 2022
                      </p>
                      <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                        Digital
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-59 pr-8">
                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/cv0JRLT/jess-bailey-n-Oe-Vi8-Ds-N8-U-unsplash-1.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h2 className="text-base leading-5 font-normal font-mulish mt-2.5 mb-1.5">
                      CLINIQUE for It Online Learning
                    </h2>
                    <div className="flex items-center">
                      <p className="m-0 text-xs leading-5 font-mulish font-light">
                        15.1. 2022
                      </p>
                      <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                        Digital
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/5Yqv6Hy/jonny-caspari-wsv-CC6-Uy-Kjs-unsplash-1.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h2 className="text-base leading-5 font-normal font-mulish mt-2.5 mb-1.5">
                      CLINIQUE for It Online Learning
                    </h2>
                    <div className="flex items-center">
                      <p className="m-0 text-xs leading-5 font-mulish font-light">
                        15.1. 2022
                      </p>
                      <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                        Digital
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-6">
                  <img
                    className="w-full rounded-2xl"
                    src="https://i.ibb.co/4FqypkV/P-03-1.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h2 className="text-base leading-5 font-normal font-mulish mt-2.5 mb-1.5">
                      CLINIQUE for It Online Learning
                    </h2>
                    <div className="flex items-center">
                      <p className="m-0 text-xs leading-5 font-mulish font-light">
                        15.1. 2022
                      </p>
                      <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                        Digital
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
