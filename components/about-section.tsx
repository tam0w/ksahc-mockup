import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <Card className="mb-8">
      <CardHeader className="bg-ksahc-blue text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Karnataka State Allied and Healthcare Council</CardTitle>
          <Link href="/about">
            <Button variant="link" className="text-white p-0 h-auto">
              Know More <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="mb-4">
              Welcome to the Karnataka State Allied and Healthcare Council webpage. The Karnataka State Allied and
              Healthcare Council (KSAHC) is a statutory body established under the National Commission for Allied and
              Healthcare Professions Act, 2021.
            </p>
            <p className="mb-4">
              As the apex regulatory body for allied and healthcare professionals in Karnataka, we are committed to
              maintaining high standards of education, practice, and professional conduct.
            </p>
            <p>
              Our mission is to standardize and regulate the education and practice of allied and healthcare
              professionals, ensuring quality healthcare services for all citizens of Karnataka.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/logo.jpeg"
              alt="KSAHC Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/about/members" className="block">
            <Card className="h-full hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <h3 className="font-medium mb-2">KSAHC Members</h3>
                <p className="text-sm text-muted-foreground">View the council members and their profiles</p>
                <Button variant="outline" size="sm" className="mt-4">
                  View Members
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/about" className="block">
            <Card className="h-full hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <h3 className="font-medium mb-2">About Us</h3>
                <p className="text-sm text-muted-foreground">Learn more about our vision, mission, and objectives</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/resources/acts" className="block">
            <Card className="h-full hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <h3 className="font-medium mb-2">Council Act</h3>
                <p className="text-sm text-muted-foreground">
                  Read the National Commission for Allied and Healthcare Professions Act, 2021
                </p>
                <Button variant="outline" size="sm" className="mt-4">
                  View PDF
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
