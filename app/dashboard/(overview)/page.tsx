'use server'
import React from 'react';
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import getUser from '@/utils/supabase/getUser';
interface User {
    id: string;
    email: string;
    // add other properties as needed
}

export default async function Page()
{
    const user:any = await getUser()
 const email = user?.user_metadata.name || "Email"
    return(
        <main className='flex w-full h-full justify-center p-4'>
        <h1 className="mb-4 text-xl md:text-2xl"></h1>
        <div className="bg-white/80 w-3/4 h-3/4 rounded-sm p-4">
            <div className="flex justify-center items-center text-6xl text-center break-words md:text-6xl sm:text-4xl">
                Welcome to Tomo
            </div>
            <div className="flex justify-center items-center text-4xl mt-6 text-center break-words md:text-4xl sm:text-2xl">
                Write.Complete.Next
            </div>
            <h2 className="text-center mt-10 font-bold text-3xl">
                Welcome
            </h2>
            <div className="flex justify-center items-center text-4xl mt-6 break-words md:text-4xl sm:text-2xl">
                {email}
            </div>
        </div>
    </main>
    
    );
}
