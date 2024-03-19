import React from 'react'
import SocialMedia from './social-media'

function Footer() {
    return (
        <footer className="h-full p-5 py-20 text-white md:text-black text-center gradient-Color lg:rounded-t-[200px] w-full flex flex-col gap-10 items-center justify-center">
            <h1 className="font-semibold">STAY UP TO DATE WITH OUR NEWS AND NOTIFICATIONS</h1>
            <SocialMedia />
            <p className="text-sm font-medium md:text-base">Copyright © HACKWITHINDIA | All Rights Resverd</p>
        </footer>
    )
}

export default Footer