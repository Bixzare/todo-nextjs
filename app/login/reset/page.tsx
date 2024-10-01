'use client'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import Spinner from '@/app/ui/loading/spinner';
import { supabase } from '@/app/lib/initSupabase';
import { redirect } from 'next/navigation';
export default function Reset() {
  

  const [isLoading,setIsLoading]  = useState(false);
  const [resetPassword, setResetPassword] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false);

  const handleReset = async () =>{
    setResetPassword(!resetPassword)
  }
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);

    if(formData.get("password") !== formData.get("psw-cnf"))
        {
          console.log(`${formData.get("password")},${formData.get("psw-cnf")}`)
          alert("Passwords don't match !")      
          setIsLoading(false);
    
          return;
        }
    try{
    const {error} = await supabase
    .auth
    .updateUser({password:formData.get('password') as any})
    redirect('/')
    }catch(error){
  console.log(error)
    }

  };
  useEffect(() => {
    return () => {
        setIsLoading(false); 
    };
}, []); 

  return (
    <div className="flex justify-center items-center min-h-screen">
  <div className={`bg-white p-8 rounded-lg shadow-lg w-full max-w-md`}>

        <h2 className="text-2xl font-bold text-center mb-6">Enter your new password</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
          <div>
            <label htmlFor="password" className="block text-gray-700">Confirm Password:</label>
            <input 
              id="password" 
              name="psw-cnf" 
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
                        {isLoading ? <Spinner/> : 'Confirm'}

          </button>
        </form>
       
      </div>
    </div>
  )
}

// make success message for password succesfully reset