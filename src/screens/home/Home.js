import React from "react";
import './Home.css'
import Post from "../../components/postdisplay/Post";
import { UseFetch } from "../../hooks/UseFetch";


export default function Home() {

  const {posts, error, loading} = UseFetch("https://jsonplaceholder.typicode.com/posts")

  return (
    <div>
    
    
    
    <div className="container m-auto">
      {posts && posts.map((post) => (
        <Post post={post} key={post.id}/>
      ))}
      {
        error && <p>{error}</p>
      }
      <div className='loader'>
      {loading && <div className="spinner"></div>}
      </div>
    </div>
  
    </div>
  );
}
