export interface Form {
  title: string
  description: string
  url: string
}

export const forms: Form[] = [
  {
    title: "Registration Form",
    description: "Form for registration of allied healthcare professionals",
    url: "/forms/registration-form.pdf",
  },
  {
    title: "Acknowledgement Form",
    description: "Acknowledgement form for registration process",
    url: "/forms/acknowledgement-form.pdf",
  },
  {
    title: "Form C",
    description: "Application for registration of existing practitioners",
    url: "/forms/form-c.pdf",
  },
  {
    title: "Form D",
    description: "Application for registration of new practitioners",
    url: "/forms/form-d.pdf",
  },
  {
    title: "Form E",
    description: "Application for renewal of registration",
    url: "/forms/form-e.pdf",
  },
  {
    title: "Form F",
    description: "Application for duplicate certificate",
    url: "/forms/form-f.pdf",
  },
]
