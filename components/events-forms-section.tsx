import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, FileText, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { events } from "@/data/events"
import { forms } from "@/data/forms"
import { formatDate } from "@/lib/utils"

export function EventsFormsSection() {
  // Group forms by category
  const formsByCategory = forms.reduce((acc, form) => {
    if (!acc[form.category]) {
      acc[form.category] = []
    }
    acc[form.category].push(form)
    return acc
  }, {} as Record<string, typeof forms>)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="h-full">
        <CardHeader className="bg-ksahc-blue text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Events and Activities</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="text-white p-0 h-auto">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>All Events and Activities</DialogTitle>
                </DialogHeader>
                <div className="max-h-[60vh] overflow-y-auto">
                  <div className="grid gap-4">
                    {events.map((event, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/3 relative h-40 rounded-md overflow-hidden">
                              <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-lg mb-2">{event.title}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mb-1">
                                <Calendar className="h-4 w-4 mr-1" />
                                <time dateTime={event.date}>{formatDate(event.date)}</time>
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground mb-3">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{event.location}</span>
                              </div>
                              <p className="text-sm mb-3">{event.description}</p>
                              <Button variant="outline" size="sm">
                                Read More
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-1">
          {events.length > 0 && (
            <div className="flex flex-col md:flex-row gap-4 h-full">
              <div className="md:w-1/3 relative h-48 rounded-md overflow-hidden">
                <Image
                  src={events[0].image || "/placeholder.svg"}
                  alt={events[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="font-medium text-lg mb-2">{events[0].title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime={events[0].date}>{formatDate(events[0].date)}</time>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{events[0].location}</span>
                </div>
                <p className="text-sm mb-3 line-clamp-3 flex-1">{events[0].description}</p>
                <Button variant="outline" size="sm" className="mt-auto">
                  Read More
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="h-full">
        <CardHeader className="bg-ksahc-blue text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Download Forms</CardTitle>
            <Link href="/resources/forms">
              <Button variant="link" className="text-white p-0 h-auto">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-1">
          <div className="space-y-4 h-full">
            {Object.entries(formsByCategory).map(([category, categoryForms]) => (
              <div key={category}>
                <h3 className="font-medium text-sm text-muted-foreground mb-2">{category}</h3>
                <ul className="space-y-2">
                  {categoryForms.slice(0, 2).map((form, index) => (
                    <li key={index}>
                      <Link href={form.url} className="flex items-center p-2 hover:bg-muted rounded-md transition-colors">
                        <FileText className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">{form.title}</p>
                          <p className="text-xs text-muted-foreground">{form.description}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
