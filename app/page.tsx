import { ModernCarousel } from "@/components/modern-carousel"
import { NewsTicker } from "@/components/news-ticker"
import { AboutSection } from "@/components/about-section"
import { ChairmanMessage } from "@/components/chairman-message"
import { LinksSection } from "@/components/links-section"
import { CategoriesCarousel } from "@/components/categories-carousel"
import { EventsFormsSection } from "@/components/events-forms-section"
import { GallerySection } from "@/components/gallery-section"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="pt-2 pb-4">
        <NewsTicker />
      </div>

      <ModernCarousel />

      <div className="mt-12">
        <AboutSection />

        <ChairmanMessage />

        <LinksSection />

        <CategoriesCarousel />

        <EventsFormsSection />

        <GallerySection />

        <SocialLinks />
      </div>
    </div>
  )
}
