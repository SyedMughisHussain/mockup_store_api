import { Menu } from "antd";

const SlideBar = () => {
  return (
    <Menu
      className="p-3"
      items={[
        {
          label: "Home",
        },
        {
          label: "Dashboard",
        },
        {
          label: "Users List",
        },
        {
          label: "Profile",
        },
        {
          label: "Sign Out",
        },
      ]}
    ></Menu>
  );
};

export default SlideBar;
