import React from "react";
import getTasks from "@/app/lib/getTasksFromDB";
import Cards from "@/app/ui/tasks/cards";
import { Suspense } from "react";
import Spinner from "@/app/ui/loading/spinner";
export default async function TaskLoader() {
    
    const data =  await getTasks()
    data.length
    return(
    <Suspense fallback = {<Spinner/>}>
        <div className = "flex justify-center items-center">
            <Cards data={data} />
        </div>
    </Suspense>);
}