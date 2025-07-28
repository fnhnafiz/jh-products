import man from "../assets/sliderimage.png";
import quote from "../assets/quote.png";
import bgImage from "../assets/dotdot.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function CustomerSlider() {
  return (
    <>
      <section className="container mx-auto border p-8">
        <h1 className="text-center text-5xl text-[#1A1A1A] font-medium">
          Why Customers Love ❤️ Us?
        </h1>
        {/* reviews content container*/}
        <div className="flex flex-col md:flex-row md:justify-between py-12">
          {/* left content */}
          <div className="w-full md:w-7/12 lg:w-8/12 px-8 flex flex-col justify-between ">
            <div>
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
                <h1>- Samuel Varughese</h1>
                <div className="flex gap-5">
                  <div>
                    <FaArrowLeft />
                  </div>
                  <div>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right image content */}
          <div className="w-full md:w-5/12 lg:w-4/12">
            <img className="w-full" src={man} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerSlider;
