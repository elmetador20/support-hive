/* eslint-disable react/no-unescaped-entities */

import React,{useState,useEffect} from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { fetchuser,fetchpayments } from '@/actions/useractions'



const PaymentPage=({ username })=> {
  const [paymentform, setpaymentform] = useState("")
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])


  useEffect(() => {
    getData()
  }, [])
  
  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })

  }
    const getData=async(params)=>{
      let u = await fetchuser(username)
     setcurrentUser(u)
     let dbpayments=await fetchpayments(username)
     setPayments(dbpayments)
    }



  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform)
    let orderID = a.id
    var options = {
      "key":currentUser.razorpayid.trim(), // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. 
      "currency": "INR",
      "name": "Get me  a chai", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderID, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `http://localhost:3000/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }

    }
   var rzp =  new Razorpay(options);
  rzp.open();
    
//if the user is not presernt in the database show 404 error


  }
  return (
    <>
     <Script
  src="https://checkout.razorpay.com/v1/checkout.js"
  strategy="afterInteractive"
/>


     <div className="relative w-full h-[350px]">
  {currentUser?.coverpic && (
    <img
      className="w-full h-full object-cover rounded-b-lg"
      src={currentUser.coverpic}
      alt="Cover Pic"
    />
)}
      {currentUser?.profilepic && (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-48px] w-24 h-24 border-4 border-white rounded-full overflow-hidden shadow-md bg-white">
      <img
        className="w-full h-full object-cover"
        src={currentUser.profilepic}
        alt="Profile Pic"
      />
    </div>
)}
</div>
<div className="mt-16">
        <div className='info  flex flex-col justify-center items-center my-20 gap-2'>
          <div className=" inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,165,0,0.6)] font-extrabold text-2xl animate-text-glow transition-all duration-500 ease-in-out hover:animate-text-glow-hover hover:bg-gradient-to-r hover:from-fuchsia-500 hover:via-purple-500 hover:to-indigo-500 hover:drop-shadow-[0_0_15px_rgba(138,43,226,0.8)] cursor-pointer">
            @{username}
          </div>
          <div className=" font-code text-cyan-400 animate-pulserelative inline-block font-semibold transition-all duration-700 ease-in-out 
  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-700 
  hover:after:w-full hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] cursor-pointer">

           Let's help {username} to get a support
          </div>
          <div className=" flex flex-col md:items-centre font-code text-purple-400 animate-pulse relative md:inline-block font-semibold transition-all duration-700 ease-in-out 
  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-700 
  hover:after:w-full hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] cursor-pointer">
            {currentUser.name} is raising funds for their project!!!
          </div>
          <div  className="ffont-code text-purple-400 animate-pulse relative inline-block font-semibold transition-all duration-700 ease-in-out 
  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-700 
  hover:after:w-full hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] cursor-pointer">
            {payments.length} payments done till now with amount-₹{payments.reduce((a,b)=>a+b.amount,0)}raised
          </div>
        </div>
        <div className='payment mt -11 flex-col md:flex-row -top-40 mx-auto justify-center flex  gap-2 w-[80%]  '>
          <div className='supporters text-center text-white rounded-lg px-5 py-3 w-full  md:w-1/2 bg-slate-900'>
            <h2 className='text-lg font-bold'>Top supporters</h2>

            <ul>
              {payments.length===0 && <li> No payments yet</li>}

              
              {payments.map((p,i)=>{

             
              return <li key={i} className='my-2'>#){p.name} donated ₹{p.amount} with a message "{p.message}" </li>
              })}
            

            </ul>
          </div>
          <div className=' w-full  md:w-1/2 rounded-lg bg-slate-900 makePayment'>
            <h2 className='text-sm font-bold my-2 mx-8 teet-3lg'> Make a payment</h2>
            <div className='flex flex-col gap-2 mx-5'>
              <div>
                <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full mx-3 rounded-lg bg-slate-500' placeholder=' Enter your Name' />
              </div>
              <input onChange={handleChange} value={paymentform.message} name="message" type="text" className='w-full mx-3 rounded-lg bg-slate-500' placeholder=' Enter Message' />
              <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className='w-full mx-3 rounded-lg bg-slate-500' placeholder=' Enter your amount' />
              <div className='mx-3 rounded-none'>
                <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} className=" w-28 srelative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 disabled:bg-slate-700 disabled:from-red-900" disabled={paymentform.name?.length<3||paymentform.message?.lengtt<4||paymentform.amount?.length<1}>
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-whiterounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">pay</span>
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-2  mx-2 mb-3 md:flex-row'>
              <button className='bg-slate-800 p-3 mx-6 rounded-lg' onClick={() => pay(1000)}>Pay ₹10</button>
              <button className='bg-slate-800 p-3 mx-6 rounded-lg' onClick={() => pay(2000)}>Pay ₹20</button>
              <button className='bg-slate-800 p-3 mx-6 rounded-lg' onClick={() => pay(3000)}>Pay ₹30</button>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default PaymentPage

export const metadata = {
    title: "Dashboard - Get Me A Chai",
  }
   