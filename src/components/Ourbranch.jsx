import COIMBATORE from "../assets/country/icon1.png";
import CHENNAI from "../assets/country/icon2.png";
import HYDERABAD from "../assets/country/icon3.png";
import GOA from "../assets/country/icon4.png";
import KOCHI from "../assets/country/icon5.png";
import MUMBAI from "../assets/country/icon6.png";
// COIMBATORE', 'CHENNAI', 'HYDERABAD', 'GOA', 'KOCHI', 'MUMBAI'

function Ourbranch() {
  return (
    <section className="container my-12  border-2  mx-auto px-4 py-10  text-white relative">
      {/* Center Border Label */}
      <div className="flex justify-center mb-8 relative ">
        <span className=" px-6 py-1 bg-[#A8E61D] rounded-full text-[#002b55] font-semibold">
          OUR BRANCHES
        </span>
        {/* <div className="absolute top-1/2 left-0 w-full border border-[#1B7FE166] z-0"></div> */}
      </div>

      {/* Branch Icons */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-10 overflow-hidden">
        <div className="flex flex-col items-center  px-4 py-2 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-[#A8E61D] hover:bg-[#f7fce8] hover:text-[#002B55] cursor-pointer">
          <img src={COIMBATORE} className="w-[92px] h-[92px] mb-1" />
          <p className="text-xs font-medium text-black">COIMBATORE</p>
        </div>
        {/* <div className="flex flex-col items-center  px-4 py-2 rounded-xl hover:border hover:border-[#A8E61D] hover:bg-[#f7fce8] hover:text-[#002B55] cursor-pointer">
          <img src={CHENNAI} className="w-[92px] h-[92px] mb-1" />
          <p className="text-xs font-medium text-black">COIMBATORE</p>
        </div>
        <div className="flex flex-col items-center  px-4 py-2 rounded-xl hover:border hover:border-[#A8E61D] hover:bg-[#f7fce8] hover:text-[#002B55] cursor-pointer">
          <img src={HYDERABAD} className="w-[92px] h-[92px] mb-1" />
          <p className="text-xs font-medium text-black">COIMBATORE</p>
        </div>
        <div className="flex flex-col items-center  px-4 py-2 rounded-xl hover:border hover:border-[#A8E61D] hover:bg-[#f7fce8] hover:text-[#002B55] cursor-pointer">
          <img src={GOA} className="w-[92px] h-[92px] mb-1" />
          <p className="text-xs font-medium text-black">COIMBATORE</p>
        </div>
        <div className="flex flex-col items-center  px-4 py-2 rounded-xl hover:border hover:border-[#A8E61D] hover:bg-[#f7fce8] hover:text-[#002B55] cursor-pointer">
          <img src={KOCHI} className="w-[92px] h-[92px] mb-1" />
          <p className="text-xs font-medium text-black">COIMBATORE</p>
        </div>
        <div className="flex flex-col items-center  px-4 py-2 rounded-xl hover:border hover:border-[#A8E61D] hover:bg-[#f7fce8] hover:text-[#002B55] cursor-pointer">
          <img src={MUMBAI} className="w-[92px] h-[92px] mb-1" />
          <p className="text-xs font-medium text-black">COIMBATORE</p>
        </div> */}
      </div>

      {/* Contact + Map Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Contact Form */}
        <div className="flex-1 bg-[#0d3b6f] rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-md px-4 py-2 bg-[#174577] placeholder-white text-white outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-md px-4 py-2 bg-[#174577] placeholder-white text-white outline-none"
            />
            <input
              type="tel"
              placeholder="Phone *"
              className="rounded-md px-4 py-2 bg-[#174577] placeholder-white text-white outline-none"
            />
            <textarea
              placeholder="Write message"
              className="rounded-md px-4 py-2 bg-[#174577] placeholder-white text-white outline-none min-h-[100px]"
            />
            <button
              type="submit"
              className="bg-[#A8E61D] text-[#002B55] rounded-full py-2 px-6 w-fit"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map with Location */}
        <div className="flex-1 rounded-2xl overflow-hidden relative">
          <iframe
            src="https://maps.google.com/maps?q=JRR%20Towers,%20Pattalamma%20Temple%20Rd,%20Basavanagudi,%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            className="rounded-2xl min-h-[400px]"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="absolute bottom-4 left-4 right-4 bg-white text-[#002B55] rounded-xl p-4 text-sm shadow-md flex gap-2">
            <img src="" alt="location-icon" className="w-6 h-6 mt-1" />
            <p>
              <strong>JRR Towers</strong> (2nd Floor), Pattalamma Temple Rd,
              <br />
              Basavanagudi, Bangalore, 560004
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourbranch;
{
  /* <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-10 overflow-hidden">
  {[COIMBATORE, CHENNAI, HYDERABAD, GOA, KOCHI, MUMBAI].map((icon, i) => (
    <div
      key={i}
      className="flex flex-col items-center px-4 py-2 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-[#A8E61D] hover:bg-[#f7fce8] hover:text-[#002B55] cursor-pointer"
    >
      <img src={icon} className="w-[92px] h-[92px] mb-1" />
      <p className="text-xs font-medium text-black group-hover:text-[#002B55]">COIMBATORE</p>
    </div>
  ))}
</div> */
}
