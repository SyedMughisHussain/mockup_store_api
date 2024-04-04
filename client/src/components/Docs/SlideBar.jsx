import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SlideBar = () => {
  const navigate = useNavigate(); 
  return (
    <div style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
      <Menu
        style={
          {
            width: 250,
          }
        }
        onClick={({ key }) => {
          if(key === '/docs/about'){
            navigate('/docs');
          } else {
            navigate(key);
          }
        }}
        className="p-5"
        items={[
          {
            label: "About",
            key: "/docs/about",
            style: {
              fontWeight: "bold",
              fontSize: 20,
            }
          },
          {
            label: "Introduction",
            key: "/docs/introduction",
          },
          {
            label: "Resources",
            key: "/docs/resources",
          },
          {
            label: "Resources",
            key: "/docs/resources",
          },
          {
            label: "Resources",
            key: "/docs/resources",
          },
          {
            label: "Resources",
            key: "/docs/resources",
          },
          {
            label: "Resources",
            key: "/docs/resources",
          },
          {
            label: "Resources",
            key: "/docs/resources",
          },
          {
            label: "Resources",
            key: "/docs/resources",
          },
          {
            label: "Resources",
            key: "/docs/resources",
          },
          {
            label: "Resources",
            key: "/docs/resources",
          },
          {
            label: "Resources",
            key: "/docs/resources",
          },          
        ]}
      ></Menu>
    </div>
  );
};

export default SlideBar;
