import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, UserCheck, School, HelpCircle } from "lucide-react"

export function ServicesSection() {
  return (
    <Card>
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle className="text-xl">Our Services</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <FileText className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium mb-2">Registration</h3>
              <p className="text-sm text-muted-foreground mb-4">Register as an allied healthcare professional</p>
              <Link href="/services/registration" className="mt-auto">
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <UserCheck className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium mb-2">Verification</h3>
              <p className="text-sm text-muted-foreground mb-4">Verify healthcare professional credentials</p>
              <Link href="/services/verification" className="mt-auto">
                <Button variant="outline" size="sm">
                  Verify Now
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <School className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium mb-2">Education</h3>
              <p className="text-sm text-muted-foreground mb-4">Approved courses and institutions</p>
              <Link href="/services/education" className="mt-auto">
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <HelpCircle className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium mb-2">Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Get help with your queries</p>
              <Link href="/contact" className="mt-auto">
                <Button variant="outline" size="sm">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
