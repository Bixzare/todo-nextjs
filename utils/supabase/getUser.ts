'use server';

import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function getUser() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

return data.user}

// ********** how to get user in a server component

// see democlient for how to get in client component

