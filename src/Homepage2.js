import React from "react";
import homepage1 from "./images/homepage1.webp";
import { BiTask } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Homepage2 = () => {
  const data = [
    {
      id: 1,
      image: "<BiTask/>",
      title: "Create a task",
      about:
        "Create a task for UGC creators in under a minute with MyRevue Elite. Share your product details and select your preferred video type, quality, and duration to get started!",
    },
    {
      id: 2,
      image: "<FaShippingFast/>",
      title: "Ship the product",
      about:
        "Ready to see what our UGC creators can do? Once you've approved your favorites, simply ship your products to them and watch the magic happen with MyRevue Elite.",
    },
    {
      id: 3,
      image: "<FaCheck/>",
      title: "Enjoy the content",
      about:
        "With MyRevue Elite, custom-made UGC videos are the key to scaling your business like crazy! Approve the content or request edits, and receive your typical video in just 7-10 days!",
    },
  ];
  return (
    <div className="flex flex-col w-[70%] items-center justify-center">
      <p className="text-4xl text-white items-center text-center justify-center font-semibold">
        {" "}
        Say goodbye to the struggle of finding original user-generated content
        for your brand. MyRevue Elite has got you covered!{" "}
      </p>
      <div className=" rounded text-white w-full flex flex-col lg:flex-row mt-10 gap-10 ">
        {data.map((item) => (
          <div className="border rounded  rounded-xl p-12 bg-gray-800 w-full gap-10  ">
            <img src={`${item.image}`} alt="image" />
            <p className="text-xl my-5">
              {item.id}. {item.title}
            </p>
            <p>{item.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage2;
