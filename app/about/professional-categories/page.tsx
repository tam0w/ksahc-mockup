import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { healthcareCategories } from "@/data/categories"

export default function ProfessionalCategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">Home / About Us / Professional Categories</div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Professional Categories</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">Allied and Healthcare Professional Categories</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-6">
            The Karnataka State Allied and Healthcare Council regulates ten major categories of allied and healthcare
            professionals, each encompassing various specialized roles. These categories are defined under the National
            Commission for Allied and Healthcare Professions Act, 2021.
          </p>

          <div className="space-y-8">
            {healthcareCategories.map((category, index) => (
              <div key={index} id={category.id} className="scroll-mt-20">
                <Card>
                  <CardHeader className="bg-ksahc-lightBlue text-white">
                    <CardTitle className="text-lg">
                      {index + 1}. {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-48 rounded-md overflow-hidden">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="mb-4">{category.description}</p>
                        <h3 className="font-medium mb-2">Key Professions in this Category:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {/* These are placeholder professions - would be replaced with actual data */}
                          <li>Senior {category.title.split(" ")[0]} Specialist</li>
                          <li>{category.title.split(" ")[0]} Technician</li>
                          <li>Assistant {category.title.split(" ")[0]} Professional</li>
                          <li>{category.title.split(" ")[0]} Researcher</li>
                          <li>{category.title.split(" ")[0]} Educator</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
