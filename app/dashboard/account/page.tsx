
import React from 'react';
import { createClient } from "@/utils/supabase/client"
import getUser from '@/utils/supabase/getUser';
interface User {
    id: string;
    email: string;
    // add other properties as needed
}


export default async function Page(){

    
   const user:any = await getUser()
 const email = user?.email || "Email"
 const name = user?.user_metadata.name || "Name"
    return (<div className = "p-6 w-full h-full flex justify-center items-center">
        <div className = 'w-full h-full bg-white/80 p-4'>
        <h1 className = "text-6xl text-center">Account</h1>
        <div>Email: {email}</div>
        </div>

    </div>);
}