// projectsData.ts
export interface ProjectLinks {
  web?: string
  mobile?: string
  frontend?: string
  backend?: string
  demo?: string
}

export interface Project {
  title: string
  period: string
  role: string
  tech: string
  description: string
  features: string[]
  links: ProjectLinks
}

export const projects: Project[] = [
  {
    title: "Vehicle Dealership Management System (Desktop Application)",
    period: "Nov 2025 - Now",
    role: "Software Developer",
    tech: ".NET 8+, WinForms, RDLC Report, SQL Server",
    description:
      "A desktop system for managing vehicle inventory, sales, and reporting for a car dealership.",
    features: [
      "Developed and maintained desktop application features using .NET 8+ WinForms.",
      "Converted an existing Microsoft Access–based system to .NET WinForms, improving performance and maintainability.",
      "Designed and implemented RDLC reports for vehicle inventory, sales statistics, and operational summaries.",
      "Migrated and validated legacy data from Access to SQL Server, ensuring data consistency.",
      "Collaborated with team members to analyze business requirements and deliver stable, user-friendly solutions.",
    ],
    links: {},
  },
  {
    title: "Human Resource Management System (Web Application)",
    period: "Sep 2025 - Nov 2025",
    role: "Web Developer",
    tech: "Next.js, ReactJS, TypeScript, MySQL",
    description:
      "A web-based system for managing employees, attendance, working time, and business metrics.",
    features: [
      "Developed web interfaces using Next.js and ReactJS with a focus on responsive and user-friendly UI.",
      "Implemented core HR features including employee management, attendance tracking, working time monitoring, and payroll-related data.",
      "Built revenue and statistical dashboards to visualize business performance and workforce metrics.",
      "Integrated APIs to handle real-time data updates and ensure accurate data synchronization.",
      "Collaborated with team members to refine requirements and deliver features within project timelines.",
    ],
    links: {},
  },
  {
    title: "Salesforce Customization & Maintenance Project",
    period: "Sep 2025 - Now",
    role: "Salesforce Developer",
    tech: "Salesforce, Apex, Lightning Components, Visualforce",
    description:
      "A Salesforce-based system customized and maintained for enterprise business operations.",
    features: [
      "Developed and customized Salesforce features using Apex Triggers, Lightning Components, and Visualforce pages.",
      "Maintained and enhanced existing Salesforce applications for a Japanese client, ensuring system stability and data integrity.",
      "Implemented business logic customizations based on client requirements and change requests.",
      "Troubleshot issues, optimized workflows, and improved system performance.",
      "Collaborated closely with team members to deliver quality updates within defined timelines.",
    ],
    links: {},
  },
  {
    title: "CRM Management System (Web & Mobile Application)",
    period: "Aug 2025 - Sep 2025",
    role: "Software Developer",
    tech: "Next.js, ReactJS, Redux Toolkit (RTK Query), PostgreSQL, Flutter",
    description:
      "A CRM platform for sales teams, managers, and administrators to manage customers, sales activities, and performance.",
    features: [
      "Developed web-based CRM features using Next.js and ReactJS, supporting roles such as Sales, Manager, and Admin.",
      "Implemented efficient state management and API handling using Redux Toolkit and RTK Query.",
      "Integrated backend services with PostgreSQL to manage customer data, sales pipelines, and reports.",
      "Built role-based dashboards for sales performance tracking, customer management, and administrative control.",
      "Developed mobile UI interfaces using Flutter, focusing on responsive layouts and usability across devices.",
      "Collaborated with team members to deliver stable features and meet project requirements.",
    ],
    links: {},
  },
];
