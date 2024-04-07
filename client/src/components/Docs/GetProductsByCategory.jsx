const GetProductsByCategory = ({ id }) => {
  const jsonData = JSON.stringify(
    [
      {
        id: "7",
        title: "Sneakers",
        price: 69.99,
        description: "Stylish sneakers for casual wear.",
        image:
          "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        category: "fashion",
        rating: 4.4,
        createdAt: "2024-03-26T11:34:13.105Z",
        updatedAt: "2024-03-26T11:34:13.105Z",
        __v: 0,
      },
    ],
    null,
    2
  );
  return (
    <div id={id} className="py-5">
      <h1 className="font-bold text-[22px]">
        Get Products in a Specific Category
      </h1>
      <p className="py-5">
        You can get the products by category adding the categoryName as a
        parameter to
        <span className="font-bold">/categories/categoryName</span>
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>[GET] https://mockupstoreapi.cyclic.app/api/v1/categories/fashion</p>
      </div>
      <p className="py-5 font-bold">Response:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 ">
        <pre>
          <code>{jsonData}</code>
        </pre>
        <p>/* // ... Other Products */</p>
      </div>
    </div>
  );
};

export default GetProductsByCategory;
