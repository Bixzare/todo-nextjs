import React from "react";
import Spinner from "@/app/ui/loading/spinner";

export default function Loading()
{
    return(
        <div className="flex justify-center items-center h-full">
        <Spinner />
    </div>
    )
}