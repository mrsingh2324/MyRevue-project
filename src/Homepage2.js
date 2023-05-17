import React from "react";
import homepage1 from "./images/homepage1.webp";
import { BiTask } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Homepage2Data from "./homepage2.json";

const Homepage2 = () => {
  const data = Homepage2Data;

  return (
    <div className="flex flex-col w-[80%] items-center justify-center items-center">
      <p className="text-[44px] text-white items-center text-center  ">
        {" "}
        Say goodbye to the struggle of finding original user-generated content
        for your brand. MyRevue Elite has got you covered!{" "}
      </p>
      <div className=" rounded text-white w-full flex flex-col lg:flex-row mt-10 gap-10 ">
        {data.map((item) => (
          <div className="rounded rounded-xl p-12 bg-gray-800 gap-10  ">
            <div className="image-container">{item.image}</div>

            <p className="text-[22px] my-4">{item.id}. {item.title}
            </p>
            <p>{item.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage2;
