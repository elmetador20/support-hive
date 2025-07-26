
"use client"
import React from 'react'
import PaymentPage from '../components/PaymentPage'
import { useParams } from 'next/navigation'
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
  // export async function generatemetadaat({params}){
  //   return{
  //     title: `${params.username}-Get me a chai`
  //   }
  // }