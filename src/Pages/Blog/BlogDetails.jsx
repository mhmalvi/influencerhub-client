import { Breadcrumb } from "antd";
import React from "react";
import Navbar from "../../Components/Shared/Navbar";

const BlogDetails = () => {
  return (
    <div className="page-width mx-auto">
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className="mx-28">
        <h1 className="font-mulish font-bold leading-8 text-3.5xl">
          Do what you can, with what you have
        </h1>
        <div className="-mt-1">
          <Breadcrumb>
            <Breadcrumb.Item className="mr-6">January 15, 2022</Breadcrumb.Item>
            <Breadcrumb.Item className="mr-6 ml-3">
              <a href="/blog-details/1">By: Ana fallon</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="mr-6 ml-3">
              <a href="/blog-details/1">Digital</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div
          className="mt-7"
          style={{
            width: "846px",
          }}
        >
          <img
            src="https://i.ibb.co/5MT1jtK/karina-tess-H14pfhlfr24-unsplash-1.jpg"
            alt=""
          />

          <div>
            <h1 className="font-normal text-2xl leading-8 font-mulish">
              Demo content
            </h1>

            <div>
              This page is a demo that shows everything you can do inside
              portfolio and blog posts. We’ve included everything you need to
              create engaging posts about your work, and show off your case
              studies in a beautiful way. Obviously, we’ve styled up all the
              basic text formatting options available in markdown. You can
              create lists: Simple bulleted lists Like this one Are cool And:
              Numbered lists Like this other one Are great too You can also add
              blockquotes, which are shown at a larger width to help break up
              the layout and draw attention to key parts of your content:
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
