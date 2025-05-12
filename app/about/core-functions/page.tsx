import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function CoreFunctionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">Home / About Us / Core Functions & Services</div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Core Functions & Services</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">Our Core Functions and Services</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Registration and Licensing</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Processing and issuing registration certificates to qualified allied healthcare professionals</li>
                <li>Maintaining a comprehensive register of all registered professionals</li>
                <li>Verification of credentials and qualifications</li>
                <li>Renewal of registration as per established guidelines</li>
                <li>Issuing duplicate certificates when required</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Educational Regulation</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Approval and recognition of educational institutions and programs</li>
                <li>Setting standards for curriculum and training</li>
                <li>Regular assessment and accreditation of institutions</li>
                <li>Monitoring compliance with educational standards</li>
                <li>Providing guidance for curriculum development</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Professional Development</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Organizing workshops, seminars, and continuing education programs</li>
                <li>Promoting research and innovation in allied healthcare</li>
                <li>Facilitating knowledge exchange through conferences and publications</li>
                <li>Recognizing excellence in professional practice</li>
                <li>Supporting career advancement opportunities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Ethical Oversight</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Developing and enforcing a code of ethics for allied healthcare professionals</li>
                <li>Investigating complaints of professional misconduct</li>
                <li>Conducting disciplinary proceedings when necessary</li>
                <li>Providing guidance on ethical dilemmas in healthcare practice</li>
                <li>Promoting awareness of ethical responsibilities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Public Information and Awareness</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Providing information about allied healthcare professions to the public</li>
                <li>Verification services for employers and the public</li>
                <li>Publishing guidelines and resources for healthcare professionals</li>
                <li>Conducting awareness campaigns about allied healthcare services</li>
                <li>Responding to public inquiries about healthcare professionals</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Collaboration and Advocacy</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Collaborating with national and international healthcare organizations</li>
                <li>Representing allied healthcare professionals in policy discussions</li>
                <li>Advocating for the advancement of allied healthcare professions</li>
                <li>Participating in healthcare policy development</li>
                <li>Building partnerships to enhance healthcare services</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
