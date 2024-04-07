const GetUsers = ({ id }) => {
  const jsonData = JSON.stringify(
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
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px]">Get All Users</h1>
      <p className="py-5">
        You can access the list of 10 users by using the{" "}
        <span className="font-bold">/users</span> endpoint.
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>[GET] https://mockupstoreapi.cyclic.app/api/v1/users</p>
      </div>
      <p className="py-5 font-bold">Response:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 ">
        <pre>
          <code>{jsonData}</code>
        </pre>
        <p>// ... Other Users</p>
      </div>
    </div>
  );
};

export default GetUsers;
