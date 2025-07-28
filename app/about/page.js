/* eslint-disable react/no-unescaped-entities */

import { SparklesIcon, HeartIcon, UsersIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export const metadata= {
  title:"About-Get me a chai",
  
}

const AboutPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-black via-[#0f0c29] to-[#302b63] text-white font-mono">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent animate-pulse drop-shadow-xl">
            Get Me a HIVE
          </h1>
          <p className="text-gray-300 mt-3 text-lg">
            Empowering Creators through Crowdfunding, One Sip at a Time.
          </p>
        </div>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <SparklesIcon className="w-6 h-6 text-pink-400 animate-bounce" />
            How It Works
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:ml-2 transition-all duration-300 ease-in-out">
              🚀 Your fans collaborate directly with you.
            </li>
            <li className="hover:ml-2 transition-all duration-300 ease-in-out">
              🫖 They support you by Funding You.
            </li>
            <li className="hover:ml-2 transition-all duration-300 ease-in-out">
              ✨ You build, they support — it’s a win-win.
            </li>
          </ul>
        </section>

        {/* Creator & Fan Benefits */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-xl shadow-lg hover:shadow-pink-500/20 transition">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">🎨 Creator Benefits</h3>
            <ul className="space-y-2 text-gray-300">
              <li>💰 Direct financial support</li>
              <li>💬 Closer fan engagement</li>
              <li>📊 Access to creative tools</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-xl shadow-lg hover:shadow-yellow-400/20 transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">🤝 Fan Benefits</h3>
            <ul className="space-y-2 text-gray-300">
              <li>🏆 Exclusive rewards and perks</li>
              <li>🎁 Be part of the creation process</li>
              <li>🌍 Connect with your favorite creators</li>
            </ul>
          </div>
        </section>

        {/* Community Engagement */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-green-400">
            <UsersIcon className="w-6 h-6 animate-spin-slow" />
            Community Engagement
          </h2>
          <p className="text-gray-300">
            Dive into a vibrant, collaborative space. Participate in events, discussions, and
            feedback loops that fuel creativity and mutual growth.
          </p>
        </section>

        {/* Access to Resources */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-400">
            <StarIcon className="w-6 h-6 animate-pulse" />
            Unlock Resources
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>📚 Tutorials & Templates</li>
            <li>🧠 Mentorship from top creators</li>
            <li>🧾 Industry insights & updates</li>
          </ul>
        </section>

        {/* Call to Action */}
        <Link href="/login">
        <div className="text-center mt-10">
          <button className="relative inline-block px-6 py-3 font-bold text-white rounded-full overflow-hidden group shadow-md hover:shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-full bg-gradient-to-r from-pink-400 via-yellow-500 to-orange-500 group-hover:translate-x-0"></span>
            <span className="relative z-10">Join the Movement 🚀</span>
          </button>
          
        </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;

