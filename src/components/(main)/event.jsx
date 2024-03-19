import Image from 'next/image'
import React from 'react'

function Event() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen p-3 via-black bg-gradient-to-tr from-gradient-middle to-gradient-start">
            <Image src={"/Event.png"} width={800} height={800} quality={100} loading="lazy" />
        </div>
    )
}

export default Event