import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Pagination (){
  const {page,totalPages,handlePageChange}=useContext(AppContext);
  console.log(page)
  function previousClickHander(){
    console.log("clicked on previous page");
    handlePageChange(page-1);
  }
  function nextClickHandler(){
    console.log("clicked on next button")
    handlePageChange(page+1);
  }
  return (
    <div className='w-full flex justify-center items-center border-3 fixed bottom-0 bg-white'>
      <div className='w-11/12 max-w-[600px] flex justify-between items-center'>
        <div className='flex gap-x-2'>
        {
          page>1 && <button 
          className='rounded-md border px-4 py-1'
          onClick={previousClickHander}>Previous</button>
          
        }
        {
          page<totalPages &&<button
          className='rounded-md border px-4 py-1'
          onClick={nextClickHandler}>Next</button>
        }
        </div>
       
        <p className='font-bold text-sm'>Page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination;