import React from 'react'
import getInTouch from "../../../public/getInTouchImage.svg"
import Image from 'next/image'

function Info() {
    return (
        <div className="flex flex-col w-4/5">
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col font-serif">
                        <h1 className="font-semibold tracking-tighter text-9xl">How can we help</h1>
                        <h1 className="font-semibold tracking-tighter text-9xl">you?</h1>
                    </div>
                    <p className="max-w-4xl text-xl font-medium">Hacker Experience is what we prioritize! Have questions, need assistance, or just want to connect? Feel free to reach out!</p>

                </div>
                <Image src={getInTouch} className="w-auto h-auto animate-spinner" priority={true} fetchPriority="high" quality={100} alt="GetInTouch" />
            </div>
        </div>
    )
}

export default Info