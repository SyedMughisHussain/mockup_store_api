const UpdateAProduct
 = ({ id }) => {
  const requestJsonData = JSON.stringify(
    [
      {
        title: "New Product",
        price: 49.99,
        descriptio: "New description.",
      },
    ],
    null,
    2
  );
  const responseJsonData = JSON.stringify(
    [
      {
        status: "success",
        message: "Product updated successfully",
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
      <h1 className="font-bold text-[22px] pt-10">Udpate a Product</h1>
      <p className="py-5">
      You can update a product by sending an object like the following and adding the <span className="font-bold">id</span> as a parameter: <span className="font-bold">/products/&lt;id&gt;</span>
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>
          [PATCH] https://mockupstoreapi.cyclic.app/api/v1/products <br /> # Body
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
      <p className="py-5"> <span className="font-bold">Note:</span> It will return you an object.Remember that nothing in real will update in the database.</p>
    </div>
  );
};

export default UpdateAProduct
;
