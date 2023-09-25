import React, { useState, useEffect } from "react";
import Post from "../../components/postdisplay/Post";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.ok) return res.json();
        else return Error("Ohh No");
      })
      .then((json) => setPosts(json));
  }, []);
  return (
    <div className="container m-auto">
      {posts && posts.map((post) => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  );
}
