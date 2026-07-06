import chalet from '../assets/images/chalet.jpeg';
import chalet2 from '../assets/images/chalet2.jpeg';
import chalet3 from '../assets/images/chalet3.jpeg';
import chalet4 from '../assets/images/chalet4.jpeg';

import cofeeapp from '../assets/images/cofeeapp.jpeg';
import ctf from '../assets/images/ctf.jpg';
import cyberday from '../assets/images/cyberday.jpg';
import devopscert from '../assets/images/devopscert.jpeg';
import EmpSkills from '../assets/images/EmpSkills.jpg';
import ESA from '../assets/images/ESA.png';
import ESIEE from '../assets/images/ESIEE.png';
import flutter from '../assets/images/flutter.png';

import gym from '../assets/images/gym.jpeg';
import gym1 from '../assets/images/gym1.jpeg';
import gym2 from '../assets/images/gym2.jpeg';
import gym3 from '../assets/images/gym3.jpeg';
import gym4 from '../assets/images/gym4.jpeg';

import ml from '../assets/images/ml.png';
import notiapp from '../assets/images/notiapp.jpeg';
import opss from '../assets/images/opss.png';
import prompteng from '../assets/images/prompteng.jpeg';
import timemang from '../assets/images/timemang.png';
import transaction from '../assets/images/transaction.jpeg';
import appicon from '../assets/images/appicon.png';
import bookingformpage1 from '../assets/images/bookingformpage1.jpeg';
import cardetails1 from '../assets/images/cardetails1.jpeg';
import chatbot1 from '../assets/images/chatbot1.jpeg';
import home2 from '../assets/images/ome2.png';
import icon from '../assets/images/icon.png';
import licensetrue from '../assets/images/licensetrue.jpeg';
import notificationat10 from '../assets/images/notificationat10.jpeg';
import emailotp from '../assets/images/emailotp.png';
import chrono1 from '../assets/images/chrono1.png';
import chrono2 from '../assets/images/chrono2.png';
import chrono3 from '../assets/images/chrono3.png';
import chrono4 from '../assets/images/chrono4.png';
import food1 from '../assets/images/food1.png';
import food2 from '../assets/images/food2.png';
import food3 from '../assets/images/food3.png';
import food4 from '../assets/images/food4.png';
import food5 from '../assets/images/food5.png';
import restapp1 from '../assets/images/restapp1.jpeg';
import restapp2 from '../assets/images/restapp2.jpeg';
import restapp3 from '../assets/images/restapp3.jpeg';
import restapp4 from '../assets/images/restapp4.jpeg';



export const personalInfo = {
  name: "ALI AZZAM",
  title: "Full-Stack Developer & CyberSecurity Ambassador",
  location: "Lebanon",
  phone: "+961 76 915 446",
  email: "aliazzzam20@gmail.com",
  linkedin: "https://www.linkedin.com/in/ali-azzam-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  // github: "https://github.com/aliazzam",
  portfolio: "#",
  bio: "Results-driven Full-Stack Developer and Cybersecurity Ambassador with expertise in React.js, Flutter, Firebase, and Laravel. Skilled in delivering production-ready applications featuring AI, OCR, real-time systems, payment processing, and cloud services."
};

export const experiences = [
  {
    id: 1,
    role: "Ambassador – Semicolon Security",
    company: "CyberSecurity Community",
    period: "September 2025 – Present",
    location: "Remote",
    description: [
      "Representing Semicolon Security & Academy as a CyberSecurity Ambassador",
      "Organizing and participating in CyberSecurity events, CTF competitions, and workshops",
      "Engaging in community outreach to spread awareness about cybersecurity practices"
    ],
    current: true
  },
  {
    id: 2,
    role: "Full-Stack Developer Intern",
    company: "Violet Pro",
    period: "June 2025 – August 2025",
    location: "Tyr, Lebanon",
    description: [
      "Completed a 2-month internship while working on Master's senior project",
      "Built full-stack Car Reservation App (Drive Wise) with Admin Web Platform (React.js + Firebase)",
      "Developed Mobile App for Users (Flutter + Firebase)",
      "Implemented Email OTP, OCR for driver's license, Google Maps, Chatbot (Gemini API), real-time notifications"
    ],
    current: false
  },
  {
    id: 3,
    role: "Mobile Application Developer",
    company: "Freelance",
    period: "March 2024 – Present",
    location: "Remote",
    description: [
      "Developed mobile apps using Flutter",
      "Handled back-end services and Firebase database integration"
    ],
    current: true
  },
  {
    id: 4,
    role: "Web Developer",
    company: "Freelance",
    period: "March 2024 – Present",
    location: "Remote",
    description: [
      "Built custom websites for clients using modern stacks (React.js, Laravel, etc.)"
    ],
    current: true
  },
  {
    id: 5,
    role: "IT Intern",
    company: "Imam al-Sadr Foundation",
    period: "May 2023 – July 2024",
    location: "Tyr, Lebanon",
    description: [
      "Contributed to internal software projects using VB.Net, Java, and Python",
      "Handled database administration and hardware maintenance"
    ],
    current: false
  }
];

