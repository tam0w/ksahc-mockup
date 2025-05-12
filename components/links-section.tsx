import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function LinksSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">Important Links</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="https://ncahp.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                National Commission for Allied and Healthcare Professions
              </Link>
            </li>
            <li>
              <Link
                href="https://www.rguhs.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Rajiv Gandhi University of Health Sciences
              </Link>
            </li>
            <li>
              <Link
                href="https://karunadu.karnataka.gov.in/medicalEducation/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Department of Medical Education, Karnataka
              </Link>
            </li>
            <li>
              <Link
                href="https://www.mohfw.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Ministry of Health and Family Welfare
              </Link>
            </li>
            <li>
              <Link
                href="https://www.karnataka.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Government of Karnataka
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">Circulars and Downloads</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex flex-col items-center justify-center h-40 text-center">
            <p className="text-muted-foreground">UNDER PROCESS</p>
            <p className="text-sm mt-2">Circulars and downloads will be available soon.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
