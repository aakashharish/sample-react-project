import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='bg-red-500'>
        <header className='flex justify-between p-4'>
          <Link to="/"><h1 className='pl-10 font-bold text-2xl'>Blog</h1></Link>
            <div className='flex'>
                <Link to="/"><p className='pr-14 font-semibold'>Home</p></Link>
                <Link to="/create"><p className='pr-10 font-semibold'>Creat Post</p></Link>
            </div>
        </header>
    </div>
  )
}
