import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/SmoothScroll";
import BottomToTop from "@/components/BottomToTop";
import Head from "next/head";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--Outfit",
  preload: true
});

export const metadata = {
  author: "HackWithIndia",
  copyright: "Copyright © HACKWITHINDIA | All Rights Reserved.",
  title: {
    template: '%s | HackWithIndia',
    default: 'HackWithIndia | An Official Coding Hackathons',
  },
  description: "Welcome to HackWithIndia - your gateway to cutting-edge coding hackathons and contests! Join us for live hackathons that challenge your skills in web development, app development, programming, and technology. As the official website of HackWithIndia, we offer online coding contests that push the boundaries of innovation. Whether you're a seasoned coder or just starting, our contests provide a platform for learning and growth. Don't miss out on the Machine Learning Hackathon, Ai Hackathon, and ML Hackathon events that are sure to inspire. Join us and be part of a community dedicated to education, creativity, and technology advancement.",
  keywords: [
    "HackWithIndia",
    "coding hackathon contest",
    "coding contest",
    "live hackathons",
    "hackwithindia official website",
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
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords.join(',')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hackwithindia.live" />
        <meta property="og:title" content="HackWithIndia | An Official Coding Hackathons" />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:card" content="Event2.png" />
        <meta name="twitter:creator" content="@hackwithindia1" />
        <meta name="twitter:title" content="HackWithIndia | An Official Coding Hackathons" />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/Event2.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="canonical" href="https://hackwithindia.live" />
        <meta property="og:image" content="/Event2.png" />
        <meta property="og:image:width" content="3375px" />
        <meta property="og:image:height" content="4219px" />
        <title>{metadata.title}</title>
      </Head>
      <body suppressHydrationWarning={true} className={`${outfit.variable} font-Outfit antialiased`}>
        <SmoothScroll>
          <NextTopLoader
            color={"white"}
            zIndex={1600}
            speed={1000}
            height={4}
            crawlSpeed={1000}
            crawl={true}
            easing="ease"
            showSpinner={false}
            initialPosition={0.1} />
          <div className="relative w-full">
            {/* Content */}
            <div>{children}</div>

            {/* Footer */}
            <Footer />
          </div>
          <Toaster />
          <BottomToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
