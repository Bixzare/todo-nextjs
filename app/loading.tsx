import React from 'react';
import Spinner from './ui/loading/spinner';
export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      
            <Spinner size = "large"/>
          
    </div>
  );
}
