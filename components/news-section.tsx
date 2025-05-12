"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Clock } from "lucide-react"
import { newsArticles } from "@/data/news"
import { formatDate } from "@/lib/utils"

export function NewsSection() {
  const [visibleNews, setVisibleNews] = useState(5)

  const loadMore = () => {
    setVisibleNews((prev) => Math.min(prev + 5, newsArticles.length))
  }

  return (
    <Card className="h-full">
      <CardHeader className="bg-primary text-primary-foreground">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Latest News</CardTitle>
          <Link href="/news">
            <Button variant="link" className="text-primary-foreground p-0 h-auto">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y">
          {newsArticles.slice(0, visibleNews).map((news, index) => (
            <li key={index} className="p-4 hover:bg-muted/50 transition-colors">
              <Link href={`/news/${news.slug}`} className="block">
                <div className="flex items-start gap-2">
                  <Badge variant={news.isImportant ? "destructive" : "secondary"} className="mt-1">
                    {news.category}
                  </Badge>
                  <div>
                    <h3 className="font-medium">{news.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <time dateTime={news.date}>{formatDate(news.date)}</time>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
      {visibleNews < newsArticles.length && (
        <CardFooter className="flex justify-center p-4">
          <Button variant="outline" onClick={loadMore}>
            Load More
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
