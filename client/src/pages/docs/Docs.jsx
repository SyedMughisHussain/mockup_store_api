import Introduction from "../../components/Docs/Introduction.";
import { Divider } from "antd";
import Products from "../../components/Docs/Products";
import GetProducts from "../../components/Docs/GetProducts";
import GetSingleProduct from "../../components/Docs/GetSingleProducts";
import AddNewProduct from "../../components/Docs/AddNewProduct";
import UpdateAProduct from "../../components/Docs/UpdateAProduct";
import DeleteAProduct from "../../components/Docs/DeleteAProduct";
import Categories from "../../components/Docs/Categories";
import LimitProducts from "../../components/Docs/LimitProducts";
import SortProducts from "../../components/Docs/SortProducts";
import GetCategories from "../../components/Docs/GetCategories";
import GetProductsByCategory from "../../components/Docs/GetProductsByCategory";
import Users from "../../components/Docs/Users";

const Docs = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        className="hidden md:block w-72"
        style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}
      >
        <div className="p-10">
          <ul>
            <li className="font-bold text-[20px] p-2 text-[#0099FF]">
              <a href="#products">Products</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#getProducts">Get All Products</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#getSingleProduct">Get a Single Product </a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#limitResults">Limit Results</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#sortResults">Sort Results</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#addNewProduct">Add New Product</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#updateAProduct">Update a Product</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#deleteAProduct">Delete a Product</a>
            </li>
          </ul>
          <Divider
            style={{
              color: "black",
            }}
          />
          <ul>
            <li className="font-bold text-[20px] p-2 text-[#0099FF]">
              <a href="#categories">Categories</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#getCategories">Get All Categories</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#getProductsByCategory">Get in Category </a>
            </li>
          </ul>
          <Divider
            style={{
              color: "black",
            }}
          />
          <ul>
            <li className="font-bold text-[20px] p-2 text-[#0099FF]">
              <a href="#hsjdhs">Users</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Get All Users</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Get a Single User</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Limit Results</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Sort Results</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Add a new User</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Update a User</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Delete a User</a>
            </li>
          </ul>
          <Divider
            style={{
              color: "black",
            }}
          />
          <ul>
            <li className="font-bold text-[20px] p-2 text-[#0099FF]">
              <a href="#hsjdhs">Login</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">User Auth</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}
        className="py-5 px-10 w-full"
      >
        <Introduction id="introduction" />
        <Products id="products" />
        <GetProducts id="getProducts" />
        <GetSingleProduct id="getSingleProduct" />
        <LimitProducts id="limitResults" />
        <SortProducts id="sortResults" />
        <AddNewProduct id="addNewProduct" />
        <UpdateAProduct id="updateAProduct" />
        <DeleteAProduct id="deleteAProduct" />
        <Categories id="categories" />
        <GetCategories id="getCategories" />
        <GetProductsByCategory id="getProductsByCategory" />
        <Users id="users" />
      </div>
    </div>
  );
};

export default Docs;
