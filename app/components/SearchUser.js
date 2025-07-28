'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchUser = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');

    const res = await fetch(`/api/check-user?username=${username}`);
    const data = await res.json();

    if (res.ok && data.exists) {
      router.push(`/user/${username}`);
    } else {
      setError('User not found');
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search username..."
        className="border text-blue-700 border-gray-300 px-3 py-1 rounded-full focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-4 text-sm hover:bg-white hover:text-[#121f4a] transition duration-200 rounded-full m-2 font-semibold cursor-pointer bg-blue-400"
      >
        Search
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
};

export default SearchUser;
