import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';
import './Blogs.css';
import '../App.css'
// import Card from "./Card"
 
function Blogs() {
  const {posts,loading}=useContext(AppContext);
 

  return (
    <div className='w-11/12 max-w-[600px] py-8 flex flex-col gap-y-2 mt-[64px] mb-[70px] justify-center'>
      {
        loading?(<Spinner/>):
        (       
         
          posts.length===0?(<div>No Post Found</div>):
          (
             posts.map((post)=>{
              return  <div key={post.id}>
              <p className='font-bold text-lg '>{post.title}</p>
              <p className='text-xm mt-[4px]'>By <span className='italic '>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
              <p className='text-xs mt-[4px]'>{post.date}</p>
              <p className='text-md mt-[10px]'>{post.content}</p>
              <div>
                {post.tags.map((tag,index)=>{
                  return <span key={index} className='text-blue-500 font-bold underline text-[10px] m-[5px]'>{`#${tag}`}</span>
                })}
              </div>
            </div>
             })
          
          )
        )
      }
    
    </div>
  )
}

export default Blogs;
