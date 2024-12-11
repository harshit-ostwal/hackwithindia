import BoxReveal from '@/components/magicui/box-reveal'
import React from 'react'

export default function page() {
    return (
        // <div className="flex flex-col items-center w-full min-h-full gap-20 p-2 overflow-hidden">
        //     <div className="flex flex-col items-center max-w-5xl gap-5 text-center">
        //         <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        //             <p className="font-semibold tracking-tighter text-7xl">
        //                 Code Of Conduct
        //             </p>
        //         </BoxReveal>
        //         <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        //             <p className="text-sm md:text-lg lg:text-xl">
        //                 Explore our Code of Conduct to understand our rules and regulations<span className="text-[#5046e6]">.</span>
        //             </p>
        //         </BoxReveal>
        //     </div>

        //     <div className="flex flex-col w-full max-w-5xl gap-20">
        //         <div className="flex flex-col gap-10">
        //             <div className="flex flex-col gap-4">
        //                 <h1 className="text-3xl font-semibold text-blue-300">Applicability</h1>
        //                 <span className="w-full border-b rounded-full border-neutral-400"></span>
        //             </div>

        //             <div className="flex flex-col gap-10">
        //                 <h1 className="text-lg">This policy shall be applicable on all spaces related to Devfolio, including the following, as well as their online counterparts (if any):</h1>
        //                 <ul className="pl-6 text-lg list-disc list-inside">
        //                     <li>hackathons</li>
        //                     <li>talks, presentations, or demos</li>
        //                     <li>workshops</li>
        //                     <li>parties and social events</li>
        //                     <li>social media channels, etc.</li>
        //                 </ul>
        //                 <h1 className="text-lg">This Code of Conduct also applies equally to all sponsors and partners of hackathons, and to all projects that are made at the hackathon.</h1>
        //             </div>
        //         </div>

        //         <div className="flex flex-col gap-10">
        //             <div className="flex flex-col gap-4">
        //                 <h1 className="text-3xl font-semibold text-blue-300">No plagiarism or re-using of past work</h1>

        //                 <span className="w-full border-b rounded-full border-neutral-400"></span>
        //             </div>

        //             <div className="flex flex-col gap-10">
        //                 <h1 className="text-lg">We encourage you to submit projects only prepared in the duration of the hackathon. <br /> However, if you decide to submit projects consisting of re-used code, or re-submit a project that you have already submitted previously to any other hackathon, you are to disclose such previous use and its extent with the submission.</h1>
        //                 <h1 className="text-lg">  If upon inspection, it is found that the project has re-used code that was not disclosed with the submission, the organizer may ask the participant to point out similarities and differences between the old and new work, and/or disqualify the submission from winning awards automatically.</h1>
        //             </div>
        //         </div>

        //         <div className="flex flex-col gap-10">
        //             <div className="flex flex-col gap-4">
        //                 <h1 className="text-3xl font-semibold text-blue-300">No discrimination</h1>

        //                 <span className="w-full border-b rounded-full border-neutral-400"></span>
        //             </div>

        //             <div className="flex flex-col gap-10">
        //                 <h1 className="text-lg">Hackathons hosted on Devfolio are dedicated to providing a safe and comfortable environment and harassment-free experience for everyone. No discrimination, on the basis of the following, shall be tolerated:</h1>
        //                 <ul className="pl-6 text-lg list-disc list-inside">
        //                     <li>gender</li>
        //                     <li>gender identity and expression</li>
        //                     <li>age</li>
        //                     <li>sexual orientation</li>
        //                     <li>disability</li>
        //                     <li>physical appearance</li>
        //                     <li>body size</li>
        //                     <li>race</li>
        //                     <li>ethnicity</li>
        //                     <li>nationality</li>
        //                     <li>religion</li>
        //                     <li>political views</li>
        //                     <li>previous hackathon attendance or lack of</li>
        //                     <li>computing experience or lack of</li>
        //                     <li>chosen programming language or tech stack</li>
        //                 </ul>
        //             </div>
        //         </div>

        //         <div className="flex flex-col gap-10">
        //             <div className="flex flex-col gap-4">
        //                 <h1 className="text-3xl font-semibold text-blue-300">No harassment</h1>

        //                 <span className="w-full border-b rounded-full border-neutral-400"></span>
        //             </div>

        //             <div className="flex flex-col gap-10">
        //                 <h1 className="text-lg">We do not tolerate harassment of hackathon participants in any form, including offensive discriminatory verbal comments, public display of sexual material, in public spaces, deliberate intimidation, stalking, wilful disruption, inappropriate physical contact, unwelcome sexual advances, and the taking of photographs and audio/video recordings without the subjects consent.</h1>
        //             </div>
        //         </div>

        //         <div className="flex flex-col gap-10">
        //             <div className="flex flex-col gap-4">
        //                 <h1 className="text-3xl font-semibold text-blue-300">No recording without consent</h1>

        //                 <span className="w-full border-b rounded-full border-neutral-400"></span>
        //             </div>

        //             <div className="flex flex-col gap-10">
        //                 <h1 className="text-lg">While photography and videography is encouraged, other participants must be given a reasonable chance to opt out from being photographed. If they object to the taking of their photograph, comply with their request.</h1>
        //                 <h1 className="text-lg">If they express their disapproval after the photo or video has been captured, please delete it from your records, and in case it has been shared online, take reasonable steps to retract it from social media as well.</h1>
        //                 <h1 className="text-lg">It is inappropriate to take photographs in contexts where people have a reasonable expectation of privacy (in bathrooms or where participants are sleeping).</h1>
        //             </div>
        //         </div>

        //         <div className="flex flex-col gap-10">
        //             <div className="flex flex-col gap-4">
        //                 <h1 className="text-3xl font-semibold text-blue-300">Creation of a safe space</h1>

        //                 <span className="w-full border-b rounded-full border-neutral-400"></span>
        //             </div>

        //             <div className="flex flex-col gap-10">
        //                 <h1 className="text-lg">No sponsors, partners, or participants shall use sexualised images, activities, or other material at the hackathons for any non-permitted purpose. The use of sexualised clothing/uniforms/costumes, and anything that creates a sexualised environment is prohibited.</h1>
        //                 <h1 className="text-lg">If they express their disapproval after the photo or video has been captured, please delete it from your records, and in case it has been shared online, take reasonable steps to retract it from social media as well.</h1>
        //                 <h1 className="text-lg">It is inappropriate to take photographs in contexts where people have a reasonable expectation of privacy (in bathrooms or where participants are sleeping).</h1>
        //             </div>
        //         </div>

        //         <div className="flex flex-col gap-10">
        //             <div className="flex flex-col gap-4">
        //                 <h1 className="text-3xl font-semibold text-blue-300">Intellectual Property</h1>

        //                 <span className="w-full border-b rounded-full border-neutral-400"></span>
        //             </div>

        //             <div className="flex flex-col gap-10">
        //                 <h1 className="text-lg">You will own any developments made by you, and all rights, titles and interests in those developments, including the intellectual property rights therein, shall belong to you. By posting your submission on Devfolio, you are granting Devfolio a non-exclusive, worldwide, royalty-free license to use, distribute, display and reproduce your submission only to the extent required by us to provide services on the Devfolio platform. We will never try to steal your creations or use them exploitatively.</h1>
        //             </div>
        //         </div>

        //         <div className="flex flex-col gap-10">
        //             <div className="flex flex-col gap-4">
        //                 <h1 className="text-3xl font-semibold text-blue-300">Always report</h1>

        //                 <span className="w-full border-b rounded-full border-neutral-400"></span>
        //             </div>

        //             <div className="flex flex-col gap-10">
        //                 <h1 className="text-lg">If you notice any violation of this Code of Conduct or find otherwise suspicious behavior or have any concerns, please contact a member of the hackathon organizing committee immediately.</h1>
        //                 <h1 className="text-lg">We will be happy to help participants contact local security or local law enforcement, or otherwise assist those experiencing harassment to feel safe for the duration of the hackathon. We value your attendance.</h1>
        //             </div>
        //         </div>

        //         <div className="flex flex-col gap-10">
        //             <div className="flex flex-col gap-4">
        //                 <h1 className="text-3xl font-semibold text-blue-300">Consequences of violations</h1>

        //                 <span className="w-full border-b rounded-full border-neutral-400"></span>
        //             </div>

        //             <div className="flex flex-col gap-10">
        //                 <h1 className="text-lg">In case any participant violates this Code of Conduct, the organizer may, at their own discretion:</h1>
        //                 <ul className="pl-6 text-lg list-disc list-inside">
        //                     <li>expel them from the hackathon with no refund (if applicable),</li>
        //                     <li>block their access to Devfolio resources including the website,</li>
        //                     <li>report their behaviour to local law enforcement.</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <h1>Website Hacked By PodaHack</h1>
    )
}
