import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import bannerDot from "../assets/sliderdot.png";
import bannerImage from "../assets/image.png";

function BannerSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="slider-container bg-white container py-12">
        <Slider {...settings}>
          <div className="">
            <section className=" flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 px-4 ">
              {/* left image */}
              <div
                className="w-full md:w-[529px] relative"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <img className="z-10 p-10" src={bannerImage} alt="" />
                <img
                  className="absolute w-full h-full top-0 right-0 -z-10 "
                  src={bannerDot}
                  alt="Dot image"
                />
              </div>
              {/* right content */}
              <div
                className="space-y-8"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <h1 className="text-[#1A1A1A] text-3xl md:text-7xl font-medium">
                  JF Privezy Grass Wall
                </h1>
                <p className="text-2xl font-medium">
                  The perfact Blend of Greenery
                </p>
                <button className="px-8 py-3 rounded-3xl bg-[#B0DD1D]">
                  Shop Now
                </button>
              </div>
            </section>
          </div>
          <div>
            <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 px-4">
              {/* left image */}
              <div className="w-full md:w-[529px] relative">
                <img className="z-10 p-10" src={bannerImage} alt="" />
                <img
                  className="absolute w-full h-full top-0 right-0 -z-10 "
                  src={bannerDot}
                  alt="Dot image"
                />
              </div>
              {/* right content */}
              <div className="space-y-8">
                <h1 className="text-[#1A1A1A] text-3xl md:text-7xl font-medium">
                  JF Privezy Grass Wall
                </h1>
                <p className="text-2xl font-medium">
                  The perfact Blend of Greenery
                </p>
                <button className="px-8 py-3 rounded-3xl bg-[#B0DD1D]">
                  Shop Now
                </button>
              </div>
            </section>
          </div>
          <div>
            <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 px-4">
              {/* left image */}
              <div className="w-full md:w-[529px] relative">
                <img className="z-10 p-10" src={bannerImage} alt="" />
                <img
                  className="absolute w-full h-full top-0 right-0 -z-10 "
                  src={bannerDot}
                  alt="Dot image"
                />
              </div>
              {/* right content */}
              <div className="space-y-8">
                <h1 className="text-[#1A1A1A] text-3xl md:text-7xl font-medium">
                  JF Privezy Grass Wall
                </h1>
                <p className="text-2xl font-medium">
                  The perfact Blend of Greenery
                </p>
                <button className="px-8 py-3 rounded-3xl bg-[#B0DD1D]">
                  Shop Now
                </button>
              </div>
            </section>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default BannerSlider;
