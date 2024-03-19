import React from 'react'
import SocialMedia from './social-media'

function Footer() {
    return (
        <footer className="h-[500px] gradient-Color rounded-t-[100px] w-full flex flex-col gap-10 items-center justify-center">
            <h1 className="text-lg font-semibold">STAY UP TO DATE WITH OUR NEWS AND NOTIFICATIONS</h1>
            <SocialMedia />
            <p className="font-medium">Copyright © HACKWITHINDIA | All Rights Resverd</p>
        </footer>
    )
}

export default Footer