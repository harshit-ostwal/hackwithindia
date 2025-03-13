import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SocialMedia } from "@/constants/social-media";
import { SitemapData } from "@/constants/sitemap";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center rounded-t-[40px] justify-center leading-none w-full h-full pt-40 overflow-hidden bg-black text-white">
            <div className="w-11/12 flex flex-col gap-20">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl sm:text-4xl">Sitemap</h1>
                        <div className="flex gap-20">
                            <div className="flex flex-col gap-4">
                                {SitemapData.slice(0, 6).map((data, index) => (
                                    <Link key={index} href={data.href} className="text-lg sm:text-xl w-fit text-white">{data.title}</Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4">
                                {SitemapData.slice(6, 12).map((data, index) => (
                                    <Link key={index} href={data.href} className="text-lg sm:text-xl w-fit text-white">{data.title}</Link>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl sm:text-4xl">Follow Us</h1>
                        <div className="flex flex-col gap-4">
                            {SocialMedia.map((data, index) => (
                                <Link href={data.href} key={index} target="_blank" className="text-lg sm:text-xl w-fit text-white">{data.title}</Link>
                            ))}
                        </div>
                    </div>
                    {/* Subscribe */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl sm:text-4xl">Subscribe</h1>
                            <p className="text-neutral-400 text-lg md:text-xl">Subscribe for updates and announcements from HackWithIndia!</p>
                        </div>
                        <Input type="email" placeholder="demo@gmail.com" />
                        <Button variant={"outline"} className="w-fit">Subscribe</Button>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-10 pb-10">
                    <h1 className="text-[12.2vw] font-Rejouice" >HACKWITHINDIA</h1>
                    <div className="flex items-center justify-between">
                        <p className="lg:text-xl text-white">© {year} · Harsh Sharmaa & Moksha Kohli</p>
                        <p className="lg:text-xl text-white">All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
