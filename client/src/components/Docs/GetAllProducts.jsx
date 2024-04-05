import { Divider } from "antd"
import { useState } from "react";
import GetProdcuts from "./GetProducts";

const GetAllProducts = ({id}) => {
  return (
    <div id={id} className="py-10">
        <h1 className="font-bold text-4xl">Products</h1>
        <Divider style={{
          color: "black"
        }}/>        
        <GetProdcuts />
    </div>
  );
};

export default GetAllProducts;
