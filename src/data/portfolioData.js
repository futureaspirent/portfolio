/**
 * Portfolio Data File - Swathi Mudi
 * ---------------------------------
 * Authentic portfolio data based on Swathi Mudi's resume.
 */

export const personalInfo = {
  name: "Swathi Mudi",
  shortName: "Swathi",
  role: "MERN Stack Developer",
  experienceYears: "8+ Months Experience",
  tagline: "Building scalable full-stack web applications with modern JavaScript and the MERN stack.",
  bio: "Motivated MERN Stack Developer with hands-on experience in developing and deploying full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in building responsive web applications, REST API integration, JWT authentication, and database management.",
  email: "swathimudi83@gmail.com",
  phone: "+91 9652822231",
  location: "India (Open to Remote & Relocation)",
  github: "https://github.com/futureaspirent",
  linkedin: "https://linkedin.com/in/swathi-mudi-ba276724a",
  resumeUrl: "#contact", // Connects directly to contact or can link to resume PDF
  statusBadge: "Available for Full-time Roles",
};

export const aboutData = {
  summary: [
    "I am a motivated MERN Stack Developer with hands-on experience in developing and deploying full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    "Through industry internships at Zethic Technologies LLP and Rubicorn Technologies, I have actively contributed to designing scalable application features, building responsive React interfaces, integrating secure RESTful APIs with JWT authentication, and managing MongoDB database operations.",
    "I hold a Master of Computer Applications (MCA) with an 8.64 CGPA from Madanapalle Institute of Technology and Science and a B.Sc in Computer Science (8.80 CGPA), combining solid theoretical computer science principles with practical web development skills."
  ],
  coreValues: [
    {
      title: "Full-Stack Engineering",
      description: "Capable of taking user stories from schema modeling in MongoDB to responsive UI development in React.js."
    },
    {
      title: "Problem Solver & Analytical",
      description: "Experienced in breaking down complex business logic into modular REST APIs and maintainable React components."
    },
    {
      title: "Continuous Learner",
      description: "Passionate about exploring modern developer productivity tools, modern frontend workflows, and backend optimizations."
    },
    {
      title: "Collaborative Team Player",
      description: "Comfortable working in remote and hybrid teams using Git, GitHub branching, code reviews, and agile sprints."
    }
  ]
};

