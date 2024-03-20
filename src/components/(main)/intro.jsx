import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Intro() {
    return (
        <div className="flex flex-col items-center w-full min-h-full gap-20 p-3 py-20 md:p-40 justify-evenly xl:flex-row">
            <div className="flex flex-col items-center justify-center gap-10 xl:items-start">
                <div className="flex flex-col text-center text-white xl:text-start">
                    <p className="text-sm font-medium tracking-widest sm:text-lg">MICROSOFT</p>
                    <p className="text-sm font-medium tracking-widest sm:text-lg">PRESENTS</p>
                    <h1 className="pt-5 text-5xl font-bold tracking-widest sm:text-6xl md:text-7xl 2xl:text-8xl">INAUGRAL</h1>
                    <h1 className="pb-5 text-5xl font-bold tracking-widest sm:text-6xl md:text-7xl 2xl:text-8xl">EDITION</h1>
                    <p className="text-sm font-medium tracking-wide sm:text-lg">The 1st iteration of Hackthon,</p>
                    <p className="text-sm font-medium tracking-wide sm:text-lg">"Cultivating Innovation, Harvesting Tomorrow"</p>
                </div>
                <Link href={""} className="px-6 py-3 font-semibold text-black bg-amber-500 rounded-tr-2xl rounded-bl-2xl">Join Us</Link>
            </div>
            <div className="relative">
                <Image width={600} height={332} quality={100} loading="lazy" src="/AppleVisionPro.png" alt="Apple Vision Pro" />
                <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] flex font-bold text-4xl lg:text-7xl">
                    <h1>00</h1>
                    <span>:</span>
                    <h1>00</h1>
                    <span>:</span>
                    <h1>00</h1>
                    <span>:</span>
                    <h1>00</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro