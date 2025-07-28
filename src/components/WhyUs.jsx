import AOS from "aos";
import "aos/dist/aos.css";
import cardIcon1 from "../assets/card-icon/card1.png";
import cardIcon2 from "../assets/card-icon/card2.png";
import cardIcon3 from "../assets/card-icon/card3.png";
import { useEffect } from "react";
function WhyUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <>
      <section className="container mx-auto">
        {/* heading */}
        <div
          className="text-center w-1/2 mx-auto my-20 space-y-7"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-medium">Why Us</h1>
          <p className="text-xl text-[#1A1A1A] font-normal">
            We specialize in delivering durable and innovative fencing solutions
            built to last. With a focus on quality and trust, we help secure
            spaces across industries and communities.
          </p>
        </div>
        {/* card details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* card 1 */}
          <div className="group hover:text-white space-y-5  p-8 md:px-10 rounded-lg relative overflow-hidden transform transition-all duration-300 hover:-translate-y-10 hover:bg-[#002b55] cursor-pointer">
            {/* Background blur shape */}
            <div className="absolute w-[341px] h-[341px] bg-[#1B7FE166] opacity-65 rounded-full blur-3xl -top-20 -right-20 z-0"></div>
            <div>
              <img
                className="w-12 h-16 transition duration-300 group-hover:brightness-0 group-hover:invert"
                src={cardIcon1}
                alt=""
              />
            </div>
            <h1 cclassName=" font-medium transition duration-300 group-hover:text-white">
              <span className="text-[26px]">
                Unmatched Durability with Corrosion-Free Technology
              </span>
            </h1>
            <p className="text-[17px] font-normal text-[#1A1A1A] transition duration-300 group-hover:text-white">
              Our JF-270 barbed wire features a robust 270 GSM zinc coating,
              ensuring superior resistance against rust and corrosion. Paired
              with stainless steel binding wire, our fencing solutions are
              designed to withstand harsh environmental conditions, offering
              longevity and reliability.
            </p>
          </div>
          {/* card 2 */}
          <div className="group hover:text-white space-y-5  p-8 md:px-10 rounded-lg relative overflow-hidden transform transition-all duration-300 hover:-translate-y-10 hover:bg-[#002b55] cursor-pointer">
            {/* Background blur shape */}
            <div className="absolute w-[341px] h-[341px] bg-[#1B7FE166] opacity-65 rounded-full blur-3xl -top-20 -right-20 z-0"></div>
            <div>
              <img
                className="w-[70px] h-[70px] transition duration-300 group-hover:brightness-0 group-hover:invert"
                src={cardIcon2}
                alt=""
              />
            </div>
            <h1 cclassName=" font-medium transition duration-300 group-hover:text-white">
              <span className="text-[26px]">Customer-Centric Approach</span>
            </h1>
            <p className="text-[17px] font-normal text-[#1A1A1A] transition duration-300 group-hover:text-white">
              At JF Products, customer satisfaction is paramount. We pride
              ourselves on delivering timely services, maintaining transparent
              communication, and ensuring a seamless purchasing experience. Our
              commitment to excellence is reflected in the positive feedback
              from our valued clients.
            </p>
          </div>
          {/* card 3 */}
          <div className="group hover:text-white space-y-5  p-8 md:px-10 rounded-lg relative overflow-hidden transform transition-all duration-300 hover:-translate-y-10 hover:bg-[#002b55] cursor-pointer">
            {/* Background blur shape */}
            <div className="absolute w-[341px] h-[341px] bg-[#1B7FE166] opacity-65 rounded-full blur-3xl -top-20 -right-20 z-0"></div>
            <div>
              <img
                className="w-[70px] h-[70px] transition duration-300 group-hover:brightness-0 group-hover:invert"
                src={cardIcon3}
                alt=""
              />
            </div>
            <h1 cclassName=" font-medium transition duration-300 group-hover:text-white">
              <span className="text-[26px]">
                Innovative and Diverse Product Range{" "}
              </span>
            </h1>
            <p className="text-[17px] font-normal text-[#1A1A1A] transition duration-300 group-hover:text-white">
              We offer a wide array of fencing solutions, including Polyhex
              Mesh, Australian Trellis, and GI Poultry Mesh, catering to various
              needs from agricultural to residential applications. Our products
              combine functionality with aesthetic appeal, ensuring both
              security and style.
            </p>
          </div>
        </div>
        <button
          className="px-12 text-xs sm:text-[16px] py-4 cursor-pointer bg-[#A8E61D] rounded-full text-[#002b55] font-semibold block mx-auto my-10"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          CONTACT US
        </button>
      </section>
    </>
  );
}

export default WhyUs;
