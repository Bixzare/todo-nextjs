'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const searchParams = useSearchParams()
  const errorMessage = searchParams.get('message') || error.message || "An unexpected error occurred."

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-black bg-white h-1/5 w-2/5 text-lg text-center p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="mb-4">{errorMessage}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}