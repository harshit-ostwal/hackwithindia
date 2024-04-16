import React from 'react'

function Location() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 pb-20 text-center bg-black bg-gradient-to-tl">
            <h1 className="text-4xl font-bold text-white md:text-5xl">Locate Us On Google Maps Also!</h1>
            <div className="w-full h-[60vh] lg:w-[80vw] xl:w-[60vw] xl:h-[60vh]">
                <iframe loading="lazy" src="https://maps.google.com/maps?&amp;hl=en&amp;q=No.5%20(Epitome,%20Cyber%20City,%2010th%20Floor,%20Tower%20B%20&amp;%20C,%20DLF%20Building,%20DLF%20Phase%203,%20Gurugram,%20Haryana%20122002&amp;t=k&amp;z=18&amp;output=embed" className='w-full h-full lg:rounded-3xl'></iframe>
            </div>
        </div>
    )
}

export default Location