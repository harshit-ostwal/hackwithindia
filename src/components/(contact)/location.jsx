import React from 'react'

function Location() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-tl flex flex-col gap-20 items-center text-center justify-center from-gradient-middle via-black to-gradient-start">
            <h1 className="font-bold text-4xl md:text-5xl text-white">Locate Us On Google Maps Also!</h1>
            <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.683377076379!2d77.08918357607072!3d28.489080490579404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1937a3b855cb%3A0x4b8c750d9d64fe72!2sMicrosoft!5e0!3m2!1sen!2sin!4v1710959339208!5m2!1sen!2sin" className="w-full h-screen"></iframe>
        </div>
    )
}

export default Location