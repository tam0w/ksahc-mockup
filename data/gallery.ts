export interface GalleryPhoto {
  title: string
  thumbnail: string
  fullImage: string
  date: string
}

export interface GalleryVideo {
  title: string
  thumbnail: string
  url: string
  date: string
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    title: "Inauguration Ceremony",
    thumbnail: "/events3.jpg",
    fullImage: "/events3.jpg",
    date: "2023-01-15",
  },
  {
    title: "Annual Conference 2023",
    thumbnail: "/events4.jpeg",
    fullImage: "/events4.jpeg",
    date: "2023-03-22",
  },
  {
    title: "Workshop on Healthcare Ethics",
    thumbnail: "/events5.jpeg",
    fullImage: "/events5.jpeg",
    date: "2023-04-10",
  },
  {
    title: "Rural Healthcare Outreach",
    thumbnail: "/events6.JPG",
    fullImage: "/events6.JPG",
    date: "2023-05-05",
  },
  {
    title: "Meeting with Healthcare Officials",
    thumbnail: "/event2.jpg",
    fullImage: "/event2.jpg",
    date: "2023-06-18",
  },
  {
    title: "Professional Development Seminar",
    thumbnail: "/gallery1.jpg",
    fullImage: "/gallery1.jpg",
    date: "2023-07-25",
  },
  {
    title: "Council Members Meeting",
    thumbnail: "/iamge1.jpg",
    fullImage: "/iamge1.jpg",
    date: "2023-08-12",
  },
  {
    title: "Healthcare Exhibition",
    thumbnail: "/image2.jpeg",
    fullImage: "/image2.jpeg",
    date: "2023-09-30",
  },
  {
    title: "Award Ceremony",
    thumbnail: "/newoffice.jpeg",
    fullImage: "/newoffice.jpeg",
    date: "2023-10-15",
  },
  {
    title: "International Collaboration Meeting",
    thumbnail: "/events3.jpg",
    fullImage: "/events3.jpg",
    date: "2023-11-05",
  },
  {
    title: "Healthcare Technology Workshop",
    thumbnail: "/events4.jpeg",
    fullImage: "/events4.jpeg",
    date: "2023-12-10",
  },
  {
    title: "New Year Celebration",
    thumbnail: "/events5.jpeg",
    fullImage: "/events5.jpeg",
    date: "2024-01-01",
  },
]

export const galleryVideos: GalleryVideo[] = [
  {
    title: "Inauguration Ceremony Highlights",
    thumbnail: "/images/gallery/video1-thumb.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-01-15",
  },
  {
    title: "Chairman's Address at Annual Conference",
    thumbnail: "/images/gallery/video2-thumb.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-03-22",
  },
  {
    title: "Healthcare Ethics Workshop Recap",
    thumbnail: "/images/gallery/video3-thumb.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-04-10",
  },
  {
    title: "Rural Healthcare Outreach Documentary",
    thumbnail: "/images/gallery/video4-thumb.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-05-05",
  },
  {
    title: "Interview with Healthcare Officials",
    thumbnail: "/images/gallery/video5-thumb.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-06-18",
  },
  {
    title: "Professional Development Seminar Highlights",
    thumbnail: "/images/gallery/video6-thumb.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-07-25",
  },
]
