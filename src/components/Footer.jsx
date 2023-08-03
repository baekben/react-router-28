import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div id="footer">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/yt">YT</Link>
        <p>Fullstack Academy 2023</p>
      </div>
    </>
  );
}
