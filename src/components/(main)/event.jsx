import Image from 'next/image'
import React from 'react'

function Event() {
    return (
        <div className="flex items-center justify-center w-full min-h-full p-3 py-20 lg:p-40 via-black bg-gradient-to-tr from-gradient-middle to-gradient-start">
            <Image src={"/Event.png"} width={800} height={766} quality={100} loading="lazy" alt="Event" />
        </div>
    )
}

export default Event