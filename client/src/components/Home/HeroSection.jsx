import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { GithubOutlined, ReadOutlined } from "@ant-design/icons";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 md:text-6xl">
            Mockup Store API
          </h1>
          <p className="mb-8 leading-relaxed text-black">
            Your API for your e-commerce or shopping website prototype.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                navigate("/docs");
              }}
              className="bg-blue-500 text-white"
              icon={<ReadOutlined />}
              size="large"
            >
              Read Docs
            </Button>
            <Button icon={<GithubOutlined />} size="large" className="ml-4">
              <a
                target="blank"
                href="https://github.com/SyedMughisHussain/mockup_store_api"
              >
                View on Github
              </a>
            </Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/shop.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
