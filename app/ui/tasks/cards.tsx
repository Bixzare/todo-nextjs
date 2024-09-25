'use client';

import React from 'react';
import { useState} from 'react';

import{TrashIcon,PencilIcon} from '@heroicons/react/24/outline';
import checkBoxUpdate from "@/app/lib/checkBox";
import deleteTask from '@/app/lib/deleteTask';
import { useRouter } from 'next/navigation';
//import SheetModal from './sheetModal';

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
export default function tasksComponent({data}: {data: any}) {

//const [currentTask, setCurrentTask] = useState<Task | null>(null); // Correct type for the task state
const router = useRouter()
const [tasks, setTasks] =  useState<Task[]>(data);; // Use the correct type instead of `any`
const [open,setOpen] = useState<boolean>(false);
const handleDelete = (taskId: number) =>
{
  deleteTask(taskId)
  router.refresh()
  setTasks(tasks.filter(tasks => tasks.id !== taskId))
  // without setState the cached data that displays the tasks won't update but the database updates
  // router.refresh() makes sure you delete from the cached data locally
}

const handleCheckBoxChange = (taskId:number, isChecked: boolean) =>
{ 
  // ********** Logic for update when checkbox change
  // idea is to maintain the color change in the jsx as that is faster but to not  revaldiate path because it would be faster while still saving the correct version of the task to the db
  checkBoxUpdate(taskId, isChecked)
  const now = new Date().toISOString();
setTasks(tasks.map(task =>
  task.id === taskId ? { ... task, completed: isChecked, created: now } : task
  // opportunity here to optimize and instead of maping the tasks again just try to directly find the one that has the matching ID
));
}
const handleEditClick = (task: Task) => {
  
  router.push(`/dashboard/tasks/${task.id}/edit-task`);
  
  //setCurrentTask(task);
  //setOpen(true);
}
/*const handleClose = () =>
{
  setOpen(false);
  setCurrentTask(null);
}*/
return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {tasks.map((info, index) => (
      <div
        key={index}
        className={`flex flex-col  ${info.completed ? 'bg-green-400/80' : 'bg-red-500/70'} rounded-md`}
      >
        <div className="p-6">
          <h2>{info.title}</h2>
          <h2 className="overflow-hidden text-white/40">
            {info.updatedAt ? info.updatedAt.toLocaleString() : 'Date not available'}
          </h2>
        </div>
        <div className="p-8 overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500/40 scrollbar-track-transparent">
          {info.description}
        </div>
        <div className="flex justify-end p-4 space-x-4 items-center">
          <input
            type="checkbox"
            checked={info.completed}
            onChange={(e) => handleCheckBoxChange(info.id, e.target.checked)}
            className="h-6 w-6 border-4 border-black rounded checked:bg-custom-green checked:border-custom-green"
          />
          <button onClick={() => handleEditClick(info)}>
            <PencilIcon className="w-6" />
          </button>
          <button onClick={() => handleDelete(info.id)}>
            <TrashIcon className="w-6" />
          </button>
        </div>
      </div>
    ))}

    {/*currentTask && (
      <SheetModal open={open} onClose={handleClose}>
        {[
          currentTask.id,
          currentTask.title,
          currentTask.description,
        ]}
      </SheetModal>
    )*/}
  </div>
);
};

// revalidate path works right if its a server component