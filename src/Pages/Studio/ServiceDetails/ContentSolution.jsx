import React from "react";
import Navbar from "../../../Components/Shared/Navbar";

const ContentSolution = () => {
  return (
    <div className="page-width mx-auto relative h-screen">
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className="content-solution mx-auto my-16">
        <div className="text-4.5xl font-abhaya font-bold leading-12 bg-white min-h-full w-88 ml-auto mr-16 flex justify-center items-center">
          <span>Content Solution</span>
        </div>
      </div>

      <div className="relative bg-transparent mx-28">
        <div className="absolute right-36 top-2">
          <img
            style={{
              height: "59.6rem",
            }}
            src="https://i.ibb.co/7yhqZpk/Rectangle-9.png"
            alt=""
          />
        </div>
        <div className="absolute right-0">
          <div className="flex justify-between pt-36">
            <div className="w-98 mr-28">
              <h1 className="text-4.5xl font-bold font-abhaya leading-12">
                Get Results for Online Courses Uk.
              </h1>
              <p className="text-base font-normal leading-6 font-mulish">
                Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                culpa qui minim pariatur et officia elit
              </p>
              <button className="px-11 py-3 text-2xl leading-8 font-noraml font-mulish rounded-2xl bg-dark-blue text-white">
                Contact
              </button>
            </div>
            <div>
              <img
                className="w-full"
                src="https://i.ibb.co/n64dkM5/Picture.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="mx-auto -mt-21 z-50"
            style={{
              width: "36.57rem",
            }}
          >
            <div>
              <img src="https://i.ibb.co/fnHZ9Nc/Rectangle-7.png" alt="" />
            </div>
            <div className="mt-8">
              <h1 className="text-4.5xl font-abhaya font-bold leading-12">
                We tell the news that makes the most impact.
              </h1>
              <p className="text-base font-normal leading-6 font-mulish">
                Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                culpa qui minim pariatur et officia elit id. Tempor cupidatat
                veniam esse ad veniam dolore excepteur tempor dolor consectetur
                ut id.
              </p>
            </div>
          </div>
          <div
            className="mx-auto ml-40 mt-36 pt-1.5"
            style={{
              width: "42rem",
            }}
          >
            <h1 className="text-4.5xl font-abhaya font-bold leading-12">
              We share the little moments that shows we’re alive.
            </h1>
            <p className="text-base font-normal leading-6 font-mulish">
              Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
              nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
              culpa qui minim pariatur et officia elit id. Tempor cupidatat
              veniam esse ad veniam dolore excepteur tempor dolor consectetur ut
              id.
            </p>
          </div>
          <div className="relative flex items-center ml-40 mt-24 pb-24">
            <div className="absolute bottom-0 -left-28">
              <img
                style={{
                  height: "80rem",
                }}
                className=""
                src="https://i.ibb.co/7yhqZpk/Rectangle-9.png"
                alt=""
              />
            </div>
            <img src="https://i.ibb.co/j3Rzt36/Rectangle-11.png" alt="" />
            <img
              className="mx-6"
              src="https://i.ibb.co/ww9vhGy/Rectangle-12.png"
              alt=""
            />
            <img src="https://i.ibb.co/H2ZVffZ/Rectangle-13.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSolution;
