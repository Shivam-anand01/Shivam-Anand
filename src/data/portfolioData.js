/**
 * Portfolio Data Configuration - Shivam Anand
 * Clean, authentic data without phone numbers or unapproved claims.
 */

export const personalInfo = {
  name: "Shivam Anand",
  role: "Software Developer & B.Tech Student",
  tagline: "B.Tech Computer Science student specializing in software development, IoT systems, programming, and building high-performance technology solutions.",
  location: "India",
  status: "Open for Software Developer Roles & Projects",
  bio: [
    "I am a Computer Science undergraduate with a passion for software development, embedded systems, and problem-solving.",
    "My technical focus spans programming, IoT hardware architectures, relational databases, and building robust, efficient applications. I enjoy writing clean code, designing secure system architectures, and learning emerging engineering paradigms.",
    "Eager to collaborate with forward-thinking teams, tackle challenging engineering problems, and build impactful software solutions."
  ],
  stats: [
    { label: "Showcase Project", value: "1", suffix: "" },
    { label: "Academic Degree", value: "B.Tech", suffix: " CSE" },
    { label: "Core Focus", value: "Software & IoT", suffix: "" },
    { label: "Opportunities", value: "Open", suffix: "" },
  ],
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Shivam-anand01",
    icon: "Github",
    label: "github.com/Shivam-anand01",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin",
    label: "linkedin.com/in/shivam-anand",
  },
  {
    name: "Email",
    url: "mailto:shivam.anand.163@gmail.com",
    icon: "Mail",
    label: "shivam.anand.163@gmail.com",
  },
];

export const skillCategories = [
  {
    category: "Programming & Languages",
    icon: "Code2",
    skills: [
      { name: "C / C++", level: "Proficient", icon: "Cpu" },
      { name: "JavaScript (ES6+)", level: "Proficient", icon: "FileCode2" },
      { name: "HTML5 & CSS3", level: "Proficient", icon: "Globe" },
      { name: "Data Structures & Algorithms", level: "Intermediate", icon: "Layers" },
    ],
  },
  {
    category: "IoT & Embedded Systems",
    icon: "Cpu",
    skills: [
      { name: "ESP32 Microcontroller", level: "Proficient", icon: "Cpu" },
      { name: "Embedded C / Arduino", level: "Proficient", icon: "Zap" },
      { name: "Sensor & Actuator Interfacing", level: "Proficient", icon: "Sliders" },
      { name: "Wireless Protocols (Wi-Fi / BLE)", level: "Intermediate", icon: "Network" },
    ],
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "PostgreSQL / SQL", level: "Intermediate", icon: "Database" },
      { name: "MongoDB", level: "Intermediate", icon: "HardDrive" },
      { name: "Database Schema Design", level: "Intermediate", icon: "Sliders" },
      { name: "CRUD Operations & Indexing", level: "Proficient", icon: "FileCode2" },
    ],
  },
  {
    category: "Developer Tools & Platforms",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub Version Control", level: "Proficient", icon: "GitBranch" },
      { name: "VS Code & Debugging", level: "Proficient", icon: "Terminal" },
      { name: "Vercel / Netlify Deployments", level: "Proficient", icon: "ExternalLink" },
    ],
  },
];

export const projectsData = [
  {
    id: "esp32-smart-door-unlocking",
    title: "ESP32-based Smart Door Unlocking System",
    category: "IoT & Embedded Systems",
    description: "An automated smart security access system built with ESP32 microcontroller, wireless authentication, electronic solenoid lock control, and real-time security logs.",
    detailedDescription: "Designed and engineered an IoT-enabled smart door locking mechanism powered by an ESP32 microcontroller. The system integrates secure wireless credential authentication, relay-driven electronic solenoid lock activation, status indicator LEDs, and a responsive telemetry dashboard for seamless keyless security and access monitoring.",
    image: null,
    technologies: ["ESP32", "Embedded C++", "IoT", "Relay Control", "Wi-Fi Telemetry", "Hardware Interfacing"],
    githubUrl: "https://github.com/Shivam-anand01/Shivam-Anand",
    liveUrl: null,
    highlights: [
      "Engineered ESP32 firmware with secure wireless authentication and access control logic",
      "Integrated electronic solenoid lock mechanism with relay control circuitry and power regulation",
      "Configured real-time status telemetry and event logging for keyless access verification",
    ],
    featured: true,
  },
];

export const marqueeItems = [
  "⚡ ESP32 & IoT Systems",
  "💻 JavaScript (ES6+)",
  "🔧 C / C++ Programming",
  "🗄️ PostgreSQL & SQL",
  "🍃 MongoDB",
  "🔧 Git & GitHub Version Control",
  "⚡ Smart Automation & Embedded C",
  "🎓 B.Tech Computer Science",
  "✨ Available for Opportunities",
  "🛠️ Clean Architecture",
];

export const educationData = [
  {
    id: "edu-college",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "LOVELY PROFESSIONAL UNIVERSITY",
    location: "Punjab, India",
    period: "Undergraduate (B.Tech CSE)",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, IoT & Embedded Systems.",
      "Hands-on project work developing IoT solutions, micro-controller architectures, and software engineering practices.",
    ],
  },
  {
    id: "edu-school",
    degree: "Senior Secondary & High School Education",
    institution: "DAV PUBLIC SCHOOL, dhanupara",
    location: "India",
    period: "Schooling",
    highlights: [
      "Strong foundational education in Science, Mathematics, and Computer Applications.",
      "Active participation in academic and technological competitions.",
    ],
  },
];

export const contactInfo = {
  email: "shivam.anand.163@gmail.com",
  github: "https://github.com/Shivam-anand01",
  linkedin: "https://linkedin.com",
  location: "India",
  availability: "Available for full-time developer roles & projects",
  responseTime: "Within 24 hours",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
