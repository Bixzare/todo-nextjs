'use client'
import { login} from './actions'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import Spinner from '../ui/loading/spinner'
import { supabase } from '../lib/initSupabase'
import checkUser from '@/utils/supabase/checkifUserexists'

export default function LoginPage() {
  

  const [isLoading,setIsLoading]  = useState(false);
  const [resetPassword, setResetPassword] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [email,setEmail] = useState("a")
  //const origin = headers().get('origin');

  const emailChange = (event:any) =>{
    setEmail(event.target.value)
  }

  const goToReset = () => {
    setResetPassword(!resetPassword)
  }

  // check that user exists before sending reset
  const sendResetPassword = async () =>{
    const userExists = await checkUser(email);

    if(userExists === true)
    {
      alert("This user does not exist, try signing up first")
      return;
    }
    
      try {
        const {data,error} = await supabase
        .auth.
        resetPasswordForEmail(email, {
          redirectTo: `${window.location.href}/reset`
        })
        setSuccess(true)
    }catch(error){
        console.log(error)
      }
  }

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    try {
      await login(formData);
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
  <div className={`${resetPassword ? "hidden" :""} bg-white p-8 rounded-lg shadow-lg w-full max-w-md`}>

        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
              minLength={6}

            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-900 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
           disabled ={isLoading}>
                        {isLoading ? <Spinner/> : 'Login'}

          </button>
        </form>
        <div className="mt-4 text-center p-2">        
          
          <div className = "p-4"> <span>Forgot Password ? <button onClick ={goToReset} className = "text-blue-600 hover:underline"> Reset Password</button></span></div>

          <span>No account? </span>
          <Link className="text-blue-600 hover:underline" href="/signup" passHref>Sign up!</Link>
        </div>
      </div>
      <div className={`${resetPassword ? "" :"hidden"} bg-white p-8 rounded-lg shadow-lg w-full max-w-md`}>
        <div className ="flex items-center justify-center text-3xl">Password Recovery </div>
        <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              onChange = {emailChange}
            />
            <div className = "space-x-5 mt-10 flex justify-between">
            <button  className = "bg-blue-900 hover:bg-blue-600 text-white p-3 rounded-sm"onClick = {sendResetPassword} disabled = {success}> Reset Password</button> 
            <button className="hover:underline text-blue-600"onClick = {goToReset}>Login</button>
            </div>
            {success && <div className ="bg-green-100 p-3 ">Password Successfuly Reset, check your email</div> }

      </div>
    </div>
  )
}