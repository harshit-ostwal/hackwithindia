"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TitleSponorCard from './titleSponorCard'
import { SponorsCardData } from '@/data/sponorsData'
import SponorsCard from './sponorsCard'

function Info() {
    return (
        <div className="flex flex-col items-center w-full h-full gap-10">
            <div className="flex flex-col items-center max-w-5xl gap-10 text-center">
                <h1 className="text-6xl font-semibold tracking-widest">Partners</h1>
                <p className="md:text-xl text-white/70">We are proud to collaborate with visionary organizations that share our passion for innovation and technology. These esteemed partners play a crucial role in making our hackathon a success.</p>
            </div>
            <Tabs defaultValue="Sponsor" className="flex flex-col items-center justify-center w-[95%] lg:w-4/5">
                <TabsList>
                    <TabsTrigger value="Sponsor">Sponsor</TabsTrigger>
                </TabsList>
                <TabsContent value="Sponsor" className="flex flex-col items-center w-full gap-10">
                    <TitleSponorCard />
                    <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                        {SponorsCardData.map((data, index) => (
                            <SponorsCard data={data} key={index} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Info