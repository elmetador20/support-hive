"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
  

const Navbar = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <nav className='bg-blue-950 text-white flex items-center justify-between h-16 px-4'>
     <div className="text-white font-bold text-xl border border-white px-4 py-2 rounded-md hover:text-[#4f685d] transition cursor-pointer justify-center items-center flex "><span><img src="/tea.gif" width={44} alt="Chai" /></span>
  Get me a Chai
</div>

      <div className='flex justify-between gap-4 '>
        
        <button className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200] rounded-xl m-2 cursor-pointer'>home</button>
        <button className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-xl m-2 cursor-pointer  '>about</button>
        <button className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-xl m-2 cursor-pointer '>project</button>
        <button className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-xl m-2 cursor-pointer'>signup</button>
        <Link href={"/login"}>
          <button  className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-xl m-2 cursor-pointer'>Login</button>
        </Link>

      </div>
    </nav>
  )
}

export default Navbar
