"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        router.replace("https://chat.whatsapp.com/E0ZqhM40lQTJlyhkiBrKxv");
    }, [router]);
    return null;
}

export default NotFound;