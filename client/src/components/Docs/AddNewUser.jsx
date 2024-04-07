const AddNewUser = ({ id }) => {
  const requestJsonData = JSON.stringify(
    [
      {
        email: "syedmughis4541@gmail.com",
        password: "123456789",
        name: "Syed Mughis Hussain",
        role: "user",
        avatar: "https://i.imgur.com/LDOO4Qs.jpg",
      },
    ],
    null,
    2
  );
  const responseJsonData = JSON.stringify(
    [
      {
        status: "success",
        message: "User crated successfully",
        data: {
          email: "syedmughis4541@gmail.com",
          password: "123456789",
          name: "Syed Mughis Hussain",
          role: "user",
          avatar: "https://i.imgur.com/LDOO4Qs.jpg",
        },
      },
    ],
    null,
    2
  );
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px] pt-10">Add New User</h1>
      <p className="py-5">
        You can create a new user by sending an object like the following to{" "}
        <span className="font-bold">/users</span>
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>
          [POST] https://mockupstoreapi.cyclic.app/api/v1/users <br /> # Body
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
      </div>
      <p className="py-5">
        {" "}
        <span className="font-bold">Note:</span> If you send an object like the
        code above, it will return you an object. Remember that nothing in real
        will insert into the database. so if you want to access the new id you
        will get a 404 error.
      </p>
    </div>
  );
};

export default AddNewUser;
