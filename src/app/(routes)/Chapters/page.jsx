import { ChaptersData } from '@/constants/chapters'
import { FaWhatsapp } from "react-icons/fa";
import { Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button';

function page() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="flex flex-col w-full gap-20 2xl:w-4/5">
                <div className="flex flex-col gap-2 items-center">
                    <div className="relative leading-none">
                        <h1 className="text-[18vw] Stroke sm:text-[15vw] md:text-[10vw] text-transparent font-semibold">CHAPTERS</h1>
                        <div className="absolute inset-0 flex justify-center items-end text-4xl md:text-5xl lg:text-7xl font-bold">
                            CHAPTERS
                        </div>
                    </div>
                    <p className="text-lg lg:text-xl text-neutral-400 text-center">Collaborate and innovate to build something awesome! All monetary prizes will be split equally among the winning team members.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                    {ChaptersData.map((data, index) => (
                        <div key={index} className="flex relative flex-col gap-4 duration-700 rounded-xl">
                            <Image draggable={false} src={data.src} alt={data.title} width={6000} height={3375} quality={100} className="aspect-video border rounded-xl" fetchPriority="high" loading="eager" />
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-medium">{data.title}</h1>
                                {data.links.map((data, index) => (
                                    <div key={index} className="flex gap-4">
                                        <Link href={data.instagram} target="_blank"><Instagram className="w-7 h-7" /></Link>
                                        <Link href={data.whatsappGroup} target="_blank"><FaWhatsapp className="w-7 h-7" /></Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-8 bg-gradient-to-r from-blue-200 to-rose-200 h-96 justify-center rounded-2xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold">Ready to Join the Revolution?</h1>
                    <p className="text-lg md:text-xl max-w-2xl">
                        Whether you're a student, developer, or tech enthusiast, there's a place for you in our community.
                    </p>
                    <Button>
                        Join HackWithIndia
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default page