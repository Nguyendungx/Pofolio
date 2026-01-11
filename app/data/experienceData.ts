// experienceData.ts
export interface Experience {
  role: string
  company: string
  date: string
  tasks: string[]
}

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "ISV Company",
    date: "Sep. 2025 - Now",
    tasks: [
      "Collaborated with team members to troubleshoot issues, optimize workflows, and deliver quality updates within project timelines.",
      "Worked with .NET 8+ WinForms and RDLC Reports to develop and maintain desktop applications.",
      "Participated in converting a vehicle dealership management system from Microsoft Access to .NET WinForms, including data migration and report generation.",
      "Developed web applications using Next.js and ReactJS, focusing on reusable components and responsive UI design.",
      "Contributed to a Human Resource Management system, implementing features for employee data management and internal workflows.",
      "Worked with Salesforce technologies, including Apex Triggers, Lightning Components, and Visualforce pages.",
      "Maintained and enhanced Salesforce applications for a Japanese client, ensuring system stability and implementing requested customizations.",
    ],
  },
  {
    role: "Web Developer",
    company: "JDO GROUP",
    date: "Aug. 2025 - Sep. 2025",
    tasks: [
      "Worked on backend APIs using Node.js and Express, gaining initial experience with NestJS for building scalable and maintainable applications.",
      "Implemented JWT-based authentication and role management, and utilized Redux Toolkit for efficient state management.",
      "Used PostgreSQL for database design and data migration.",
      "Utilized Vite for fast frontend development and integrated ChatGPT to optimize workflows and improve productivity.",
      "Collaborated with team members using Git for version control and GitLab for project management and code reviews.",
    ],
  },
  {
    role: "Frontend Intern",
    company: "FPT Software",
    date: "April 2024 - Aug 2024",
    tasks: [
      "Developed and maintained reusable components for the Claim Request project using ReactJS.",
      "Integrated RESTful APIs to handle data retrieval and submission across modules.",
      "Applied Ant Design, ShadCN UI, and Tailwind CSS to build a consistent and responsive user interface.",
      "Used Zustand for efficient and lightweight state management across the application.",
    ],
  },
];
