"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SiteLinksData } from "@/data/siteLinks";
import { AnimatePresence, motion } from "framer-motion";

const Item = ({ title, href }) => {
    const pathname = usePathname();

    return (
        <Link href={href}
            className={`group relative text-[#9A9A9A] font-semibold px-6 py-2 cursor-pointer
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
    return (
        <>
            <nav className="absolute flex items-center w-full top-10 xl:justify-center">
                <div className="hidden h-10 px-3 py-8 space-x-2 border-2 border-solid rounded-full border-white/20 xl:flex xl:justify-center xl:items-center bg-opacity-60 backdrop-blur-xl">
                    {SiteLinksData.map(({ title, href }) => (
                        <Item key={title} title={title} href={href} />
                    ))}
                </div>
            </nav>
        </>
    );
}

export default Header;