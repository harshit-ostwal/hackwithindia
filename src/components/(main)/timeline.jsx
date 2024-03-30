import React from 'react'

function Timeline() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5 py-40 bg-transparent text-white via-black bg-gradient-to-tl from-gradient-middle to-gradient-middle gap-14 md:gap-20">
            <div className="flex items-start w-full max-w-7xl">
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Timeline</h1>
            </div>
            <img src="Timeline.png" className='w-[70%]' alt="" />
        </div>
    )
}

export default Timeline  