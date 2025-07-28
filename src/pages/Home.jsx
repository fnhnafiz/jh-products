import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ourbranch from "../components/Ourbranch";
import BannerSlider from "../components/BannerSlider";
import AgricultureProducts from "../components/AgricultureProducts";
import LandscapeProducts from "../components/LandscapeProducts";
import TrustedCustomer from "../components/TrustedCustomer";
import WhyUs from "../components/WhyUs";
import OurProducts from "../components/OurProducts";
import CustomerSlider from "../components/CustomerSlider";

function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <AgricultureProducts />
      <LandscapeProducts />
      <TrustedCustomer />
      <WhyUs />
      <OurProducts />
      <CustomerSlider />
      <Ourbranch />
      <Footer />
    </div>
  );
}

export default Home;
