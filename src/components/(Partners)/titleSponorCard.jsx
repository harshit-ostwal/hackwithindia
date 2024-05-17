"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { Skeleton } from '../ui/skeleton'
import { TitleSponorData } from '@/data/titleSponors'

function TitleSponorCard() {

    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {TitleSponorData.map((data, index) => (
                <Link
                    key={index}
                    onMouseEnter={(e) => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={(e) => {
                        setIsHovered(false);
                    }}
                    href={data.titleSponsorLink} className="flex flex-col w-full overflow-hidden outline outline-1 lg:h-80 lg:flex-row rounded-xl outline-white/40 lg:bg-[radial-gradient(ellipse_50%_100%_at_100%_0%,#fa2df2,#000)] bg-[radial-gradient(ellipse_50%_50%_at_80%_120%,#fa2df2,#000)] hover:bg-[radial-gradient(ellipse_50%_50%_at_80%_120%,#ef4444,#000)] lg:hover:bg-[radial-gradient(ellipse_50%_100%_at_100%_0%,#ef4444,#000)]">
                    {isLoading && <Skeleton className="aspect-video" />}
                    <Image src={data.titleSponsorLogo} onLoad={() => setIsLoading(false)} className={`${isLoading ? "hidden" : ""} object-contain w-full bg-white h-1/2 lg:h-full lg:w-1/2 aspect-video`} priority={true} fetchPriority="high" quality={100} alt="MX Logitech" />
                    <div className="flex items-center justify-between w-full p-5">
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-semibold lg:text-3xl">{data.titleSponsorName}</h1>
                                <FiArrowRight size={28} className={`${isHovered ? "-rotate-45" : "rotate-0"} duration-150`} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className='text-sm font-medium lg:text-lg text-white/70'>{data.titleSponsorCategory}</h1>
                                <p className="text-xs lg:text-base">{data.titleSponsorDesc}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default TitleSponorCard