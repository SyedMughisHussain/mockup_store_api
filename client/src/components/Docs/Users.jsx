import { Divider } from "antd"

const Users = ({id}) => {
  return (
    <div id={id} className="py-10">
        <h1 className="font-bold text-4xl">Users</h1>
        <Divider style={{
          color: "black"
        }}/>        
    </div>
  );
};

export default Users;
