import React from 'react'
import { GrSearch } from "react-icons/gr";

const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center gap-2 ring-1 ring-gray-300 rounded-md px-2 py-1 shadow-md shadow-amber-50' >
      <GrSearch className=' text-gray-400'/>
      <input id='search' type="text" placeholder='Search for products' className='outline-none'/>
    </div>
  )
}

export default SearchBar
