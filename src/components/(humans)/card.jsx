"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import React, { useState } from 'react'
import { Skeleton } from '../ui/skeleton';

function HumanCard({ data }) {

    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="flex flex-col gap-4 w-[280px]">
            {isLoading && <Skeleton className="w-[280px] h-[470px]" />}
            <Image
                src={data.img}
                onLoad={() => setIsLoading(false)}
                className={`${isLoading ? "hidden" : ""} w-full h-[350px] object-cover`}
                alt={data.name}
                quality={100}
                priority={true} fetchPriority="high"
            />
            {!isLoading && (
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold truncate">{data.name}</h1>
                        <h1>{data.role}</h1>
                    </div>
                    {data.socialMedia.map((social, index) => (
                        <div key={index} className="flex gap-4">
                            <Link href={social.linkedin} target="_blank"><FaLinkedin size={32} /></Link>
                            <Link href={social.twitter} target="_blank"><FiTwitter size={32} /></Link>
                            <Link href={social.github} target="_blank"><FaGithub size={32} /></Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HumanCard