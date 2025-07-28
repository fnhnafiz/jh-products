import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image from "../assets/card1.png";
import image1 from "../assets/card2.png";
import image2 from "../assets/card3.png";
import image3 from "../assets/card4.png";

function AgricultureProducts() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container container my-28 ">
        <h1 className="text-5xl font-medium my-10">Agricultural Products</h1>
        <Slider {...settings} className="mx-4 [&_.slick-slide]:px-2">
          {/* card 1 */}
          <div
            className="bg-[#F2F4F6] p-[10px] rounded-xl  space-y-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <img className="w-full" src={image} alt="" />
            </div>
            <div className="space-y-5">
              <h1 className="text-xl font-medium"> Antiqo Fence</h1>
              <p className="text-xs text-[#1A1A1A]">10,024.00 – ₹14,984.82</p>
              <button className="px-8 py-3 rounded-3xl bg-[#B0DD1D]">
                Shop Now
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div
            className="bg-[#F2F4F6] p-[10px] rounded-xl  space-y-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <img className="w-full" src={image1} alt="" />
            </div>
            <div className="space-y-5" data-aos="fade-up" data-aos-delay="100">
              <h1 className="text-xl font-medium"> JF Australian Trellis</h1>
              <p className="text-xs text-[#1A1A1A]">₹6,962.00</p>
              <button className="px-8 py-3 rounded-3xl bg-[#B0DD1D]">
                Shop Now
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div
            className="bg-[#F2F4F6] p-[10px] rounded-xl  space-y-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <img className="w-full" src={image2} alt="" />
            </div>
            <div className="space-y-5">
              <h1 className="text-xl font-medium"> JF Polyhex Mesh</h1>
              <p className="text-xs text-[#1A1A1A]">₹4,050.00 – ₹10,770.00</p>
              <button className="px-8 py-3 rounded-3xl bg-[#B0DD1D]">
                Shop Now
              </button>
            </div>
          </div>
          {/* card 4 */}
          <div
            className="bg-[#F2F4F6] p-[10px] rounded-xl  space-y-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <img className="w-full" src={image3} alt="" />
            </div>
            <div className="space-y-5">
              <h1 className="text-xl font-medium"> JF Privezy Grass Wall</h1>
              <p className="text-xs text-[#1A1A1A]">₹1,646.10 – ₹18,284.10</p>
              <button className="px-8 py-3 rounded-3xl bg-[#B0DD1D]">
                Shop Now
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default AgricultureProducts;
