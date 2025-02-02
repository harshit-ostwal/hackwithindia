import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { HumansCategory, HumansData } from '@/constants/humans'
import { Button } from '@/components/ui/button'

function page() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="flex flex-col w-full gap-20 xl:w-4/5">
                <div className="flex flex-col gap-2 items-center">
                    <div className="relative leading-none">
                        <h1 className="text-[18vw] Stroke sm:text-[15vw] md:text-[10vw] text-transparent font-semibold">HUMANS</h1>
                        <div className="absolute inset-0 flex justify-center items-end text-4xl md:text-5xl lg:text-7xl font-bold">
                            HUMANS
                        </div>
                    </div>
                    <p className="text-lg lg:text-xl text-neutral-400 text-center">Collaborate and innovate to build something awesome! All monetary prizes will be split equally among the winning team members.</p>
                </div>
                <Tabs defaultValue={HumansCategory[0]}>
                    <TabsList>
                        {HumansCategory.map((data, index) => (
                            <TabsTrigger value={data} key={index}>{data}</TabsTrigger>
                        ))}
                    </TabsList>
                    {HumansCategory.map((category) => (
                        <TabsContent key={category} value={category} className="flex flex-col items-center justify-center w-full gap-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 w-fit">
                                {HumansData.filter((data) => data.category === category).map((data, index) => (
                                    <div key={index} className="flex flex-col gap-4 w-full">
                                        <Image draggable={false} src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6" className="w-[350px] h-[350px] object-cover rounded-xl" width={350} height={350} alt={category} quality={100} fetchPriority="high" loading="eager" />
                                        <div className="flex items-center justify-between">
                                            <h1 className="text-xl truncate">{data.name}</h1>
                                            <div className="flex gap-4">
                                                <Link target="_blank" href={data.links[0]?.linkedin}><Linkedin /></Link>
                                                <Link target="_blank" href={data.links[0]?.github}><Github /></Link>
                                                <Link target="_blank" href={data.links[0]?.x}><Twitter /></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

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