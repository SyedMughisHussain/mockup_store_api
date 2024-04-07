const GetSingleUser
 = ({ id }) => {
  const jsonData = JSON.stringify(
    [
      {
        id: "3",
        name: "Charlie Brown",
        email: "charlie@example.com",
        password: "charliepassword",
        role: "user",
        address: "91011 Maple Lane, Villagetown, USA",
        __v: 0,
        createdAt: "2024-03-26T23:09:43.310Z",
        updatedAt: "2024-03-26T23:09:43.310Z",
      },
    ],
    null,
    2
  );
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px] pt-10">Get a Single User</h1>
      <p className="py-5">
        You can get a single user by adding the{" "}
        <span className="font-bold">id</span> as a parameter:{" "}
        <span className="font-bold">/users/&lt;id&gt;</span>
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>[GET] https://mockupstoreapi.cyclic.app/api/v1/users/3</p>
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

export default GetSingleUser
;
