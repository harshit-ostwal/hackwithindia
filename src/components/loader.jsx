"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'

function Loader() {

    useGSAP(() => {

        const tl = gsap.timeline();

        tl.fromTo("main", {
            height: "0vh",
        }, {
            height: "100vh",
            overflow: "hidden",
        })

        tl.fromTo("#title", {
            hidden: true,
        }, {
            hidden: false,
            display: "flex",
        })

        tl.fromTo("#title h1", {
            opacity: 0,
            x: 40,
        }, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.1,
        })

        tl.to("#title h1", {
            opacity: 0,
            x: -40,
            duration: 0.7,
            stagger: 0.1
        })

        tl.to("#title h1", {
            hidden: true
        })

        tl.fromTo("#logo", {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            display: "block",
            hidden: true,
            duration: 0.5,
            stagger: 0.1
        })

        tl.to("#logo", {
            opacity: 0,
            y: -40,
            duration: 0.5,
            stagger: 0.1
        })

        tl.to("#loader", {
            opacity: 0,
            display: "none"
        })

        tl.to("main", {
            height: "100%",
            overflow: "auto",
        })

    }, [])

    return (
        <div id="loader" className="w-full h-screen flex flex-col gap-2 justify-center items-center bg-black fixed top-0 left-0 z-[99]">
            <div id="title" className="text-white text-2xl md:text-2xl lg:text-3xl xl:text-4xl gap-2 hidden">{"Welcome To India's Biggest".split(' ').map((data, index) => <h1 key={index}>{data}</h1>)}</div>
            <div id="title" className="text-amber-200 text-2xl md:text-2xl lg:text-3xl xl:text-4xl gap-2 hidden">{"Hackathon Community".split(' ').map((data, index) => <h1 key={index}>{data}</h1>)}</div>
            <Image draggable={false} id="logo" src="/Logo/HWI White.svg" className="hidden w-[150px] xl:w-[200px]" width={200} height={200} quality={100} fetchPriority="high" loading="eager" alt="HackWithIndia" />
        </div>
    )
}

export default Loader