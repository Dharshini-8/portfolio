import { FiGithub, FiLinkedin, FiMail, FiLink, FiZap, FiBriefcase, FiShoppingCart } from "react-icons/fi";
import {
  FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaGraduationCap, FaPaw
} from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import {
  SiJavascript, SiExpress, SiMongodb, SiTailwindcss, SiBootstrap, SiRender, SiPostman, SiNetlify
} from "react-icons/si";

export const heroData = {
  name: "Dharshini V T",
  subtitle: "Computer Science Engineering Undergraduate",
  typewriter: [
    "Full Stack Developer",
    "Java Developer",
    "React Developer",
    "Software Engineer",
    "Problem Solver",
    "Open to Internship Opportunities",
  ],
  socials: [
    { id: 1, icon: <FiGithub />, link: "https://github.com/Dharshini-8", label: "GitHub" },
    { id: 2, icon: <FiLinkedin />, link: "https://www.linkedin.com/in/dharshini-v-t-54b675293", label: "LinkedIn" },
    { id: 3, icon: <FiMail />, link: "mailto:vtdharshini8@gmail.com", label: "Email" },
  ],
  resumePdf: "/resume.pdf"
};

export const aboutData = {
  description: "Computer Science Engineering undergraduate passionate about Full Stack Development, Java, and modern web technologies. I enjoy building scalable web applications, solving real-world problems, and continuously learning emerging technologies. I am actively seeking Software Development and Full Stack Internship opportunities where I can contribute, grow, and build impactful solutions.",
  stats: [
    { label: "Projects Completed", value: "7+" },
    { label: "Hackathons", value: "3" },
    { label: "Technologies", value: "15+" },
    { label: "Achievements", value: "5+" },
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "SQL", icon: <span className="font-bold">SQL</span> },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <span className="font-bold">VS</span> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Cloud Deploy", icon: <SiNetlify /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "ZyLink – Smart URL Analytics Platform",
    description: "A secure URL shortening platform that enables users to create custom short links, generate QR codes, and analyze URL performance through an interactive analytics dashboard.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "QR API"],
    features: ["Secure Authentication", "Custom Short URLs", "QR Code Generation", "Click Analytics", "URL Management", "Responsive Design"],
    liveLink: "https://fantastic-griffin-32b6bf.netlify.app/",
    githubLink: "https://github.com/Dharshini-8",
    // image removed, use icon instead
    icon: <FiLink />, 
    featured: true
  },
  {
    id: 4,
    title: "AI-Based Education Equity System",
    description: "A platform aiming to bridge the education gap by providing resources, scholarships, and AI assistance.",
    tech: ["React.js", "HTML5", "CSS3", "JavaScript"],
    features: ["Student Portal", "Teacher Portal", "AI Chatbot", "Scholarship Module", "Internship Module", "Assessment Tracking", "Learning Analytics"],
    liveLink: "#",
    githubLink: "https://github.com/Dharshini-8",
    // image removed, use icon
    icon: <FaGraduationCap />, 
    featured: false
  },
  {
    id: 6,
    title: "Mediscan – Smart Healthcare Platform",
    description: "A smart healthcare assistant that provides medicine details, dosage information, and side effects through barcode scanning.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: ["Medicine Scanner", "QR Code Scanner", "Barcode Scanner", "Dosage Information", "Side Effects", "Precautions", "Healthcare Assistant"],
    liveLink: "#",
    githubLink: "https://github.com/Dharshini-8",
    // image removed, use icon
    icon: <FaStethoscope />, 
    featured: false
  },
  {
    id: 2,
    title: "DreamSpace – AI-Powered Learning & Productivity",
    description: "An AI-inspired dream journaling and subconscious analytics platform developed to help users record, organize, and understand their dreams. Log dreams, monitor sleep quality, identify recurring symbols, track personal goals, and gain AI-inspired interpretations.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Context API"],
    features: ["AI Chat Assistant", "Productivity Dashboard", "Task Management", "Learning Resources", "Smooth Animations", "Responsive Design"],
    liveLink: "#",
    githubLink: "https://github.com/Dharshini-8",
    // image removed, use icon
    icon: <FiZap />, 
    featured: false
  },
  {
    id: 3,
    title: "Placement Tracker",
    description: "A comprehensive solution for students to track internship and placement opportunities, applications, and interview rounds.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: ["Student Authentication", "Company Listings", "Internship Tracking", "Interview Tracker", "Resume Management", "Placement Dashboard"],
    liveLink: "#",
    githubLink: "https://github.com/Dharshini-8",
    // image removed, use icon
    icon: <FiBriefcase />, 
    featured: false
  },
  {
    id: 5,
    title: "LaundryXpert – Smart Laundry Management",
    description: "A complete management system for laundry businesses including booking, tracking, and customer management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: ["Laundry Booking", "Order Tracking", "Customer Dashboard", "Admin Dashboard", "Responsive UI"],
    liveLink: "#",
    githubLink: "https://github.com/Dharshini-8",
    // image removed, use icon
    icon: <FiShoppingCart />, 
    featured: false
  },
  {
    id: 7,
    title: "Pet Adoption Website",
    description: "A user-friendly platform connecting prospective pet owners with animals needing a home.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: ["Pet Listings", "Adoption Request", "Search & Filter", "Responsive Design"],
    liveLink: "#",
    githubLink: "https://github.com/Dharshini-8",
    // image removed, use icon
    icon: <FaPaw />, 
    featured: false
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Student Intern – Full Stack Web Development",
    company: "NXTLogic Software Solutions",
    duration: "06/2025 - 06/2025",
    description: "Worked on LaundryXpert – Smart Laundry Management System.",
    responsibilities: [
      "Responsive UI Development",
      "Service Booking Module",
      "Order Tracking",
      "Full Stack Web Development",
      "Teamwork",
    ]
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "Project Expo Winner",
    organization: "Dr. N.G.P. Institute of Technology",
    year: "2026",
    icon: "🏆"
  },
  {
    id: 2,
    title: "Top 10 Finalist",
    organization: "24-Hour National Hackathon - Karpagam Academy of Higher Education",
    year: "2025",
    icon: "🚀"
  },
  {
    id: 3,
    title: "Top 10 Finalist",
    organization: "36-Hour National Hackathon (NeuraHack 2.0) - K.S. Rangasamy College of Technology",
    year: "2026",
    icon: "⚡"
  },
  {
    id: 4,
    title: "CodeZap 2026 – 36-Hour Hackathon",
    organization: "Touchmark Pvt. Ltd.",
    year: "2026",
    icon: "🏅"
  },
  {
    id: 5,
    title: "AIM'26 Hackathon",
    organization: "Infund Coimbatore",
    year: "2026",
    icon: "🏅"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    major: "Computer Science and Engineering",
    institution: "Dr. N.G.P. Institute of Technology",
    score: "CGPA: 8.23",
    year: "2023 - 2027"
  },
  {
    id: 2,
    degree: "Higher Secondary (HSC)",
    major: "Computer Science",
    institution: "Kathiravan.Matric.Hr.Secondary.School,Tiruppur",
    score: "86%",
    year: "2022 - 2023"
  }
];
