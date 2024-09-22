'use server'

import { updateTask,getTaskData } from "@/actions/actions"

export default async function UpdateForm(data:any){
    const test = getTaskData(data)    
   
    // console.log(test)

    return(
        <div className="flex justify-center items-start h-screen w-full p-4 mt-20">
        <div className="flex flex-col w-full h-4/7 max-w-xl bg-white rounded-lg shadow-lg p-8 space-y-6 ">
          <h1 className="text-4xl font-semibold text-gray-800">Update Task</h1>
          <form className = "space-y-4" action = {updateTask}>
          <input
            type="text"
            name = 'title'
            placeholder="Title"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            defaultValue = "test"
            required
          />
          <textarea
            placeholder="Description"
            name = 'description'
            rows={6}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none w-full"
            defaultValue = "testing"
            required
          />
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
            Update
          </button>
          </form>
        </div>
      </div>
    )
}