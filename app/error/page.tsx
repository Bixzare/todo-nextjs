'use client'
import { useRouter } from 'next/router';

export default function ErrorPage() {
    const router = useRouter();
    const { message } = router.query;

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-white">
            <div className="text-black text-lg text-center p-4 rounded-lg shadow-lg">
                <h1>Error</h1>
                <p>{message || "An unexpected error occurred."}</p>
            </div>
        </div>
    );
}
