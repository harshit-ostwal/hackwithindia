"use client"
import React, { useState } from 'react';
import { hearAboutData } from '@/data/contactForm';
import Input from '../input';
import confetti from "canvas-confetti";

function ContactForm() {
    const [otherHearAbout, setOtherHearAbout] = useState('');
    const [hearAbout, setHearAbout] = useState(null);

    const handleHearAbout = (index) => {
        setHearAbout(index);
        if (hearAboutData[index].hearAbout !== 'Others') {
            setOtherHearAbout('');
        }
    };

    const handleClick = () => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) =>
            Math.random() * (max - min) + min;

        const interval = window.setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);

        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    return (
        <div className="flex justify-center w-full min-h-full">
            <form className="flex flex-col items-center justify-center w-full gap-4 xl:w-4/5">
                <div className="flex flex-col w-full gap-2 md:flex-row">
                    <div className="flex flex-col w-full gap-2">
                        <p>Full Name</p>
                        <Input type="text" placeholder="Full Name" req={true} />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <p>Email ID</p>
                        <Input type="email" placeholder="abc@gmail.com" req={true} />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <p>Mobile No</p>
                    <Input type="text" placeholder="+91 00000 00000" req={true} />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <p>Any other message or queries?</p>
                    <Input type="text" placeholder="Type here anything..." req={true} />
                </div>
                <div className="flex flex-col items-start w-full gap-4">
                    <p>Where did you hear about us?</p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {hearAboutData.map((data, index) => (
                            <label key={index} className={`w-[110px] py-3 border cursor-pointer ${hearAbout === index ? 'border-blue-500 border-2' : 'border-white/50'} rounded-xl`}>
                                <Input type="radio" className="hidden" checked={hearAbout === index} req={true} updateValue={() => handleHearAbout(index)} />
                                <p className="flex flex-col items-center justify-center font-semibold">
                                    {data.hearAbout}
                                </p>
                            </label>
                        ))}
                    </div>
                    {hearAbout !== null && hearAboutData[hearAbout].hearAbout === 'Others' && (
                        <div className="flex flex-col w-full gap-2">
                            <p>Please specify</p>
                            <Input type="text" placeholder="Other Platform Name" req={true} value={otherHearAbout} updateValue={(e) => setOtherHearAbout(e.target.value)} />
                        </div>
                    )}
                </div>
                <button onClick={handleClick} className="w-full py-5 text-xl font-semibold text-white bg-blue-600 rounded-3xl">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;