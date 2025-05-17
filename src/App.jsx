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
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>jjjjjjjjjjj</h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
