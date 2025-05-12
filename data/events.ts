export interface Event {
  title: string
  date: string
  location: string
  description: string
  image: string
}

export const events: Event[] = [
  {
    title: "Annual Conference on Allied Healthcare",
    date: "2024-06-15",
    location: "Bengaluru International Convention Centre",
    description:
      "Join us for the annual conference focusing on advancements in allied healthcare professions. The event will feature keynote speakers, panel discussions, and networking opportunities.",
    image: "/events3.jpg",
  },
  {
    title: "Workshop on Healthcare Ethics",
    date: "2024-07-10",
    location: "KSAHC Training Centre, Mysuru",
    description:
      "A comprehensive workshop on ethical practices in healthcare professions. This interactive session will cover case studies and practical scenarios.",
    image: "/events4.jpeg",
  },
  {
    title: "Rural Healthcare Outreach Program",
    date: "2024-08-05",
    location: "Various Districts of Karnataka",
    description:
      "A month-long program to bring allied healthcare services to rural areas of Karnataka. Healthcare professionals will provide services and conduct awareness sessions.",
    image: "/events5.jpeg",
  },
  {
    title: "Professional Development Seminar",
    date: "2024-09-20",
    location: "Hotel Grand Ashok, Bengaluru",
    description:
      "A seminar focused on career advancement and professional growth for allied healthcare professionals. Learn about the latest trends and opportunities in the field.",
    image: "/events6.JPG",
  },
  {
    title: "Healthcare Technology Summit",
    date: "2024-10-15",
    location: "ITC Gardenia, Bengaluru",
    description:
      "Explore the latest technological innovations in healthcare. This summit brings together healthcare professionals and technology experts to discuss digital transformation in healthcare.",
    image: "/event2.jpg",
  },
  {
    title: "International Healthcare Symposium",
    date: "2024-11-10",
    location: "Taj West End, Bengaluru",
    description:
      "An international symposium focusing on global healthcare practices and standards. Network with healthcare professionals from around the world and learn about international best practices.",
    image: "/gallery1.jpg",
  }
]
