"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { galleryPhotos, galleryVideos } from "@/data/gallery"

export function GallerySection() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)

  return (
    <Card className="mb-8">
      <CardHeader className="bg-ksahc-blue text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Gallery</CardTitle>
          <Link href="/resources/gallery">
            <Button variant="link" className="text-white p-0 h-auto">
              View All
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="photos">
          <TabsList className="mb-4">
            <TabsTrigger value="photos">Photo Gallery</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="photos">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryPhotos.slice(0, 8).map((photo, index) => (
                <Link key={index} href="/resources/gallery" className="block">
                  <div className="relative aspect-square rounded-md overflow-hidden group">
                    <Image
                      src={photo.thumbnail || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white text-xs md:text-sm text-center p-2">{photo.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryVideos.slice(0, 6).map((video, index) => (
                <div key={index} className="relative aspect-video rounded-md overflow-hidden group">
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-white/20 text-white hover:bg-white/30 hover:text-white"
                      onClick={() => setActiveVideoUrl(video.url)}
                    >
                      <Play className="h-6 w-6" fill="white" />
                      <span className="sr-only">Play video</span>
                    </Button>
                  </div>
                  <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 truncate">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={!!activeVideoUrl} onOpenChange={() => setActiveVideoUrl(null)}>
          <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
            {activeVideoUrl && (
              <div className="aspect-video w-full">
                <iframe
                  src={activeVideoUrl}
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
