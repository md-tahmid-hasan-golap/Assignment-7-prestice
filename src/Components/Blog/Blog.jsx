import React from "react";
import { GiSelfLove } from "react-icons/gi";

const Blog = ({ blog, handleMarkCount }) => {
  const { image, title, currentBidPrice, TimeLeft } = blog;
  console.log(blog);
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-normal">{title}</div>
            </div>
          </div>
        </td>
        <td>${currentBidPrice}</td>
        <td>{TimeLeft}</td>
        <th>
          <button
            onClick={() => handleMarkCount(blog)}
            className="btn btn-ghost btn-xs"
          >
            <GiSelfLove size={25} />
          </button>
        </th>
      </tr>
    </>
  );
};

export default Blog;
