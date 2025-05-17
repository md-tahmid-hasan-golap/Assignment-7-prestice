import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { GiSelfLove } from "react-icons/gi";

function App() {
  const [mark, setMark] = useState([]);
  const handleMarkCount = (blog) => {
    console.log(blog);
    const newMark = [...mark, blog];
    setMark(newMark);
  };
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
          <Blogs handleMarkCount={handleMarkCount}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <div className=" p-5 shadow rounded-md  mt-4">
            <div className="flex space-x-2 items-center justify-center ">
              <GiSelfLove size={25} />
              <h2 className="text-2xl font-medium">Favorite Items</h2>
            </div>
            <p className="border mt-8"></p>
            <h2 className="text-2xl font-medium mt-8">No favorites yet</h2>
            <p className="mt-7">
              Click the heart icon on any item to add <br /> it to your
              favorites
            </p>
            <p className="border mt-7"></p>

            <div className="flex justify-between mt-7">
              <h3 className="text-xl font-medium">Total Bids Amount:</h3>
              <h3 className="text-2xl font-semibold">$0000</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
