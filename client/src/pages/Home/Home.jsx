import HeroSection from "../../components/Home/HeroSection";
import GetProducts from "../../components/Home/GetProducts";
import ShowCategories from "../../components/Home/GetCategories";
import GetUsers from "../../components/Home/GetUsers";
import Features from "../../components/Home/Features";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="md:mx-10">
        <GetProducts />
      </div>
      <div className="md:mx-10">
        <ShowCategories />
      </div>
      <div className="md:mx-10">
        <GetUsers />
      </div>
      <div className="md:mx-10">
        <Features />
      </div>
      <Footer />
    </>
  );
};

export default Home;
