"use client";
import { Button } from '@/components/ui/button';
import React from 'react'

function page() {

    return (
        <div className="flex flex-col items-center min-h-screen w-full">
            <div className="flex flex-col w-11/12 2xl:w-3/4 gap-20">
                <div className="flex flex-col gap-2 items-center">
                    <div className="relative leading-none">
                        <h1 className="text-[18vw] Stroke sm:text-[15vw] md:text-[10vw] text-transparent font-semibold">PRIZES</h1>
                        <div className="absolute inset-0 flex justify-center items-end text-4xl md:text-5xl lg:text-7xl font-bold">
                            PRIZES
                        </div>
                    </div>
                    <p className="text-lg lg:text-xl text-neutral-400 text-center">Collaborate and innovate to build something awesome! All monetary prizes will be split equally among the winning team members.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center h-60 xl:h-96 w-full rounded-xl border border-neutral-200 bg-[radial-gradient(ellipse_150%_100%_at_50%_-20%,#fde68a,transparent)]">
                        <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black">15K</h1>
                        <p className="text-xl font-medium">1st Prize - Gold</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col items-center justify-center h-60 xl:h-96 w-full rounded-xl border border-neutral-200 bg-[radial-gradient(ellipse_150%_100%_at_50%_-10%,#d4d4d4,transparent)]">
                            <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black">10K</h1>
                            <p className="text-xl font-medium">2nd Prize - Silver</p>
                        </div>
                        <div className="flex flex-col items-center justify-center h-60 xl:h-96 w-full rounded-xl border border-neutral-200 bg-[radial-gradient(ellipse_150%_100%_at_50%_-10%,#d4d4d4,transparent)]">
                            <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black">5K</h1>
                            <p className="text-xl font-medium">3rd Prize - Bronze</p>
                        </div>
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