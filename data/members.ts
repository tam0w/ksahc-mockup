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
  name: "PROF. U. T. IFTHIKAR FAREED",
  designation: "Chairperson, KSAHC",
  image: "/if2.jpeg",
}

export const secretary: Member = {
  name: "Dr. SRINIVAS MURTHY, S.T.",
  designation: "Secretary, KSAHC",
  image: "/2.jpeg",
}

export const members: Member[] = [
  {
    name: "DR. G. ARUN MAIYA",
    designation: "Professor & Dean",
    image: "/3_LE_upscale_balanced_x1.jpg",
  },
  {
    name: "Dr. SUNITA SALDANHA",
    designation: "Dean, Yenepoya Allied & Healthcare Professions",
    image: "/4.png",
  },
  {
    name: "Dr. PRAVIN AARON",
    designation: "Principal, Padmashree Institute of Physiotherapy",
    image: "/5.png",
  },
  {
    name: "PROF. ANITHA MISQUITH",
    designation: "Professor, Sapthagiri Institute of Medical Sciences & Research Centre",
    image: "/6.png",
  },
  {
    name: "PROF. RAJESH SHENOY",
    designation: "Director, Padmashree Diagnostics",
    image: "/7_LE_upscale_balanced_x1.jpg",
  },
  {
    name: "Dr. C. V. YOGARAJE GOWDA",
    designation: "Assistant Professor, Biochemistry, BMC & RI",
    image: "/8.png",
  },
  {
    name: "Dr. A. SURESH BABU REDDY",
    designation: "Physiotherapist, ESIC Hospital",
    image: "/9.png",
  },
  {
    name: "Dr. BHARATH, K. H.",
    designation: "Principal, Mangala College of Physiotherapy",
    image: "/10_LE_upscale_balanced_x1.jpg",
  },
  {
    name: "Dr. USHA DEVI, C.",
    designation: "Vice Chancellor, Maharani Cluster University",
    image: "/11.png",
  },
  {
    name: "Dr. SUVARNA HEBBAR",
    designation: "Assistant Professor, Clinical Nutrition & Dietetics, MCHP",
    image: "/12.png",
  },
  {
    name: "Ms. LAKSHMI SHINDE",
    designation: "CEO, Shinde Eye Care Centre",
    image: "/13.png",
  },
  {
    name: "Dr. ADITHYA GOYAL",
    designation: "Principal, Shankara College of Optometry",
    image: "/14.png",
  },
  {
    name: "VAISHALI BHASKAR PAI",
    designation: "Occupational Therapist, Director, TAMAHAR Trust",
    image: "/15_LE_upscale_balanced_x1.jpg",
  },
  {
    name: "Dr. SUMITA REGE",
    designation: "Associate Professor & HOD, Occupational Therapy, MCHP",
    image: "/16_LE_upscale_balanced_x1.jpg",
  },
  {
    name: "Dr. ARCHANA BHAT, K.",
    designation: "Associate Professor, Clinical Psychology",
    image: "/17.jpeg",
  },
  {
    name: "Dr. N. JANARDHANA",
    designation: "Professor, Psychiatric Social Work, NIMHANS",
    image: "/18.png",
  },
  {
    name: "Ms. SRUTHY, P. V.",
    designation: "Assistant Professor, Physician Assistant Dept.",
    image: "/19_LE_upscale_balanced_x1.jpg",
  },
  {
    name: "Dr. KIRTI, P. L.",
    designation: "Medical Superintendent, SDM Narayan Heart Centre",
    image: "/20.png",
  },
]

export const boardPresidents: BoardPresident[] = [
  {
    name: "Dr. Anand Patil",
    board: "Under-graduate Allied and Healthcare Education Board",
    image: "/23_LE_upscale_balanced_x1.jpg",
    bio: "Dr. Anand Patil has been at the forefront of undergraduate education in allied healthcare for over 15 years. His expertise in curriculum development has significantly improved educational standards.",
  },
  {
    name: "Dr. Meena Reddy",
    board: "Post-graduate Allied and Healthcare Education Board",
    image: "/if.jpeg",
    bio: "Dr. Meena Reddy is a renowned educator with a focus on advanced healthcare education. She has published numerous papers on improving post-graduate training in allied healthcare fields.",
  },
  {
    name: "Dr. Suresh Gowda",
    board: "Allied and Healthcare Professions Assessment and Rating Board",
    image: "/if2.jpeg",
    bio: "Dr. Suresh Gowda brings his extensive experience in assessment methodologies to ensure fair and comprehensive evaluation of healthcare professionals and institutions.",
  },
  {
    name: "Dr. Lakshmi Narayan",
    board: "Allied and Healthcare Professions Ethics and Registration Board",
    image: "/newoffice.jpeg",
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
