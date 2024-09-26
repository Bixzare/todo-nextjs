import React from 'react';

export default function SkeletonCard(){
    return(
        <div className="bg-gray-200 animate-pulse rounded-md shadow-md p-4 m-2">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-1"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
    )
}