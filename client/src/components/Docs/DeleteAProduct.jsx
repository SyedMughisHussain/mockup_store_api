const DeleteAProduct = ({ id }) => {
  const jsonData = JSON.stringify(
    [
      {
        status: "success",
        message: "Product deleted successfully",
        data: {
          id: "5",
          title: "Fitness Tracker",
          price: 79.99,
          description: "Track your fitness activities and monitor your health.",
          image:
            "https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg",
          category: "electronics",
          rating: 4.2,
          createdAt: "2024-03-26T11:31:29.285Z",
          updatedAt: "2024-03-26T11:31:29.285Z",
          __v: 0,
        },
      },
      // ... Other products
    ],
    null,
    2
  );
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px]">Delete a Product</h1>
      <p className="py-5">
        You can delete a product by adding the{" "}
        <span className="font-bold">id</span> as a parameter:{" "}
        <span>/product/&lt;id&gt;</span>
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>[DELETE] https://mockupstoreapi.cyclic.app/api/v1/products/5</p>
      </div>
      <p className="py-5 font-bold">Response:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 ">
        <pre>
          <code>{jsonData}</code>
        </pre>
        <p>// ... Other Products</p>
      </div>
      <p className="py-5"> <span className="font-bold">Note:</span> The product will not be deleted on the database. but if you sent data successfully it will return you the fake deleted product.</p>
    </div>
  );
};

export default DeleteAProduct;
