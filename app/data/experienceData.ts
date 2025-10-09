// experienceData.ts
export interface Experience {
  role: string
  company: string
  date: string
  tasks: string[]
}

export const experiences: Experience[] = [
    {
    role: "Fullstack Developer Fresher",
    company: "ISV Company",
    date: "Sep. 2025 - Oct. 2025",
    tasks: [
      "Worked with Salesforce platform, focusing on Apex triggers, Lightning Components, and Visualforce pages.",
      "Maintained and enhanced existing Salesforce applications for a Japanese client, ensuring stability and performance.",
      "Implemented business logic using Apex and customized user interfaces with Lightning Components.",
      "Assisted in debugging, testing, and deploying updates to the Salesforce environment.",
      "Collaborated with senior developers to ensure compliance with Salesforce best practices and client requirements."
    ],
  },
  {
    role: "Fullstack Developer Intern",
    company: "JDO Group - EDN Company",
    date: "Aug. 2025 - Sep. 2025",
    tasks: [
      "Worked on backend APIs using Node.js and Express, gaining initial experience with NestJS for building scalable and maintainable applications.",
      "Implemented JWT-based authentication and role management, and utilized Redux Toolkit for efficient state management.",
      "Used PostgreSQL for database design and data migration.",
      "Collaborated with team members using Git for version control and GitLab for project management and code reviews.",
      "Utilized Vite for fast frontend development and integrated ChatGPT to optimize workflows and improve productivity."
    ],
  },
  {
    role: "Frontend Intern",
    company: "FPT Software",
    date: "Apr. 2024 - Aug. 2024",
    tasks: [
      "Developed and maintained reusable components for the Claim Request project using ReactJS.",
      "Integrated RESTful APIs to handle data retrieval and submission across modules.",
      "Utilized TypeScript to improve code quality, scalability, and maintainability.",
      "Applied Ant Design, ShadCN UI, and Tailwind CSS to build consistent and responsive UI.",
      "Used Zustand for efficient and lightweight state management.",
      "Collaborated closely with the team to ensure seamless feature integration.",
    ],
  },

];