export const skillsData = [
  {
    category: "Languages & Web",
    description: "Crafting modern, accessible, and responsive user interfaces.",
    skills: [
      { name: "React.js", icon: "FaReact", level: "Proficient" },
      { name: "JavaScript (ES6+)", icon: "SiJavascript", level: "Proficient" },
      { name: "HTML5", icon: "FaHtml5", level: "Advanced" },
      { name: "CSS3", icon: "FaCss3Alt", level: "Advanced" },
      { name: "Bootstrap", icon: "FaBootstrap", level: "Intermediate" }
    ]
  },
  {
    category: "Backend & APIs",
    description: "Designing RESTful services, middleware, and authentication flows.",
    skills: [
      { name: "Node.js", icon: "FaNodeJs", level: "Proficient" },
      { name: "Express.js", icon: "SiExpress", level: "Proficient" },
      { name: "REST APIs", icon: "TbApi", level: "Proficient" },
      { name: "JWT Authentication", icon: "SiJsonwebtokens", level: "Intermediate" },
      { name: "bcrypt & Security", icon: "FaKey", level: "Intermediate" },
      { name: "Node-Cron", icon: "FaCalendarAlt", level: "Familiar" }
    ]
  },
  {
    category: "Databases & Modeling",
    description: "Document databases, schema validation, and indexing.",
    skills: [
      { name: "MongoDB", icon: "SiMongodb", level: "Proficient" },
      { name: "Mongoose ODM", icon: "SiMongodb", level: "Proficient" }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Version tracking, API testing, build environments, and deployment.",
    skills: [
      { name: "Git", icon: "FaGitAlt", level: "Proficient" },
      { name: "GitHub", icon: "FaGithub", level: "Proficient" },
      { name: "Postman", icon: "SiPostman", level: "Proficient" },
      { name: "VS Code", icon: "SiVisualstudiocode", level: "Proficient" },
      { name: "Vercel", icon: "SiVercel", level: "Proficient" },
      { name: "ChatGPT / AI Tools", icon: "SiOpenai", level: "Productive" }
    ]
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Zethic Technologies LLP",
    location: "On-site / Hybrid",
    period: "June 2026 – September 2026",
    type: "Internship",
    description: "Collaborated on software development projects using modern web technologies, assisting in designing and implementing scalable application features.",
    responsibilities: [
      "Collaborated on software development projects using modern web technologies and frontend workflows.",
      "Assisted in designing, implementing, and testing scalable application features and user interfaces.",
      "Participated in team code reviews, bug fixes, and feature enhancements to improve overall system quality.",
      "Worked closely with team members to deliver clean, maintainable code following modern development standards."
    ],
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git & GitHub"
    ]
  },
  {
    id: 2,
    role: "MERN Stack Developer Intern",
    company: "Rubicorn Technologies",
    location: "Remote",
    period: "January 2026 - May 2026",
    type: "Remote Internship",
    description: "Contributed to full-stack web application development using MERN stack technologies, working on database operations and application feature development.",
    responsibilities: [
      "Contributed to full-stack web application development using MongoDB, Express.js, React.js, and Node.js.",
      "Engineered backend REST API endpoints and performed database CRUD operations using Mongoose schemas.",
      "Collaborated with remote team members to enhance application performance, responsiveness, and user experience.",
      "Implemented client-server data flows with secure authentication handling and client-side state updates."
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "JWT",
      "Postman"
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Inventory & Sales Management System",
    badge: "Featured MERN Project",
    category: "mern",
    shortDescription: "A full-stack business management system with secure authentication, inventory tracking, sales/purchase management, and automated invoice generation.",
    detailedDescription: "Developed a comprehensive full-stack business management system utilizing MongoDB, Express.js, React.js, and Node.js. Features secure authentication with password hashing, product catalog management, real-time stock tracking, sales and purchase records, and invoice generation.",
    keyFeatures: [
      "Secure authentication and authorization with password hashing (bcrypt) and JWT",
      "Modules for product management, inventory tracking, and low-stock alerts",
      "Sales and purchase management with transaction history and order records",
      "Automated invoice generation for customer sales",
      "Full REST API architecture connected to MongoDB via Mongoose ODM"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT", "bcrypt"],
    githubUrl: "https://github.com/futureaspirent",
    liveUrl: "https://frontend-mudi-swathi.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Pocket Notes - React Note Application",
    badge: "React.js Web App",
    category: "frontend",
    shortDescription: "Responsive note-taking application using React functional components, hooks, and localStorage persistence across reloads.",
    detailedDescription: "Built an intuitive and responsive note-taking application using React functional components and hooks (useState, useEffect) for robust client-side state management. Implemented client-side persistence with browser localStorage to ensure notes remain intact across sessions and page refreshes.",
    keyFeatures: [
      "Responsive note creation, grouping, and category color-coding",
      "State management using React functional components and hooks (useState, useEffect)",
      "Persistent client-side storage with browser localStorage",
      "Optimized for smooth mobile, tablet, and desktop note editing"
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/futureaspirent/pocketnotes",
    liveUrl: "https://pocketnotes.vercel.app",
    featured: false
  },
  {
    id: 3,
    title: "Weather Forecast Web Application",
    badge: "React & Weather API",
    category: "frontend",
    shortDescription: "Interactive weather forecasting web application consuming external REST APIs to provide real-time atmospheric data, city lookup, and multi-day forecasts.",
    detailedDescription: "Developed a dynamic weather forecasting application integrating with OpenWeatherMap REST APIs to retrieve real-time atmospheric conditions. Features instant city search, temperature unit toggles (Celsius/Fahrenheit), hourly and 5-day forecasts, condition-based weather cards, and responsive layouts.",
    keyFeatures: [
      "Real-time atmospheric metrics: temperature, humidity, wind velocity, and UV index",
      "City search with automatic geolocation support for instant local forecast",
      "5-day extended weather predictions with temperature trend analysis",
      "Adaptive weather condition indicators and dynamic atmospheric state styling",
      "Resilient error handling for network drops or unknown location queries"
    ],
    technologies: ["React.js", "OpenWeatherMap API", "JavaScript (ES6+)", "CSS3", "REST APIs", "Geolocation"],
    githubUrl: "https://github.com/futureaspirent",
    liveUrl: null,
    featured: false
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Madanapalle Institute of Technology and Science (JNTU Anantapur)",
    location: "Andhra Pradesh, India",
    period: "2023 - 2025",
    cgpa: "8.64 / 10.0",
    description: "Postgraduate degree focusing on advanced computer applications, database systems, software engineering, and full-stack web technologies.",
    keyCourses: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Full Stack Web Development",
      "Object-Oriented Software Engineering",
      "Computer Networks & Distributed Systems"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Science (Computer Science)",
    institution: "Shri Gnanambica Degree College (SV University)",
    location: "Andhra Pradesh, India",
    period: "2020 - 2023",
    cgpa: "8.80 / 10.0",
    description: "Undergraduate degree building strong foundations in computer science, core programming, mathematics, and relational databases.",
    keyCourses: [
      "Core Programming & Data Structures",
      "Database Systems & SQL",
      "Operating Systems & Web Fundamentals",
      "Software Engineering Principles"
    ]
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Full Stack Web Development Training Program",
    issuer: "Cuvette Tech Pvt. Ltd.",
    date: "June 2026",
    description: "Comprehensive training in MERN stack development covering React.js, Node.js, Express.js, MongoDB, REST APIs, and full-stack project building."
  },
  {
    id: 2,
    title: "AI Tools Proficiency",
    issuer: "be10x",
    date: "February 2026",
    description: "Explored AI-assisted workflows, code generation, and developer productivity tools using modern LLMs and ChatGPT."
  }
];

export const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
