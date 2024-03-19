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
  title: "HackWithIndia",
  description: "HackWithIndia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-Outfit`}>
        <div className="w-full">
          {/* Content */}
          <div>{children}</div>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