export const projects = [
  {
    id: 1,
    title: "Drive Wise – Car Reservation App",
    category: "Full-Stack",
    year: "2025",
    description: "Full-stack car reservation platform developed for Master's thesis with admin web panel and user mobile app",
    tech: ["React.js", "Flutter", "Firebase", "Google Cloud Vision API", "Gemini API", "EmailJS"],
    features: [
      "OTP authentication via EmailJS",
      "OCR license verification using Google Cloud Vision API",
      "Google Maps integration for geolocation",
      "AI chatbot powered by Gemini API",
      "Real-time notifications and status updates",
      "Digital contract management"
    ],
    image: "project1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "ChronoTrack HR Attendance System",
    category: "Frontend",
    year: "2025",
    description: "Employee attendance tracking web interface with check-in/out functionality and salary calculation",
    tech: ["React.js", "CSS3", "JavaScript"],
    features: [
      "Check-in/out functionality",
      "Automated salary calculation",
      "Employee dashboard",
      "Admin panel for management"
    ],
    image: "project2.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Restaurant Mobile App",
    category: "Mobile",
    year: "2025",
    description: "Offline-first mobile app for restaurant with menu browsing, cart, and Stripe payment integration",
    tech: ["Flutter", "Stripe API", "SQLite"],
    features: [
      "Offline-first architecture",
      "Menu browsing and cart management",
      "Stripe payment integration",
      "Order history tracking"
    ],
    image: "project3.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Food Delivery Website",
    category: "Full-Stack",
    year: "2025",
    description: "Restaurant food delivery website similar to Toters with complete ordering system",
    tech: ["React.js", "Laravel", "MySQL", "PHP"],
    features: [
      "Restaurant management system",
      "Real-time order tracking",
      "Payment gateway integration",
      "Admin and vendor dashboards"
    ],
    image: "project4.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Finance Tracker with AI",
    category: "Web App",
    year: "2024",
    description: "Personal finance app with AI-powered spending analysis and summaries",
    tech: ["React.js", "Gemini API", "SQL", "Node.js"],
    features: [
      "AI-powered spending analysis",
      "Automated financial summaries",
      "Budget tracking and alerts",
      "Visual spending reports"
    ],
    image: transaction,
    featured: true
  },
  {
    id: 6,
    title: "Gym Management Website",
    category: "Full-Stack",
    year: "2024",
    description: "Full-featured gym website for trainer booking, time slots, and equipment sales",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    features: [
      "Trainer booking system",
      "Time slot management",
      "Equipment e-commerce",
      "Member dashboard"
    ],
    image: gym,
    featured: false
  }
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "PHP", level: 85 },
    { name: "C/C++", level: 75 },
    { name: "C#", level: 70 }
  ],
  frameworks: [
    { name: "React.js", level: 95 },
    { name: "Flutter", level: 90 },
    { name: "Laravel", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "ASP.Net", level: 75 }
  ],
  tools: [
    { name: "Firebase", level: 90 },
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Figma", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "SQL Server", level: 85 },
    { name: "Kali Linux", level: 70 }
  ],
  expertise: [
    { name: "AI/ML Integration", level: 85 },
    { name: "Neural Networks", level: 80 },
    { name: "DevOps", level: 75 },
    { name: "MVC Architecture", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "Cybersecurity", level: 80 }
  ]
};

export const certifications = [
  {
    id: 1,
    title: "SE Factory Training Program",
    institution: "SE Factory",
    period: "Apr 2025 – July 2025",
    description: [
      "Phase 1: Flutter + GenAI, Prompt Engineering + Employability Skills",
      "Phase 2: Machine Learning + DevOps, MLOps, DataOps + Time Management, Communication"
    ],
    featured: true
  },
  {
    id: 2,
    title: "CyberSecurity Course",
    institution: "SemiColon Academy",
    period: "Mar 2025 – June 2025",
    description: [
      "Topics: Cryptography, Application Security, Reverse Engineering",
      "Participated in CTF in collaboration with Google Developer Group and SemiColon"
    ],
    featured: true
  },
  {
    id: 3,
    title: "Full Stack Web Development Bootcamp",
    institution: "ESA Coding Lab (France)",
    period: "May 2024 – Dec 2024",
    description: [
      "Completed intensive training",
      "Built 3 large-scale web applications"
    ],
    featured: true
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Information System Engineering",
    institution: "Lebanese University – Faculty of Technology",
    location: "Saida, Lebanon",
    period: "Jan 2024 – Present",
    current: true
  },
  {
    id: 2,
    degree: "Bachelor of Engineering – Technology and Science of Information Systems",
    institution: "Lebanese University – Faculty of Technology",
    location: "Saida, Lebanon",
    period: "Sep 2020 – Oct 2023",
    current: false
  }
];

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Certifications", value: "11" },
  { label: "Tasks in Active Client Projects (AI, Web, Mobile) ", value: "90+" },

];