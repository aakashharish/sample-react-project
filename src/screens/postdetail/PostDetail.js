import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseFetch } from "../../hooks/UseFetch";

export default function PostDetail() {
  const location = useLocation();

  const { state: post } = location;

  const { posts, error, optionsData } = UseFetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    "DELETE"
  );

  const navigate = useNavigate();

  const handClick = () => {
    navigate(`/edit/${post.id}`, { state: post });
  };

  const handleDelete = () => {
    optionsData();
  };
  useEffect(() => {
    if (posts.length !== 0) {
      const timer = setTimeout(() => navigate("/"), 3000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="container m-auto pt-7">
      <h1 className="text-4xl">{post.title}</h1>
      <br />
      <p>{post.body}</p>
      {posts.length !== 0 && <div>Post Deleted successfully</div>}
      {error && <div>{error}</div>}

      <div className="flex justify-end mt-7 mr-14">
        <button
          className="bg-red-600 py-1 px-2 text-white rounded-md"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-red-600 py-1 px-2 ml-4 text-white rounded-md"
          onClick={handClick}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
