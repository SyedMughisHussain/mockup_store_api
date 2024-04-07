const UpdateAUser = ({ id }) => {
  const requestJsonData = JSON.stringify(
    [
      {
        email: "changeme@gmail.com",
        name: "Syed Haseeb Hussain",
      },
    ],
    null,
    2
  );
  const responseJsonData = JSON.stringify(
    [
      {
        status: "success",
        message: "User updated successfully",
        data: {
          id: "2",
          email: "changeme@gmail.com",
          password: "12345",
          name: "Syed Haseeb Hussain",
          role: "customer",
          avatar: "https://i.imgur.com/DTfowdu.jpg",
        },
      },
    ],
    null,
    2
  );
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px] pt-10">Udpate a User</h1>
      <p className="py-5">
        You can update a user by sending an object like the following and adding
        the <span className="font-bold">id</span> as a parameter:{" "}
        <span className="font-bold">/users/&lt;id&gt;</span>
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>
          [PATCH] https://mockupstoreapi.cyclic.app/api/v1/users <br /> # Body
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
      <p className="py-5">
        {" "}
        <span className="font-bold">Note:</span> It will return you an
        object.Remember that nothing in real will update in the database.
      </p>
    </div>
  );
};

export default UpdateAUser;
