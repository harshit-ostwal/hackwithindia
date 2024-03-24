import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export const SocialMediaIcons = [
  {
    iconName: <Youtube />,
    iconHref: ""
  },
  {
    iconName: <Instagram />,
    iconHref: "https://instagram.com/hackwithindia"
  },
  {
    iconName: <Twitter />,
    iconHref: ""
  },
  {
    iconName: <Linkedin />,
    iconHref: ""
  },
  {
    iconName: <Github />,
    iconHref: ""
  }
]

function SocialMedia() {
  return (
    <div className="flex items-center gap-2">
      {SocialMediaIcons.map((data, index) => (
        <Link key={index} href={data.iconHref} className="p-3 text-black transition-all duration-200 rounded-full bg-gradient-end hover:scale-110">
          {data.iconName}
        </Link>
      ))}
    </div>


  )
}

export default SocialMedia