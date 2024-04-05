const AddNewProduct = ({ id }) => {
  const requestJsonData = JSON.stringify(
    [
      {
        title: "New Product",
        price: 49.99,
        description: "New description.",
        image:
          "https://images.pexels.com/photos/1271940/pexels-photo-1271940.jpeg",
        category: "appliances",
        rating: 4,
      },
    ],
    null,
    2
  );
  const responseJsonData = JSON.stringify(
    [
      {
        status: "success",
        message: "Product created successfully",
        data: {
          title: "New Product",
          price: 49.99,
          description: "New description.",
          image:
            "https://images.pexels.com/photos/1271940/pexels-photo-1271940.jpeg",
          category: "appliances",
          rating: 4,
        },
      },
      // ... Other products
    ],
    null,
    2
  );
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px] pt-10">Add New Product</h1>
      <p className="py-5">
        You can create a new product by sending an object like the following to{" "}
        <span className="font-bold">/products</span>
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>
          [POST] https://mockupstoreapi.cyclic.app/api/v1/products <br /> # Body
        </p>
        <pre>
          <code>{requestJsonData}</code>
        </pre>
      </div>
      <p className="py-5 font-bold">Response:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 ">
        <pre>
          <code>{responseJsonData}</code>
        </pre>
        {/* <p>// ... Other Products</p> */}
      </div>
      <p className="py-5"> <span className="font-bold">Note:</span> If you send an object like the code above, it will return you an object. Remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error.</p>
    </div>
  );
};

export default AddNewProduct;
