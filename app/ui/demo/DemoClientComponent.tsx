'use client'
import { useState,useEffect } from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import getUser from "@/utils/supabase/getUser"

export default function DemoClient(){
    const [user,setUser] = useState(null)

    useEffect(() => {
        const tmp = getUser()
        setUser(tmp as any)
 },[])
    console.log({user})

    return(<h2 className ="text-white">Client Component</h2>)
}