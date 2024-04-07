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
import GetUsers from "../../components/Docs/GetAllUsers";
import GetSingleUser from "../../components/Docs/GetSingleUser";
import LimitUsers from "../../components/Docs/LimitUsers";
import SortUsers from "../../components/Docs/SortUsers";
import AddNewUser from "../../components/Docs/AddNewUser";
import UpdateAUser from "../../components/Docs/UpdateAUser";
import DeleteAUser from "../../components/Docs/DeleteAUser";
import Login from "../../components/Docs/Login";
import LoginUser from "../../components/Docs/LoginUser";

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
              <a href="#users">Users</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#getUsers">Get All Users</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#getSingleUser">Get a Single User</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#limitUsers">Limit Results</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#sortUsers">Sort Results</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#addNewUser">Add a new User</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#updateAUser">Update a User</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#deleteAUser">Delete a User</a>
            </li>
          </ul>
          <Divider
            style={{
              color: "black",
            }}
          />
          <ul>
            <li className="font-bold text-[20px] p-2 text-[#0099FF]">
              <a href="#login">Login</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="#loginUser">User Auth</a>
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
        <GetUsers id="getUsers" />
        <GetSingleUser id="getSingleUser" />
        <LimitUsers id="limitUsers" />
        <SortUsers id="sortUsers" />
        <AddNewUser id="addNewUser" />
        <UpdateAUser id="updateAUser" />
        <DeleteAUser id="deleteAUser" />
        <Login id="login" /> 
        <LoginUser id="loginUser" />
      </div>
    </div>
  );
};

export default Docs;
