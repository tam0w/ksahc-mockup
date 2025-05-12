import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-ksahc-blue text-white p-3 rounded-full hover:bg-ksahc-lightBlue transition-colors"
      >
        <Facebook className="h-6 w-6" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-ksahc-blue text-white p-3 rounded-full hover:bg-ksahc-lightBlue transition-colors"
      >
        <Instagram className="h-6 w-6" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-ksahc-blue text-white p-3 rounded-full hover:bg-ksahc-lightBlue transition-colors"
      >
        <Twitter className="h-6 w-6" />
        <span className="sr-only">Twitter</span>
      </Link>
    </div>
  )
}
