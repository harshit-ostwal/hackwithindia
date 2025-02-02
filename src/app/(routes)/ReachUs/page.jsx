import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function page() {
    return (
        <div className="flex flex-col gap-20 items-center min-h-screen w-full">
            <div className="flex flex-col gap-20 w-full xl:w-4/5">
                <div className="flex flex-col gap-2 text-center">
                    <div className="relative leading-none flex items-center justify-center">
                        <h1 className="text-[18vw] Stroke sm:text-[15vw] md:text-[10vw] text-transparent font-semibold">REACH US</h1>
                        <div className="absolute inset-0 flex justify-center items-end text-4xl md:text-5xl lg:text-7xl font-bold">
                            REACH US
                        </div>
                    </div>
                    <p className="text-lg lg:text-xl text-neutral-400 text-center">Got any questions or need assistance? Don’t hesitate to contact us. We’re here to help and look forward to connecting with you!</p>
                </div>
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex flex-col gap-4 w-full">
                            <Label>Full Name*</Label>
                            <Input className="bg-neutral-100 border-none" />
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <Label>Mobile No*</Label>
                            <Input className="bg-neutral-100 border-none" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Label>Email*</Label>
                        <Input className="bg-neutral-100 border-none" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Label>Message</Label>
                        <Textarea className="resize-none bg-neutral-100 border-none" />
                    </div>
                    <Button>Submit</Button>
                </div>
                <Separator />

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
            {/* <div className="flex items-start flex-col gap-2 w-4/5">
                <h1 className="text-4xl font-semibold">Have questions? Get in touch!</h1>
                <div className="flex flex-col gap-2 w-fit">
                    <p className="text-xl font-medium">Harshit Jain</p>
                    <p className="text-xl font-medium">+91 7299729975</p>
                    <Link href="" target="_blank" className="text-xl font-medium underline text-blue-500">harshitostwal1234@gmail.com</Link>
                </div>
            </div> */}
        </div>
    )
}

export default page