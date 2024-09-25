'use client'
import { login} from './actions'
import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [loading,setLoading] = useState(false)
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        <form className="flex flex-col space-y-4">
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
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-900 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
           formAction={login}>
            Log in
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>No account? </span>
          <Link className="text-blue-600 hover:underline" href="/signup" passHref>Sign up!</Link>
        </div>
      </div>
    </div>
  )
}