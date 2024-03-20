import React from 'react'

const Logo = ["/microsoft.png", "/google.png", "/amazon.png", "/fedex.png", "/ola.png", "/Walmart.png",]

function Info() {
    return (
        <div className="flex flex-col items-center justify-between p-5 min-h-screen gap-40 w-full text-white via-black bg-gradient-to-tl from-gradient-start to-gradient-middle">
            <div className="flex flex-col items-center justify-center gap-20">
                <h1 className="text-3xl sm:text-5xl font-bold">Meet Our Sponsors</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 items-center justify-center">
                    {Logo.map((data, index) => (
                        <img src={data} key={index} alt={data} loading="xeager" width={200} height={200} className="h-fit" />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-14 max-w-7xl">
                <h1 className="text-3xl sm:text-5xl font-bold text-center sm:text-start">What is HACKWITHINDIA?</h1>
                <p className="flex flex-col gap-5 text-lg">
                    <span>
                        We from hackWithIndia are writing to propose the organizing of a two-day (30 hours) inter-college hackathon event HackWithIndia from 27th march to 6th April.
                    </span>
                    <span>
                        By harnessing the potential of advanced technologies like artificial intelligence, the Internet of Things, blockchain, and more, our hackathon aims to inspire students to craft innovative solutions that not only contribute to environmental betterment but also address pressing humanitarian challenges.
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Info