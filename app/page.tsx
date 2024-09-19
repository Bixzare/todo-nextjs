import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-screen  flex justify-center items-center main-content home-bg">
      <div className="bg-white w-3/5 h-2/5 shadow-lg flex flex-col justify-center items-center rounded-xl">
        <div className="text-black mt-5 text-8xl mb-4">Tomo</div>
        <Link href = '/dashboard' passHref>
        <button className=" hover:bg-black hover:text-white hover:scale-125 rounded-full p-6 text-3xl mt-4 text-black">Get Started</button>
      </Link>
      </div>
    </div>
  );
}
