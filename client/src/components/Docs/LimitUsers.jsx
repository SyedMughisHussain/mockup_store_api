const LimitUsers = ({ id }) => {
  const jsonDataOne = JSON.stringify(
    [
      {
        id: "1",
        name: "Alice Johnson",
        email: "alice@example.com",
        password: "alicepassword",
        role: "user",
        address: "1234 Elm Street, Cityville, USA",
        __v: 0,
        createdAt: "2024-03-26T23:09:43.308Z",
        updatedAt: "2024-03-26T23:09:43.308Z",
      },
    ],
    null,
    2
  );

  const jsonDataFour = JSON.stringify(
    [
      {
        id: "4",
        name: "David Lee",
        email: "david@example.com",
        password: "davidpassword",
        role: "user",
        address: "121314 Pine Road, Boroughburg, USA",
        __v: 0,
        createdAt: "2024-03-26T23:09:43.310Z",
        updatedAt: "2024-03-26T23:09:43.310Z",
      },
    ],
    null,
    2
  );
  return (
    <div id={id} className="py-5">
      <h1 className="font-bold text-[22px]">Limit Results</h1>
      <p className="py-5">
        By using the <span className="font-bold">/users</span> endpoint and
        passing <span className="font-bold">limit</span> as a query parameter,
        you can limit your results.
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>[GET] https://mockupstoreapi.cyclic.app/api/v1/users?limit=4</p>
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

export default LimitUsers;
