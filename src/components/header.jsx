"use client"
import React, { useState } from 'react'
import { Slant as Hamburger } from 'hamburger-react'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SiteLinksData } from "@/data/siteLinks";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";

const Item = ({ title, href }) => {
    const pathname = usePathname();

    return (
        <Link href={href}
            className={`group relative lg:text-[#9A9A9A] font-semibold px-6 py-2 cursor-pointer
              rounded-full transition-all ease-in-out focus-visible:outline-2 ${pathname === href ? "" : "hover:bg-[#FFFFFF10]"
                }`}>
            <AnimatePresence initial={false} mode="wait">
                {pathname === href && (
                    <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-[#FFFFFF1A] mix-blend-difference"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        key={title}
                    />
                )}
            </AnimatePresence>
            <p className="text-lg">{title}</p>
        </Link>
    );
};

function Header() {

    const [Menu, setMenu] = useState();

    const Toggle = () => {
        setMenu(!Menu);
    }

    return (
        <>
            <nav className="flex items-center w-full xl:absolute top-10 xl:justify-center">
                <div className="hidden h-10 px-3 py-8 space-x-2 border-2 border-solid rounded-full border-white/20 xl:flex xl:justify-center xl:items-center bg-opacity-60 backdrop-blur-xl">
                    {SiteLinksData.map(({ title, href }) => (
                        <Item key={title} title={title} href={href} />
                    ))}
                </div>

                <div className="flex items-center justify-between w-full p-5 xl:hidden">
                    <Link href={"/"} className="flex flex-col leading-none cursor-pointer">
                        <span className="text-4xl font-bold sm:text-5xl">HACK</span>
                        <span className="text-xl font-semibold tracking-tight sm:tracking-normal sm:text-2xl">WITH INDIA</span>
                    </Link>
                    <div className="relative flex items-center justify-center px-4 rounded-full outline xl:hidden">
                        <button onClick={Toggle} className="z-[2000]">
                            <Hamburger duration={0.8} size={24} rounded toggled={Menu} toggle={setMenu} />
                        </button>
                    </div>
                </div >
            </nav>


        </>
    );
}

export default Header;