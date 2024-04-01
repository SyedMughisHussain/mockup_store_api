import { GithubOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-[#F6F7F9] sticky top-0">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/logo.png" alt="LOGO" className="h-12" />
          <span className="ml-3 text-xl">Mockup Store API</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/"} className="mr-10 hover:text-gray-900 cursor-pointer">
            Home
          </Link>
          <Link
            to={"/docs"}
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Docs
          </Link>
        </nav>
        <Button icon={<GithubOutlined />}>
          <a
            target="blank"
            href="https://github.com/SyedMughisHussain/mockup_store_api"
          >
            Github
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
