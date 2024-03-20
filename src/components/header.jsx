import { GanttChart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className="flex items-center justify-between w-full p-5 lg:px-20">
            <div className="flex items-center justify-center text-white gap-5">
                <span className="block sm:hidden"><GanttChart /></span>
                <Link href={"/"} className="flex flex-col leading-none cursor-pointer">
                    <span className="text-3xl font-bold sm:text-4xl">HACK</span>
                    <span className="font-semibold tracking-tight sm:tracking-normal sm:text-lg">WITH INDIA</span>
                </Link>
            </div>
            <div className="items-center hidden gap-10 sm:flex">
                <Link href={"/About"} className="font-medium text-white duration-200 hover:text-amber-500">About</Link>
                <Link href={"/Gallery"} className="font-medium text-white duration-200 hover:text-amber-500">Gallery</Link>
                <Link href={"/Contact"} className="font-medium text-white duration-200 hover:text-amber-500">Contact</Link>
                <Link href={""} className="px-8 py-4 font-semibold bg-amber-500 rounded-tr-2xl rounded-bl-2xl">Join Us</Link>
            </div>
            <div className="flex sm:hidden">
                <Link href={""} className="px-6 py-3 font-semibold sm:py-4 sm:px-8 bg-amber-500 rounded-tr-2xl rounded-bl-2xl">Join Us</Link>
            </div>
        </div>
    )
}

export default Header