import React , {useEffect , useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UseFetch } from '../../hooks/UseFetch';

export default function Edit() {
  
  const [title , setTitle] = useState('')
  const [content , setContent] = useState('')
  const [valutaionerror, setValutaionError] =useState('')
  const [modifideField , setModifideField] = useState({})
  const navigate = useNavigate()

  const loacation = useLocation()

  const {state : post} = loacation
  

  const {posts, error, optionsData} = UseFetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, "PATCH")

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
    console.log(modifideField)
    optionsData(modifideField)
  }

  useEffect(() => {
    setTitle(post.title)
    setContent(post.body)
    if(posts.length!==0){
      const timer = setTimeout(() => navigate("/"),3000)
      return () => clearTimeout(timer)
    }
  },[posts , navigate, post.title, post.body])

  const onTitleChange = (e) => {
    setTitle(e.target.value)
    setModifideField({...modifideField,title:e.target.value})
  }
  const onContentChange = (e) => {
    setContent(e.target.value)
    setModifideField({...modifideField,body:e.target.value})

  }

  return (
    <div className='container mx-auto mt-11'>
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <label className='mb-2 text-xl font-semibold'>Title: </label>
        <input type='text' className='rounded-md p-2' value={title} onChange={onTitleChange}/>
        
      </div>

      <div className='flex flex-col'>
        <label className='mb-2 mt-8 text-xl font-semibold'>Content:</label>
        <textarea rows='8' className='rounded-md p-2' value={content} onChange={onContentChange}></textarea>
      </div>
      {
        valutaionerror && <div>{valutaionerror}</div>
      }
      {
        posts.length!==0 && <div>Post edited successfully</div>
      }
      {
        error && <div>{error}</div>
      }
      <div className='flex justify-end'>
      <button type='submit' className='bg-red-600 text-white text-xl font-semibold py-1 px-2 rounded-md mt-7'>Edit</button>
      </div>
      </form>
    </div>
  )
}
