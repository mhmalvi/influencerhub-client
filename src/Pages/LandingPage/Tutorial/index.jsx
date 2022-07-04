import React from "react";

const Tutorial = () => {
  return (
    <div className="page-width mx-auto py-20">
      <div className="mb-20 w-6/12 mx-auto px-10 2xl:px-20">
        <h1 className="text-heading font-bold font-abhaya text-center mb-4 leading-12">
          How to work on platforms get camping
        </h1>
      </div>
      <div className="tutorial bg-gray-300 rounded-3xl mx-auto">
        <img
          className="w-full h-full rounded-3xl"
          src="https://bmmagazine.co.uk/wp-content/uploads/2021/11/shutterstock_407036404-scaled.jpg"
          alt="Banner"
        />
      </div>
      <div className="w-9/12 mx-auto flex flex-col justify-center items-center my-10">
        <div className="w-6/12 mx-auto px-8">
          <p className="text-center font-mulish font-light">
            St. Augustine College Now Offers A Fully Online English Language
            Program.
          </p>
        </div>
        <div className="mt-8">
          <button className="px-6 py-2.5 rounded-full cursor-pointer border-black border">
            Creat camping
          </button>
        </div>
      </div>

      <div className="w-10/12 mx-auto mt-36 flex items-center">
        <div className="w-1/2 ">
          <div className="mx-auto studio-img bg-slate-300 rounded-3xl">
            <img
              className="w-full min-h-full rounded-3xl"
              src="https://bmmagazine.co.uk/wp-content/uploads/2021/11/shutterstock_407036404-scaled.jpg"
              alt="Banner"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-7/12 mx-auto">
            <h3 className="text-2xl font-semibold">Studio</h3>
            <p className="mt-6 text-left">
              St. Augustine College Now Offers A Fully Online English Language
              Program. Learn more today. Learn English Today! Take An Online ESL
              Course For Adults Through St. Augustine College. Check Academic
              Calendar.Learn more today. Learn English Today! Take An Online ESL
              Course For Adults Through St. Augustine College. Check Academic
              Calendar.
            </p>
            <div className="mt-8">
              <button className="px-8 py-2.5 rounded-full cursor-pointer border-black border">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
