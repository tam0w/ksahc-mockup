import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">Home / About Us</div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">About Us</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      <Tabs defaultValue="about-ksahc" className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8">
          <TabsTrigger value="about-ksahc">About KSAHC</TabsTrigger>
          <TabsTrigger value="vision-mission">Vision & Mission</TabsTrigger>
          <TabsTrigger value="goals-objectives">Goals & Objectives</TabsTrigger>
          <TabsTrigger value="org-structure">Organizational Structure</TabsTrigger>
          <TabsTrigger value="core-functions">Core Functions</TabsTrigger>
          <TabsTrigger value="prof-categories">Professional Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="about-ksahc">
          <Card>
            <CardHeader className="bg-ksahc-blue text-white">
              <CardTitle className="text-xl">Karnataka State Allied and Healthcare Council</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="mb-4">
                    The Karnataka State Allied and Healthcare Council (KSAHC) is established under Section 22 of the National Commission for Allied and Healthcare Professions Act, 2021. It functions as an autonomous regulatory body under the Government of Karnataka, entrusted with overseeing and standardizing the education and professional practices of allied and healthcare professionals across the state.
                  </p>
                  <p className="mb-4">
                    The Council is responsible for registering qualified professionals, accrediting educational institutions, and ensuring uniformity in academic standards as per national guidelines.
                  </p>
                  <p className="mb-4">
                    In addition to maintaining a central register of professionals, the Council monitors the ethical standards and service quality provided by allied healthcare workers. It also acts as an advisory body to the state government on matters related to allied healthcare workforce development and policy planning.
                  </p>
                  <p className="mb-8">
                    Through its efforts, KSAHC aims to build a competent, skilled, and recognized allied healthcare workforce, aligned with national healthcare goals. By fostering transparency, accountability, and continuous improvement in education and service delivery, the Council plays a critical role in strengthening Karnataka's healthcare system and ensuring the well-being of its citizens.
                  </p>

                  <div className="border-t pt-8">
                    <h3 className="text-xl font-semibold mb-4">The KSAHC Logo</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center p-4">
                        <Image
                          src="/logo.jpeg"
                          alt="KSAHC Logo"
                          width={300}
                          height={300}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Caduceus – Central Element with Wings and Staff</h4>
                          <p className="text-gray-600">At the heart of the logo stands the Caduceus, a classical symbol of medicine and healing. The wings represent care, compassion, and protection, while the vertical staff signifies authority, guidance, and stability. The serpents imply balance, partnership, and harmony, reflecting KSAHC's regulatory role over multiple allied healthcare domains.</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Laurel Wreath – Positioned Below the Staff</h4>
                          <p className="text-gray-600">The laurel wreath at the base is a universal symbol of victory, honour, and achievement. Within the context of KSAHC, it signifies the Council's commitment to promoting professional excellence and upholding high standards.</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Circle and Star – Surrounding and Crowning the Caduceus</h4>
                          <p className="text-gray-600">The encompassing circle denotes unity and inclusiveness, while the star symbolizes excellence and leadership—serving as a guiding light that reflects the Council's forward-thinking approach.</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Color Scheme – Blue Tones</h4>
                          <p className="text-gray-600">The blue palette represents trust, reliability, and calm authority, closely associated with healthcare and lending the logo a professional yet approachable feel.</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Overall Significance</h4>
                          <p className="text-gray-600">Together, these elements form a visual language that communicates strength, inclusivity, ethical governance, and excellence. The KSAHC logo is not merely decorative—it is a distilled expression of the Council's identity and its pivotal role in elevating allied healthcare in Karnataka.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vision-mission">
          <Card>
            <CardHeader className="bg-ksahc-blue text-white">
              <CardTitle className="text-xl">Vision & Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Vision</h3>
                  <p className="mb-4">
                    To nurture a strong and compassionate allied healthcare community in Karnataka by encouraging quality education, ethical practice, and skilled service. The Council aims to build an environment where allied healthcare professionals are well-prepared, socially responsible, and committed to improving the well-being of every individual in the state.
                  </p>
                  <h4 className="font-medium mb-2">Key Elements of the Vision:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Encourage accessible and high-quality education in allied health fields</li>
                    <li>Promote ethical, responsible, and skilled professionals</li>
                    <li>Support community-oriented healthcare service across Karnataka</li>
                    <li>Contribute to the betterment of public health and patient care</li>
                    <li>Create a supportive space for growth, learning, and professionalism</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Mission</h3>
                  <p className="mb-4">
                    The mission of the Karnataka State Allied and Healthcare Council is to set clear and fair guidelines for education, training, and professional conduct in allied healthcare. The Council works to ensure that professionals are well-trained, institutions are properly monitored, and the public receives care from competent and trustworthy hands.
                  </p>
                  <h4 className="font-medium mb-2">Key Elements of the Mission:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Set standards for education and professional practice</li>
                    <li>Ensure transparency, fairness, and accountability in regulation</li>
                    <li>Encourage ongoing learning and skill development</li>
                    <li>Foster a spirit of service, responsibility, and compassion</li>
                    <li>Support practical innovation that helps people and communities</li>
                    <li>Strengthen collaboration among professionals and institutions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals-objectives">
          <Card>
            <CardHeader className="bg-ksahc-blue text-white">
              <CardTitle className="text-xl">Goals & Objectives</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">1. Educational Excellence</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Develop a Comprehensive Curriculum: Standardize the curriculum across allied healthcare programs</li>
                    <li>Competency-Focused Education: Implement programs that emphasize competency-based learning</li>
                    <li>Uniform Evaluation Systems: Establish transparent, fair, and standardized evaluation methods</li>
                    <li>Foster Research and Academic Growth: Encourage research initiatives and academic partnerships</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">2. Professional Development</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Robust Digital Infrastructure: Develop and maintain a modern, efficient digital system</li>
                    <li>Ongoing Skill Upgradation: Provide regular opportunities for skill enhancement</li>
                    <li>Specialization Opportunities: Facilitate pathways for specialized training</li>
                    <li>Career Advancement: Offer structured support and mentorship</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3. Quality Enhancement</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Uphold Professional Standards: Monitor and enforce highest standards</li>
                    <li>Commitment to Patient Safety: Prioritize patient safety and service quality</li>
                    <li>Integration of Traditional and Modern Practices: Encourage holistic care approaches</li>
                    <li>Strategic Partnerships: Build collaborations with institutions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">4. Healthcare Access</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Equitable Healthcare Services: Ensure fair access to services</li>
                    <li>Innovation in Service Delivery: Promote innovative healthcare models</li>
                    <li>Evidence-Based Practice: Encourage proven methods and protocols</li>
                    <li>Healthcare Accessibility Initiatives: Support underserved areas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="org-structure">
          <Card>
            <CardHeader className="bg-ksahc-blue text-white">
              <CardTitle className="text-xl">Organizational Structure</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="mb-4">
                  The Council operates through four specialized Autonomous Boards:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">1. Under-graduate Allied and Healthcare Education Board</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Curriculum development and standardization</li>
                      <li>Educational standards monitoring</li>
                      <li>Training methodology oversight</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">2. Post-graduate Allied and Healthcare Education Board</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Advanced education program regulation</li>
                      <li>Research promotion</li>
                      <li>Specialization pathway development</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">3. Allied and Healthcare Professions Assessment and Rating Board</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Institution assessment and accreditation</li>
                      <li>Quality benchmarking</li>
                      <li>Performance monitoring</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">4. Allied and Healthcare Professions Ethics and Registration Board</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Professional registration management</li>
                      <li>Ethical standards enforcement</li>
                      <li>Disciplinary action oversight</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="core-functions">
          <Card>
            <CardHeader className="bg-ksahc-blue text-white">
              <CardTitle className="text-xl">Core Functions & Services</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">1. Registration and Licensing</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Maintenance of State Allied and Healthcare Professionals' Register</li>
                      <li>Digital processing of registrations and renewals</li>
                      <li>Verification of professional credentials</li>
                      <li>Management of provisional registrations</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">2. Educational Regulation</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Setting and enforcing educational standards</li>
                      <li>Accreditation of institutions</li>
                      <li>Implementation of uniform examinations</li>
                      <li>Oversight of continuing education</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">3. Quality Assurance</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Regulation of professional conduct</li>
                      <li>Monitoring of practice standards</li>
                      <li>Investigation of misconduct</li>
                      <li>Enforcement of compliance measures</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">4. Institutional Oversight</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Assessment of educational institutions</li>
                      <li>Approval of courses and programs</li>
                      <li>Monitoring of infrastructure standards</li>
                      <li>Regulation of admission capacity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prof-categories">
          <Card>
            <CardHeader className="bg-ksahc-blue text-white">
              <CardTitle className="text-xl">Professional Categories</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="mb-6 text-lg">
                  The Council currently regulates ten major categories of allied and healthcare professions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[
                      "Medical Laboratory and Life Sciences",
                      "Trauma, Burn Care, and Surgical/Anaesthesia Related Technology",
                      "Physiotherapy Professional",
                      "Nutrition Science Professional",
                      "Ophthalmic Sciences Professional"
                    ].map((category, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-shrink-0 w-8 h-8 bg-ksahc-blue text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{category}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      "Occupational Therapy Professional",
                      "Community Care and Behavioural Health Sciences and other Professionals",
                      "Medical Radiology, Imaging, and Therapeutic Technology Professional",
                      "Medical Technologists and Physician Associate",
                      "Health Information Management and Health Informatic Professional"
                    ].map((category, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-shrink-0 w-8 h-8 bg-ksahc-blue text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 6}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{category}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 