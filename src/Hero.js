import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr from-[#A6965810] to-[#F9214710] p-5 flex items-center justify-center">
      <div className="w-[70%] flex flex-col">
        <h3 className="text-xl mt-5 text-white ">
          Videos starting at JUST Rs. 300/Video
        </h3>
        <h1 className=" my-5 text-5xl  text-[#d1d]">
          Take Your Business to the Next Level with MyRevue Elite's Professional
          Video Testimonials
        </h1>
        <h3 className="mt-5 text-3xl  text-[#1df]">
          Inspire Trust and Boost Sales with MyRevue Elite,
        </h3>
        <h3 className="mb-5 text-3xl  text-white">
          No matter how hard you try, it's never easy to get a video
          testimonial. Save yourself time, money and frustration by using our
          video testimonial tool.
        </h3>
        <button className="px-5 w-[300px] py-2 border border-[2px] text-white text-2xl cursor-pointer border-[#f1f] ">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
