const LimitProducts = ({ id }) => {
  const jsonDataOne = JSON.stringify(
    [
      {
        id: "1",
        title: "Smartphone",
        price: 599.99,
        description: "A powerful smartphone with advanced features.",
        image:
          "https://images.pexels.com/photos/1884777/pexels-photo-1884777.jpeg",
        category: "electronics",
        rating: 4.5,
        createdAt: "2024-03-26T11:24:06.612Z",
        updatedAt: "2024-03-26T11:24:06.612Z",
        __v: 0,
      },
    ],
    null,
    2
  );

  const jsonDataFour = JSON.stringify(
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
    ],
    null,
    2
  );
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px]">Limit Results</h1>
      <p className="py-5">
        By using the <span className="font-bold">/products</span> endpoint and
        passing <span className="font-bold">limit</span> as a query parameter,
        you can limit your results.
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>[GET] https://mockupstoreapi.cyclic.app/api/v1/products?limit=4</p>
      </div>
      <p className="py-5 font-bold">Response:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 ">
        <pre>
          <code>{jsonDataOne}</code>
        </pre>
        <p>/*....*/</p>
        <pre>
          <code>{jsonDataFour}</code>
        </pre>
      </div>
    </div>
  );
};

export default LimitProducts;
