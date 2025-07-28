/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { initiate, fetchuser, fetchpayments } from '@/actions/useractions'

const PaymentPage = ({ username }) => {
  const [paymentform, setpaymentform] = useState("")
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform)
    let orderID = a.id
    const options = {
      key: currentUser.razorpayid.trim(),
      amount,
      currency: "INR",
      name: "Get me a chai",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderID,
      callback_url: `https://support-hive-mu.vercel.app/api/razorpay`,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "+919876543210"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#6366f1"
      }
    }
    const rzp = new Razorpay(options)
    rzp.open()
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

      {/* Cover + Profile */}
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        {currentUser?.coverpic && (
          <img className="w-full h-full object-cover rounded-b-xl" src={currentUser.coverpic} alt="Cover" />
        )}
        {currentUser?.profilepic && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-48px] w-24 h-24 border-4 border-white rounded-full overflow-hidden shadow-lg bg-white">
            <img className="w-full h-full object-cover" src={currentUser.profilepic} alt="Profile" />
          </div>
        )}
      </div>

      <div className="mt-20 px-4 sm:px-8">
        {/* Info */}
        <div className="flex flex-col items-center gap-3 text-center mb-10">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text drop-shadow-md">
            @{username}
          </h1>
          <p className="text-cyan-400 font-medium hover:text-cyan-300 transition duration-300 cursor-pointer">
            Let's help {username} to get support
          </p>
          <p className="text-purple-400 font-medium animate-pulse">
            {currentUser.name} is raising funds for their project!!!
          </p>
          <p className="text-purple-300 text-sm">
            {payments.length} supporters | ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
          </p>
        </div>

        {/* Payment Section */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto">
          {/* Supporters List */}
          <div className="w-full md:w-1/2 bg-slate-900 text-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Top Supporters</h2>
            <ul className="space-y-3 text-sm">
              {payments.length === 0 && <li>No payments yet</li>}
              {payments.map((p, i) => (
                <li key={i} className="bg-slate-800 rounded-md p-3 shadow-sm">
                  <span className="font-semibold">#{i + 1}) {p.name}</span> donated ₹{p.amount}<br />
                  <span className="italic text-gray-300">"{p.message}"</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Form */}
          <div className="w-full md:w-1/2 bg-slate-900 text-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Make a Payment</h2>
            <div className="space-y-4">
              <input
                onChange={handleChange}
                value={paymentform.name}
                name="name"
                type="text"
                className="w-full px-4 py-2 rounded-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter your Name"
              />
              <input
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                type="text"
                className="w-full px-4 py-2 rounded-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter a Message"
              />
              <input
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
                type="number"
                className="w-full px-4 py-2 rounded-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter Amount (₹)"
              />
              <button
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white font-semibold hover:brightness-110disabled:bg-slate-700 disabled:from-red-900"
                disabled={paymentform.name?.length<3||paymentform.message?.lengtt<4||paymentform.amount?.length<1}
              >
                Pay Custom Amount
              </button>
              <div className="flex flex-wrap gap-3 justify-center mt-4">
                <button className="bg-slate-800 px-5 py-2 rounded-lg hover:bg-slate-700" onClick={() => pay(1000)}>Pay ₹10</button>
                <button className="bg-slate-800 px-5 py-2 rounded-lg hover:bg-slate-700" onClick={() => pay(2000)}>Pay ₹20</button>
                <button className="bg-slate-800 px-5 py-2 rounded-lg hover:bg-slate-700" onClick={() => pay(3000)}>Pay ₹30</button>
              </div>
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
