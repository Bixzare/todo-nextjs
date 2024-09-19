import React from 'react';

export default async function Page()
{
    return(
        <main className='flex w-full h-full justify-center p-4'>
            <h1 className = "mb-4 text-xl md:text-2xl">
            </h1>
            <div className="bg-white/80 w-3/4 h-3/4 rounded-sm p-4">
                <div className = "flex justify-center items-center text-6xl ">Welcome to Tomo</div>
                <p className =" flex justify-center items-center text-4xl mt-6">
                    Write.Complete.Next
                </p>
            </div>
        </main>
    );
}