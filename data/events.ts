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
    date: "2023-06-15",
    location: "Bengaluru International Convention Centre",
    description:
      "Join us for the annual conference focusing on advancements in allied healthcare professions. The event will feature keynote speakers, panel discussions, and networking opportunities.",
    image: "/images/events/conference.jpg",
  },
  {
    title: "Workshop on Healthcare Ethics",
    date: "2023-07-10",
    location: "KSAHC Training Centre, Mysuru",
    description:
      "A comprehensive workshop on ethical practices in healthcare professions. This interactive session will cover case studies and practical scenarios.",
    image: "/images/events/workshop.jpg",
  },
  {
    title: "Rural Healthcare Outreach Program",
    date: "2023-08-05",
    location: "Various Districts of Karnataka",
    description:
      "A month-long program to bring allied healthcare services to rural areas of Karnataka. Healthcare professionals will provide services and conduct awareness sessions.",
    image: "/images/events/rural-outreach.jpg",
  },
  {
    title: "Professional Development Seminar",
    date: "2023-09-20",
    location: "Hotel Grand Ashok, Bengaluru",
    description:
      "A seminar focused on career advancement and professional growth for allied healthcare professionals. Learn about the latest trends and opportunities in the field.",
    image: "/images/events/seminar.jpg",
  },
]
