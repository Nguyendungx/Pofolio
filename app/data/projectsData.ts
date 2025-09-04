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
      title: "EnglishConnect - English Learning App",
      period: "July 2025 - Present",
      role: "Full Stack Developer",
      tech: "ReactJS, ShadCN UI,,Redux Toolkit, TailwindCSS, Zustand,NodeJS, ExpressJS, MongoDB, Socket.IO",
      description:
        "EnglishConnect is a platform that connects users with English teachers, enabling communication, lesson sharing, and course purchases for an interactive learning experience.",
        features: [
            "Secure authentication with JWT.",
            "Connect users and teachers with real-time chat (Socket.IO).",
            "Course management and online payments.",
            "Lesson library for sharing materials.",
            "Responsive UI with ReactJS & TailwindCSS, state managed by Redux Toolkit & Zustand.",
            "Backend APIs with NodeJS, MongoDB, and basic Docker setup.",
          ],
          

      links: {
        backend: "https://github.com/Nguyendungx/Backend_Ecom.git",
        frontend: "https://github.com/Nguyendungx/EnglishConnect.git",
      },
    },
    {
      title: "ChatApp - Backend Chat App",
      period: "July 2025 - Aug 2025",
      role: "Backend Developer",
      tech: "NodeJS, ExpressJS, MongoDB, Socket.IO",
      description:
        "Backend ChatApp — a server-side processing system for real-time chat applications, developed using Node.js and Express.js.",
      features: [
        "Integrate JWT for authentication and password encryption to ensure user data security.",
        "Create APIs using NodeJs, ExpressJs and Swagger for CRUD functionality.",
        "Integrated RESTful APIs and real-time notifications using Socket.IO.",
        "Use MongoDB as database, use Swagger as UI to test API.",
      ],
      links: {
        backend: "https://github.com/Nguyendungx/Backend_Ecom.git",
      },
    },
    {
      title: "STUDGART - IT Job Platform",
      period: "Jan 2025 - May 2025",
      role: "Frontend Developer, Mobile Developer",
      tech: "ReactJS, React Native, ShadCN UI, Gluestack, Zustand, Socket.IO",
      description:
        "A comprehensive web and mobile platform that connects recruiters, job seekers, and companies for seamless hiring.",
      features: [
        "Developed responsive web interfaces using ReactJS and ShadCN UI",
        "Built mobile interfaces with React Native utilizing Gluestack",
        "Implemented role-based features for Recruiter, Jobseeker, Company, and Admin",
        "Created revenue reports with Excel file export functionality",
        "Integrated RESTful APIs and real-time notifications using Socket.IO",
        "Completed full CRUD operations across all user roles",
      ],
      links: {
        web: "https://github.com/timastoicguy/studgart-job-listing.git",
        mobile:
          "https://github.com/timastoicguy/studgart-job-listing-mobile.git",
        demo: "https://www.youtube.com/watch?v=-P2b3U866sM&t=1s",
      },
    },
    {
      title: "EduStore - Ecommerce Website",
      period: "July 2025 - August 2025",
      role: "Full Stack Developer",
      tech: "ReactJS, ShadCN UI, NodeJS, ExpressJS, MongoDB, TailwindCSS, Zustand, Socket.IO",
      description:
        "EduStore is an e-commerce platform for education/language courses, materials, events and articles. The app is built with Next.js 15, TypeScript, Ant Design, Tailwind CSS and deployed on Vercel.",
      features: [
        "Developed responsive web interfaces using ReactJS and ShadCN UI",
        "Create APIs using NodeJs, ExpressJs and Swagger for CRUD functionality.",
        "Integrated RESTful APIs and real-time notifications using Socket.IO",
        "Using JWT and Token for authentication",
      ],
      links: {
        frontend: "https://github.com/Nguyendungx/ecommerce-app.git",
        backend: "https://github.com/Nguyendungx/Backend_Ecom.git",
        demo: "https://ecommerce-app-git-master-nguyen-hung-dungs-projects.vercel.app/",
      },
    },
  ];
  