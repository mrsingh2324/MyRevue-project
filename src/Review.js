import React from "react";
import Image1 from "./images/video1.jpg";
import Image2 from "./images/video2.jpg";
import Image3 from "./images/video3.jpg";
import Image4 from "./images/video4.avif";
import Image5 from "./images/video5.avif";
import Image6 from "./images/video6.avif";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

const Review = () => {
  const scrollLeft = () => {
    console.log("clicked left");
    document.getElementById("scrollable").scrollLeft -= 310;
  };

  const scrollRight = () => {
    console.log("clicked right");
    document.getElementById("scrollable").scrollLeft += 310;
  };

  // Rest of the code...
  return (
    <div className="w-[70%] items-cneter">
      <div className="flex pr-5 justify-between mb-10 w-[100%] px-4">
        <div className="h-[100%]">
          <p className="text-4xl font-light text-white">Reviews</p>
        </div>
        <div className="flex justify-between gap-5 items-center text-pink-500">
          <button onClick={scrollLeft} className=" border text-lg border-2 border-pink-500 rounded rounded-full p-3 hover:bg-pink-500 hover:text-white">
            <AiOutlineLeft />
          </button>
          <button onClick={scrollRight} className=" border text-lg border-2 border-pink-500 rounded rounded-full p-3 hover:bg-pink-500 hover:text-white">
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <div id="scrollable" className="flex flex-row scrollbar-hide overflow-x-scroll">
        <div className="flex h-[400px] object-fit flex-row items-center  scroll-none">
          <img src={Image1} alt={Image1}  className="h-[100%] w-[300px] mr-10" />  
          <img src={Image2} alt={Image2}  className="h-[100%] w-[300px] mr-10" />
          <img src={Image3} alt={Image3}  className="h-[100%] w-[300px] mr-10" />
          <img src={Image4} alt={Image4}  className="h-[100%] w-[300px] mr-10" />
          <img src={Image5} alt={Image5}  className="h-[100%] w-[300px] mr-10" />
          <img src={Image6} alt={Image6}  className="h-[100%] w-[300px] mr-10" />
        </div>
      </div>
    </div>
  ); 

};

export default Review;