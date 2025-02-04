"use client"
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { EventsData } from '@/constants/events';
import { CalendarClock, DownloadCloud, MapPin, Share2, Users2 } from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React, { useState } from 'react';
import { FaMedal } from "react-icons/fa6";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Page() {
  const { events } = useParams();
  const router = useRouter();
  const date = new Date().toDateString();

  const eventData = EventsData.find((data) => data.href === "/Events/" + events);
  const [visibleCount, setVisibleCount] = useState(6);

  if (!eventData) {
    router.replace("/Events");
    return null;
  }

  if (eventData) {
    return (
      <div className="flex flex-col items-center min-h-screen">
        <div className="flex flex-col w-full gap-20  p-5 text-center">
          <div className="flex flex-col gap-20 items-center">
            <div className="flex flex-col gap-8 items-center">
              {eventData?.title && (
                <h1 className="text-5xl md:text-6xl font-semibold">{eventData.title}</h1>
              )}
              <div className="flex flex-col gap-2 items-center">
                {eventData?.location && (
                  <div className="flex gap-2 text-neutral-500 text-lg md:text-xl">
                    <MapPin className="w-5 h-5" />
                    <p>{eventData.location}</p>
                  </div>
                )}
                {eventData?.date && eventData?.time && (
                  <div className="flex gap-4 text-lg md:text-xl text-neutral-500">
                    <CalendarClock className="w-5 h-5" />
                    <p>{eventData.date}</p>
                    <p>{eventData.time}</p>
                  </div>
                )}

                {eventData?.description && (
                  <p className="text-neutral-500 text-lg md:text-xl">{eventData.description}</p>
                )}

              </div>
              {new Date(eventData.date).toDateString() <= date ? (
                <Link href={eventData.registrationLink} target="_blank">
                  <Button className="w-full"><Share2 className="w-5 h-5" /> Registration Open</Button>
                </Link>
              ) : (
                <Button disabled={true}><Share2 className="w-5 h-5" /> Registration Closed</Button>
              )}
            </div>

            <Image draggable={false} src={eventData.src} alt={eventData.title} width="6000" height="3375" className="aspect-video max-h-[600px] min-h-[250px] border object-cover rounded-xl" />

            {eventData?.winners && (
              <div className="flex flex-col gap-10 items-center justify-center w-full">
                <div className="flex flex-col gap-4 items-center lg:mb-20">
                  <h1 className="text-5xl md:text-6xl font-semibold">Hackathon Champion's</h1>
                  <p className="text-lg md:text-xl text-neutral-500">Celebrating Excellence in Competition</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-full gap-6">
                  {eventData?.winners?.map((data, index) => (
                    <div key={index} className={`flex relative ${index === 1 && "lg:-translate-y-14"} hover:scale-105 hover:ring duration-300 transition-all flex-col gap-10 items-center border py-10 rounded-xl`}>
                      <div className="absolute top-4 right-4">
                        <Badge>
                          {data.position}
                        </Badge>
                      </div>

                      {/* <FaMedal className="w-20 h-20" /> */}
                      <div className="rounded-full p-4 bg-gradient-to-t from-green-200 to-amber-200">
                        <FaMedal className="w-24 h-24 animate-pulse p-4" />
                      </div>

                      {data?.teamName && (
                        <h1 className="text-3xl font-semibold truncate">{data?.teamName}</h1>
                      )}

                      {data?.teamSize && (
                        <div className="flex flex-col gap-4 items-center">
                          <p className="text-xl font-medium text-neutral-500">Team Size</p>
                          <h1 className="text-xl font-medium text-neutral-500 flex gap-2"><Users2 /> {data?.teamSize}</h1>
                        </div>
                      )}
                      {data?.teamMembers && (
                        <div className="flex flex-col gap-4 items-center">
                          <p className="text-xl font-medium text-neutral-500">Team Members</p>
                          <TooltipProvider>
                            <div className="flex gap-2">
                              {data?.teamMembers?.map((data, index) => (
                                <Tooltip key={index}>
                                  <TooltipTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                      <AvatarFallback>{data.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{data}</p>
                                  </TooltipContent>
                                </Tooltip>
                              ))}
                            </div>
                          </TooltipProvider>
                        </div>
                      )}
                      <div className="flex flex-col gap-4 items-center">
                        <p className="text-4xl font-bold">{data.prizePool}</p>
                        <h1 className="text-xl font-medium text-neutral-500 flex gap-2">Prize Pool</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {eventData?.images && (
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 items-center">
                  <h1 className="text-5xl md:text-6xl font-semibold">Gallery</h1>
                  <p className="text-lg md:text-xl text-neutral-500">A Showcase of Excellence and Creativity</p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 space-y-5">
                  {eventData.images.slice(0, visibleCount).map((data, index) => (
                    <div key={index} className="relative w-full">
                      <Image draggable={false} src={data} alt={data} width="6000" height="3375" className="h-auto border" />
                      <div className="absolute bottom-4 right-4">
                        <Link target="_blank" href={data} download={data}>
                          <Button size="icon" variant="primary" className="min-w-fit"><DownloadCloud /></Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {eventData.images.length >= 6 & eventData.images.length > visibleCount ? (
                  <div className="flex justify-center">
                    <Button onClick={() => setVisibleCount((prev) => prev + 6)} >
                      Load More
                    </Button>
                  </div>
                ) : null}
              </div>
            )}
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
}

export default Page;