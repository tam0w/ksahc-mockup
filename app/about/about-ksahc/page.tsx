import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function AboutKSAHCPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">Home / About Us / About KSAHC</div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">About KSAHC</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">Karnataka State Allied and Healthcare Council</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="mb-4">
                The Karnataka State Allied and Healthcare Council (KSAHC) is a statutory body established under the
                National Commission for Allied and Healthcare Professions Act, 2021. The Council is responsible for
                regulating and standardizing the education and practice of
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
