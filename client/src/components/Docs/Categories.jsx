import { Divider } from "antd"

const Categories = ({id}) => {
  return (
    <div id={id} className="py-10">
        <h1 className="font-bold text-4xl">Categories</h1>
        <Divider style={{
          color: "black"
        }}/>        
    </div>
  );
};

export default Categories;
