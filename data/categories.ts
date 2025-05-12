export interface HealthcareCategory {
  id: string
  title: string
  description: string
  image: string
}

export const healthcareCategories: HealthcareCategory[] = [
  {
    id: "medical-laboratory",
    title: "Medical Laboratory and Life Sciences",
    description: "Professionals involved in diagnostic laboratory procedures and research.",
    image: "/1. Medical Laboratory and Life Sciences.jpg",
  },
  {
    id: "trauma-surgical",
    title: "Trauma, Burn Care, and Surgical",
    description: "Specialists in trauma care, burn management, and surgical procedures.",
    image: "/2. Trauma, Burn Care, and Surgical.jpg",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy Professional",
    description: "Specialists in physical rehabilitation and movement therapy.",
    image: "/3. Physiotherapy Professional.jpg",
  },
  {
    id: "nutrition",
    title: "Nutrition Science Professional",
    description: "Experts in dietary management and nutritional therapy.",
    image: "/4. Nutrition Science Professional.jpg",
  },
  {
    id: "ophthalmic",
    title: "Ophthalmic Sciences Professional",
    description: "Specialists in eye care and vision correction.",
    image: "/5. Ophthalmic Sciences Professional.jpg",
  },
  {
    id: "occupational-therapy",
    title: "Occupational Therapy Professional",
    description: "Professionals helping patients develop skills for daily living and working.",
    image: "/6. Occupational Therapy Professional.jpg",
  },
  {
    id: "community-care",
    title: "Community Care and Behavioural Health Sciences",
    description: "Specialists in community health and behavioral therapy.",
    image: "/7. Community Care and Behavioural Health Sciences and other Professionals.jpg",
  },
  {
    id: "radiology",
    title: "Medical Radiology, Imaging, and Therapeutic Technology",
    description: "Professionals specializing in diagnostic imaging technologies.",
    image: "/8. Medical Radiology, Imaging, and Therapeutic Technology Professional.jpg",
  },
  {
    id: "medical-technology",
    title: "Medical Technologists and Physician Associate",
    description: "Professionals assisting in medical procedures and patient care.",
    image: "/9. Medical Technologists and Physician Associate.jpg",
  },
  {
    id: "health-information",
    title: "Health Information Management and Health Informatic Professional",
    description: "Professionals managing healthcare data and information systems.",
    image: "/10. Health Information Management and Health Informatic Professional.jpg",
  },
]
