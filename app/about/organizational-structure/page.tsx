import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function OrganizationalStructurePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">Home / About Us / Organizational Structure</div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Organizational Structure</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">Framework</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-6">
            The Karnataka State Allied and Healthcare Council operates through a structured framework that includes four
            Autonomous Boards, each responsible for specific aspects of allied healthcare regulation and education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-ksahc-lightBlue text-white">
                <CardTitle className="text-lg">Under-graduate Allied and Healthcare Education Board</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Determines standards of education at undergraduate level</li>
                  <li>Develops curriculum and course materials</li>
                  <li>Approves educational institutions</li>
                  <li>Coordinates with universities for degree programs</li>
                  <li>Monitors quality of undergraduate education</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-ksahc-lightBlue text-white">
                <CardTitle className="text-lg">Post-graduate Allied and Healthcare Education Board</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Sets standards for postgraduate education</li>
                  <li>Develops advanced curriculum and specializations</li>
                  <li>Approves institutions for postgraduate programs</li>
                  <li>Promotes research and innovation</li>
                  <li>Ensures quality of postgraduate training</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-ksahc-lightBlue text-white">
                <CardTitle className="text-lg">Allied and Healthcare Professions Assessment and Rating Board</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Conducts assessments of educational institutions</li>
                  <li>Rates institutions based on established criteria</li>
                  <li>Evaluates professional competence</li>
                  <li>Develops assessment methodologies</li>
                  <li>Publishes reports on institutional performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-ksahc-lightBlue text-white">
                <CardTitle className="text-lg">
                  Allied and Healthcare Professions Ethics and Registration Board
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Maintains register of qualified professionals</li>
                  <li>Develops and enforces code of ethics</li>
                  <li>Handles registration and renewal processes</li>
                  <li>Investigates complaints of misconduct</li>
                  <li>Takes disciplinary action when necessary</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
