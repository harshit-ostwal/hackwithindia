import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      <div className="flex flex-col gap-20 w-full 2xl:w-4/5">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Code of Conduct</h1>
          <p className="text-lg md:text-xl">This policy shall be applicable on all spaces related to <span className="font-semibold border-b-2 border-amber-300">HackwithIndia</span>, including the following, as well as their online counterparts (if any):</p>
          <ul className="text-lg md:text-xl list-disc list-inside space-y-4">
            <li>Hackathons</li>
            <li>Talks, presentations, or demos</li>
            <li>Workshops</li>
            <li>Parties and social events</li>
            <li>Social media channels, etc.</li>
          </ul>
          <p className="text-lg md:text-xl">This Code of Conduct also applies equally to all <span className="font-semibold border-b-2 border-pink-300">Sponsors & Partners</span> of hackathons, and to all projects that are made at the hackathon.</p>
        </div>

        <Separator />

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl font-semibold">No Plagiarism or Re-using of Past Work</h1>
          <p className="text-lg md:text-xl">We encourage you to submit projects <span className="font-semibold border-b-2 border-amber-300">only prepared during the duration of the hackathon</span></p>
          <ul className="text-lg md:text-xl list-disc list-inside space-y-4">
            <li>If you decide to submit projects consisting of <span className="font-semibold border-b-2 border-purple-300">Re-Used Code</span> or re-submit a project that has already been submitted to any other hackathon, <span className="font-semibold border-b-2 border-blue-300">You Must Disclose</span> such previous use and its extent with the submission.</li>
            <li>If upon inspection it is found that the project contains <span className="font-semibold border-b-2 border-red-300">Re-Used Code</span> that was not disclosed, the organizer may:</li>
            <li>Ask the participant to point out similarities and differences between the old and new work, and/or</li>
            <li>Disqualify the submission from winning awards automatically.</li>
          </ul>
        </div>

        <Separator />

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl font-semibold">No Discrimination</h1>
          <p className="text-lg md:text-xl">Hackathons hosted on HackwithIndia are dedicated to providing a <span className="font-semibold border-b-2 border-green-300">Safe & Comfortable Environment</span> and a <span className="font-semibold border-b-2 border-purple-300">Harassment-free Experience</span> for everyone. Discrimination based on the following will <span className="font-semibold border-b-2 border-cyan-300">Not</span> be tolerated:</p>
          <ul className="text-lg md:text-xl list-disc list-inside space-y-4">
            <li>Gender</li>
            <li>Gender identity and expression</li>
            <li>Age</li>
            <li>Sexual orientation</li>
            <li>Disability</li>
            <li>Physical appearance</li>
            <li>Body size</li>
            <li>Race</li>
            <li>Ethnicity</li>
            <li>Nationality</li>
            <li>Religion</li>
            <li>Political views</li>
            <li>Previous hackathon attendance or lack of</li>
            <li>Computing experience or lack of</li>
            <li>Chosen programming language or tech stack</li>
          </ul>
        </div>

        <Separator />

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl font-semibold">No Harassment</h1>
          <p className="text-lg md:text-xl">We do not tolerate <span className="font-semibold border-b-2 border-amber-300">Harassment</span> of hackathon participants in any form, including:</p>
          <ul className="text-lg md:text-xl list-disc list-inside space-y-4">
            <li>Offensive discriminatory verbal comments</li>
            <li>Public display of sexual material in public spaces</li>
            <li>Deliberate intimidation</li>
            <li>Stalking</li>
            <li>Wilful disruption</li>
            <li>Inappropriate physical contact</li>
            <li>Unwelcome sexual advances</li>
            <li>Taking photographs or audio/video recordings without the subject's consent</li>
          </ul>
        </div>

        <Separator />

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl font-semibold">No Recording Without Consent</h1>
          <p className="text-lg md:text-xl">Photography and videography are encouraged, but:</p>
          <ul className="text-lg md:text-xl list-disc list-inside space-y-4">
            <li>Participants must be given a <span className="font-semibold border-b-2 border-cyan-300">Reasonable Chance</span> to opt out from being photographed.</li>
            <li>If a participant objects to being photographed, comply with their request.</li>
            <li>If they express disapproval after a photo or video has been captured:</li>
            <ul className="space-y-4 list-inside list-disc indent-4">
              <li>Delete it from your records.</li>
              <li>If shared online, take reasonable steps to <span className="font-semibold border-b-2 border-black">Retract It From Social Media</span></li>
            </ul>
            <li>It is inappropriate to take photographs in contexts where people have a <span className="font-semibold border-b-2 border-purple-300">Reasonable Expectation Of Privacy</span> (e.g., bathrooms or sleeping areas).</li>
          </ul>
        </div>

        <Separator />

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Creation of a Safe Space</h1>
          <ul className="text-lg md:text-xl list-disc list-inside space-y-4">
            <li>No sponsors, partners, or participants shall use <span className="font-semibold border-b-2 border-sky-300">Sexualised Images, Activities & Materials</span> for any non-permitted purpose.</li>
            <li>The use of sexualised clothing/uniforms/costumes or anything that creates a <span className="font-semibold border-b-2 border-rose-300">Sexualised Environment</span> is prohibited.</li>
          </ul>
        </div>

        <Separator />

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Intellectual Property</h1>
          <ul className="text-lg md:text-xl list-disc list-inside space-y-4">
            <li>You will <span className="font-semibold border-b-2 border-pink-300">Own Any Developments Made By You</span> including all rights, titles, and interests in those developments.</li>
            <li>By posting your submission on HackwithIndia, you grant HackwithIndia a <span className="font-semibold border-b-2 border-blue-300">Non-Exclusive, Worldwide, Royalty-Free License</span> too.</li>
          </ul>
        </div>

        <Separator />

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Always Report</h1>
          <p className="text-lg md:text-xl">If you notice any <span className="font-semibold border-b-2 border-yellow-300">Violation</span> of this Code of Conduct, find suspicious behavior, or have concerns:</p>
          <ul className="text-lg md:text-xl list-disc list-inside space-y-4">
            <li>No sponsors, partners, or participants shall use <span className="font-semibold border-b-2 border-red-300">Sexualised Images, Activities & Materials</span> for any non-permitted purpose.</li>
            <li>The use of sexualised clothing/uniforms/costumes or anything that creates a <span className="font-semibold border-b-2 border-cyan-300">Sexualised Environment</span> is prohibited.</li>
          </ul>
        </div>

        <Separator />

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Consequences of Violations</h1>
          <p className="text-lg md:text-xl">If any participant violates this Code of Conduct, the organizer may, at their own discretion:</p>
          <ul className="text-lg md:text-xl list-disc list-inside space-y-4">
            <li>Expel the participant from the hackathon with <span className="font-semibold border-b-2 border-orange-300">No Refund</span> (if applicable).</li>
            <li>Block their access to <span className="font-semibold border-b-2 border-pink-300">HackwithIndia Resources</span>, including the website.</li>
            <li>Report their behavior to <span className="font-semibold border-b-2 border-emerald-300">Local Law Enforcement.</span></li>
          </ul>
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
  )
}

export default page