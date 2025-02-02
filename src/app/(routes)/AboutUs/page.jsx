"use client"
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button';
import { NumberTicker } from '@/components/ui/number-ticker'
import { AboutImages, CounterData, PerksData } from '@/constants/about-us';
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

function page() {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % AboutImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="flex flex-col w-full gap-40 2xl:w-4/5">
                <div className="flex flex-col gap-2 items-center">
                    <div className="relative leading-none">
                        <h1 className="text-[18vw] Stroke sm:text-[15vw] md:text-[10vw] text-transparent font-semibold">ABOUT US</h1>
                        <div className="absolute inset-0 flex justify-center items-end text-4xl md:text-5xl lg:text-7xl font-bold">
                            ABOUT US
                        </div>
                    </div>
                    <p className="text-lg lg:text-xl text-neutral-400 text-center">Collaborate and innovate to build something awesome! All monetary prizes will be split equally among the winning team members.</p>
                </div>


                <div id="asd" className="flex flex-col gap-10">
                    <h1 className="font-semibold text-3xl sm:text-4xl">
                        <span className="underline decoration-rose-400 underline-offset-4">HackwithIndia</span> Is The
                        <span className="underline decoration-blue-400 underline-offset-4"> Biggest Hackathon Community </span>
                    </h1>

                    <h1 className="text-xl sm:text-2xl lg:text-3xl max-w-7xl w-full">
                        HackWithIndia is India’s largest and most impactful hackathon community.
                        With a mission to foster innovation, collaboration, and learning,
                        HackWithIndia has become a hub for tech enthusiasts, developers, and creative problem-solvers across the country.
                    </h1>
                    <h1 className="text-xl sm:text-2xl lg:text-3xl max-w-7xl w-full">
                        In just 10 months, HackWithIndia has organized over 20 high-energy hackathons,
                        solidifying its role as a driving force in India’s rapidly growing tech ecosystem.
                    </h1>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-20">
                    {CounterData.map((data, index) => (
                        <div key={index} className="flex flex-col gap-10 items-center">
                            {data.icon}
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-2xl md:text-4xl"><NumberTicker value={data.value} /> +</span>
                                <p className="text-lg sm:text-xl lg:text-2xl text-center">{data.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:grid-cols-3 w-full items-center">
                    <div className="flex flex-col lg:flex-row gap-10 w-full h-full justify-between">
                        <div className="flex flex-col max-w-xl gap-6">
                            <div className="text-5xl md:text-6xl font-bold tracking-tighter"><h2>What <br /> We Do</h2></div>
                            <p className="text-neutral-500 text-xl sm:text-2xl">We organize exciting hackathons and challenges that bring together tech enthusiasts to innovate and create real-world solutions.</p>
                        </div>
                        <Separator className="lg:hidden" />
                        <Separator className="hidden lg:block" orientation="vertical" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 w-full h-full justify-between">
                        <div className="flex flex-col max-w-xl gap-6">
                            <div className="text-5xl md:text-6xl font-bold tracking-tighter"><h2>How <br /> We Do It</h2></div>
                            <p className="text-neutral-500 text-xl sm:text-2xl">We provide mentorship, workshops, and networking opportunities to help participants develop their skills and succeed in every event.</p>
                        </div>
                        <Separator className="lg:hidden" />
                        <Separator className="hidden lg:block" orientation="vertical" />
                    </div>
                    <div className="flex flex-col max-w-xl gap-6 h-full">
                        <div className="text-5xl md:text-6xl font-bold tracking-tighter"><h2>Why <br /> HackwithIndia</h2></div>
                        <p className="text-neutral-500 text-xl sm:text-2xl">We empower individuals with tech exposure, mentorship, and networking opportunities to help them grow and reach their potential.</p>
                    </div>
                </div>

                <div className="hidden xl:flex w-full gap-6">
                    {AboutImages.map((data, index) => (
                        <div key={index} onClick={() => setActiveIndex(index)} className={`h-[600px] border rounded-xl cursor-pointer duration-1000 overflow-hidden relative ${activeIndex === index ? "w-full" : "w-72"}`}>
                            <Image src={data} draggable={false} width={6000} height={3375} alt={data} quality={100} className="w-full h-full object-cover" fetchPriority="high" loading="eager" />
                        </div>
                    ))}
                </div>

                <div className="flex xl:hidden">
                    <Carousel className="" plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false, stopOnLastSnap: false, stopOnFocusIn: false, }),]}>
                        <CarouselContent>
                            {AboutImages.map((data, index) => (
                                <CarouselItem key={index}>
                                    <Image src={data} draggable={false} width={6000} height={3375} alt={data} quality={100} className="h-60 object-cover rounded-xl" fetchPriority="high" loading="eager" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                <div className="flex flex-col gap-20">
                    <h1 className="font-semibold text-3xl sm:text-4xl">
                        <span className="underline decoration-rose-400 underline-offset-4">Perks & Benefits</span> of Joining HackwithIndia
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full gap-10">
                        {PerksData.map((data, index) => (
                            <div key={index} className="flex flex-col items-center gap-10 border hover:ring hover:-translate-y-4 duration-300 px-5 py-10 rounded-xl">
                                <span>{data.Icon}</span>
                                <div className="flex flex-col gap-4 text-center">
                                    <h2 className="font-medium text-2xl">{data.title}</h2>
                                    <p className="text-neutral-500 text-xl max-w-md">{data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="">

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