"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi';
import { Skeleton } from '../ui/skeleton';

function SponorsCard({ data }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Link
            onMouseEnter={(e) => {
                setIsHovered(true);
            }}
            onMouseLeave={(e) => {
                setIsHovered(false);
            }}
            href={data.sponorsLink} className="flex flex-col w-full h-full overflow-hidden border border-solid rounded-xl border-white/40">
            {isLoading && <Skeleton className="aspect-video" />}
            <Image src={data.sponorsImg} onLoad={() => setIsLoading(false)} className={`${isLoading ? "hidden" : ""} object-contain p-5 bg-white w-full aspect-video`} priority={true} fetchPriority="high" quality={100} alt={data.sponorsName} />
            <div className="flex items-center justify-between p-5">
                <div className="flex flex-col">
                    <h1 className="text-lg font-semibold">{data.sponorsName}</h1>
                    <h1 className="font-medium text-white/70">{data.sponorsCategory}</h1>
                </div>
                <FiArrowRight size={28} className={`${isHovered ? "-rotate-45" : "rotate-0"} duration-150`} />
            </div>
        </Link>
    )
}

export default SponorsCard