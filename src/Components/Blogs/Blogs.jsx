import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleMarkCount }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //   console.log(blogs);
  return (
    <div>
      <div className="overflow-x-auto max-w-11/12 mx-auto shadow p-3 mt-4 rounded-md">
        <table className="table">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <Blog
                key={blog.id}
                handleMarkCount={handleMarkCount}
                blog={blog}
              ></Blog>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
