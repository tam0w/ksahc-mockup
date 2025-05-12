export interface HealthcareCategory {
  id: string
  title: string
  description: string
  image: string
}

export const healthcareCategories: HealthcareCategory[] = [
  {
    id: "medical-laboratory",
    title: "Medical Laboratory Sciences",
    description: "Professionals involved in diagnostic laboratory procedures and research.",
    image: "/images/categories/laboratory.jpg",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy Sciences",
    description: "Specialists in physical rehabilitation and movement therapy.",
    image: "/images/categories/physiotherapy.jpg",
  },
  {
    id: "nutrition",
    title: "Nutrition Sciences",
    description: "Experts in dietary management and nutritional therapy.",
    image: "/images/categories/nutrition.jpg",
  },
  {
    id: "radiology",
    title: "Radiology & Imaging Sciences",
    description: "Professionals specializing in diagnostic imaging technologies.",
    image: "/images/categories/radiology.jpg",
  },
  {
    id: "optometry",
    title: "Optometry & Ophthalmic Sciences",
    description: "Specialists in eye care and vision correction.",
    image: "/images/categories/optometry.jpg",
  },
  {
    id: "occupational-therapy",
    title: "Occupational Therapy",
    description: "Professionals helping patients develop skills for daily living and working.",
    image: "/images/categories/occupational-therapy.jpg",
  },
  {
    id: "behavioral-health",
    title: "Behavioral Health Sciences",
    description: "Specialists in mental health and behavioral therapy.",
    image: "/images/categories/behavioral-health.jpg",
  },
  {
    id: "surgical-technology",
    title: "Surgical & Anesthesia Technology",
    description: "Professionals assisting in surgical procedures and anesthesia administration.",
    image: "/images/categories/surgical-technology.jpg",
  },
  {
    id: "community-care",
    title: "Community Care & Health Promotion",
    description: "Specialists in public health and community wellness programs.",
    image: "/images/categories/community-care.jpg",
  },
  {
    id: "health-information",
    title: "Health Information Management",
    description: "Professionals managing healthcare data and information systems.",
    image: "/images/categories/health-information.jpg",
  },
]
