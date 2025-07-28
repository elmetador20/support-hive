import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-center flex-col items-center h-[44vh] text-white px-5 md:px-0 text-xs md:text-base">
        <div className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight hover:scale-105 transition duration-300 animate-fade-in">
          Support Hive
        </div>

        <p className="text-sm m-4 md:text-base max-w-xl text-gray-300 mb-2 text-center animate-fade-in delay-100">
          A crowd-funding hive where your supporters fuel your passion.
        </p>
        <p className="text-sm md:text-base max-w-xl text-gray-300 mb-6 text-center animate-fade-in delay-200">
          Let your fans back your creativity — one drop of support at a time.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-300">
          <Link href="/login">
            <button className="bg-[#fff] text-[#121f4a] font-bold px-6 py-2 rounded-md hover:bg-[#121f4a] hover:text-white transition-all duration-300 shadow-md">
              🚀 Start Now
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-white text-[#121f4a] font-bold px-6 py-2 rounded-md hover:bg-[#121f4a] hover:text-white transition-all duration-300 shadow-md">
              📖 Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-15"></div>

      {/* Features Section */}
      <div className="container mx-auto px-5 sm:px-10 pb-32 pt-16">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-20 text-white animate-fade-in">
          Let your community fund your next creation, one sip at a time.
        </h1>

        <div className="flex flex-wrap gap-10 justify-center items-center">
          {[
            {
              img: "/chai1.gif",
              title: "Fans want to help",
              desc: "Your fans are available for you to help you"
            },
            {
              img: "/coin.gif",
              title: "Support isn’t a favor — it’s a movement",
              desc: "Let your community empower you"
            },
            {
              img: "/fans.gif",
              title: "Fans want to help",
              desc: "Behind every creator is a hive of supporters ready to make dreams real."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="text-white space-y-3 flex flex-col items-center text-center max-w-xs p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 animate-fade-in delay-300 bg-[#1e1e1e]"
            >
              <img width={100} src={item.img} alt={item.title} className="w-24 h-24 mx-auto mb-2 p-2 rounded-full bg-white/10" />
              <p className="font-bold">{item.title}</p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white h-0.5 opacity-15"></div>

      {/* About Section */}
      <div className="container py-16 mx-auto flex flex-col items-center justify-center px-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-10 text-white animate-fade-in">
          Learn More About Us!!
        
        </h1>

        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] h-[30vh] sm:h-[40vh] rounded-lg overflow-hidden shadow-lg animate-fade-in delay-200">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/94vwZ5fyT7k?si=b1cebhVcXJIAaIA5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}
