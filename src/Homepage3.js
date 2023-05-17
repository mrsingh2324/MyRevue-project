import React from 'react';
import image1 from './images/homepage1.webp';
import image2 from './images/homepage2.webp'; 
import image3 from './images/homepage3.webp';
import image4 from './images/homepage4.webp';
import image5 from './images/homepage5.webp';

const Homepage3 = ({ homepageData,imageIndex }) => {
  const item = homepageData;
  const images = [image1, image2, image3, image4, image5];

  return (
    <div>
      <div className="w-[100%] text-white text-center flex flex-col gap-5 items-center justify-center">
        <div className="w-[100%] gap-2 flex flex-col items-center">
          <h1 className="text-5xl items-center justify-center flex text-center">
            {item.componentContent.title}
          </h1>
          <p className="text-[16px] justify-between flex items-center">
            {item.componentContent.description}
          </p>
        </div>
        <div className="my-16 flex flex-col items-center justify-center h-[100%] w-[100%] rounded rounded-xl p-2">
          <img
           src={images[imageIndex]} // use the first image in the array as the default
            alt={images[imageIndex]}
            className=" w-[800px] min-w-[600px] h-[400px] rounded rounded-xl rounded-xl"
          />
          <div className="rounded rounded-1xl max-w-[80%] min-w-[40%] px-2 mt-[-30px] py-3 bg-gray-800 text-white font-semibold">
            <ol className="px-5 text-[15px] font-normal list-disc text-start">
              {item.componentContent.listItems.map((listItem, index) => (
                <li key={index} className="py-2">
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