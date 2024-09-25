import { signup} from './actions'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
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
              <label htmlFor="name" className="block text-gray-700">Name:</label>
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
            <button 
              type="submit" 
              className="bg-blue-900 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            formAction={signup}>
              Sign up
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