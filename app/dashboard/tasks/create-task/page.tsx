import React from 'react';
import { createTask } from '@/actions/actions';
import { revalidatePath } from 'next/cache';
import { Redirect } from 'next';

// nextjs wil ensure that when this form is submitted the form data is sent from the browser to the server action
export default async function Page(){
    return(
        <div className="flex justify-center items-start h-screen w-full p-4 mt-20">
        <div className="flex flex-col w-full h-4/7 max-w-xl bg-white rounded-lg shadow-lg p-8 space-y-6 ">
          <h1 className="text-4xl font-semibold text-gray-800">Create Task</h1>
          <form className = "space-y-4" action = {createTask}>
          <input
            type="text"
            name = 'title'
            placeholder="Title"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <textarea
            placeholder="Description"
            name = 'description'
            rows={6}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none w-full"
            required
          />
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
            Create
          </button>
          </form>
        </div>
      </div>
      
    )
}


/* Saving options 
button
autosave based on time after last input */
// possible option to cache data incase if a user leaves before saving
