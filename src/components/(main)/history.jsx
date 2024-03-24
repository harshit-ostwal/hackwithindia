import React from 'react'

function History() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5 py-40 text-white via-black bg-gradient-to-tr gap-14 md:gap-20 from-gradient-middle to-gradient-start">
            <div className="flex items-start w-full max-w-7xl">
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our History</h1>
            </div>
            <ul className="space-y-5 max-w-7xl lg:text-lg">
                <li>
                    The primary aim of this hackathon would be to inspire young brains to develop their technical, and team collaboration skills, and encourage them to foster a heightened sense of responsibility towards society, instilling them to channel their creative ideas towards betterment of the community.
                </li>
                <li>
                    There will be 2 rounds in the hackathon. On the first day, Round 1 will begin with participants giving an abstract and presentation on their idea, followed by Round 2 of the mentorship process. Only the shortlisted teams will be in round 2 which is prototyping. After the results of round 2 finalists will give the presentation to the judges on the second day and the winner of the contest will be declared.
                </li>
                <li>
                    We are expected to gather more than 800 participants from all over other universities. We would also be providing them with food and basic amenities from the sponsors fund. Additionally, we'd be contacting a number of well-known figures in industry and education.
                </li>
            </ul>
        </div>
    )
}

export default History