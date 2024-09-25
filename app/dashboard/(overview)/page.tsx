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
    console.log(user,"test")
 const keys = user ? Object.keys(user) : []; // Safe check for null
 const email = user?.name || "Email"
    return(
        <main className='flex w-full h-full justify-center p-4'>
            <h1 className = "mb-4 text-xl md:text-2xl">
            </h1>
            <div className="bg-white/80 w-3/4 h-3/4 rounded-sm p-4">
                <div className = "flex justify-center items-center text-6xl text-center">Welcome to Tomo</div>
                <p className =" flex justify-center items-center text-4xl mt-6 text-center">
                    Write.Complete.Next
                </p>
                <h2 className ="text-center mt-10 font-bold">
                    Welcome
                </h2>
                <div>
                    {email}
                </div>
            </div>
        </main>
    );
}
/*
useEffect(() => {
    async function getUser()
    {
         const supabase = createClient()

    const {data, error } = await supabase.auth.getUser()
    if( error|| !data?.user){
        //redirect('/')
        console.log("no user")
    }
    else{
        setUser(data.user as any)
    }
   
}*/