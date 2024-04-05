import React, { useState } from "react";

const GetProducts = () => {
  const [showOutput, setShowOutput] = useState(false);
  return (
    <div>
      <h1 className="font-bold text-[20px]">Get All Products</h1>
      <div className="px-5 py-5 w-[600px] bg-gray-100 text-[18px]">
        <p>
        fetch('https://fakestoreapi.com/products')
          <br />
          .then(res=&lt;res.json())
          <br />
          .then(json=&lt;console.log(json))
        </p>
      </div>
      <button onClick={() => setShowOutput(!showOutput)}>
        {showOutput ? "Hide Output" : "Show Output"}
      </button>
      {showOutput && (
        <div className="px-20 py-10 bg-gray-300">
          <p>//output</p>
          <p></p>
        </div>
      )}
    </div>
  );
};

export default GetProducts;
