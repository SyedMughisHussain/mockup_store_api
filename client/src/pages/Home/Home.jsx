import HeroSection from "../../components/Home/HeroSection";
import GetData from "../../components/Home/GetData";
import { products,  } from "../../../data";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="md:mx-10">
        <GetData products={products} title={"Get Products"} api={"localhost"}/>
      </div>
      {/* <div className="md:mx-10">
        <GetData prodcucts={products} title={"Get Categories"} api={"localhost"}/>
      </div> */}
    </>
  );
};

export default Home;
