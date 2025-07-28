import React from 'react'

const Footer = () => {
  const currentYear=new Date().getFullYear();
  return (
    <div className='bg-blue-950 text-white h-16 px-4 flex items-center justify-center shadow-md'>
      <p>Copyright &copy; {currentYear} Support-Hive - Fund your project with chai-All rights reserved!!</p>
    </div>
  )
}

export default Footer
