import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import LeftLeaf from "../../../public/LeftLeaf.svg"
import RightLeaf from "../../../public/RightLeaf.svg"
import Image from 'next/image'

function Info3() {
    return (
        <div className="flex flex-col items-center w-full h-full gap-10">
            <div className="flex flex-col items-center max-w-2xl gap-10 text-center lg:max-w-5xl">
                <h1 className="text-3xl font-semibold tracking-wide md:text-4xl lg:text-6xl">Exclusive Tracks By Hive</h1>
                <p className="text-sm md:text-lg lg:text-xl text-white/70">Get to interact and learn more about the amazing <span className="font-bold text-white">Cash Prize</span> by Hive, and win fantastic rewards along the way!</p>
            </div>

            <div className="flex flex-col items-center justify-center w-[95%] lg:w-4/5 gap-10 border border-white border-solid rounded-3xl h-80 md:h-96 bg-gradient-to-tl from-pink-800 to-white/20">
                <div className="flex items-center justify-center gap-0 md:gap-4">
                    <Image
                        src={LeftLeaf}
                        alt="leaf"
                        className="w-10 md:w-16"
                        quality={100}
                        priority={true} fetchPriority="high"
                    />
                    <h1 className="text-lg font-semibold tracking-wider text-center capitalize text-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Hive Macro Challenge</h1>
                    <Image
                        src={RightLeaf}
                        alt="leaf"
                        className="w-10 md:w-16"
                        quality={100}
                        priority={true} fetchPriority="high"
                    />
                </div>
                <div className="flex gap-5">
                    <Link href={"https://discord.gg/SuFVSywvVs"} target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black duration-150 bg-white md:py-3 md:text-base md:px-10 hover:scale-95 w-fit">Discord Server<FiArrowUpRight size={28} /></Link>
                    <Link href={"https://shorturl.at/P0478"} target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black duration-150 bg-white md:py-3 md:text-base md:px-10 hover:scale-95 w-fit">Track Details<FiArrowUpRight size={28} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Info3