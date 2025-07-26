
"use client"
import React from 'react'
import PaymentPage from '../components/PaymentPage'
const Username = ({params}) => {


  if(!params.username){
    return notFound()

  }
  return (
    <>
      <PaymentPage username={params.username}/>
    
    </>
  )
}

export default Username
