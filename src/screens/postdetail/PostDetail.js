import React from "react";
import { useLocation } from "react-router-dom";

export default function PostDetail() {

  const location = useLocation();

  const {state} = location
 
  
  return (
    <div className='container m-auto pt-7'>
      
      <h1 className='text-4xl'>{state.title}</h1>
      <br/>
      <p>{state.body}</p>
      

      <div className="flex justify-end mt-7 mr-14">
        <button className='bg-red-600 py-1 px-2 text-white rounded-md'>Delete</button>
        <button className='bg-red-600 py-1 px-2 ml-4 text-white rounded-md'>Edit</button>
      </div>

    </div>
  );
}
