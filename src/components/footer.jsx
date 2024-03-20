import React from 'react'
import SocialMedia from './social-media'

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-full gap-10 p-5 py-20 text-center">
            <h1 className="font-semibold">STAY UP TO DATE WITH OUR NEWS AND NOTIFICATIONS</h1>
            <SocialMedia />
            <p className="text-sm font-medium md:text-base">Copyright © HACKWITHINDIA | All Rights Reserved</p>
        </footer>
    )
}

export default Footer