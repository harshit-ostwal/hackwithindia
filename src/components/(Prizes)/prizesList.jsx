import React from 'react'

function PrizesList() {
    return (
        <div className="flex flex-col items-center justify-center w-[95%] lg:w-4/5 h-full gap-10">

            <div className="flex flex-col items-center justify-center w-full gap-5 border border-white border-solid h-60 rounded-3xl lg:h-96 bg-[radial-gradient(ellipse_50%_100%_at_50%_-20%,#fdba74,#000)]">
                <h1 className='font-bold text-7xl lg:text-9xl'>15K</h1>
                <p className="text-2xl font-semibold">1st Prize - Gold</p>
            </div>

            <div className="flex flex-col w-full gap-10 lg:flex-row">
                <div className="bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,#444,#000)] flex flex-col items-center justify-center w-full gap-5 border border-white border-solid h-60 rounded-3xl lg:h-96">
                    <h1 className='font-bold text-7xl lg:text-9xl'>10K</h1>
                    <p className="text-2xl font-semibold">2nd Prize - Silver</p>
                </div>
                <div className="bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,#444,#000)] flex flex-col items-center justify-center w-full gap-5 border border-white border-solid h-60 rounded-3xl lg:h-96">
                    <h1 className='font-bold text-7xl lg:text-9xl'>5K</h1>
                    <p className="text-2xl font-semibold">3rd Prize - Bronze</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-5 border border-white border-solid h-60 rounded-3xl lg:h-96 bg-[radial-gradient(ellipse_50%_100%_at_50%_-20%,#ef4444,#000)]">
                <h1 className='font-bold text-7xl lg:text-9xl'>$1500</h1>
                <p className="text-2xl font-semibold">Cash Prize - Hive</p>
            </div>

        </div>
    )
}

export default PrizesList