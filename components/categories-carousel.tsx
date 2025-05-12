"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { healthcareCategories } from "@/data/categories"

export function CategoriesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <Card className="mb-8">
      <CardHeader className="bg-ksahc-blue text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">ALLIED AND HEALTHCARE CATEGORIES</CardTitle>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 text-white border-white hover:bg-white/20 hover:text-white"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 text-white border-white hover:bg-white/20 hover:text-white"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="card-carousel" ref={carouselRef}>
          {healthcareCategories.map((category, index) => (
            <div key={index} className="card-carousel-item">
              <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="mb-4 h-40 relative rounded-md overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{category.description}</p>
                  <Link href={`/about/professional-categories#${category.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
