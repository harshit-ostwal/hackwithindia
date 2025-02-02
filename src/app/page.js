import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaqData } from "@/constants/faqs";

function Page() {

  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="flex flex-col w-full gap-40">


        {/* <div className="min-h-screen flex rounded-b-[40px] py-20 px-2">
          <div className="flex flex-col lg:flex-row gap-20 w-full justify-center">
            <div className="text-[4rem] md:text-[5rem]">
              <h1 className="font-medium leading-none">Frequently</h1>
              <h1 className="font-medium leading-none">asked</h1>
              <h1 className="font-Tobias leading-none">questions</h1>
            </div>

            <Accordion type="single" collapsible className="flex-1 max-w-3xl">
              {FaqData.slice(0, 5).map((data, index) => (
                <AccordionItem key={index} value={data.faqId}>
                  <AccordionTrigger>{data.question}</AccordionTrigger>
                  <AccordionContent>{data.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Page;