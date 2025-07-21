import Image from "next/image";

export default function Home() {
  return (
   
     <div className="flex justify-center flex-col items-center h-[44vh] text-white px-4 text-center">
  <div className="font-extrabold text-4xl mb-2">Buy me a chai</div>
  
  <p className="text-sm md:text-base max-w-xl text-gray-300 mb-6">
    A crowd-funding platform to support your projects with chai. Get funded by your fans and followers.
  </p>
  
  <div>
    <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-md ml-4 hover:bg-white hover:text-[#121f4a] transition duration-200">
      Start Now
    </button>
    <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-md ml-4 hover:bg-white hover:text-[#121f4a] transition duration-200">
      Read More
    </button>
  </div>
</div>

  )
}
