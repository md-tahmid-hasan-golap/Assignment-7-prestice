import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Text from "./Components/text/Text";
import { GiSelfLove } from "react-icons/gi";
import { toast } from "react-toastify";

function App() {
  const [totalprice, setTotalprice] = useState(0);

  const [mark, setMark] = useState([]);
  useEffect(() => {
    const total = mark.reduce((sum, blog) => sum + blog.currentBidPrice, 0);
    setTotalprice(total);
  }, [mark]);
  const handleMarkCount = (blog) => {
    console.log(blog);
    const newMark = [...mark, blog];
    setMark(newMark);
    toast.success("item addad to Favorite ");
  };
  console.log(mark);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="pt-20 pb-5 max-w-11/12 mx-auto">
        <h2 className="text-3xl font-medium mb-5">Active Auctions</h2>
        <p className="text-xl">Discover and bid on extraordinary items</p>
      </div>{" "}
      <div className="main-container flex text-center mt-5 max-w-11/12 mx-auto space-x-5">
        <div className="left-container w-[70%]">
          <Blogs mark={mark} handleMarkCount={handleMarkCount}></Blogs>
        </div>
        <div className="right-container w-[30%]  rounded-md p-1 mt-3">
          <div className=" p-5 shadow rounded-md  ">
            <div className="flex space-x-2 items-center justify-center ">
              <GiSelfLove size={25} />
              <h2 className="text-2xl font-medium text-blue-400">
                Favorite Items
              </h2>
            </div>
            <p className="border mt-8"></p>
            {mark.length == 0 ? (
              <div>
                <h2 className="text-2xl font-medium mt-8">No favorites yet</h2>
                <p className="mt-7">
                  Click the heart icon on any item to add <br /> it to your
                  favorites
                </p>
              </div>
            ) : (
              <div>
                {mark.map((marked) => (
                  <Text key={marked.id} marked={marked}></Text>
                ))}
              </div>
            )}
            <p className="border mt-7"></p>

            <div className="flex justify-between mt-7">
              <h3 className="text-xl font-medium">Total Bids Amount:</h3>
              {mark.length == 0 ? (
                <h3 className="text-2xl font-semibold">$0000</h3>
              ) : (
                <div>{totalprice}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
