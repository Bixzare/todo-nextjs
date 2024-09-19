import Cards from "@/app/ui/tasks/cards"
import React from 'react';
import{PlusCircleIcon} from '@heroicons/react/24/outline';
import Link from "next/link";
import getTasks from "@/app/lib/actions";
import prisma from "@/app/lib/db";


export default async function Page()
{
    const data = await prisma.task.findMany();
   

    return(
        <div className = "p-4 flex flex-col items-start">
            <div className ="flex flex-row justify-between w-full">
            <h1 className = "text-4xl font-bold mb-4 text-white ml-3">All Tasks </h1>
            <Link href ='/dashboard/tasks/create-task'><PlusCircleIcon className = "w-14 mr-3 text-white"/></Link>
            </div>
            <div className = "max-h-[80vh] overflow-y-auto w-full">
            <Cards data ={data}/>
            </div>
        </div>
    )
}
/**Important note, the page.tsx is the server component and if I want to perform server actions such as retriving data from a database need to it here and to pass it to children if needed to be used there */
// max-h[80vh] max viewheight helps enable scrollable if the content inside Cards becomes too large
// overflow-y-auto allows vertical scrolling