import React from "react";
import Marquee from "react-fast-marquee";
import image from "../assets/sliderIcon.svg";

function OurProducts() {
  return (
    <div className="bg-[#d9ecff] w-full py-4 rotate-[-2deg] overflow-hidden my-20">
      <Marquee pauseOnHover={true} speed={50} gradient={false} direction="left">
        <div className="flex items-center gap-4 sm:gap-6 mr-6 sm:mr-10">
          <img
            className="h-8 w-16 sm:h-[40px] sm:w-[72px]"
            src={image}
            alt=""
          />
          <h1 className="text-xl sm:text-3xl text-[#002B55] font-medium whitespace-nowrap">
            quality product
          </h1>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 mr-6 sm:mr-10">
          <img
            className="h-8 w-16 sm:h-[40px] sm:w-[72px]"
            src={image}
            alt=""
          />
          <h1 className="text-xl sm:text-3xl text-[#002B55] font-medium whitespace-nowrap">
            shipping across India
          </h1>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 mr-6 sm:mr-10">
          <img
            className="h-8 w-16 sm:h-[40px] sm:w-[72px]"
            src={image}
            alt=""
          />
          <h1 className="text-xl sm:text-3xl text-[#002B55] font-medium whitespace-nowrap">
            quality product
          </h1>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 mr-6 sm:mr-10">
          <img
            className="h-8 w-16 sm:h-[40px] sm:w-[72px]"
            src={image}
            alt=""
          />
          <h1 className="text-xl sm:text-3xl text-[#002B55] font-medium whitespace-nowrap">
            shipping across India
          </h1>
        </div>
      </Marquee>
    </div>
  );
}

export default OurProducts;
