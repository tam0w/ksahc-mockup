import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import {
  chairperson,
  secretary,
  boardPresidents,
  categoryRepresentatives,
  charitableRepresentatives,
} from "@/data/members"

export default function MembersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">MEMBERS</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">KARNATAKA STATE ALLIED AND HEALTHCARE COUNCIL</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chairperson */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={chairperson.image || "/placeholder.svg"}
                  alt={chairperson.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold">{chairperson.name}</h2>
              <p className="text-muted-foreground">{chairperson.designation}</p>
              {chairperson.bio && <p className="mt-2 text-sm">{chairperson.bio}</p>}
            </div>

            {/* Secretary */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-4 rounded-md overflow-hidden">
                <Image src={secretary.image || "/placeholder.svg"} alt={secretary.name} fill className="object-cover" />
              </div>
              <h2 className="text-xl font-bold">{secretary.name}</h2>
              <p className="text-muted-foreground">{secretary.designation}</p>
              {secretary.bio && <p className="mt-2 text-sm">{secretary.bio}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Autonomous Board Presidents */}
      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">AUTONOMOUS BOARD PRESIDENTS</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardPresidents.map((president, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4">
                <div className="relative w-32 h-32 rounded-md overflow-hidden shrink-0 mx-auto md:mx-0">
                  <Image
                    src={president.image || "/placeholder.svg"}
                    alt={president.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-lg font-bold">{president.name}</h2>
                  <p className="text-muted-foreground">{president.board}</p>
                  {president.bio && <p className="mt-2 text-sm">{president.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Category Representatives */}
      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">CATEGORY REPRESENTATIVES</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryRepresentatives.map((representative, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-3 rounded-md overflow-hidden">
                  <Image
                    src={representative.image || "/placeholder.svg"}
                    alt={representative.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-lg font-bold">{representative.name}</h2>
                <p className="text-muted-foreground">{representative.category}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charitable Institution Representatives */}
      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">CHARITABLE INSTITUTION REPRESENTATIVES</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {charitableRepresentatives.map((representative, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-3 rounded-md overflow-hidden">
                  <Image
                    src={representative.image || "/placeholder.svg"}
                    alt={representative.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-lg font-bold">{representative.name}</h2>
                <p className="text-muted-foreground">{representative.institution}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
