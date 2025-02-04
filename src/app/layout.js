import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import BadgeNotification from "@/components/badge-notification";

export const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/Gilroy-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Gilroy-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Gilroy-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Gilroy-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Gilroy-Black.woff2", weight: "900", style: "normal" },
    { path: "./fonts/PolySans-Neutral.woff2", weight: "300", style: "normal" },
    { path: "./fonts/PolySans-Slim.woff2", weight: "100", style: "normal" },
    { path: "./fonts/PolySans-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--Gilroy",
});

export const polysans = localFont({
  src: [
    { path: "./fonts/PolySans-Neutral.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PolySans-Slim.woff2", weight: "100", style: "normal" },
    { path: "./fonts/PolySans-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--PolySans",
});

export const tobias = localFont({
  src: [
    { path: "./fonts/Tobias-Light.woff2", weight: "100", style: "normal" },
  ],
  variable: "--Tobias",
});

export const rejouice = localFont({
  src: [
    { path: "./fonts/Rejouice-Headline.woff2", weighnt: "300", style: "normal" },
  ],
  variable: "--Rejouice",
});

export const metadata = {
  title: "HackwithIndia",
  description: "HackwithIndia is a platform for Indian Hackers to showcase their skills and get hired by top companies.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body className={`${gilroy.variable} ${rejouice.variable} ${tobias.variable} ${polysans.variable} font-Gilroy tracking-tight antialiased smooth-scroll`}>
        <main className="relative flex items-center justify-center flex-col w-full">
          {/* <Loader />
          <BadgeNotification data={"Welcome To India's Biggest Hackathon Community 🇮🇳"} />
          <div className="flex flex-col items-center justify-center w-11/12  p-5">
            <Navbar />
            <main className="py-20 w-full">{children}</main>
          </div>
          <Footer /> */}
          <h1 className="font-bold">We're Currently Under Maintenance | Updates Coming Soon</h1>
        </main>
      </body>
    </html>
  );
}
