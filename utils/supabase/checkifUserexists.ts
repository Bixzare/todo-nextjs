'use server'
import { createClient } from '@/utils/supabase/server'


export default async function checkUser(email:string){

  const supabase = createClient()

  const {data,error} = await supabase
  .from('auth.users')
  .select('id,email')
  .eq('email',email)
  
  if(error){
    console.error('Error fetching user:',error)
    return null
  }

  if (data.length > 0){
    return true
  }
  else{
    return false
  }
}
