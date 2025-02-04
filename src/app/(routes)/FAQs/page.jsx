"use client"
import { SearchInput } from "@/components/search-input"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { FaqData } from "@/constants/faqs";
import { useState } from "react";

function page() {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredFaqs = FaqData.filter(data => data.question.toLowerCase().includes(searchTerm.toLowerCase()) && data.answer);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <div className="flex flex-col w-full gap-20  p-5">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold">Top Untitled <span className="text-amber-300">FAQ's</span></h1>
                        <p className="text-lg lg:text-xl text-neutral-400">Need more info? Check our most asked questions.</p>
                    </div>
                    <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search FAQ's..." />
                </div>

                <Accordion type="single" collapsible>
                    {filteredFaqs.map((data, index) => (
                        <AccordionItem key={index} value={data.faqId}>
                            <AccordionTrigger>{data.question}</AccordionTrigger>
                            <AccordionContent>{data.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

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