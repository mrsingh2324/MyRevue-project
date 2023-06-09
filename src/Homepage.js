

import React from "react";
import homepageData from "./homepageData.json";
import Homepage2 from "./Homepage2";
import Homepage3 from "./Homepage3";
import Footer from "./Footer";
import Review from "./Review";
import Testimonial from "./Testimonial";
import Hero from "./Hero";

const Homepage = () => {
  const data = homepageData;
  console.log(data[0].title);

  return (
    <div className="flex flex-col items-center gap-10 cursor-">
      {/* Hero */}
      <Hero />
      {/* Homepage2 */}
      <Homepage2 />
      {/* Hompepages */}
      <div className="flex flex-col items-center text-center w-[70%]">
        {data.map((item,index) => (
          <div key={item.componentName}>
            <Homepage3 homepageData={item} imageIndex={index % 5} />
          </div>
        ))}
      </div>
      {/* Testimonial */}
      <Testimonial />
      {/* Reviews */}
      <Review />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;