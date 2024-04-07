const DeleteAUser = ({ id }) => {
  const jsonData = JSON.stringify(
    [
      {
        status: "success",
        message: "User deleted successfully",
        data: {
          id: "5",
          email: "nico@gmail.com",
          password: "1234",
          name: "Nicolas",
          role: "customer",
          avatar: "https://picsum.photos/800",
          updatedAt: "2024-04-07T14:55:22.000Z",
          __v: 0,
          createdAt: "2024-04-07T19:55:38.002Z",
        },
      },
      // ... Other products
    ],
    null,
    2
  );
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px]">Delete a User</h1>
      <p className="py-5">
        You can delete a product by adding the{" "}
        <span className="font-bold">id</span> as a parameter:{" "}
        <span>/users/&lt;id&gt;</span>
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>[DELETE] https://mockupstoreapi.cyclic.app/api/v1/users/5</p>
      </div>
      <p className="py-5 font-bold">Response:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 ">
        <pre>
          <code>{jsonData}</code>
        </pre>
      </div>
      <p className="py-5">
        {" "}
        <span className="font-bold">Note:</span> The product will not be deleted
        on the database. but if you sent data successfully it will return you
        the fake deleted product.
      </p>
    </div>
  );
};

export default DeleteAUser;
