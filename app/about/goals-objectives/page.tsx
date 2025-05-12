import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function GoalsObjectivesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">Home / About Us / Goals & Objectives</div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Goals & Objectives</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">Our Goals and Objectives</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Educational Excellence</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Establish and maintain standards for allied healthcare education in Karnataka.</li>
                <li>Approve and recognize educational institutions and programs that meet the required standards.</li>
                <li>Develop and update curricula for various allied healthcare professions.</li>
                <li>Conduct regular assessments and accreditations of educational institutions.</li>
                <li>Promote research and innovation in allied healthcare education.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Professional Registration and Regulation</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Maintain a comprehensive register of qualified allied healthcare professionals in Karnataka.</li>
                <li>Establish clear criteria for registration and renewal of registration.</li>
                <li>Verify the credentials and qualifications of healthcare professionals.</li>
                <li>Issue registration certificates and maintain records of registered professionals.</li>
                <li>Implement a transparent and efficient registration process.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Quality Enhancement</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Develop and enforce standards of practice for allied healthcare professions.</li>
                <li>Promote continuous professional development among healthcare professionals.</li>
                <li>Organize workshops, seminars, and training programs to enhance skills and knowledge.</li>
                <li>Establish a framework for quality assurance in healthcare services.</li>
                <li>Recognize and reward excellence in healthcare practice.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Ethical Practice</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Develop and enforce a code of ethics for allied healthcare professionals.</li>
                <li>Establish mechanisms for addressing complaints and grievances.</li>
                <li>Conduct investigations into allegations of professional misconduct.</li>
                <li>Take disciplinary action against professionals who violate ethical standards.</li>
                <li>Promote awareness of ethical issues among healthcare professionals.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Collaboration and Advocacy</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Collaborate with national and international organizations to enhance healthcare standards.</li>
                <li>Advocate for the recognition and advancement of allied healthcare professions.</li>
                <li>Engage with stakeholders to address challenges and opportunities in healthcare.</li>
                <li>Represent the interests of allied healthcare professionals at various forums.</li>
                <li>Promote public awareness about the role and importance of allied healthcare professionals.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
