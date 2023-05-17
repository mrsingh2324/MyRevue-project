import React from "react";

const Homepage3 = ({ homepageData }) => {
  const item = homepageData;
  const image = require('./images/homepage3.webp').default;
  return (
    <div>
      <div className="m-5 text-white text-center flex flex-col gap-5 items-center justify-center">
        <div className="w-[70%] gap-5 flex flex-col">
          <h1 className="text-4xl items-center justify-center flex text-center font-semibold">
            {item.componentContent.title}
          </h1>
          <p className="text-xl text-center justify-between flex items-center">
            {item.componentContent.description}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center h-[400px] w-full rounded rounded-xl p-2">
          <img
            src={require(`${item.componentContent.imageSrc}`).default}
            alt="image"
            className="mt-10 border h-full rounded rounded-xl w-full rounded-xl"
          />
          <div className="flex items-center rounded rounded-1xl max-w-[90%] px-2 mt-[-30px] py-5 bg-gray-800 text-white font-semibold">
            <ol className="px-5 w-auto list-disc">
              {item.componentContent.listItems.map((listItem, index) => (
                <li key={index} className="py-2 ">
                  {listItem}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage3;
