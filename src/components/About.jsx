import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div class="container mx-auto p-4">
    {/* <!-- About Section --> */}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-gray-900 rounded-2xl p-8">
            <div class="flex items-center gap-3 mb-4">
                <div class="bg-gray-800 p-2 rounded-full">
                    <Image draggable={false} src="/Logo/HWI Black.svg" width={120} height={120} quality={100} fetchPriority="high" loading="eager" alt="HackWithIndia" />
                </div>

                <h2 class="text-purple-500 text-2xl font-bold">About HackWithIndia</h2>
            </div>
            <p class="text-gray-300 mb-6">
            HackWithIndia is India’s largest and most impactful hackathon community. With a mission to foster innovation, collaboration, and learning, HackWithIndia has become a hub for tech enthusiasts, developers, and creative problem-solvers across the country.
            In just 10 months, HackWithIndia has organized over 20 high-energy hackathons, solidifying its role as a driving force in India’s rapidly growing tech ecosystem!
            </p>
            <img src="https://c0.wallpaperflare.com/preview/462/572/64/honduras-san-pedro-sula-universidad-de-san-pedro-sula-people.jpg" alt="HackWithIndia" class="w-full rounded-xl"/>
        </div>

        {/* <!-- Stats Grid --> */}
        <div class="grid grid-cols-1 gap-6">
            {/* <!-- Developer Community Card --> */}
            <div class="bg-gray-900 rounded-2xl p-8 relative overflow-hidden">
                <div class="relative z-10">
                    <div class="bg-gray-800 p-2 rounded-full w-fit mb-4">
                        <Image draggable={false} src="/Logo/HWI Black.svg" width={80} height={120} quality={100} fetchPriority="high" loading="eager" alt="HackWithIndia" />
                    </div>

                    <h3 class="text-yellow-400 text-5xl font-bold mb-2">40,000+</h3>
                    <h4 class="text-white text-2xl font-bold mb-2">Developer Community</h4>
                    <p class="text-gray-300">A global network of developers advancing Web3 and AI technologies through collaboration and innovation.</p>
                </div>
                <img src="https://cse.noticebard.com/wp-content/uploads/sites/23/2024/12/Latest-5-Hackathons-2025-for-UG-PG-and-StartUps.jpg" alt="" class="absolute inset-0 w-full h-full object-cover opacity-20"/>
            </div>

            {/* <!-- Bottom Stats --> */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <!-- Web3 & AI Projects --> */}
                <div class="bg-gray-900 rounded-2xl p-8">
                    <div class="bg-gray-800 p-2 rounded-full w-fit mb-4">
                    <Image draggable={false} src="/Logo/HWI Black.svg" width={80} height={120} quality={100} fetchPriority="high" loading="eager" alt="HackWithIndia" />
                    </div>
                    <h3 class="text-emerald-400 text-5xl font-bold mb-2">3000+</h3>
                    <h4 class="text-white text-2xl font-bold mb-2">Web3 & AI Projects</h4>
                    <p class="text-gray-300">Over 3000 Web3 and AI projects built to solve real-world challenges with cutting-edge technology.</p>
                </div>

                {/* <!-- Countries Impacted --> */}
                <div class="bg-gray-900 rounded-2xl p-8">
                    <div class="bg-gray-800 p-2 rounded-full w-fit mb-4">
                    <Image draggable={false} src="/Logo/HWI Black.svg" width={80} height={120} quality={100} fetchPriority="high" loading="eager" alt="HackWithIndia" />
                    </div>

                    <h3 class="text-cyan-400 text-5xl font-bold mb-2">50+</h3>
                    <h4 class="text-white text-2xl font-bold mb-2">Cities Impacted</h4>
                    <p class="text-gray-300">HackWithIndia has impacted developers across multiple cities using Web3 and AI technologies.</p>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default About