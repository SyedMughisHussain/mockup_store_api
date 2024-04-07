const LoginUser
 = ({ id }) => {
  const requestJsonData = JSON.stringify(
    [
      {
        email: "nico@gmail.com",
        password: "1234"
      },
    ],
    null,
    2
  );
  const responseJsonData = JSON.stringify(
    [
      {
        accesToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pY29AZ21haWw-w0"
      },
      // ... Other products
    ],
    null,
    2
  );
  return (
    <div id={id}>
      <h1 className="font-bold text-[22px]">Authentication</h1>
      <p className="py-5">
      You can do login by sending an object like the following to <span className="font-bold">/auth/login/</span>
      </p>
      <p className="py-5 font-bold">Request:</p>
      <div className="px-3 py-3 w-[800px] bg-gray-100 text-[18px]">
        <p>
          [POST] https://mockupstoreapi.cyclic.app/api/v1/auth/login <br /> # Body
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
      <p className="py-5"> <span className="font-bold">Note:</span> It will return you an accessToken.</p>
    </div>
  );
};

export default LoginUser
;
