import React,{useState} from "react";
import Logo from "./images/logo1.png";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <div>

    <div className="text-white bg-[#121212] justify-between md:py-2 px-12 flex flex-row text-white">
      <div className=" basis-[50%] flex items-center justify-left">
        <img src={Logo} alt="" className="h-[54px] w-[160px]" />
      </div>
      <div className="hidden md:block pt-1">

      <div className="block flex items-center gap-6 text-white ">
        <ul className="flex flex-row gap-10">
          <li className="cursor-pointer">Why video Reviews ? </li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer"> Login</li>
        </ul>
        <button className="gradient-border p-2 px-5 border border-2">
          Sign up for free
        </button>
      </div>
      </div>
      {/* hamburger */}
      <div className="md:hidden items-center flex " onClick={()=> handleHamburger()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            className="text-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        </div>

    </div>
        {hamburger && (
          <div className="md:hidden w-[100%] gap-2 pb-2 items-center flex flex-col bg-black text-white">
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:bg-gray-600 px-10">Why video Reviews ? </li>
              <li className="cursor-pointer hover:bg-gray-600 px-10">Pricing</li>
              <li className="cursor-pointer hover:bg-gray-600 px-10"> Login</li>
            </ul>
            <button className="gradient-border p-2 px-5 border border-2">
              Sign up for free
            </button> 
            </div>
        )}
    </div>
  );
};

export default Navbar;
