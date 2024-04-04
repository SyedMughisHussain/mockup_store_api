
import SlideBar from "../../components/Docs/SlideBar";
import Content from "../../components/Docs/Content";

const Docs = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SlideBar />
      <Content />
    </div>
  );
};

export default Docs;
