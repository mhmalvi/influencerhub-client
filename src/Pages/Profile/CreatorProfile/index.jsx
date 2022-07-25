import React from "react";
import Navbar from "../../../Components/Shared/Navbar";
import AgeGraph from "./AgeGraph";
import FollowersGraph from "./FollowersGraph";
import GenderGraph from "./GenderGraph";
import ViewsGraph from "./ViewsGraph";

const CreatorProfile = () => {
  const data = [
    {
      name: "",
      Posts: 4000,
      Views: 2400,
      amt: 2400,
    },
    {
      name: "Week-7",
      Posts: 4000,
      Views: 2400,
      amt: 2400,
    },
    {
      name: "Week-6",
      Posts: 3000,
      Views: 1398,
      amt: 2210,
    },
    {
      name: "Week-5",
      Posts: 2000,
      Views: 4800,
      amt: 2290,
    },
    {
      name: "Week-4",
      Posts: 2780,
      Views: 3908,
      amt: 2000,
    },
    {
      name: "Week-3",
      Posts: 1890,
      Views: 4800,
      amt: 2181,
    },
    {
      name: "Week-2",
      Posts: 2390,
      Views: 3800,
      amt: 2500,
    },
    {
      name: "Week-1",
      Posts: 3490,
      Views: 4300,
      amt: 2100,
    },
  ];

  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
  ];

  return (
    <div className="page-width mx-auto font-mulish">
      <div className="ml-4">
        <Navbar loggedin={true} />
      </div>
      <div className="px-30 flex justify-center">
        <div className="w-81 felx justify-center items-start shadow rounded-3xl px-3.5 pb-10 pt-4 bg-dark-gray text-white">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-2xl h-25"
              src="https://i.ibb.co/k6kMjq0/Rectangle-6611.jpg"
              alt=""
            />
            <img
              className="w-19 h-19 rounded-full -mt-9"
              src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
              alt=""
            />
          </div>
          <div className="ml-8 mt-8">
            <div>
              <h2 className="text-white font-mulish font-normal text-2xl leading-8">
                Nick Jhonas
              </h2>
              <h4 className="text-white font-mulish font-light text-base leading-5">
                Dhaka, Bangladesh
              </h4>
            </div>
            <div className="mt-4">
              <p className="font-mulish font-light text-xs leading-5 mb-1">
                Catagory
              </p>
              <div className="flex flex-wrap">
                <h4 className="text-white font-mulish font-normal text-base leading-6 mr-2">
                  Food
                </h4>
                <h4 className="text-white font-mulish font-normal text-base leading-6 mr-2">
                  Shop
                </h4>
                <h4 className="text-white font-mulish font-normal text-base leading-6 mr-2">
                  Sports
                </h4>
                <h4 className="text-white font-mulish font-normal text-base leading-6 mr-2">
                  Dance
                </h4>
                <h4 className="text-white font-mulish font-normal text-base leading-6 mr-2">
                  Shop
                </h4>
                <h4 className="text-white font-mulish font-normal text-base leading-6 mr-2">
                  Sports
                </h4>
                <h4 className="text-white font-mulish font-normal text-base leading-6">
                  Dance
                </h4>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-mulish font-light text-xs leading-5 mb-1">
                Biography
              </p>
              <h4 className="text-white font-mulish font-light text-sm leading-4 mr-10">
                Get the best Results for Learning Management System Uk. Find
                what you are looking for! 99% Match on Learning Management
                System Uk.
              </h4>
            </div>
          </div>
        </div>
        <div className="ml-6">
          <div>
            <div className="whitespace-nowrap">
              <button className="w-38 py-2.5 rounded-xl border-4 border-white shadow-xl text-center bg-dark-blue text-white text-2xl font-abhaya font-bold leading-10">
                Facebook
              </button>
              <button className="w-38 py-2.5 rounded-xl border-2 border-white text-center bg-dark-blue bg-opacity-75 text-white text-2xl font-abhaya font-bold leading-10 ml-6">
                Youtube
              </button>
              <button className="w-38 py-2.5 rounded-xl border-2 border-white text-center bg-dark-blue bg-opacity-75 text-white text-2xl font-abhaya font-bold leading-10 ml-6">
                TikTok
              </button>
              <button className="w-38 py-2.5 rounded-xl border-2 border-white text-center bg-dark-blue bg-opacity-75 text-white text-2xl font-abhaya font-bold leading-10 ml-6">
                Instagram
              </button>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-12">
              <div className="w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border">
                <h4 className="font-mulish font-semibold text-base leading-5">
                  50,000
                </h4>
                <p className="font-mulish font-light text-base leading-5 mb-0">
                  Follower
                </p>
              </div>
              <div className="w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border">
                <h4 className="font-mulish font-semibold text-base leading-5">
                  25,50,000
                </h4>
                <p className="font-mulish font-light text-base leading-5 mb-0">
                  Like
                </p>
              </div>
              <div className="w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border">
                <h4 className="font-mulish font-semibold text-base leading-5">
                  25,50,000
                </h4>
                <p className="font-mulish font-light text-base leading-5 mb-0">
                  Comment
                </p>
              </div>
              <div className="w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border">
                <h4 className="font-mulish font-semibold text-base leading-5">
                  25,50,000
                </h4>
                <p className="font-mulish font-light text-base leading-5 mb-0">
                  Share
                </p>
              </div>
              <div className="w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border">
                <h4 className="font-mulish font-semibold text-base leading-5">
                  25,50,000
                </h4>
                <p className="font-mulish font-light text-base leading-5 mb-0">
                  Views
                </p>
              </div>
              <div className="w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border">
                <h4 className="font-mulish font-semibold text-base leading-5">
                  20%
                </h4>
                <p className="font-mulish font-light text-base leading-5 mb-0">
                  Engagement
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start px-16 py-10 border rounded-xl border-gray-400 mt-12">
              <div className="relative w-50 h-50 flex justify-center items-center">
                <div className="avatar-bg absolute rotate w-50 h-50 z-0 flex justify-center items-center"></div>
                <div className=" flex justify-center items-center z-50">
                  <img
                    className="w-16 h-16 rounded-full"
                    src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h2 className="font-mulish font-normal text-2xl leading-8">
                  Average Performance
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-violet-700"></div>
                      <p className="font-mulish m-0 ml-2 text-sm text-light-gray text-opacity-75 font-normal">
                        Likes
                      </p>
                    </div>
                    <h4 className="font-mulish font-bold text-lg leading-6 mt-2">
                      10000
                    </h4>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-700"></div>
                      <p className="font-mulish m-0 ml-2 text-sm text-light-gray text-opacity-75 font-normal">
                        Share
                      </p>
                    </div>
                    <h4 className="font-mulish font-bold text-lg leading-6 mt-2">
                      10000
                    </h4>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-700"></div>
                      <p className="font-mulish m-0 ml-2 text-sm text-light-gray text-opacity-75 font-normal">
                        Views
                      </p>
                    </div>
                    <h4 className="font-mulish font-bold text-lg leading-6 mt-2">
                      300000
                    </h4>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-700"></div>
                      <p className="font-mulish m-0 ml-2 text-sm text-light-gray text-opacity-75 font-normal">
                        Comment
                      </p>
                    </div>
                    <h4 className="font-mulish font-bold text-lg leading-6 mt-2">
                      5000
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ViewsGraph data={data} />
      </div>
      <div>
        <FollowersGraph data={data} />
      </div>

      <div className="mx-30 pb-16 flex justify-center">
        <GenderGraph data01={data01} />
        <AgeGraph/>
      </div>
    </div>
  );
};

export default CreatorProfile;
