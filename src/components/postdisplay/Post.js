import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Post({post}) {

  const navigate = useNavigate()

  const handClick = () => {
    navigate(`/post/${post.id}`,{state:post})
  }
  

  return (
    <div className='p-2'>
        <div onClick={handClick}> 
            <h5 className='p-3 bg-yellow-700 rounded-t-md'>{post.title}</h5>
            <p className='p-3 bg-orange-300 rounded-b-md'>{post.body}</p>
        </div>
    </div>
  )
}
