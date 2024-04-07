import { Divider } from "antd"

const Login = ({id}) => {
  return (
    <div id={id} className="py-10">
        <h1 className="font-bold text-4xl">Login</h1>
        <Divider style={{
          color: "black"
        }}/>        
    </div>
  );
};

export default Login;
