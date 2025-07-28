import bannerDot from "../assets/sliderdot.png";
import bannerImage from "../assets/image.png";

function BannerSlider() {
  return (
    <>
      <section className="container flex items-center gap-16 ">
        {/* left image */}
        <div className="w-[529px] relative">
          <img
            className="absolute top-0 right-0 z-0"
            src={bannerDot}
            alt="Dot image"
          />
          <img className="z-10" src={bannerImage} alt="" />
        </div>
        {/* right content */}
        <div className="space-y-8">
          <h1 className="text-[#1A1A1A] text-7xl font-medium">
            JF Privezy Grass Wall
          </h1>
          <p className="text-2xl font-medium">The perfact Blend of Greenery</p>
          <button className="px-8 py-3 rounded-3xl bg-[#B0DD1D]">
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
}

export default BannerSlider;
