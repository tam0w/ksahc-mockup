export interface NewsArticle {
  title: string
  slug: string
  date: string
  category: string
  isImportant: boolean
  content?: string
}

export const newsArticles: NewsArticle[] = [
  {
    title: "Registration for Allied Healthcare Professionals Now Open",
    slug: "registration-open",
    date: "2023-05-10",
    category: "Announcement",
    isImportant: true,
    content:
      "The Karnataka State Allied & Healthcare Council is pleased to announce that registration for all allied healthcare professionals is now open. Eligible professionals can apply through our online portal.",
  },
  {
    title: "New Guidelines for Healthcare Education Institutions Released",
    slug: "new-guidelines",
    date: "2023-04-25",
    category: "Guidelines",
    isImportant: false,
    content:
      "The Council has released new guidelines for healthcare education institutions in Karnataka. These guidelines aim to standardize education and improve the quality of healthcare professionals.",
  },
  {
    title: "Workshop on Professional Ethics for Healthcare Workers",
    slug: "ethics-workshop",
    date: "2023-04-15",
    category: "Event",
    isImportant: false,
    content:
      "The Council is organizing a workshop on professional ethics for healthcare workers on May 20, 2023. Registration is mandatory for all participants.",
  },
  {
    title: "Council Announces New Verification Process for Credentials",
    slug: "verification-process",
    date: "2023-03-30",
    category: "Announcement",
    isImportant: true,
    content:
      "A new streamlined process for verification of healthcare professional credentials has been implemented. This will reduce processing time and improve accuracy.",
  },
  {
    title: "Annual Report 2022-23 Published",
    slug: "annual-report",
    date: "2023-03-15",
    category: "Publication",
    isImportant: false,
    content:
      "The Council has published its annual report for the year 2022-23, highlighting achievements, challenges, and future plans.",
  },
  {
    title: "Council Members Visit Healthcare Institutions in Rural Karnataka",
    slug: "rural-visit",
    date: "2023-02-28",
    category: "News",
    isImportant: false,
    content:
      "Council members conducted visits to various healthcare institutions in rural Karnataka to assess the quality of services and identify areas for improvement.",
  },
  {
    title: "Notification: Renewal of Registration for 2023-24",
    slug: "registration-renewal",
    date: "2023-02-15",
    category: "Notification",
    isImportant: true,
    content:
      "All registered healthcare professionals are required to renew their registration for the year 2023-24 before April 30, 2023.",
  },
  {
    title: "Council Collaborates with International Healthcare Organizations",
    slug: "international-collaboration",
    date: "2023-01-20",
    category: "News",
    isImportant: false,
    content:
      "The Karnataka State Allied & Healthcare Council has established collaborations with international healthcare organizations to enhance knowledge exchange and professional development.",
  },
]
