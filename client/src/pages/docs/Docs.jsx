import Introduction from "../../components/Docs/Introduction.";
import { Divider } from "antd";
import Products from "../../components/Docs/Products";
import GetProducts from "../../components/Docs/GetProducts";
import GetSingleProduct from "../../components/Docs/GetSingleProducts";
import AddNewProduct from "../../components/Docs/AddNewProduct";
import UpdateAProduct from "../../components/Docs/UpdateAProduct";
import DeleteAProduct from "../../components/Docs/DeleteAProduct";

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
              <a href="#mughis9">Products</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="">Get All Products</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Get a Single Product </a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Limit Results</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Sort Results</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Add New Product</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Update a Product</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Delete a Product</a>
            </li>
          </ul>
          <Divider
            style={{
              color: "black",
            }}
          />
          <ul>
            <li className="font-bold text-[20px] p-2 text-[#0099FF]">
              <a href="#hsjdhs">Categories</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Get All Categories</a>
            </li>
            <li className="p-2 text-[#0099FF]">
              <a href="./hsjdhs">Get in Category </a>
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
      className="py-5 px-10 w-full">
        <Introduction id={"introduction"} />
        <Products id={"products"} />
        <GetProducts id={"getProducts"} />
        <GetSingleProduct id={"getSingleProduct"} />
        <AddNewProduct id={"addNewProduct"} />
        <UpdateAProduct id={"updateAProduct"} />
        <DeleteAProduct id={"deleteAProduct"} />
      </div>
    </div>
  );
};

export default Docs;
