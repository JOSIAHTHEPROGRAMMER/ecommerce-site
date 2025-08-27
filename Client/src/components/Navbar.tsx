import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchBar from './SearchBar'
import { GoHome } from 'react-icons/go'
import { CgBell } from 'react-icons/cg'
import { CiShoppingCart } from 'react-icons/ci'



const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between py-4 pb-4 mb-4 border-b border-gray-300'>
        {/* left */}
       <Link href="/" className='flex items-center gap-2'>
       <Image 
       className='w-8 h-8 md:h-11 md:w-11 flex items-center' 
       src="/logo.png" 
       alt="logo" 
       width={100} height={24}/>
       <p className='hidden md:block text-md font-medium tracking-wider'>WeGoShop.</p>
        
       </Link>

       <div className='flex items-center gap-6'>
         <SearchBar/>
         <Link href="/cart" className=''>
          <GoHome className='text-2xl cursor-pointer hover:text-blue-500'/>
         </Link>
         <CgBell className='text-2xl hover:text-blue-500 cursor-pointer'/>
         <CiShoppingCart  className='text-2xl cursor-pointer hover:text-blue-500 '/>

         <Link className='hover:text-blue-500' href="/login" >Sign Up</Link>
       </div>
    </nav>
  )
}

export default Navbar
