import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const Text = ({ marked }) => {
  return (
    <div className="flex">
      <div>
        <div className="flex items-center pt-3 space-x-2 mt-5">
          <img
            className="mask mask-squircle h-12 w-12"
            src={marked.image}
            alt=""
          />
          <h2 className="text-xl">{marked.title}</h2>
        </div>
        <div className="flex justify-evenly">
          <p>${marked.currentBidPrice}</p>
          <p> Bids :{marked.bidsCount}</p>
        </div>
      </div>
      <button>
        <RxCrossCircled size={25} />
      </button>
    </div>
  );
};

export default Text;
