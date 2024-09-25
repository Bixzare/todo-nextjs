import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
/**In TypeScript, the ! (non-null assertion operator) is used to tell the compiler that the value preceding it is not null or undefined. This allows you to bypass TypeScript's strict null-checking system, indicating that you are certain the value will always be present at runtime. */