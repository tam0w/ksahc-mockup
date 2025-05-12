import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, FileText } from "lucide-react"
import { forms } from "@/data/forms"

export default function FormsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">Home / Resources / Forms</div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">FORMS</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      <Card>
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">Available Forms</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-3 text-left">Form Name</th>
                  <th className="px-4 py-3 text-left">Description</th>
                  <th className="px-4 py-3 text-center">Download</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {forms.map((form, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="px-4 py-4 font-medium">{form.title}</td>
                    <td className="px-4 py-4">{form.description}</td>
                    <td className="px-4 py-4 text-center">
                      <Link href={form.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" /> Download
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
