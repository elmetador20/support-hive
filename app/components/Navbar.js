"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import SearchUser from './SearchUser'


const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)


  return (
    <nav className='bg-blue-950 text-white flex items-center justify-between md:h-16 px-4 flex-col md:flex-row'>

      <Link
        href="/"
        className=" md:my-5 my-4 relative flex items-center justify-center gap-2 text-white font-bold text-xl px-5 py-2 rounded-lg border border-white bg-white/10 backdrop-blur-md shadow-lg hover:bg-gradient-to-r hover:from-[#4f685d] hover:to-[#8bc6ec] hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <img
          src="/tea.gif"
          width={44}
          alt="Chai"
          className="invertImg  drop-shadow-lg animate-pulse"
        />
        <span className="tracking-wide">Get me a Chai</span>
      </Link>

      <SearchUser/>
      <div className=' relative flex justify-between gap-4 '>





        {session && <>

          <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
            setTimeout(() => {
              setShowdropdown(false)
            }, 300);
          }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-xl m-2 cursor-pointer' type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="dropdown" className={`z-10${showdropdown ? '' : ' hidden'} absolute left-[125px] bg-white divide-y  divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className=" py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>

              <li>
                <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div></>}




        {!session &&
          <Link href={"/login"}>
            <button className='p-4  hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-xl m-2 cursor-pointer'>Login</button></Link>}

      </div>

    </nav>
  )
}

export default Navbar
