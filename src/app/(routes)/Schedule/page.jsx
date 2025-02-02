import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";

export default function Page() {
    const data = [
        {
            title: "Registrations Begin",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 mb-8">
                        Participants can start registering for the hackathon on our official website. Make sure to form your teams and submit the required details.
                    </p>
                </div>
            ),
        },
        {
            title: "Registrations Close",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 mb-8">
                        The registration portal will be closed at midnight. Ensure all team members are registered before the deadline.
                    </p>
                </div>
            ),
        },
        {
            title: "Hackathon Starts",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 mb-4">
                        The hackathon begins! Participants can start working on their projects. Kick-off ceremonies and initial sessions will provide guidance and inspiration.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                            ✅ Opening Ceremony
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                            ✅ Keynote Speech by Industry Leaders
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                            ✅ Teams Receive Problem Statements
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                            ✅ Development Begins
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Hackathon Ends",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 mb-4">
                        The hackathon concludes, and teams must submit their final projects. Be prepared to present your solution during the demo sessions.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                            ✅ Project Submissions Close
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                            ✅ Final Presentations and Demos
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                            ✅ Judging by Expert Panel
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                            ✅ Award Ceremony
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="flex flex-col w-full gap-20 2xl:w-4/5">
                <div className="flex flex-col gap-2 items-center">
                    <div className="relative leading-none">
                        <h1 className="text-[18vw] Stroke sm:text-[15vw] md:text-[10vw] text-transparent font-semibold">SCHEDULE</h1>
                        <div className="absolute inset-0 flex justify-center items-end text-4xl md:text-5xl lg:text-7xl font-bold">
                            SCHEDULE
                        </div>
                    </div>
                    <p className="text-lg lg:text-xl text-neutral-400 text-center">Collaborate and innovate to build something awesome! All monetary prizes will be split equally among the winning team members.</p>
                </div>
                
                <Timeline data={data} />

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