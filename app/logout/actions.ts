'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'




export async function logout() {
    const supabase = createClient()
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
  
    const { error } = await supabase.auth.signOut()
  
    if (error) {
      redirect(`/error?message=${encodeURIComponent(error.message)}`);
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }

  // ************* logout currently doesn't show correct path in url