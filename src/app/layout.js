import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--Outfit",
  preload: true
});

export const metadata = {
  author: "HackwithIndia",
  copyright: "Copyright © HackwithIndia | All Rights Reserved.",
  title: {
    template: '%s | HackwithIndia',
    default: 'India’s Biggest Hackathon Community | HackwithIndia',
  },
  description: "HackwithIndia - your gateway to cutting-edge coding hackathons and contests! Join us for live hackathons that challenge your skills in web development, app development, programming, and technology. As the official website of HackwithIndia, we offer online coding contests that push the boundaries of innovation. Whether you're a seasoned coder or just starting, our contests provide a platform for learning and growth. Don't miss out on the Machine Learning Hackathon, Ai Hackathon, and ML Hackathon events that are sure to inspire. Join us and be part of a community dedicated to education, creativity, and technology advancement.",
  keywords: [
    "HackwithIndia",
    "HackwithIndia Chandigarh",
    "chandigarh hackathons",
    "latest hackathon",
    "hack india",
    "hackwithindia instagram",
    "hackwithindia devfolio",
    "hackwithindia youtube",
    "hackwithindia linkedin",
    "hackwithindia upcoming news",
    "latest news",
    "polygon",
    "microsoft",
    "google",
    "ola",
    "quille",
    "hive",
    "freshen up",
    "reskill",
    "flagsmith",
    "smart india hackathons",
    "top hackathon",
    "instagram hackwithindia",
    "devfoilo hackwithindia",
    "Hack with India",
    "coding hackathon contest",
    "coding contest",
    "live hackathons",
    "HackwithIndia official website",
    "online coding contest",
    "hackathon",
    "web development",
    "app development",
    "programming",
    "technology",
    "education",
    "contest",
    "Machine Learning Hackathon",
    "Ai Hackathon",
    "ML Hackathon",
    "hackathon event",
    "coding competition",
    "software development",
    "coding challenges",
    "programming contest",
    "hackathon for students",
    "hackathon for developers",
    "innovation contest",
    "tech contest",
    "hackathon registration",
    "hackathon prizes",
    "hackathon rules",
    "hackathon guidelines",
    "hackathon schedule",
    "hackathon projects",
    "hackathon ideas"
  ],
  openGraph: {
    title: "India’s Biggest Hackathon Community | HackwithIndia",
    description:
      "Welcome to HackwithIndia - your gateway to cutting-edge coding hackathons and contests! Join us for live hackathons that challenge your skills in web development, app development, programming, and technology. As the official website of HackwithIndia, we offer online coding contests that push the boundaries of innovation. Whether you're a seasoned coder or just starting, our contests provide a platform for learning and growth. Don't miss out on the Machine Learning Hackathon, Ai Hackathon, and ML Hackathon events that are sure to inspire. Join us and be part of a community dedicated to education, creativity, and technology advancement..",
    url: "https://HackwithIndia.live",
    images:
      "https://res.cloudinary.com/dgw7uwtzg/image/upload/v1714453712/andgjtvunpehjvzvg6vi.png",
    siteName: "India’s Biggest Hackathon Community | HackwithIndia",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${outfit.variable} font-Outfit subpixel-antialiased bg-black`}>
        <div className="relative flex flex-col w-full text-white">
          <div className="absolute -z-10 min-h-screen w-full bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,#000_80%,transparent_110%)]"></div>
          <Header />

          <div className="flex-1 mt-[15%] 2xl:mt-[10%] flex flex-col gap-60">
            <div className="min-h-full">
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
