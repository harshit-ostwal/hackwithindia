import Image from 'next/image'
import React from 'react'

function Form() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-tr p-3 py-20 from-gradient-start via-black to-gradient-end flex items-center justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-10">
                <div className="flex flex-col gap-14 w-full h-full justify-center">
                    <div className="flex flex-col gap-1 text-white items-center justify-center text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Get In Touch With Us</h1>
                        <p className="text-sm md:text-base">We're here to help! Feel free to reach out to us for any inquiries or assistance.</p>
                    </div>
                    <form className="flex flex-col gap-2 w-full justify-center">
                        <div className="flex flex-col md:flex-row gap-2">
                            <input type="text" placeholder='Name' required className="bg-transparent border border-gray-700 hover:border-white focus:border-white transition-colors duration-300 text-white w-full p-4 focus:outline-none rounded-tr-xl rounded-bl-xl" />
                            <input type="text" placeholder='Email' required className="bg-transparent border border-gray-700 hover:border-white focus:border-white transition-colors duration-300 text-white w-full p-4 focus:outline-none rounded-tr-xl rounded-bl-xl" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <input type="text" placeholder='Phone Number' required className="bg-transparent border border-gray-700 hover:border-white focus:border-white transition-colors duration-300 text-white w-full p-4 focus:outline-none rounded-tr-xl rounded-bl-xl" />
                            <input type="text" placeholder='Subject' required className="bg-transparent border border-gray-700 hover:border-white focus:border-white transition-colors duration-300 text-white w-full p-4 focus:outline-none rounded-tr-xl rounded-bl-xl" />
                        </div>
                        <textarea placeholder="Message" required className="bg-transparent border border-gray-700 hover:border-white focus:border-white transition-colors duration-300 text-white py-3 px-4 h-40 focus:outline-none rounded-tr-xl rounded-bl-xl"></textarea>
                        <button type="submit" className="bg-gradient-to-tr mt-10 from-amber-500 to-white py-4 px-6 rounded-tr-xl rounded-bl-xl font-semibold">Submit</button>
                    </form>
                </div>
                <div>
                    <Image src={"/contact.png"} width={800} height={200} loading="lazy" quality={100} alt="Contact Us" className="rounded-3xl bg-blend-multiply" />
                </div>
            </div>
        </div>
    )
}

export default Form