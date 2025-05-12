"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { carouselImages } from "@/data/carousel"

export function ModernCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToNext = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning])

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning])

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return

      setIsTransitioning(true)
      setCurrentIndex(index)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    },
    [isTransitioning, currentIndex],
  )

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(goToNext, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, goToNext])

  return (
    <div className="carousel-container relative aspect-[16/9] w-full overflow-hidden rounded-lg">
      {carouselImages.map((image, index) => (
        <div key={index} className={cn("carousel-slide", index === currentIndex ? "active" : "")}>
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <p className="text-sm md:text-base">{image.caption}</p>
            </div>
          )}
        </div>
      ))}

      <div className="carousel-indicators">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn("carousel-indicator", index === currentIndex ? "active" : "")}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-controls">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
