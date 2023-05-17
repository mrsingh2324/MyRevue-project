import React from "react";

const Navbar = () => {
  return (
    <div className=" text-white bg-[#121212] flex justify-between p-3 px-6 flex flex-row text-white ">
      <div className=" basis-[50%] flex items-center justify-left">
        <img src="./images/logo1.png" alt="" className="h-[37px] w-[140px]" />
      </div>
      <div className=" flex items-center gap-6 text-white ">
        <ul className="flex flex-row gap-10">
            <li>Why video Reviews ? </li>
            <li>Pricing</li>
            <li>Login</li>
        </ul>
        <button className="px-5 py-2 ml-5 border border-[2px]  border-[#1f1] ">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
