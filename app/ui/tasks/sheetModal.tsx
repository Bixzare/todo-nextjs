/*ABANDONED
Had to double click to create task and a whole bunch of other issues, might try it again in future */

import { useEffect } from "react";
import { updateTask } from '@/actions/actions';
import React, {ReactNode} from 'react'
import update from '@/app/lib/deleteTask';

interface sheetProps {
   open: boolean;
   onClose: ()=> void;
   children:React.ReactNode;
}
// first div is the darker background and makes it close if you click on it
// e.stopPropagation ensures this doesn't buttle up to overlay causing problems
const SheetModal: React.FC<sheetProps> =({open, onClose, children}) =>
{   //const {id,title,description}: any = children;
    const childrenArray = React.Children.toArray(children) as ReactNode[];

    const [id, title, description] = childrenArray as [number,string,string];
    console.log("current task",id,title,description,"d")
    return(
        <div
  className={`fixed inset-0 flex justify-end items-center 
    transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
  onClick={onClose}
>
  <div
    className={`bg-white rounded-l-lg shadow-lg p-6
      transition-transform transform ${open ? "translate-x-0" : "translate-x-full"}
      h-full w-3/4 max-w-md`}
    onClick={(e) => e.stopPropagation()}
  >
    <div className="flex flex-col w-full h-4/7 max-w-xl bg-white rounded-lg shadow-lg p-8 space-y-6 ">
          <h1 className="text-4xl font-semibold text-gray-800">Update Task</h1>
          <form className = "space-y-4" action = {updateTask}>
          <input
              type="hidden"
              name="id"
              value={id}
            />
          <input
            type="text"
            name = 'title'
            placeholder="Title"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            defaultValue = {title}
            required
          />
          <textarea
            placeholder="Description"
            name = 'description'
            rows={6}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none w-full"
            defaultValue = {description}
            required
          />
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" type= "submit">
            <div>
            Update
            </div>
          </button>
          </form>
        </div>
    {/*<button
      className="absolute top-2 right-2 py-1 px-2 
        border border-neutral-200 rounded-md text-gray-400
        bg-white hover:bg-gray-50 hover:text-gray-600"
      onClick={onClose}
    >
      X
    </button> */}
  </div>
</div>

    )
}
// props pased through children are in order task id , title and description
// NEed to figure out how to revaldiate when make changes to DB
export default SheetModal