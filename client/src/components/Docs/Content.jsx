import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>About</div>} />
        <Route path="/restApi" element={<div>Rest Api</div>} />
        <Route path="/resources" element={<div>Resources</div>} />
      </Routes>
    </div>
  );
};

export default Content;
