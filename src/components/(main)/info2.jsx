import React from 'react'

function Info2() {
    return (
        <div className="flex items-center justify-center w-full">

            <div className="grid items-center justify-center w-[95%] grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                <div className="flex flex-col items-center justify-center gap-5 px-5 py-10 rounded-md outline-white/20 text-nowrap hover:outline">
                    <h1 className="text-6xl font-bold" style={{
                        background:
                            "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}> 1000+</h1>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="text-2xl font-semibold">Registrations</h1>
                        <p className="text-sm text-white/70 md:text-base">1000+ registrations from across the country.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 px-5 py-10 rounded-md outline-white/20 text-nowrap hover:outline">
                    <h1 className="text-6xl font-bold" style={{
                        background:
                            "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}> 200+</h1>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="text-2xl font-semibold">Offline Participants</h1>
                        <p className="text-sm text-white/70 md:text-base">200+ participants joined the offline hackathon!</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 px-5 py-10 rounded-md outline-white/20 text-nowrap hover:outline">
                    <h1 className="text-6xl font-bold" style={{
                        background:
                            "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}> 30+</h1>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="text-2xl font-semibold">Volunteers</h1>
                        <p className="text-sm text-white/70 md:text-base">To help you, get the best out of HackWithIndia.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 px-5 py-10 rounded-md outline-white/20 text-nowrap hover:outline">
                    <h1 className="text-6xl font-bold" style={{
                        background:
                            "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}> 100+</h1>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="text-2xl font-semibold">Projects</h1>
                        <p className="text-sm text-white/70 md:text-base">Innovative submissions from various domains.</p>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Info2