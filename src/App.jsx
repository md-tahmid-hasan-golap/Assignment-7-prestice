import "./App.css";
import Banner from "./Components/Banner/Banner";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="pt-20 pb-5 max-w-11/12 mx-auto">
        <h2 className="text-3xl font-medium mb-5">Active Auctions</h2>
        <p className="text-xl">Discover and bid on extraordinary items</p>
      </div>{" "}
      <div className="main-container flex text-center mt-5">
        <div className="left-container w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%] border-2 rounded-md p-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eos
            ipsa? Nostrum aspernatur maxime in distinctio.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
