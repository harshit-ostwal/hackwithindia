import { ReportData } from '@/data/Report'
import React from 'react'
import IconCloud from '../magicui/icon-cloud';
import Marquee from '../magicui/marquee';
import { cn } from '@/lib/utils';
import NumberTicker from '../magicui/number-ticker';
import ShineBorder from '../magicui/shine-border';
import SparklesText from '../magicui/sparkles-text';

const reviews = [
    {
        name: "Aryan Sharma",
        username: "@aryanS",
        body: "The innovation here is top-notch. Truly a revolutionary platform!",
        img: "https://avatar.vercel.sh/aryanS",
    },
    {
        name: "Neha Patel",
        username: "@nehaPatel",
        body: "I'm so impressed with the creativity on display here. Absolutely stunning!",
        img: "https://avatar.vercel.sh/nehaPatel",
    },
    {
        name: "Rohit Verma",
        username: "@rohitV",
        body: "This project has exceeded all my expectations. I'm amazed!",
        img: "https://avatar.vercel.sh/rohitV",
    },
    {
        name: "Priya Singh",
        username: "@priyaS",
        body: "Incredible work! This is going to change the game for sure.",
        img: "https://avatar.vercel.sh/priyaS",
    },
    {
        name: "Karthik Nair",
        username: "@karthikN",
        body: "A brilliant effort. This is just the beginning of something big!",
        img: "https://avatar.vercel.sh/karthikN",
    },
    {
        name: "Ayesha Khan",
        username: "@ayeshaK",
        body: "This platform is a breath of fresh air. Love every bit of it!",
        img: "https://avatar.vercel.sh/ayeshaK",
    },
    {
        name: "Vikram Reddy",
        username: "@vikramR",
        body: "I'm blown away by the level of detail and effort put into this.",
        img: "https://avatar.vercel.sh/vikramR",
    },
    {
        name: "Sneha Desai",
        username: "@snehaD",
        body: "An inspiring project that's sure to make waves in the industry.",
        img: "https://avatar.vercel.sh/snehaD",
    },
    {
        name: "Ankit Joshi",
        username: "@ankitJ",
        body: "This is truly a game-changer. Can't wait to see what's next!",
        img: "https://avatar.vercel.sh/ankitJ",
    },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
    return (
        <figure
            className={cn(
                "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-10",
                "border-neutral-700",
            )}
        >
            <div className="flex flex-row items-center gap-5">
                <img className="rounded-full" width="50" height="50" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="font-medium">
                        {name}
                    </figcaption>
                    <p className="text-sm font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];


function Info2() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-20 mt-40">
            <SparklesText text={"Our Special's"} className={"text-5xl lg:text-7xl"} />
            <div className="grid items-center justify-center w-11/12 grid-cols-1 gap-20 md:w-3/4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {ReportData.map((data, index) => (
                    <ShineBorder key={index}
                        className="flex flex-col items-center justify-center w-full gap-5 px-5 py-10 rounded-md realtive text-nowrap"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                        <h1 className="text-6xl font-bold" style={{
                            background:
                                "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            <NumberTicker value={data.total} />
                        </h1>

                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-2xl font-semibold">{data.title}</h1>
                            <p className="text-sm text-white/70 md:text-base">{data.desc}</p>
                        </div>
                    </ShineBorder>
                ))}
            </div>
            <div className="relative flex flex-col items-center justify-center w-full h-full p-10 mt-20 overflow-hidden rounded-lg">
                <IconCloud iconSlugs={slugs} />
            </div>

            <div className="relative flex flex-col items-center justify-center w-full mt-20 overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s] w-full">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s] w-full">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
            </div>
        </div >
    )
}

export default Info2