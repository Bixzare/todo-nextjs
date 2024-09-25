'use client'
import React from 'react';
import { useState,useEffect } from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

interface User {
    id: string;
    email: string;
    // add other properties as needed
}


export default function Page(){

    const [user,setUser] = useState<User | null>(null);

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
       
    }
    getUser()
 },[])
 const keys = user ? Object.keys(user) : []; // Safe check for null
 const email = user?.email || "Email"

    return (<div className = "p-6 w-full h-full flex justify-center items-center">
        <div className = 'w-full h-full bg-white/80 p-4'>
        <h1 className = "text-6xl text-center">Account</h1>
        <div>Email: {email}</div>
        </div>

    </div>);
}