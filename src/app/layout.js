import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/SmoothScroll";
import BottomToTop from "@/components/BottomToTop";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--Outfit",
  preload: true
});

export const metadata = {
  author: "HackWithIndia",
  title: {
    template: '%s | HackWithIndia',
    default: 'HackWithIndia | An Official Coding Hackathons',
  },
  description: "By harnessing the potential of advanced technologies like artificial intelligence, the Internet of Things, blockchain, and more, our hackathon aims to inspire students to craft innovative solutions that not only contribute to environmental betterment but also address pressing humanitarian challenges.",
  keywords: ["HackWithIndia", "coding hackathon contest", "coding contest", "live hackathons", "hackwithindia official website", "online coding contest", "hackathon", "web development", "app development", "programming", "technology", "education", "contest", "hackwithindia", "Machine Learning Hackathon", "Ai Hackathon", "ML Hackathon",]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="HackWithIndia" />
        <meta name="copyright" content="Copyright © HACKWITHINDIA | All Rights Reserved" />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hackwithindia.live" />
        <meta property="og:title" content="HackWithIndia | An Official Coding Hackathons" />
        <meta name="twitter:title" content="HackWithIndia | An Official Coding Hackathons" />
        <meta name="twitter:description" content="By harnessing the potential of advanced technologies like artificial intelligence, the Internet of Things, blockchain, and more, our hackathon aims to inspire students to craft innovative solutions that not only contribute to environmental betterment but also address pressing humanitarian challenges." />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </head>
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
