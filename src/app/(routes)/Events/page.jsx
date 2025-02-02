"use client"
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EventsCategory, EventsData } from '@/constants/events';
import { CalendarClock, MapPin, Share2 } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function page() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [eventCategory, setEventCategory] = useState("All");
    const date = new Date().toDateString();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % EventsData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="flex flex-col w-full gap-20 xl:w-4/5">
                <div className="flex flex-col gap-2 items-center">
                    <div className="relative leading-none">
                        <h1 className="text-[18vw] Stroke sm:text-[15vw] md:text-[10vw] text-transparent font-semibold">EVENTS</h1>
                        <div className="absolute inset-0 flex justify-center items-end text-4xl md:text-5xl lg:text-7xl font-bold">
                            EVENTS
                        </div>
                    </div>
                    <p className="text-lg lg:text-xl text-neutral-400 text-center">Collaborate and innovate to build something awesome! All monetary prizes will be split equally among the winning team members.</p>
                </div>
                <div className="w-full flex flex-col gap-10">
                    <div className="relative w-full aspect-video max-h-[500px] min-h-[250px] border rounded-xl overflow-hidden">
                        {EventsData.filter((data => data.featured === true)).map((data, index) => (
                            <Link href={data.href} key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-linear ${currentIndex === index ? "opacity-100 z-10" : "opacity-0"}`}>
                                <Image draggable={false} src={data.src} alt={data.title} width="6000" height="3375" className="h-full w-full object-cover rounded-xl" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <Select onValueChange={(value) => setEventCategory(value)}>
                        <SelectTrigger className="w-60">
                            <SelectValue placeholder="Event Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All Categories</SelectItem>
                            {EventsCategory.map((data, index) => (
                                <SelectItem value={data} key={index}>
                                    {data}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                        {EventsData.filter((data) => eventCategory === "All" || data.category === eventCategory).map((data, index) => (
                            <div key={index} className="flex flex-col gap-4 duration-500 transition-all hover:ring p-2.5 lg:p-5 rounded-xl">
                                <Link passHref href={data.href} className="flex flex-col gap-4">
                                    <Image draggable={false} src={data.src} alt={data.title} width="6000" height="3375" className="border max-h-[500px] w-full object-cover rounded-xl" />
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-2xl font-medium">{data.title}</h1>
                                        <div className="flex gap-2 text-neutral-500  md:text-lg">
                                            <MapPin className="w-5 h-5" />
                                            <p>{data.location}</p>
                                        </div>
                                        <div className="flex gap-4 md:text-lg text-neutral-500">
                                            <CalendarClock className="w-5 h-5" />
                                            <p>{data.date}</p>
                                            <p>{data.time}</p>
                                        </div>
                                        <p className="text-neutral-500 md:text-lg">{data.description}</p>
                                    </div>
                                </Link>

                                {new Date(data.date).toDateString() <= date ? (
                                    <Link href={data.registrationLink} target="_blank">
                                        <Button className="max-w-fit"><Share2 className="w-5 h-5" /> Registration Open</Button>
                                    </Link>
                                ) : (
                                    <Button disabled={true} className="max-w-fit"><Share2 className="w-5 h-5" /> Registration Closed</Button>
                                )}
                            </div>
                        ))}
                    </div>
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