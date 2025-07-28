import image from "../assets/card1.png";
import image1 from "../assets/card2.png";
import image2 from "../assets/card3.png";
import image3 from "../assets/card4.png";

function AgricultureProducts() {
  return (
    <>
      <section className="container space-y-8 my-28">
        <h1 className="text-5xl font-medium">Agricultural Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* card 1 */}
          <div className="bg-[#F2F4F6] p-[10px] rounded-xl  space-y-5">
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
          <div className="bg-[#F2F4F6] p-[10px] rounded-xl  space-y-5">
            <div>
              <img className="w-full" src={image1} alt="" />
            </div>
            <div className="space-y-5">
              <h1 className="text-xl font-medium"> JF Australian Trellis</h1>
              <p className="text-xs text-[#1A1A1A]">₹6,962.00</p>
              <button className="px-8 py-3 rounded-3xl bg-[#B0DD1D]">
                Shop Now
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div className="bg-[#F2F4F6] p-[10px] rounded-xl  space-y-5">
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
          <div className="bg-[#F2F4F6] p-[10px] rounded-xl  space-y-5">
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
        </div>
      </section>
    </>
  );
}

export default AgricultureProducts;
