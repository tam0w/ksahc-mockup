export interface Member {
  name: string
  designation: string
  image: string
  bio?: string
}

export interface BoardPresident {
  name: string
  board: string
  image: string
  bio?: string
}

export interface CategoryRepresentative {
  name: string
  category: string
  image: string
  bio?: string
}

export interface CharitableRepresentative {
  name: string
  institution: string
  image: string
  bio?: string
}

export const chairperson: Member = {
  name: "Dr. Rajesh Kumar",
  designation: "Chairperson, KSAHC",
  image: "/images/members/chairperson.jpg",
  bio: "Dr. Rajesh Kumar is a distinguished healthcare professional with over 25 years of experience in the field. He has been instrumental in establishing standards for allied healthcare education in Karnataka.",
}

export const secretary: Member = {
  name: "Dr. Priya Sharma",
  designation: "Secretary, KSAHC",
  image: "/images/members/secretary.jpg",
  bio: "Dr. Priya Sharma brings extensive administrative experience to her role as Secretary. She has previously served in various healthcare regulatory bodies and is committed to enhancing the quality of healthcare services.",
}

export const boardPresidents: BoardPresident[] = [
  {
    name: "Dr. Anand Patil",
    board: "Under-graduate Allied and Healthcare Education Board",
    image: "/images/members/board-president-1.jpg",
    bio: "Dr. Anand Patil has been at the forefront of undergraduate education in allied healthcare for over 15 years. His expertise in curriculum development has significantly improved educational standards.",
  },
  {
    name: "Dr. Meena Reddy",
    board: "Post-graduate Allied and Healthcare Education Board",
    image: "/images/members/board-president-2.jpg",
    bio: "Dr. Meena Reddy is a renowned educator with a focus on advanced healthcare education. She has published numerous papers on improving post-graduate training in allied healthcare fields.",
  },
  {
    name: "Dr. Suresh Gowda",
    board: "Allied and Healthcare Professions Assessment and Rating Board",
    image: "/images/members/board-president-3.jpg",
    bio: "Dr. Suresh Gowda brings his extensive experience in assessment methodologies to ensure fair and comprehensive evaluation of healthcare professionals and institutions.",
  },
  {
    name: "Dr. Lakshmi Narayan",
    board: "Allied and Healthcare Professions Ethics and Registration Board",
    image: "/images/members/board-president-4.jpg",
    bio: "Dr. Lakshmi Narayan is dedicated to upholding ethical standards in healthcare practice. Her work in developing the code of ethics for allied healthcare professionals has been widely recognized.",
  },
]

export const categoryRepresentatives: CategoryRepresentative[] = [
  {
    name: "Dr. Ramesh Joshi",
    category: "Medical Laboratory Sciences",
    image: "/images/members/category-rep-1.jpg",
  },
  {
    name: "Dr. Sunita Rao",
    category: "Physiotherapy Sciences",
    image: "/images/members/category-rep-2.jpg",
  },
  {
    name: "Dr. Vijay Kumar",
    category: "Nutrition Sciences",
    image: "/images/members/category-rep-3.jpg",
  },
  {
    name: "Dr. Aisha Khan",
    category: "Radiology & Imaging Sciences",
    image: "/images/members/category-rep-4.jpg",
  },
  {
    name: "Dr. Thomas Mathew",
    category: "Optometry & Ophthalmic Sciences",
    image: "/images/members/category-rep-5.jpg",
  },
  {
    name: "Dr. Kavita Hegde",
    category: "Occupational Therapy",
    image: "/images/members/category-rep-6.jpg",
  },
  {
    name: "Dr. Prakash Shetty",
    category: "Behavioral Health Sciences",
    image: "/images/members/category-rep-7.jpg",
  },
  {
    name: "Dr. Nirmala Devi",
    category: "Surgical & Anesthesia Technology",
    image: "/images/members/category-rep-8.jpg",
  },
  {
    name: "Dr. Arjun Singh",
    category: "Community Care & Health Promotion",
    image: "/images/members/category-rep-9.jpg",
  },
  {
    name: "Dr. Rekha Patel",
    category: "Health Information Management",
    image: "/images/members/category-rep-10.jpg",
  },
]

export const charitableRepresentatives: CharitableRepresentative[] = [
  {
    name: "Dr. Joseph Thomas",
    institution: "Karnataka Healthcare Foundation",
    image: "/images/members/charitable-rep-1.jpg",
  },
  {
    name: "Dr. Fatima Begum",
    institution: "Rural Health Initiative Trust",
    image: "/images/members/charitable-rep-2.jpg",
  },
]
