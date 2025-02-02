"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SwagsCategory, SwagsData } from "@/constants/swags"
import { DownloadCloud } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react'

function page() {

    const [uploadedImage, setUploadedImage] = useState("https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6");
    const [name, setName] = useState("Harshit Jain");

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setUploadedImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="flex flex-col w-full gap-20 xl:w-4/5">
                <div className="flex flex-col items-center gap-2">
                    <div className="relative leading-none">
                        <h1 className="text-[18vw] Stroke sm:text-[15vw] md:text-[10vw] text-transparent font-semibold">SWAGS</h1>
                        <div className="absolute inset-0 flex justify-center items-end text-4xl md:text-5xl lg:text-7xl font-bold">
                            SWAGS
                        </div>
                    </div>
                    <p className="text-lg lg:text-xl text-neutral-400 text-center">Collaborate and innovate to build something awesome! All monetary prizes will be split equally among the winning team members.</p>
                </div>

                <div className="flex gap-10">
                    <div className="relative flex justify-end">
                        <Image draggable={false} src={`Swags/Digital Card.svg`} alt="Digital Card" width={1920} height={1080} quality={100} className={`w-[400px] rounded-xl`} fetchPriority="high" loading="eager" />
                        <Image draggable={false} src={uploadedImage} alt="Upload Your Photo" width={1920} height={1080} quality={100} className="absolute bottom-6 right-6 w-[250px] object-contain rounded-xl" fetchPriority="high" loading="eager" />
                        <h1 className="absolute bottom-6 right-6 w-[250px] text-center text-2xl truncate text-white">{name}</h1>
                    </div>
                    <div className="flex flex-col gap-10 justify-center">
                        <div className="flex flex-col gap-4 justify-center">
                            <h1 className="text-2xl font-semibold">Claim Your HackwithIndia Digital Badge!</h1>
                            <p className="text-lg font-medium">Proud to be part of HackwithIndia? Showcase your accomplishment with the official HackwithIndia Digital Badge! 🌟</p>
                            <p className="text-lg font-medium">Here’s how you can claim your badge in just 3 steps :-</p>
                            <ul className="list-inside list-decimal text-lg font-medium">
                                <li>Enter Your Name - Make it truly yours.</li>
                                <li>Upload Your Photo - Add your personal touch.</li>
                                <li>Download Your Badge - Ready to share your success!</li>
                            </ul>
                            <p className="text-lg font-medium">Celebrate your journey with HackwithIndia and inspire others to innovate and make a difference. Together, let’s shape the future! 🚀</p>
                            <p className="italic">*Note: Your privacy is important to us. We do not store or share your photos in any way.</p>
                        </div>
                        <div className="flex flex-col gap-4 w-fit">
                            <Input className="w-full" value={name} onChange={(e) => setName(e.target.value)} />
                            <div className="flex gap-4 w-fit">
                                <Button>
                                    <label typeof="upload-your-photo" className="cursor-pointer">
                                        <Input id="upload-your-photo" accept="image/*" onChange={handleImageUpload} type="file" className="hidden" />
                                        <h1>Upload Your Photo</h1>
                                    </label>
                                </Button>
                                <Button>Desgin It</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Tabs defaultValue={SwagsCategory[0]}>
                    <TabsList>
                        {SwagsCategory.map((category, index) => (
                            <TabsTrigger key={index} value={category}>
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {SwagsCategory.map((category) => (
                        <TabsContent key={category} value={category} className="flex flex-col items-center justify-center w-full gap-10">
                            <div className={`grid grid-cols-1 ${category === "Mobile" ? "md:grid-cols-2 xl:grid-cols-3" : "lg:grid-cols-2"} gap-8 w-full`}>
                                {SwagsData.filter((item) => item.category === category).map((data, index) => (
                                    <div key={index} className="flex relative flex-col gap-4">
                                        <Image draggable={false} src={`/${data.src}`} alt={data.category} width={6000} height={3375} quality={100} className={`${data.category === "Mobile" ? "aspect-[9/16]" : "aspect-video"} border w-full rounded-xl`} fetchPriority="high" loading="eager" />
                                        <div className="inset-0 items-end justify-end p-5 absolute flex gap-2">
                                            <Link target="_blank" href={data.src} download={data.download}>
                                                <Button size="icon" variant="primary" className="min-w-fit"><DownloadCloud /></Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="flex flex-col items-center gap-8 bg-gradient-to-r from-blue-200 to-rose-200 h-96 justify-center rounded-2xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold">Ready to Join the Revolution?</h1>
                    <p className="text-lg md:text-xl max-w-2xl">
                        Whether you're a student, developer, or tech enthusiast, there's a place for you in our community.
                    </p>
                    <Button>
                        Join HackWithIndia
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default page