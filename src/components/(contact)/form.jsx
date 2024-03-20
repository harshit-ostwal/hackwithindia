"use client"
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import { useToast } from '../ui/use-toast';

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        try {
            const res = await axios.post("/api/Contact", {
                name, email, phoneNo, subject, message
            });

            if (res) {
                toast({
                    variant: "success",
                    title: "HackWithIndia",
                    description: "Contact Form Submitted Successfully!",
                });
                setIsLoading(false);
                const form = e.target;
                form.reset();
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "SS SOFTWARE",
                description: "An Error Occurred While Submitting Contact Form?",
            });
        }
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-tr p-3 py-20 from-gradient-start via-black to-gradient-end flex items-center justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-10">
                <div className="flex flex-col gap-14 w-full h-full justify-center">
                    <div className="flex flex-col gap-1 text-white items-center justify-center text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Get In Touch With Us</h1>
                        <p className="text-sm md:text-base">We're here to help! Feel free to reach out to us for any inquiries or assistance.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full justify-center">
                        <div className="flex flex-col md:flex-row gap-2">
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' required className="bg-transparent border border-gray-700 hover:border-white focus:border-white transition-colors duration-300 text-white w-full p-4 focus:outline-none rounded-tr-xl rounded-bl-xl" />
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' required className="bg-transparent border border-gray-700 hover:border-white focus:border-white transition-colors duration-300 text-white w-full p-4 focus:outline-none rounded-tr-xl rounded-bl-xl" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <input onChange={(e) => setPhoneNo(e.target.value)} type="text" placeholder='Phone Number' required className="bg-transparent border border-gray-700 hover:border-white focus:border-white transition-colors duration-300 text-white w-full p-4 focus:outline-none rounded-tr-xl rounded-bl-xl" />
                            <input onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Subject' required className="bg-transparent border border-gray-700 hover:border-white focus:border-white transition-colors duration-300 text-white w-full p-4 focus:outline-none rounded-tr-xl rounded-bl-xl" />
                        </div>
                        <textarea onChange={(e) => setMessage(e.target.value)} placeholder="Message" required className="bg-transparent border border-gray-700 hover:border-white focus:border-white transition-colors duration-300 text-white py-3 px-4 h-40 focus:outline-none rounded-tr-xl rounded-bl-xl"></textarea>
                        <button type="submit" className="bg-gradient-to-tr mt-10 flex items-center justify-center from-amber-500 to-white py-4 px-6 rounded-tr-xl rounded-bl-xl font-semibold">
                            {isLoading ? <Loader2 className="animate-spin" /> : "Submit"}
                        </button>
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