'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const tmp = {
      email: formData.get('email') as string,
      name: formData.get('name') as string,
      password: formData.get('password') as string,
      options:{
        data:{
          name: formData.get('name') as string
        }
      }
    }
  
    const { data,error } = await supabase.auth.signUp(tmp)
    if (error) {
      return { status: 'error', message:error.message };
    }
    
    redirect("/confirm-signup")
  }
  // from research it is bad to let people find out who has an account because its a security issue (brute force)
  // if you want to check with supabase its easier to create another table to hold basic user info to check
