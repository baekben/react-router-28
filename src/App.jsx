import NavBar from "./components/NavBar";
import "./App.css";
import MainComp from "./components/mainComp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <NavBar />
        <MainComp />
        <Footer />
      </div>
    </>
  );
}

export default App;
