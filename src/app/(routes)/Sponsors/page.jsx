import { Button } from '@/components/ui/button'
import { SponsorsData } from '@/constants/sponsors'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="flex flex-col w-full gap-20 xl:w-4/5">
                <div className="flex flex-col items-center gap-2">
                    <div className="relative leading-none">
                        <h1 className="text-[18vw] Stroke sm:text-[15vw] md:text-[10vw] text-transparent font-semibold">SPONSORS</h1>
                        <div className="absolute inset-0 flex justify-center items-end text-4xl md:text-5xl lg:text-7xl font-bold">
                            SPONSORS
                        </div>
                    </div>
                    <p className="text-lg lg:text-xl text-neutral-400 text-center">Collaborate and innovate to build something awesome! All monetary prizes will be split equally among the winning team members.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
                    {SponsorsData.map((data, index) => (
                        <div key={index} className="flex flex-col gap-4 w-full border rounded-xl">
                            <Image draggable={false} src={data.src} className={`w-full ${data.invert == true ? "invert" : "invert-0"} h-[250px] sm:h-[300px] lg:h-[350px] object-contain p-10 rounded-xl`} width={350} height={350} alt={data.title} quality={100} fetchPriority="high" loading="eager" />
                            {/* <div className="flex items-center justify-between">
                                <h1 className="text-xl truncate">{data.title}</h1>
                                <h1 className="text-xl truncate">{data.desc}</h1>
                            </div> */}
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