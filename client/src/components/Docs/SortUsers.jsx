const SortUsers = ({ id }) => {
  const jsonData = JSON.stringify(
    [
      {
        id: "20",
        name: "Taylor Mitchell",
        email: "taylor@example.com",
        password: "taylorpassword",
        role: "user",
        address: "606162 Pine Drive, Village, USA",
        __v: 0,
        createdAt: "2024-03-26T23:09:43.316Z",
        updatedAt: "2024-03-26T23:09:43.316Z",
      },
    ],
    null,
    2
  );

  return (
    <div id={id}>
      <h1 className="font-bold text-[22px]">Sort Results</h1>
      <p className="py-5">
        By using the <span className="font-bold">/users</span> endpoint and
        passing <span className="font-bold">sort/-id</span> as a query
        parameter, you can sort your results as in descending order.
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>[GET] https://mockupstoreapi.cyclic.app/api/v1/users?sort=-id</p>
      </div>
      <p className="py-5 font-bold">Response:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 ">
        <pre>
          <code>{jsonData}</code>
        </pre>
        <p>/*....*/</p>
      </div>
    </div>
  );
};

export default SortUsers;
