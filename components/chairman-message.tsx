import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function ChairmanMessage() {
  return (
    <Card className="mb-8">
      <CardHeader className="bg-ksahc-blue text-white">
        <CardTitle className="text-xl">From The Chairman's Desk</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3 flex flex-col items-center">
            <Image
              src="/if2.jpeg"
              alt="Chairman"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-medium text-center">Dr. Rajesh Kumar</h3>
            <p className="text-sm text-muted-foreground text-center">Chairman, KSAHC</p>
          </div>
          <div className="flex-1">
            <p className="mb-4">Dear Healthcare Professionals,</p>
            <p className="mb-4">
              It is my privilege to welcome you to the official website of the Karnataka State Allied and Healthcare
              Council. As the Chairman, I am committed to ensuring that our council serves as a beacon of excellence in
              regulating and advancing allied healthcare professions in our state.
            </p>
            <p className="mb-4">
              The healthcare landscape is evolving rapidly, and allied healthcare professionals play a crucial role in
              delivering comprehensive care to patients. Our council is dedicated to maintaining high standards of
              education, training, and professional conduct among all allied healthcare practitioners.
            </p>
            <p className="mb-4">
              Through this platform, we aim to provide valuable resources, information, and services to both
              professionals and the public. I encourage you to explore our website and take advantage of the various
              services we offer.
            </p>
            <p>
              Together, let us work towards enhancing the quality of healthcare services in Karnataka and ensuring the
              well-being of all citizens.
            </p>
            <p className="mt-4 font-medium">
              Warm regards,
              <br />
              Dr. UT Ifthikhar Fareed
              <br />
              Chairman, KSAHC
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
