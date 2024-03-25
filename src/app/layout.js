import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--Outfit",
  preload: true
});

export const metadata = {
  title: {
    template: '%s | HackWithIndia',
    default: 'HackWithIndia',
  },
  description: "HackWithIndia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
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
        </SmoothScroll>
      </body>
    </html>
  );
}
