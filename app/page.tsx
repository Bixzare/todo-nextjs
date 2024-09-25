import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SVGIMG from './ui/icons/logo.svg'
export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center main-content home-bg">
      <div className="bg-white w-3/5 h-3/5 shadow-lg flex flex-col justify-evenly items-center rounded-xl">
        <div className="relative h-3/5 w-full flex justify-center items-center ml-10 ">
          <Image
            src={SVGIMG}
            alt="Tomo Logo"
            layout="fill"
            objectFit="contain" // Maintain aspect ratio
          />
        </div>
        <h1 className="text-4xl text-center">Get Started</h1>
        <div className="p-8 md:space-x-6 flex justify-center">
          <Link href="/login" passHref>
            <button className="hover:bg-black hover:text-white hover:scale-115 rounded-full p-6 text-3xl text-black">Login</button>
          </Link>
          <Link href="/signup" passHref>
            <button className="hover:bg-black hover:text-white hover:scale-115 rounded-full p-6 text-3xl text-black">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
// how to get user in a client component
// see private for how to get in server component