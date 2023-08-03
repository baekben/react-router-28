import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import YT from "./YT";
export default function MainComp() {
  return (
    <>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blue" element={<Blue />}></Route>
          <Route path="/red" element={<Red />}></Route>
          <Route path="/yt" element={<YT />}></Route>
        </Routes>
      </div>
    </>
  );
}
