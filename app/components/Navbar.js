import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-950 text-white flex items-center justify-between h-16 px-4'>
     <div className="text-white font-bold text-xl border border-white px-4 py-2 rounded-md hover:text-[#4f685d] transition cursor-pointer">
  Get me a Logo
</div>

      <ul className='flex justify-between gap-4 '>
        <li className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200] rounded-xl m-2 cursor-pointer'>home</li>
        <li className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-xl m-2 cursor-pointer  '>about</li>
        <li className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-xl m-2 cursor-pointer '>project</li>
        <li className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-xl m-2 cursor-pointer'>signup</li>
        <li className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-xl m-2 cursor-pointer'>Login</li>
          
      </ul>
    </nav>
  )
}

export default Navbar
