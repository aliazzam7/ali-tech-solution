import ctf from "../assets/images/certification/ctf.jpg";
import cyberday from "../assets/images/certification/cyberday.jpg";
import devopscert from "../assets/images/certification/devopscert.jpeg";
import empSkills from "../assets/images/certification/EmpSkills.png";
import esa from "../assets/images/certification/ESA.png";
import esiee from "../assets/images/certification/ESIEE.png";
import flutter from "../assets/images/certification/flutter.png";
import honorcertviolet from "../assets/images/certification/honorcertviolet.png";
import ml from "../assets/images/certification/ml.png";
import opss from "../assets/images/certification/opss.png";
import prompteng from "../assets/images/certification/prompteng.png";
import timemang from "../assets/images/certification/timemang.png";

const certificates = [
  {
    id: 1,
    name: "Software Development Internship — Honors",
    organization: "VioletPro",
    category: "Internship",
    issueDate: "Feb 2026",
    image: honorcertviolet,
    link: honorcertviolet,
  },
  {
    id: 2,
    name: "Automate the Future — DevOps Workshop",
    organization: "RASS",
    category: "DevOps & Cloud",
    issueDate: "Nov 2025",
    image: devopscert,
    link: devopscert,
  },
  {
    id: 3,
    name: "Introduction to DevOps, MLOps & DataOps",
    organization: "SE Factory",
    category: "DevOps & Cloud",
    issueDate: "Jul 2025",
    image: opss,
    link: opss,
  },
  {
    id: 4,
    name: "Lebanese Universities CTF 2025",
    organization: "Semicolon × GDG Lebanon",
    category: "Cybersecurity",
    issueDate: "Jun 2025",
    image: ctf,
    link: ctf,
  },
  {
    id: 5,
    name: "Cybersecurity Day 2025",
    organization: "Semicolon × GDG Lebanon",
    category: "Cybersecurity",
    issueDate: "Jun 2025",
    image: cyberday,
    link: cyberday,
  },
  {
    id: 6,
    name: "Time Management Course",
    organization: "SE Factory",
    category: "Soft Skills",
    issueDate: "Jun 2025",
    image: timemang,
    link: timemang,
  },
  {
    id: 7,
    name: "Machine Learning Course",
    organization: "SE Factory",
    category: "AI & ML",
    issueDate: "Jun 2025",
    image: ml,
    link: ml,
  },
  {
    id: 8,
    name: "Flutter Course",
    organization: "SE Factory",
    category: "Mobile Dev",
    issueDate: "May 2025",
    image: flutter,
    link: flutter,
  },
  {
    id: 9,
    name: "Prompt Engineering Course",
    organization: "SE Factory",
    category: "AI & ML",
    issueDate: "May 2025",
    image: prompteng,
    link: prompteng,
  },
  {
    id: 10,
    name: "Employability Skills Course",
    organization: "SE Factory",
    category: "Soft Skills",
    issueDate: "Apr 2025",
    image: empSkills,
    link: empSkills,
  },
  {
    id: 11,
    name: "Full Stack Developer (700h)",
    organization: "ESIEE-IT (FRANCE-PARIS)",
    category: "Web Dev",
    issueDate: "Dec 2024",
    image: esiee,
    link: esiee,
  },
  {
    id: 12,
    name: "Full-Stack Developer Program",
    organization: "ESA Business School",
    category: "Web Dev",
    issueDate: "Nov 2024",
    image: esa,
    link: esa,
  },
];

export default certificates;