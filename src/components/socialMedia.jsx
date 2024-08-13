import { SocialMediaData } from '@/data/socialMedia'
import Link from 'next/link'
import React from 'react'

function SocialMedia() {
    return (
        <div className="flex gap-6">
            {SocialMediaData.map((data, index) => (
                <Link href={data.href} key={index} target="_blank" className="text-white transition duration-300 ease-in-out hover:-translate-y-1">{data.iconName}</Link>
            ))}
        </div>
    )
}

export default SocialMedia