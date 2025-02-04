import About from "@/components/About";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FaqData } from "@/constants/faqs";

function Page() {

  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="flex flex-col w-full 2xl:w-4/5 gap-20">

          <ImagesSliderDemo/>
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        About Us
        </span>
          <About/>
        <div className="flex rounded-b-[40px] py-20 px-2">
          <div className="flex flex-col lg:flex-row gap-20 w-full justify-center">
            <div className="text-[4rem] md:text-[5rem]">
              <h1 className="font-medium leading-none">Frequently</h1>
              <h1 className="font-medium leading-none">asked</h1>
              <h1 className="font-Tobias leading-none">questions</h1>
            </div>

            <Accordion type="single" collapsible className="flex-1 w-full">
              {FaqData.slice(0, 5).map((data, index) => (
                <AccordionItem key={index} value={data.faqId}>
                  <AccordionTrigger>{data.question}</AccordionTrigger>
                  <AccordionContent>{data.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

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
  );
}

export default Page;