import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FaqData } from '@/data/faq'
import BoxReveal from '@/components/magicui/box-reveal'

function page() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-20 p-2 overflow-hidden">
      <div className="flex flex-col items-center max-w-5xl gap-5 text-center">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="font-semibold tracking-tighter text-7xl">
            FAQ's<span className="text-[#5046e6]"></span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-sm md:text-lg lg:text-xl">
            Explore our FAQs to find answers to common questions about HackWithIndia.<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>
      </div>

      <Accordion type="single" collapsible className="w-[340px] md:w-full md:max-w-5xl">
        {FaqData.map((data, index) => (
          <AccordionItem key={index} value={data.faqId}>
            <AccordionTrigger>{data.faqQuestion}</AccordionTrigger>
            <AccordionContent>
              {data.faqAnswer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default page