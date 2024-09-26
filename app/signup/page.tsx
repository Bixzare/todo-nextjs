'use client';
import { signup} from './actions'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import Spinner from '../ui/loading/spinner';
export default function LoginPage() {

  const [isLoading,setIsLoading]  = useState(false);

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    
    try {
      await signup(formData);
      // Handle successful task creation (e.g., show a success message or redirect)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error creating task:', error);
    }
  };
  useEffect(() => {
    // Cleanup function to reset loading state
    return () => {
        setIsLoading(false); // This will run when the component unmounts
    };
}, []); // Empty dependency array ensures this runs only on unmount

    return (
        <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form className="flex flex-col space-y-4" onSubmit = {handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-700">Username:</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required 
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Re-enter your Password:</label>
              <input 
                id="psw-cnf" 
                name="psw-cnf" 
                type="password" 
                required 
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <button 
              type="submit" 
              className="bg-blue-900 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              disabled = {isLoading}>
            {isLoading ? <Spinner/> : 'Sign up'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <span>Already have an account? </span>
            <Link className="text-blue-600 hover:underline" href="/login" passHref>Log in!</Link>
          </div>
        </div>
      </div>
    )
  }