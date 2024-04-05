const GetSingleProduct
 = ({ id }) => {
  const jsonData = JSON.stringify(
    [
      {
        id: "4",
        title: "Coffee Maker",
        price: 49.99,
        description: "Programmable coffee maker for brewing your perfect cup.",
        image:
          "https://images.pexels.com/photos/1271940/pexels-photo-1271940.jpeg",
        category: "appliances",
        rating: 4,
        createdAt: "2024-03-26T11:30:17.616Z",
        updatedAt: "2024-03-26T11:30:17.616Z",
        __v: 0,
      },
      // ... Other products
    ],
    null,
    2
  );
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px] pt-10">Get a Single Product</h1>
      <p className="py-5">
      You can get a single product by adding the <span className="font-bold">id</span> as a parameter: <span className="font-bold">/products/&lt;id&gt;</span>
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>[GET] https://mockupstoreapi.cyclic.app/api/v1/products/4</p>
      </div>
      <p className="py-5 font-bold">Response:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 ">
        <pre>
          <code>{jsonData}</code>
        </pre>
        {/* <p>// ... Other Products</p> */}
      </div>
    </div>
  );
};

export default GetSingleProduct
;
