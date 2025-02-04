"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { PerksData } from "@/constants/about-us";
import { EventsData } from "@/constants/events";
import { FaqData } from "@/constants/faqs";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Page() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % EventsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="flex flex-col w-11/12 2xl:w-4/5 gap-20">

        <div className="w-full flex flex-col gap-10">
          <div className="relative w-full aspect-video max-h-[500px] min-h-[250px] border rounded-xl overflow-hidden">
            {EventsData.filter((data => data.featured === true)).map((data, index) => (
              <div key={index}>
                <Link href={data.href} key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-linear ${currentIndex === index ? "opacity-100 z-10" : "opacity-0"}`}>
                  <Image draggable={false} src={data.src} alt={data.title} width="6000" height="3375" className="h-full w-full object-cover rounded-xl" />
                </Link>
                <div className={`absolute bottom-5 text-white flex flex-col gap-4 left-5 transition-opacity duration-1000 ease-linear ${currentIndex === index ? "opacity-100 z-10" : "opacity-0"}`}>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-medium">{data.title}</h1>
                    <p className="font-medium flex gap-2 items-center"><CalendarDays className="w-5 h-5" /> {data.date}</p>
                  </div>
                  <Link className="px-4 py-3 border hover:bg-amber-200 hover:text-black hover:border-amber-200 duration-300 transition-all w-fit rounded-xl" href={data?.registrationLink}>
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 justify-center">
          <div className="text-[4rem] flex flex-col justify-center">
            <h1 className="font-medium leading-none">About</h1>
            <h1 className="font-Tobias leading-none">HackwithIndia</h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 w-full min-h-[60vh] gap-6">
            <div className="border w-full rounded-xl overflow-hidden h-full">
              <div className="flex flex-col gap-6 p-5 h-fit">
                <h1 className="text-xl max-w-7xl w-full">
                  HackWithIndia is India’s largest and most impactful hackathon community.
                  With a mission to foster innovation, collaboration, and learning,
                  HackWithIndia has become a hub for tech enthusiasts, developers, and creative problem-solvers across the country.
                </h1>
                <h1 className="text-xl max-w-7xl w-full">
                  In just 10 months, HackWithIndia has organized over 20 high-energy hackathons,
                  solidifying its role as a driving force in India’s rapidly growing tech ecosystem.
                </h1>
                <Link href="/About" className="hover:text-blue-500 duration-300 w-fit transition-all underline underline-offset-4">Read More</Link>
              </div>
              <Image draggable={false} src="/Swags/Desktop/Wallpaper - 3/Dark.png" alt="Grid - 1" width="6000" height="3375" className="h-full w-full object-cover rounded-xl" />
            </div>
            <div className="grid grid-rows-1 xl:grid-rows-2 w-full gap-4">
              <div className="border bg-amber-100 w-full rounded-xl p-5 justify-around flex flex-col gap-4">
                <Link href="/" draggable={false} className="select-none"><Image draggable={false} src="/Logo/HWI Black.svg" width={120} height={120} quality={100} fetchPriority="high" loading="eager" alt="HackWithIndia" /></Link>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-5xl text-amber-400 font-bold"><NumberTicker className="tracking-tight text-5xl md:text-5xl" value={40000} /> +</h1>
                    <h1 className="text-2xl font-medium">Developer Community</h1>
                  </div>
                  <p className="text-lg max-w-xl">A global network of developers advancing Web3 and AI technologies through collaboration and innovation.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-4">
                <div className="border bg-purple-100 w-full rounded-xl p-5 flex flex-col gap-4">
                  <Link href="/" draggable={false} className="select-none"><Image draggable={false} src="/Logo/HWI Black.svg" width={120} height={120} quality={100} fetchPriority="high" loading="eager" alt="HackWithIndia" /></Link>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-5xl text-purple-400 font-bold"><NumberTicker className="tracking-tight text-5xl md:text-5xl" value={3000} /> +</h1>
                      <h1 className="text-2xl font-medium">Web3 & AI Projects</h1>
                    </div>
                    <p className="text-lg max-w-xl">Over 3000 Web3 and AI projects built to solve real-world challenges with cutting-edge technology.</p>
                  </div>
                </div>
                <div className="border bg-cyan-100 w-full rounded-xl p-5 flex flex-col gap-4">
                  <Link href="/" draggable={false} className="select-none"><Image draggable={false} src="/Logo/HWI Black.svg" width={120} height={120} quality={100} fetchPriority="high" loading="eager" alt="HackWithIndia" /></Link>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-5xl text-cyan-400 font-bold"><NumberTicker className="tracking-tight text-5xl md:text-5xl" value={50} /> +</h1>
                      <h1 className="text-2xl font-medium">Cities Impacted</h1>
                    </div>
                    <p className="text-lg max-w-xl">HackWithIndia has impacted developers across multiple cities using Web3 and AI technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-20 justify-center">
          <div className="text-[4rem] md:text-[5rem]">
            <h1 className="font-medium leading-none">Perks</h1>
            <h1 className="font-Tobias leading-none">& Benefits</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full gap-10">
            {PerksData.slice(0, 6).map((data, index) => (
              <div key={index} className="flex flex-col items-center gap-10 border hover:ring hover:-translate-y-4 duration-300 px-5 py-10 rounded-xl">
                <span>{data.Icon}</span>
                <div className="flex flex-col gap-4 text-center">
                  <h2 className="font-medium text-2xl">{data.title}</h2>
                  <p className="text-neutral-500 text-xl max-w-md">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/About" className="hover:text-blue-500 text-center duration-300 transition-all underline underline-offset-4">Explore More</Link>
        </div>

        <div className="flex rounded-b-[40px] py-20 px-2">
          <div className="flex flex-col lg:flex-row gap-20 w-full justify-center">
            <div className="text-[4rem] md:text-[5rem]">
              <h1 className="font-medium leading-none">Frequently</h1>
              <h1 className="font-medium leading-none">asked</h1>
              <h1 className="font-Tobias leading-none">questions</h1>
            </div>

            <Accordion type="single" collapsible className="flex-1 w-full">
              {FaqData.slice(0, 5).map((data, index) => (
                <AccordionItem key={index} value={data.faqId}>
                  <AccordionTrigger>{data.question}</AccordionTrigger>
                  <AccordionContent>{data.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
  );
}

export default Page;