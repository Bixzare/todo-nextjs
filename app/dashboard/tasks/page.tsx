import Cards from "@/app/ui/tasks/cards"
import React, { Suspense} from 'react';
import{PlusCircleIcon} from '@heroicons/react/24/outline';
import Link from "next/link";
import getTasks from "@/app/lib/getTasksFromDB";
import Spinner from "@/app/ui/loading/spinner";
//import TaskLoader from "./TaskLoader";
export default async function Page()
{
    const data =  await getTasks()
    

    return(
        <div className = "p-4 flex flex-col items-start">
            <div className ="flex flex-row justify-between w-full">
            <h1 className = "text-4xl font-bold mb-4 text-white ml-3">All Tasks </h1>
            <Link href ='/dashboard/tasks/create-task'><PlusCircleIcon className = "w-14 mr-3 text-white"/></Link>
            </div>
            <div className = "max-h-[80vh] overflow-y-auto w-full overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500/20 scrollbar-track-transparent">
            {/* {<TaskLoader/>} */}
            <Cards data = {data}/>
            </div>
        </div>
    )
}
/**Important note, the page.tsx is the server component and if I want to perform server actions such as retriving data from a database need to it here and to pass it to children if needed to be used there */
// max-h[80vh] max viewheight helps enable scrollable if the content inside Cards becomes too large
// overflow-y-auto allows vertical scrolling