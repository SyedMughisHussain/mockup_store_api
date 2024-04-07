const GetCategories = ({ id }) => {
  const jsonData = JSON.stringify(
    [
      {
        status: "success",
        data: [
          "appliances",
          "electronics",
          "fashion",
          "health",
          "home",
          "sports",
        ],
      },
    ],
    null,
    2
  );
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px]">Get All Categories</h1>
      <p className="py-5">
        You can access the categories name by using the{" "}
        <span className="font-bold">/categories</span> endpoint.
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>[GET] https://mockupstoreapi.cyclic.app/api/v1/categories</p>
      </div>
      <p className="py-5 font-bold">Response:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 ">
        <pre>
          <code>{jsonData}</code>
        </pre>
      </div>
    </div>
  );
};

export default GetCategories;
