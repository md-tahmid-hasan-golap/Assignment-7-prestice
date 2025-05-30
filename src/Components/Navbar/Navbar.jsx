import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="navbar bg-base-100 shadow-sm flex justify-around">
          <div className="">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-400">Auction</span>{" "}
              <span className="text-yellow-400">Gallery</span>
            </h1>
          </div>
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Auctions</a>
            <a className="link link-hover">Categories</a>
            <a className="link link-hover">How to works</a>
          </nav>
          <div className="flex space-x-4 items-center justify-center">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />{" "}
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="w-8 rounded-full">
              <img
                className="rounded-full"
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
