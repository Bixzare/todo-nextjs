import React from 'react';
import Spinner from './ui/loading/spinner';
export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-3/5 h-3/5 shadow-lg flex flex-col justify-evenly items-center rounded-xl animate-pulse">
        <div className="relative h-3/5 w-full flex justify-center items-center ml-10">
            <Spinner size = "large"/>
          <div className="bg-gray-300 h-full w-full rounded-lg"></div>
        </div>
        <h1 className="text-4xl text-center text-gray-400">Loading...</h1>
        <div className="p-8 md:space-x-6 flex justify-center">
          {/* Placeholder buttons */}
          <div className="bg-gray-300 rounded-full p-6 text-3xl text-transparent"></div>
          <div className="bg-gray-300 rounded-full p-6 text-3xl text-transparent"></div>
        </div>
      </div>
    </div>
  );
}
