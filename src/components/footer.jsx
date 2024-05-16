import { SiteLinksData } from '@/data/siteLinks'
import Link from 'next/link'
import React from 'react'
import SocialMedia from './socialMedia'
import getInTouch from "../../public/getInTouchImage.svg"
import Image from 'next/image'

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="flex items-end justify-center w-full min-h-screen text-white bg-black">

            <div className="flex flex-col w-5/6 gap-20 py-10 lg:gap-40">
                <div className="flex w-full">
                    <h1 className="flex flex-col text-6xl font-medium tracking-wide sm:text-7xl md:text-8xl lg:text-9xl">
                        <span>Empower</span>
                        <span>Your Digital</span>
                        <span>Odyssey!</span>
                    </h1>

                    {/* <Image src={getInTouch} className="w-auto h-auto animate-spinner" priority={true} fetchPriority="high" quality={100} alt="GetInTouch" /> */}
                </div>

                <div className="flex flex-col w-full gap-10">
                    <div className="w-full border-t rounded-full border-white/70"></div>

                    <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                        <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
                            {SiteLinksData.map((data, index) => (
                                <Link href={data.href} key={index} className="text-lg relative after:content-[''] hover:text-white/70 after:bg-white/70 after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:duration-300 hover:after:w-full">{data.title}</Link>
                            ))}
                        </div>

                        <SocialMedia />

                    </div>

                    <div className="flex flex-col items-center justify-between gap-2 md:flex-row text-white/70">
                        <p className="text-sm font-light md:text-base">© {year} HackWithIndia, All rights reserved</p>
                        <p className="text-sm font-light md:text-base">Built By Harshit Ostwal</p>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer