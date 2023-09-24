import React from 'react'

export default function Post({post}) {
  return (
    <div className='p-2'>
        <div>
            <h5 className='p-3 bg-yellow-700 rounded-t-md'>{post.title}</h5>
            <p className='p-3 bg-orange-300 rounded-b-md'>{post.body}</p>
        </div>
    </div>
  )
}
