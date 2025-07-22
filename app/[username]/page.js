import React from 'react'

const Username = ({params}) => {
  return (
    <div>
      <h1 className='bg-white text-neutral-900'>{params.username}</h1>  
    </div>
  )
}

export default Username
