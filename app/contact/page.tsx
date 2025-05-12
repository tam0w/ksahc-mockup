import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, Mail, MapPin, Phone } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">Home / Contact Us</div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader className="bg-ksahc-blue text-white">
            <CardTitle className="text-xl">Address</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-0.5 text-ksahc-blue shrink-0" />
              <div>
                <p className="font-medium">Karnataka State Allied & Healthcare Council</p>
                <p>Medical Education Department</p>
                <p>Government of Karnataka</p>
                <p>Anand Rao Circle</p>
                <p>Bengaluru - 560009</p>
                <p>Karnataka, India</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-ksahc-blue text-white">
            <CardTitle className="text-xl">Phone</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Phone className="h-5 w-5 mr-3 text-ksahc-blue shrink-0" />
              <div>
                <p className="font-medium">Main Office</p>
                <p>+91 80 XXXX XXXX</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-ksahc-blue shrink-0" />
              <div>
                <p className="font-medium">Registration Helpdesk</p>
                <p>+91 80 XXXX XXXX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-ksahc-blue text-white">
            <CardTitle className="text-xl">Email</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 mr-3 text-ksahc-blue shrink-0" />
              <div>
                <p className="font-medium">General Inquiries</p>
                <p>info@ksahc.karnataka.gov.in</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-ksahc-blue shrink-0" />
              <div>
                <p className="font-medium">Registration Support</p>
                <p>registration@ksahc.karnataka.gov.in</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">Send Us a Message</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter message subject" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" rows={5} required />
            </div>
            <Button type="submit" className="bg-ksahc-blue hover:bg-ksahc-lightBlue">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">Location Map</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9932971231!2d77.5743!3d12.9766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
