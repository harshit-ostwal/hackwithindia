import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--Outfit",
  preload: true
});

export const metadata = {
  title: "HackWithIndia",
  description: "HackWithIndia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${outfit.variable} font-Outfit`}>
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
        <div className="w-full">
          {/* Content */}
          <div>{children}</div>

          {/* Footer */}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
