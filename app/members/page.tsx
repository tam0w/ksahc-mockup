import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import {
  chairperson,
  secretary,
  boardPresidents,
  categoryRepresentatives,
  charitableRepresentatives,
  members,
  type Member,
} from "@/data/members"

export default function MembersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">MEMBERS</h1>
        <div className="h-1 w-20 bg-ksahc-blue"></div>
      </div>

      {/* Chairperson - Centrally Positioned */}
      <Card className="mb-8 max-w-2xl mx-auto">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">CHAIRPERSON</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
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
          </div>
        </CardContent>
      </Card>

      {/* Secretary */}
      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">SECRETARY</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4 rounded-md overflow-hidden">
              <Image
                src={secretary.image || "/placeholder.svg"}
                alt={secretary.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold">{secretary.name}</h2>
            <p className="text-muted-foreground">{secretary.designation}</p>
          </div>
        </CardContent>
      </Card>

      {/* All Members */}
      <Card className="mb-8">
        <CardHeader className="bg-ksahc-blue text-white">
          <CardTitle className="text-xl">KSAHC MEMBERS</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member: Member, index: number) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-3 rounded-md overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-lg font-bold">{member.name}</h2>
                <p className="text-muted-foreground">{member.designation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
