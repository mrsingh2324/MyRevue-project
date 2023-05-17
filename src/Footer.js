import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-5 gap-2 text-white mt-10 bg-black flex flex-col items-center">
      <div className="text-white text-xl underline p-2">Stories</div>
      <div className="flex w-[90%] flex-col lg:flex-row justify-between gap-10 mb-3 ">
        <div className="basis-[30%] flex flex-row justify-between ">
          <ul className="flex flex-col gap-3">
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              Customer Marketing: What is it and how do you get started?
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              7 Ways Social Proof Can Grow Your SaaS Business
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              How Video Reviews Helps To Close More Deals
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              5 reasons why you shouldn't remove negative reviews
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              What is a video testimonial?
            </li>
          </ul>
        </div>
        <div className="basis-[30%]">
          <ul className="flex flex-col gap-3">
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              What is the purpose of Video testimonials
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              Why Video Testimonials Plays Key Roles For Customer Trust
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              Why create videos to promote your event?
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              7 Proven Tips To Create Incredible Product Review
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              Why Employee Testimonial Videos are Important ?
            </li>
          </ul>
        </div>
        <div className="basis-[30%]">
          <ul className="flex flex-col gap-3">
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              7 Ways to win by listening to your customers
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              4 Of the worst ways to respond to negative feedback
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              Why do we need video testimonials?
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              Why do we need video testimonials?
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              3 essential Ingredients of Customer Experience
            </li>
            <li className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              Do's and don'ts: best practices for responding to reviews
            </li>
          </ul>
        </div>
      </div>

      <hr className="w-[90%]  mt-4 mb-2 " />
      <div className=" flex justify-between w-[90%] gap-5">
        <div className="flex gap-5  ">
          <h1 className="hover:text-red-800 hover:cursor-pointer text-[14px]">
            Service Review
          </h1>
          <h1 className="hover:text-red-800 hover:cursor-pointer text-[14px]">
            Become Partner
          </h1>
        </div>
        <div>
          <h1 className="hover:text-red-800 hover:cursor-pointer text-[14px]">
            Feedback
          </h1>
        </div>
        <div className="flex gap-5">
          <h1 className="hover:text-red-800 hover:cursor-pointer text-[14px]">
            T & C
          </h1>
          <h1 className="hover:text-red-800 hover:cursor-pointer text-[14px]">
            Privacy Policy
          </h1>
          <h1 className="hover:text-red-800 hover:cursor-pointer text-[14px]">
            Refund Policy
          </h1>
          <h1 className="hover:text-red-800 hover:cursor-pointer text-[14px]">
            Cancellation Policy
          </h1>
        </div>
      </div>
      <hr className=" w-[90%] mb-4 mt-2" />
      <div className="flex mb-4 w-[90%] flex-col justify-center text-center items-center gap-5">
        <h1 className="underline text-xl">Contact Us</h1>
        <div className="text-sm flex gap-3 flex-col w-[100%] justify-around text-center ">
          <div className="flex justify-between">
            <span className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              TribeVibe Experiences Private Limited
            </span>
            <span className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              76, Pragati Nagar, Indore , M. P. 452012
            </span>
          </div>
          <div className="flex justify-between">
            <span className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              Email: connect@myrevue.app
            </span>
            <span className="hover:text-red-800 hover:cursor-pointer text-[15px]">
              Phone: +91 8450022182
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
