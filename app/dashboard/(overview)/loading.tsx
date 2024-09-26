import Spinner from "@/app/ui/loading/spinner";
import React from 'react';

export default function Loading() {
  return (
    <main className='flex w-full h-full justify-center items-center p-4'>
      <div className="bg-white/80 w-3/4 h-3/4 rounded-sm p-4 flex flex-col justify-center items-center">
        <Spinner size="large" className="mb-4" />
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    </main>
  );
}