import React from 'react'

function Location() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-tl flex flex-col gap-20 items-center text-center justify-center from-gradient-middle via-black to-gradient-start">
            <h1 className="font-bold text-4xl md:text-5xl text-white">Locate Us On Google Maps Also!</h1>
            <iframe loading="lazy" src="https://maps.google.com/maps?&amp;hl=en&amp;q=No.5%20(Epitome,%20Cyber%20City,%2010th%20Floor,%20Tower%20B%20&amp;%20C,%20DLF%20Building,%20DLF%20Phase%203,%20Gurugram,%20Haryana%20122002&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" className="w-full h-screen"></iframe>
        </div>
    )
}

export default Location