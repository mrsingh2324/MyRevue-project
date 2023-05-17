import React from "react";
import Background from "./images/bg.webp";

const Hero = () => {
  return (
    <div className="p-5 flex items-center justify-center">
      <div className="w-[80%] flex flex-col">
        <h3 className="text-[16px] mt-5 text-white">
          Videos starting at JUST Rs. 300/Video
        </h3>
        <h1 className=" my-5 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#B290E5] to-[#FD86AA] text-4xl md:text-6xl pb-2">
          Take Your Business to the Next Level with MyRevue Elite's Professional
          Video Testimonials
        </h1>
        <h3 className="mt-5 text-3xl inspire">
          Inspire Trust and Boost Sales with MyRevue Elite,
        </h3>
        <h3 className="mb-10 text-[18px]  text-white">
          No matter how hard you try, it's never easy to get a video
          testimonial. Save yourself time, money and frustration by using our
          video testimonial tool.
        </h3>
        <button className="gradient-border px-5 w-[200px] py-2 border text-white text-[18px] cursor-pointer border-2">
          Sign up for free
        </button>
      
    <div className="">
      <img src={Background} className="top-40 left-80 absolute w-[60%]"/>
    </div>
      </div>
    </div>
  );
};

export default Hero;
