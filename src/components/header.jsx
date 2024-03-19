import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className="flex items-center justify-around p-2 bg-white">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold">HACK</h1>
                <h2 className="text-lg font-semibold">WITH INDIA</h2>
            </div>
            <div className="flex items-center justify-center gap-10">
                <Link href={""} className="font-medium duration-200 hover:text-violet-700">About</Link>
                <Link href={""} className="font-medium duration-200 hover:text-violet-700">Gallery</Link>
                <Link href={""} className="font-medium duration-200 hover:text-violet-700">Contact</Link>
                <Link href={""} className="px-8 py-4 font-semibold bg-amber-500 rounded-tr-2xl rounded-bl-2xl">Join Us</Link>
            </div>
        </div>
    )
}

export default Header