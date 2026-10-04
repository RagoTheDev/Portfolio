// Portfolio configuration - centralized data for easy updates
export const siteConfig = {
  name: "Jerry John Swigo",
  title: "Full-Stack Developer",
  description: "I build practical software for real-world problems",
  tagline: "I BUILD PRACTICAL SOFTWARE FOR REAL-WORLD PROBLEMS.",
  
  // Contact and social links
  contact: {
    email: "jerryjswigo@gmail.com", // Public contact email
    phone: "+255741349899",
    github: "https://github.com/RagoTheDev/", // GitHub profile
    customDomain: "jerryswigo.dev", // TODO: Update with actual domain
  },

  // Hero section
  hero: {
    mainMessage: "I BUILD PRACTICAL SOFTWARE FOR REAL-WORLD PROBLEMS.",
    supportingText: "I'm Jerry, a full-stack developer and Computer Science student building practical web applications, financial systems, and data automation tools.",
    skills: ["React", "Node.js", "SQL", "Python", "JavaScript"],
  },

  // About section
  about: {
    heading: "THIS IS ME.",
    name: "Hi, I'm Jerry.",
    paragraphs: [
      "I am a Computer Science student and full-stack developer who builds practical web applications, financial systems, and data automation tools.",
      "I have experience delivering client projects across frontend development, backend development, relational databases, APIs, and automation.",
      "I focus on understanding real operational workflows and turning them into clear, maintainable software.",
    ],
  },

  // Technical stack
  stack: {
    frontend: [
      { name: "React", icon: "code" },
      { name: "JavaScript", icon: "code" },
      { name: "HTML", icon: "code" },
      { name: "CSS", icon: "code" },
    ],
    backend: [
      { name: "Node.js", icon: "server" },
      { name: "Express", icon: "server" },
      { name: "API Development", icon: "network" },
    ],
    database: [
      { name: "SQL", icon: "database" },
      { name: "Relational Data Modeling", icon: "database" },
    ],
    automation: [
      { name: "Python", icon: "zap" },
      { name: "Excel Processing", icon: "file" },
      { name: "Data Extraction", icon: "filter" },
      { name: "Data Manipulation", icon: "shuffle" },
    ],
    other: [
      { name: "Java", icon: "code" },
      { name: "Git", icon: "gitBranch" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "terminal" },
    ],
  },

  // Projects
  projects: [
    {
      id: 1,
      number: "01",
      title: "School Management System",
      client: "Memo",
      stack: ["React", "Node.js", "SQL"],
      description: "A full-stack platform that brings core school operations into a single application.",
      features: [
        "React frontend",
        "Node.js backend",
        "SQL database",
        "Student fees management",
        "Expense management",
        "Inventory and asset management",
        "Asset assignment",
        "Asset condition tracking",
        "Maintenance tracking",
        "Loss tracking",
      ],
      role: "Full-stack development including frontend development, backend logic, database-driven features, and module design.",
      image: "/projects/school-management/SCHOOL.png",
      github: null, // TODO: Add GitHub link if available
      liveDemo: null, // TODO: Add live demo link if available
      layout: "image-right", // image-right or image-left
    },
    {
      id: 2,
      number: "02",
      title: "SACCOs Management System",
      client: "Dovya Lutheran Church SACCO",
      stack: ["Full Stack", "SQL", "Financial Workflows"],
      description: "Management software for SACCO operations covering member accounts, savings, loans, repayments, transactions, and accounting workflows.",
      features: [
        "Member management",
        "Savings management",
        "Loans",
        "Loan repayments",
        "Transaction management",
        "Journal entries",
        "Journal vouchers",
        "Financial reporting",
        "Role-based access",
        "Branch operations",
        "Bulk transaction recording",
        "Excel import/export",
      ],
      role: "Designed and improved financial workflows, loan logic, journal functionality, and bulk data features.",
      image: "/projects/saccos/SACCOS.png",
      github: null,
      liveDemo: null,
      layout: "image-left",
    },
    {
      id: 3,
      number: "03",
      title: "Excel & Data Automation",
      client: "R4D",
      stack: ["Python", "Excel", "Data Processing"],
      description: "A Python-based workflow that processes large Excel files containing thousands of rows and generates a ready-to-use result.",
      features: [
        "Large Excel dataset processing",
        "Extracting only required records",
        "Automated calculations",
        "Data manipulation",
        "Multi-sheet Excel generation",
        "Formula generation",
        "Upload → Process → Download workflow",
        "No permanent storage of uploaded source files",
      ],
      role: "Designed the processing approach and built the Python workflow.",
      image: "/projects/excel-automation/EXCEL.png",
      github: null,
      liveDemo: null,
      layout: "image-right",
    },
    {
      id: 4,
      number: "04",
      title: "Tourism Web App",
      client: "Voyazi",
      stack: ["Web Development", "Full Stack"],
      description: "A web application developed for the tourism domain and built around real user needs.",
      features: [
        "TODO: Add features as they become available",
      ],
      role: "Contributed to application development.",
      image: "/projects/voyazi/VOYAZI.png",
      github: null,
      liveDemo: null,
      layout: "image-left",
    },
  ],

  // Development approach
  approach: {
    heading: "HOW I WORK",
    sections: [
      {
        title: "Understand the Workflow",
        description: "I start by understanding the workflow and real operational needs.",
      },
      {
        title: "Design the System",
        description: "Then translate it into a clear system structure: interface, API behavior, database relationships, validation, and roles.",
      },
      {
        title: "Optimize for Impact",
        description: "For automation projects, I focus on input data, extraction rules, calculations, and output structure to reduce manual effort.",
      },
    ],
  },

  // Education
  education: {
    formal: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of the People",
        status: "In Progress",
        areas: [
          "Programming",
          "Databases",
          "Web Development",
          "Software Engineering",
          "Computer Graphics",
          "Cryptography",
          "Computer Architecture",
          "Statistics",
        ],
      },
    ],
    training: [
      {
        name: "freeCodeCamp",
        courses: ["HTML5", "JavaScript"],
      },
      {
        name: "Mimo Bootcamp",
        path: "Back-End Development Career Path",
        technologies: ["JavaScript", "SQL", "Express", "Node.js", "React.js"],
      },
    ],
  },

  // Currently developing
  developing: [
  
    "System Design",
    "Testing",
    "Secure Application Development",
    "Maintainable Backend Architecture",
    
  ],

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Jerry John Swigo. All rights reserved.`,
  },
};

export default siteConfig;
