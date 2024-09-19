'use client';

import React from 'react';
import { useState} from 'react';

import{TrashIcon,PencilIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import getTasks from "@/app/lib/actions";


// react functional component is a type definition that helps describe and ensures type safety
  // key is important for redendering epsically on changes
  // can pass props to Link

  interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string; 
    updatedAt: string; 
  }
export default function RandomInfoComponent({data}: {data: any}) {
  

const [tasks, setTasks] =  useState<Task[]>(data);; // Use the correct type instead of `any`
console.log('tasks',tasks,'tasks1')
const handleDelete = () =>
{
alert("The delete function will be implemented soon")
}

const handleCheckBoxChange = (taskId:number, isChecked: boolean) =>
{ const now = new Date().toISOString();
setTasks(tasks.map(task =>
  task.id === taskId ? { ... task, completed: isChecked, created: now } : task
));
}


return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {tasks.map((info, index) => (
      <div
        key={index}
        className={`flex flex-col  ${info.completed ? 'bg-green-400/80': 'bg-red-500/70'} rounded-md`}
      >
        <div className="p-6">
          <h2>{info.title}</h2>
          <h2 className="overflow-hidden text-white/60">
            Updated at : {info.updatedAt ? info.updatedAt.toLocaleString() : 'Date not available'}
          </h2>
        </div>
        <div className="p-8">{info.description}</div>
        <div className = "flex justify-end p-4 space-x-4 items-center">
          <input type="checkbox" checked={info.completed} 
          onChange ={(e) => handleCheckBoxChange(info.id,e.target.checked) }
          className = "h-6 w-6 border-4 border-black rounded checked:bg-custom-green checked:border-custom-green"/>
          <Link href="/create-task"><PencilIcon className = "w-6"/></Link>
          <button onClick ={handleDelete}><TrashIcon className = "w-6"/></button>
          
          </div>
        
      </div>
    ))}
  </div>
);

};