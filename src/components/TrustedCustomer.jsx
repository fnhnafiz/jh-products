import icon1 from "../assets/icon/icon1.png";
import icon2 from "../assets/icon/icon2.png";
import icon3 from "../assets/icon/icon3.png";
function TrustedCustomer() {
  return (
    <>
      <section className="container mx-auto bg-[#002b55] px-4 sm:px-8 lg:px-16 py-12 sm:py-16 rounded-xl text-white relative overflow-hidden">
        <div className="absolute w-[497px] h-[497px] bg-[#1B7FE166] rounded-full blur-3xl -bottom-[400px] left-1/2 -translate-x-1/2 z-0"></div>

        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-10 relative z-10">
          Trusted by over 6K+ customers
        </h1>

        {/* icon details container*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center relative z-10">
          {/* icon 1 */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
            <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center">
              <img src={icon1} className="w-11 h-11" alt="Premium Products" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Premium</h1>
              <p className="text-sm">Products</p>
            </div>
          </div>

          {/* icon 2 */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
            <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center">
              <img src={icon2} className="w-11 h-11" alt="Google Reviews" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">4000+</h1>
              <p className="text-sm">Google Review</p>
            </div>
          </div>

          {/* icon 3 */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
            <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center">
              <img
                src={icon3}
                className="w-11 h-11"
                alt="Delivery Across India"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Delivery+</h1>
              <p className="text-sm">Across India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrustedCustomer;
