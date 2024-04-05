import { Divider } from "antd"

const Introduction = ({id}) => {
  return (
    <div id={id}>
        <h1 className="font-bold text-4xl">Introduction</h1>
        <Divider style={{
          color: "black"
        }}/>        
        <p className="w-[550px]">Mockup Store API can be used with any type of project that needs products, users, categories, authentication, and users in JSON format. You can use this API for prototyping e-commerce and learning about how to connect to an API with the best practices.</p> 
        <br />
        <p>This API include features like this:</p>
        <br />
        <ul className="list-disc ml-10">
          <li>✅ All CRUD Operations</li>
          <li>✅ REST API</li>
          <li>✅ Auth with JWT</li>
          <li>✅ Filter products by id</li>
          <li>✅ Create users and check to see if they already exist</li>
          <li>✅ Postman and Insomnia files</li>
        </ul>
    </div>
  );
};

export default Introduction;
