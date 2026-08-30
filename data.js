/**
 * ==========================================
 * AYESHA IQBAL — PORTFOLIO DATA CONFIGURATION
 * ==========================================
 * Easy-to-edit configuration file for all links, images, skills, and projects.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Ayesha Iqbal",
    title: "Computer Science Student | Aspiring Frontend Developer",
    subtitle: "And I'm a Computer Science Student",
    bio: "I'm a Computer Science student passionate about building modern, responsive and user-friendly websites and applications. I enjoy learning new technologies and turning ideas into practical projects.",
    aboutParagraph1: "I am a Computer Science student at UET Lahore with a strong interest in software development and web technologies. I enjoy building modern, responsive and user-friendly applications while continuously improving my programming and problem-solving skills.",
    aboutParagraph2: "I have completed three semesters of my BS Computer Science degree and have been developing my skills in frontend development, backend technologies, databases, Git, GitHub and Data Structures & Algorithms.",
    education: {
      degree: "BS Computer Science",
      institution: "UET Lahore",
      status: "3 Semesters Completed"
    },
    internship: {
      company: "CodeAlpha",
      role: "Software Development Internship",
      description: "Completed a software development internship at CodeAlpha, gaining practical exposure to software development, problem solving and working on development tasks."
    }
  },

  // Placeholders and actual URLs
  placeholders: {
    YOUR_GMAIL_HERE: "mailto:ayeshaiqbal3797@gmail.com",
    YOUR_GITHUB_URL: "https://github.com/ayeshaiqbal3797-cmd",
    YOUR_LINKEDIN_URL: "https://www.linkedin.com/in/ayesha-iqbal-8a6174350",
    YOUR_PROFILE_IMAGE: "assets/profile-avatar.svg",
    GITHUB_REPO_URL: "https://github.com/ayeshaiqbal3797-cmd",
    LIVE_PROJECT_URL: ""
  },

  socials: {
    github: "https://github.com/ayeshaiqbal3797-cmd",
    linkedin: "https://www.linkedin.com/in/ayesha-iqbal-8a6174350",
    gmail: "mailto:ayeshaiqbal3797@gmail.com"
  },

  skills: [
    {
      name: "HTML5",
      iconType: "html5",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      iconType: "css3",
      color: "#1572B6"
    },
    {
      name: "JavaScript",
      iconType: "javascript",
      color: "#F7DF1E"
    },
    {
      name: "Node.js",
      iconType: "nodejs",
      color: "#339933"
    },
    {
      name: "Express.js",
      iconType: "express",
      color: "#FFFFFF"
    },
    {
      name: "MongoDB",
      iconType: "mongodb",
      color: "#47A248"
    },
    {
      name: "SSMS",
      iconType: "ssms",
      color: "#CC292B"
    },
    {
      name: "C++",
      iconType: "cpp",
      color: "#00599C"
    },
    {
      name: "OOP",
      iconType: "oop",
      color: "#14B8A6"
    },
    {
      name: "Git",
      iconType: "git",
      color: "#F05032"
    },
    {
      name: "GitHub",
      iconType: "github",
      color: "#F8FAFC"
    },
    {
      name: "DSA",
      iconType: "dsa",
      color: "#F59E0B"
    }
  ],

  projects: [
    {
      id: "library-management",
      name: "Library Management System",
      description: "A complete console-based library record management system built for cataloging books, tracking student issued records, and managing borrowing history.",
      technologies: ["C++", "OOP", "File Handling", "Data Structures"],
      howIBuiltIt: "Developed using C++ object-oriented architecture. Implemented persistent binary file streams for store and retrieve operations on catalog records and member checkout histories.",
      github: "https://github.com/ayeshaiqbal3797-cmd/LIBRARY-MANAGEMENT-SYSTEM",
      live: "",
      imageType: "library"
    },
    {
      id: "hostel-management",
      name: "Hostel Management System",
      description: "An automated management system for hostel room allocations, resident registration, fee records, and maintenance logs.",
      technologies: ["C++", "OOP", "File Handling", "Data Structures"],
      howIBuiltIt: "Built using C++ classes for modular management of student data, room capacity tracking, fee status verification, and persistent data file storage.",
      github: "https://github.com/ayeshaiqbal3797-cmd/Hostel-management-system",
      live: "",
      imageType: "hostel"
    },
    {
      id: "bank-management",
      name: "Bank Management System",
      description: "A console banking solution supporting secure account creation, deposits, withdrawals, fund transfers, and detailed transaction history.",
      technologies: ["C++", "OOP", "File Handling", "Security Concepts"],
      howIBuiltIt: "Engineered in C++ using object-oriented principles, data encapsulation, PIN code validation logic, and file stream persistence for all account transactions.",
      github: "https://github.com/ayeshaiqbal3797-cmd/Bank-Management-system",
      live: "",
      imageType: "bank"
    },
    {
      id: "dinease-se",
      name: "DinEase — Restaurant Management System",
      description: "A modern software engineering project designed to streamline restaurant table reservations, digital menu browsing, and order tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "Software Engineering"],
      howIBuiltIt: "Designed and implemented using Software Engineering lifecycle phases, wireframing, component-based HTML5/CSS3 layouts, and dynamic JS menu interactions.",
      github: "https://github.com/ayeshaiqbal3797-cmd/SE-project-DINEASE-",
      live: "",
      imageType: "restaurant"
    },
    {
      id: "hospital-management",
      name: "Hospital Management System",
      description: "A patient and doctor management application for organizing medical appointments, OPD queues, patient admissions, and doctor schedules.",
      technologies: ["C++", "OOP", "Data Structures"],
      howIBuiltIt: "Collaborated on designing structured records and algorithms in C++ for scheduling patient appointments, queueing operations, and managing doctor availability.",
      github: "https://github.com/Habiba-shah/Hospital-Management-System",
      live: "",
      imageType: "hospital"
    },
    {
      id: "product-management",
      name: "Product Management System",
      description: "A web application for product inventory management featuring real-time CRUD operations, product search filters, and responsive inventory cards.",
      technologies: ["HTML", "CSS", "JavaScript", "CRUD Operations"],
      howIBuiltIt: "Built using HTML5, modern flexbox/grid layout styling, and vanilla JavaScript event listeners to provide dynamic creation, update, and deletion of inventory items.",
      github: "https://github.com/ayeshaiqbal3797-cmd/PRODUCT-MANAGEMENT-SYSTEM",
      live: "",
      imageType: "product"
    },
    {
      id: "movie-app",
      name: "Movie Discovery & Explorer App",
      description: "An interactive web portal for exploring movie listings, reading detailed plot summaries, searching titles, and curating watchlist items.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      howIBuiltIt: "Developed using modular HTML structures, sleek CSS dark theme styling, and DOM manipulation scripts to power interactive search filtering and card interactions.",
      github: "https://github.com/ayeshaiqbal3797-cmd/MOVIE",
      live: "",
      imageType: "movie"
    }
  ]
};
