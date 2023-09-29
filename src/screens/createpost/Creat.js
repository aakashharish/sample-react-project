import React, { useEffect, useState } from 'react'
import { UseFetch } from '../../hooks/UseFetch'
import { useNavigate } from 'react-router-dom'

export default function Creat() {

  const [title , setTitle] = useState('')
  const [content , setContent] = useState('')
  const [valutaionerror, setValutaionError] =useState('')

  const navigate = useNavigate()
  const { posts, error, optionsData } = UseFetch("https://jsonplaceholder.typicode.com/posts", "POST")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!title){
    setValutaionError('Title should not be empty')
    return
    }
    if(!content){
    setValutaionError('Content should not be empty')
    return
    }
    setValutaionError('')
    console.log({title , body:content, userId:1})
    optionsData({title , body:content, userId:1})
  }

  useEffect(() => {
    if(posts.length!==0){
      const timer = setTimeout(() => navigate("/"),3000)
      return () => clearTimeout(timer)
    }
  })

  return (
    <div className='container mx-auto mt-11'>
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <label className='mb-2 text-xl font-semibold'>Title: </label>
        <input type='text' className='rounded-md p-2' value={title} onChange={(e) => setTitle(e.target.value)}/>
        
      </div>

      <div className='flex flex-col'>
        <label className='mb-2 mt-8 text-xl font-semibold'>Content:</label>
        <textarea className='rounded-md p-2' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      {
        valutaionerror && <div>{valutaionerror}</div>
      }
      {
        posts.length!==0 && <div>Post created successfully</div>
      }
      {
        error && <div>{error}</div>
      }
      <div className='flex justify-end'>
      <button type='submit' className='bg-red-600 text-white text-xl font-semibold py-1 px-2 rounded-md mt-7'>Creat</button>
      </div>
      </form>
    </div>
    
  )
}
