"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Pause, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { newsArticles } from "@/data/news"
import { formatDate } from "@/lib/utils"

export function NewsTicker() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    const ticker = document.querySelector(".news-ticker-content") as HTMLElement
    if (ticker) {
      ticker.style.animationPlayState = isPlaying ? "paused" : "running"
    }
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        <div className="flex items-center">
          <div className="bg-ksahc-blue text-white px-3 py-1 rounded-md mr-4 whitespace-nowrap">Latest News</div>
          <div className="news-ticker flex-1 overflow-hidden">
            <div className={`news-ticker-content ${isPlaying ? "" : "animate-none"}`}>
              {newsArticles.map((news, index) => (
                <span key={index} className="inline-flex items-center mr-8">
                  {news.isImportant && (
                    <Badge variant="destructive" className="mr-2">
                      New
                    </Badge>
                  )}
                  <span>{news.title}</span>
                  <span className="text-muted-foreground text-xs ml-2">({formatDate(news.date)})</span>
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center ml-4 space-x-1">
            <Button variant="outline" size="sm" className="text-ksahc-blue" onClick={() => setIsModalOpen(true)}>
              View All
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>All News</DialogTitle>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <ul className="divide-y">
              {newsArticles.map((news, index) => (
                <li key={index} className="py-3">
                  <div className="flex items-start gap-2">
                    <Badge variant={news.isImportant ? "destructive" : "secondary"} className="mt-1">
                      {news.category}
                    </Badge>
                    <div>
                      <h3 className="font-medium">{news.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <time dateTime={news.date}>{formatDate(news.date)}</time>
                      </div>
                      {news.content && <p className="mt-2 text-sm">{news.content}</p>}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
