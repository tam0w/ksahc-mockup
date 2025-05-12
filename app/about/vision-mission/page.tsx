import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function VisionMissionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">Home / About Us / Vision & Mission</div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Vision & Mission</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="bg-ksahc-blue text-white">
            <CardTitle className="text-xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-4">
              To be the premier regulatory body for allied and healthcare professions in India, ensuring the highest
              standards of education, practice, and professional conduct, thereby contributing to the overall
              improvement of healthcare services in Karnataka.
            </p>
            <p>
              We envision a healthcare ecosystem where allied and healthcare professionals are recognized for their
              vital contributions, and where every citizen has access to quality healthcare services delivered by
              competent and ethical professionals.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-ksahc-blue text-white">
            <CardTitle className="text-xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-ksahc-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  1
                </span>
                <p>
                  To regulate and standardize the education and practice of allied and healthcare professionals in
                  Karnataka.
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-ksahc-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  2
                </span>
                <p>
                  To establish and maintain high standards of professional conduct and ethics among allied and
                  healthcare professionals.
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-ksahc-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  3
                </span>
                <p>To promote continuous professional development and research in allied and healthcare fields.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-ksahc-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  4
                </span>
                <p>
                  To collaborate with national and international organizations to enhance the quality of healthcare
                  education and services.
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-ksahc-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  5
                </span>
                <p>
                  To protect the interests of patients and the public by ensuring the competence of allied and
                  healthcare professionals.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
