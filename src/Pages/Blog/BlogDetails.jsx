import { Breadcrumb } from "antd";
import React from "react";
import Navbar from "../../Components/Shared/Navbar";
import Slider from "react-slick";
import Icons from "../../Components/Shared/Icons";

const BlogDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    // dotsClass: "",
    slidesToScroll: 1,
  };

  return (
    <div className='page-width mx-auto'>
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className='mx-52'>
        <h1 className='font-mulish font-bold leading-8 text-3.5xl'>
          Do what you can, with what you have
        </h1>
        <div className='-mt-1'>
          <Breadcrumb>
            <Breadcrumb.Item className='mr-6'>January 15, 2022</Breadcrumb.Item>
            <Breadcrumb.Item className='mr-6 ml-3'>
              <a href='/blog-details/1'>By: Ana fallon</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className='mr-6 ml-3'>
              <a href='/blog-details/1'>Digital</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div
          className='mt-7'
          style={{
            width: "846px",
          }}
        >
          <img
            src='https://i.ibb.co/5MT1jtK/karina-tess-H14pfhlfr24-unsplash-1.jpg'
            alt=''
          />

          <div>
            <h1 className='font-normal text-2xl leading-8 font-mulish'>
              Demo content
            </h1>

            <div>
              <p className='font-normal text-base leading-8 font-mulish'>
                This page is a demo that shows everything you can do inside
                portfolio and blog posts.
                <br />
                We’ve included everything you need to create engaging posts
                about your work, and show off your case studies in a beautiful
                way.
                <br />
                Obviously, we’ve styled up all the basic text formatting options
                available in markdown.
              </p>
              <div className='font-normal text-base leading-8 font-mulish'>
                <p>You can create lists:</p>
                <ul>
                  <li className='list-disc list-inside'>
                    Simple bulleted lists
                  </li>
                  <li className='list-disc list-inside'>Like this one</li>
                  <li className='list-disc list-inside'>Are cool</li>
                </ul>
                <p>And:</p>
                <ol>
                  <li className='list-decimal list-inside'>Numbered lists</li>
                  <li className='list-decimal list-inside'>
                    Like this other one
                  </li>
                  <li className='list-decimal list-inside'>Are great too</li>
                </ol>
                <p>
                  You can also add blockquotes, which are shown at a larger
                  width to help break up the layout and draw attention to key
                  parts of your content:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <div className='mx-52'>
          <h1 className='text-2xl font-mulish leading-8 font-normal mb-1'>
            Image galleries
          </h1>
          <p className='text-base leading-6 font-mulish font-semibold'>
            Here&apos;s a really neat custom feature we added – galleries:
          </p>
        </div>

        {/* <div className='flex flex-wrap justify-end items-start mt-7 mx-24'> */}
        <div className='grid grid-cols-3 gap-2 mt-7 mx-24'>
          <div className='flex flex-col items-center'>
            <img
              className='my-5 py-0.5'
              src='https://i.ibb.co/xSPY9cd/bekky-bekks-M0e5fd-QYBCM-unsplash-1.png'
              alt=''
            />
          </div>
          <div className='flex flex-col items-center'>
            <img
              className='my-5 py-0.5'
              src='https://i.ibb.co/7j3F2D9/andrea-tummons-ZRKFq-Pn8cdw-unsplash-1.png'
              alt=''
            />
            <img
              className='my-5 py-0.5'
              src='https://i.ibb.co/MB0XMVG/karina-tess-H14pfhlfr24-unsplash-1.png'
              alt=''
            />
          </div>
          <div className='flex flex-col items-center'>
            <img
              className='my-5 py-0.5'
              src='https://i.ibb.co/ckhFVMH/jess-bailey-n-Oe-Vi8-Ds-N8-U-unsplash-1.png'
              alt=''
            />
            <img
              className='my-5 py-0.5'
              src='https://i.ibb.co/LgC2Vqc/phil-desforges-KP7p0-DRGbg-unsplash-1.png'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='mt-18 pt-1'>
        <div className='mx-52'>
          <h1 className='font-normal text-2xl leading-8 font-mulish'>
            Image carousels
          </h1>
          <p className='font-normal text-base leading-8 font-mulish'>
            Here’s another gallery with only one column, which creates a
            carousel slide-show instead. A nice little feature: the carousel
            only advances when it is in view, so your visitors won’t scroll down
            to find it half way through your images.
          </p>
        </div>
        <div
          className='mt-7 pt-2 flex items-center justify-center mx-auto'
          style={{
            width: "63.75rem",
            height: "25.75rem",
          }}
        >
          <Slider
            {...settings}
            className='blog-custom-carousel min-w-full min-h-full'
          >
            <div>
              <img
                className='min-w-full min-h-full mx-auto'
                src='https://i.ibb.co/QkpRdB3/andrea-tummons-ZRKFq-Pn8cdw-unsplash-1.png'
                alt=''
              />
            </div>
            <div className='mx-auto'>
              <img
                className='min-w-full min-h-full mx-auto'
                src='https://i.ibb.co/QkpRdB3/andrea-tummons-ZRKFq-Pn8cdw-unsplash-1.png'
                alt=''
              />
            </div>
            <div className='mx-auto'>
              <img
                className='min-w-full min-h-full mx-auto'
                src='https://i.ibb.co/QkpRdB3/andrea-tummons-ZRKFq-Pn8cdw-unsplash-1.png'
                alt=''
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className='mt-36 pt-1.5'>
        <div className='mx-52'>
          <h1 className='font-normal text-2xl leading-8 font-mulish'>
            Image carousels
          </h1>
          <p className='font-normal text-base leading-8 font-mulish'>
            Here’s another gallery with only one column, which creates a
            carousel slide-show instead. A nice little feature: the carousel
            only advances when it is in view, so your visitors won’t scroll down
            to find it half way through your images.
          </p>
        </div>
        <div className='relative mx-28 mt-7 pt-2 flex items-center justify-center'>
          <img
            style={{
              width: "63.75rem",
              height: "25.75rem",
            }}
            className='min-w-full min-h-full z-50'
            src='https://i.ibb.co/TWfssRd/jess-bailey-n-Oe-Vi8-Ds-N8-U-unsplash-1.jpg'
            alt=''
          />
          <div className='absolute -bottom-30 right-52 z-0 flex justify-between items-end'>
            <div className='flex items-center mr-44 ml-10'>
              <p className='font-semibold text-base leading-6 font-mulish mr-7 pr-0.5'>
                Tags
              </p>
              <p className='font-semibold text-base leading-6 font-mulish mr-7 pr-0.5'>
                Digital
              </p>
              <p className='font-semibold text-base leading-6 font-mulish mr-7 pr-0.5'>
                Design
              </p>
            </div>
            <img
              src='https://i.ibb.co/yPdzZwR/elnaz-asadi-N1gq-Dai6-A08-unsplash-1.png'
              alt=''
            />
          </div>
        </div>
        <div className='pt-40 mx-52'>
          <p className='w-full font-semibold text-base leading-6 font-mulish mr-7 pr-0.5 pb-2 border-b-4 border-gray-300'>
            Share
          </p>
        </div>

        <div className='py-10 mx-52'>
          <h1 className='font-normal text-2xl leading-8 font-mulish mb-5'>
            Leave a Reply
          </h1>
          <textarea
            className='w-full h-8 outline-none placeholder-gray-500'
            name=''
            id=''
            placeholder='Your Comment*'
            required
            style={{
              borderBottom: "1px solid #767676",
            }}
          ></textarea>
        </div>
        <div className='py-10 mx-52'>
          <h1 className='font-normal text-2xl leading-8 font-mulish mb-5'>
            Comments
          </h1>

          {/* Comments */}
          <div className='border-b-2 border-gray-300 py-7.5'>
            <div className='flex'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://i.ibb.co/9cd8bHV/Img-03.jpg'
                alt=''
              />
              <div className='ml-5'>
                <div className='flex items-center mb-2.5'>
                  <h4 className='text-base font-normal leading-6 font-mulish'>
                    Scarlet Withch
                  </h4>
                  <h6 className='text-xs font-light leading-5 font-mulish ml-2'>
                    Oct 24.22
                  </h6>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  at arcu dui. Aenean placerat.Lorem ipsumdolor sit amet,
                  consectetur adipiscing elit. Sed at arcu dui. Aenean placerat.
                </div>
                <div className='flex items-center mt-5'>
                  <Icons.Reply />
                  <p className='text-xs font-light font-mulish leading-5 mb-0 ml-2.5'>
                    Reply
                  </p>
                </div>
              </div>
            </div>

            <div className='flex ml-16 mt-7.5'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://i.ibb.co/9cd8bHV/Img-03.jpg'
                alt=''
              />
              <div className='ml-5'>
                <div className='flex items-center mb-2.5'>
                  <h4 className='text-base font-normal leading-6 font-mulish'>
                    Scarlet Withch
                  </h4>
                  <h6 className='text-xs font-light leading-5 font-mulish ml-2'>
                    Oct 24.22
                  </h6>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  at arcu dui. Aenean placerat.Lorem ipsumdolor sit amet,
                  consectetur adipiscing elit. Sed at arcu dui. Aenean placerat.
                </div>
                <div className='flex items-center mt-5'>
                  <Icons.Reply />
                  <p className='text-xs font-light font-mulish leading-5 mb-0 ml-2.5'>
                    Reply
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='border-b-2 border-gray-300 py-7.5'>
            <div className='flex'>
              <img
                className='w-11 h-11 rounded-full'
                src='https://i.ibb.co/9cd8bHV/Img-03.jpg'
                alt=''
              />
              <div className='ml-5'>
                <div className='flex items-center mb-2.5'>
                  <h4 className='text-base font-normal leading-6 font-mulish'>
                    Scarlet Withch
                  </h4>
                  <h6 className='text-xs font-light leading-5 font-mulish ml-2'>
                    Oct 24.22
                  </h6>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  at arcu dui. Aenean placerat.Lorem ipsumdolor sit amet,
                  consectetur adipiscing elit. Sed at arcu dui. Aenean placerat.
                </div>
                <div className='flex items-center mt-5'>
                  <Icons.Reply />
                  <p className='text-xs font-light font-mulish leading-5 mb-0 ml-2.5'>
                    Reply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
