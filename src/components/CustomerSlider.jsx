import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import man from "../assets/sliderimage.png";
import quote from "../assets/quote.png";
import bgImage from "../assets/dotdot.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function CustomerSlider() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="container p-8" data-aos="fade-up">
        <h1 className="text-center text-5xl text-[#1A1A1A] font-medium">
          Why Customers Love ❤️ Us?
        </h1>
        {/* reviews content container*/}
        <div
          className="flex flex-col gap-8 md:flex-row md:justify-between py-12 "
          data-aos="fade-up"
        >
          {/* left content */}
          <div
            className="w-full md:w-7/12 lg:w-8/12 px-8 flex flex-col rounded-2xl justify-between bg-[#f2f4f6]"
            data-aos="fade-right"
          >
            <div className="space-y-8">
              <div>
                <img src={quote} alt="" />
              </div>
              <p className="text-3xl">
                I had initial issue with stock availability and delivery. Once
                the product arrived on site the work has completed very
                fast(400ft.) Value for money and easy to install. Happy with the
                product
              </p>
            </div>
            {/* background image */}
            <div className="flex justify-between relative py-10">
              <img
                className="absolute w-full h-full left-0 top-0 z-0"
                src={bgImage}
                alt=""
              />
              <div className="z-10 flex justify-between w-full px-8">
                <h1 className="text-3xl font-medium">- Samuel Varughese</h1>
                <div className="flex gap-3 md:gap-5">
                  <div className="border p-2 md:p-3 lg:p-4 rounded-full hover:bg-gray-100 transition cursor-pointer">
                    <FaArrowLeft className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  </div>
                  <div className="border p-2 md:p-3 lg:p-4 rounded-full hover:bg-gray-100 transition cursor-pointer">
                    <FaArrowRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right image content */}
          <div
            className="w-full md:w-5/12 lg:w-4/12 bg-[#f2f4f6] rounded-2xl p-4"
            data-aos="fade-left"
          >
            <img className="w-full" src={man} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerSlider;
