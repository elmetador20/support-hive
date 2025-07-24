import React from 'react'

const Username = ({params}) => {
  return (
    <>
    <div className='min-h-screen cover  w-full  relative'>
      <img className="object-cover w-full h-[350]"
      src="patreon.gif"
      />
      <div className='absolute  right-[48%] border-2 border-white rounded-full  ' > 
        <img className="rounded-full h-auto  -bottom-full top-1/2" width={45} height={40} src='cat.gif' alt=''/>
      </div>
      
      <div className='info  flex flex-col justify-center items-center my-20 gap-2'>
        <div className='font-bold text-lg '>
              @{params.username} 
        </div>
        <div className='text-slate-400'>
          
            Creating animated art for VIT's
        </div>
        <div className='text-slate-400'>
          9.719 members ,82 posts, $15,450/release
        </div>
      </div>
      <div className='payment mt -11 -top-40 mx-auto justify-center flex  gap-2 w-[80%]  '>
        <div className='supporters text-center text-white rounded-lg px-5 py-3 w-1/2 bg-slate-900'>
        <h2 className='text-lg font-bold'>supporters</h2>

          <ul>
            <li className='my-2'>Shubham donated $30 with a message""</li>
             <li className='my-2'>Shubham donated $30 with a message""</li>
              <li className='my-2'>Shubham donated $30 with a message""</li>
               <li className='my-2'>Shubham donated $30 with a message""</li>
               
                <li className='my-2'>Shubham donated $30 with a message""</li>
            
          </ul>
          </div>
        <div className=' w-1/2 rounded-lg bg-slate-900 makePayment'>
        <h2 className='text-sm font-bold my-2 mx-8 teet-3lg'> Make a payment</h2>
        <div className='flex flex-col gap-2 mx-5'>
          <div>
          <input type="text" className='w-full mx-3 rounded-lg bg-slate-500' placeholder=' Enter your Name'/>
          </div>
          <input type="text" className='w-full mx-3 rounded-lg bg-slate-500' placeholder=' Enter Message'/>
          <input type="text" className='w-full mx-3 rounded-lg bg-slate-500' placeholder=' Enter your amount'/>
          <div className='mx-3 rounded-none'>
          <button className=" w-28 srelative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-whiterounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">pay</span>
</button>
</div>
        </div>
        <div className='flex mx-2 mb-3'>
          <button className='bg-slate-800 p-3 mx-6 rounded-lg'>Pay $10</button>
          <button className='bg-slate-800 p-3 mx-6 rounded-lg'>Pay $20</button>
          <button className='bg-slate-800 p-3 mx-6 rounded-lg'>Pay $30</button>
        </div>

        </div>
      </div>
      </div>
    
    </>
  )
}

export default Username
