// src/data/projects.js

import chalet from '../assets/images/chalet/chalet.jpeg';
import chalet2 from '../assets/images/chalet/chalet2.jpeg';
import chalet3 from '../assets/images/chalet/chalet3.jpeg';
import chalet4 from '../assets/images/chalet/chalet4.jpeg';

import cofeeapp from '../assets/images/coffeapp/cofeeapp.jpeg';

import gym from '../assets/images/gym/gym.jpeg';
import gym1 from '../assets/images/gym/gym1.jpeg';
import gym2 from '../assets/images/gym/gym2.jpeg';
import gym3 from '../assets/images/gym/gym3.jpeg';
import gym4 from '../assets/images/gym/gym4.jpeg';

import notiapp from '../assets/images/notificationapp/notiapp.jpeg';

import appicon from '../assets/images/drivewise/appicon.png';
import bookingformpage1 from '../assets/images/drivewise/bookingformpage1.jpeg';
import cardetails1 from '../assets/images/drivewise/cardetails1.jpeg';
import chatbot1 from '../assets/images/drivewise/chatbot1.jpeg';
import home2 from '../assets/images/drivewise/home2.png';
import licensetrue from '../assets/images/drivewise/licensetrue.jpeg';
import notificationat10 from '../assets/images/drivewise/notificationat10.jpeg';
import emailotp from '../assets/images/drivewise/emailotp.png';

import chrono1 from '../assets/images/chrono/chrono1.png';
import chrono2 from '../assets/images/chrono/chrono2.png';
import chrono3 from '../assets/images/chrono/chrono3.png';
import chrono4 from '../assets/images/chrono/chrono4.png';

import food1 from '../assets/images/food/food1.png';
import food2 from '../assets/images/food/food2.png';
import food3 from '../assets/images/food/food3.png';
import food4 from '../assets/images/food/food4.png';
import food5 from '../assets/images/food/food5.png';

import restapp1 from '../assets/images/restapp/restapp1.jpeg';
import restapp2 from '../assets/images/restapp/restapp2.jpeg';
import restapp3 from '../assets/images/restapp/restapp3.jpeg';
import restapp4 from '../assets/images/restapp/restapp4.jpeg';


import somoud1 from '../assets/images/soumoud/somoud1.jpeg';
import somoud2 from '../assets/images/soumoud/somoud2.jpeg';
import somoud3 from '../assets/images/soumoud/somoud3.jpeg';
import somoud4 from '../assets/images/soumoud/somoud4.jpeg';
import somoud5 from '../assets/images/soumoud/somoud5.jpeg';
import somoud6 from '../assets/images/soumoud/somoud6.jpeg';


import hms1 from '../assets/images/hms/hms1.jpeg';
import hms2 from '../assets/images/hms/hms2.jpeg';
import hms3 from '../assets/images/hms/hms3.jpeg';
import hms4 from '../assets/images/hms/hms4.jpeg';
import hms5 from '../assets/images/hms/hms5.jpeg';
import hms6 from '../assets/images/hms/hms6.jpeg';
import hms7 from '../assets/images/hms/hms7.jpeg';
import hms8 from '../assets/images/hms/hms8.jpeg';
import hms9 from '../assets/images/hms/hms9.jpeg';
import hms10 from '../assets/images/hms/hms10.jpeg';
import hms11 from '../assets/images/hms/hms11.jpeg';
import hms12 from '../assets/images/hms/hms12.jpeg';
import hms13 from '../assets/images/hms/hms13.jpeg';
import hms14 from '../assets/images/hms/hms14.jpeg';
import hms15 from '../assets/images/hms/hms15.jpeg';


import forsa1 from '../assets/images/forsa/forsa1.jpeg';
import forsa2 from '../assets/images/forsa/forsa2.jpeg';
import forsa3 from '../assets/images/forsa/forsa3.jpeg';
import forsa4 from '../assets/images/forsa/forsa4.jpeg';
import forsa5 from '../assets/images/forsa/forsa5.jpeg';
import forsa6 from '../assets/images/forsa/forsa6.jpeg';
import forsa7 from '../assets/images/forsa/forsa7.jpeg';
import forsa8 from '../assets/images/forsa/forsa8.jpeg';
import forsa9 from '../assets/images/forsa/forsa9.jpeg';
import forsa10 from '../assets/images/forsa/forsa10.jpeg';
import forsa11 from '../assets/images/forsa/forsa11.jpeg';


import ml0 from '../assets/images/machinelearning/ml0.png';
import ml1 from '../assets/images/machinelearning/ml1.png';
import ml2 from '../assets/images/machinelearning/ml2.png';
import ml3 from '../assets/images/machinelearning/ml3.png';
import ml4 from '../assets/images/machinelearning/ml4.png';
import ml5 from '../assets/images/machinelearning/ml5.png';
import ml6 from '../assets/images/machinelearning/ml6.png';
import ml7 from '../assets/images/machinelearning/ml7.png';
import ml8 from '../assets/images/machinelearning/ml8.png';


import byondsight from '../assets/images/beyondsight/videos/byondsgiht.mp4';
import byond1 from '../assets/images/beyondsight/byond1.jpeg';

const projects = [
  {
    id: "soumoud-education-center",
    name: "Somoud Education Center – Business Website",
    category: "Web",
    image: somoud1, // TODO
    technologies: ["React.js", "CSS", "WhatsApp API"],
    description:
      "A live, production website built for Somoud Education Center, showcasing its courses, gallery, and student feedback, with instant WhatsApp-based registration.",
    problem:
      "Somoud Education Center had no online presence — prospective students couldn't learn about services, view the facility, or register without calling or visiting in person.",
    solution:
      "Delivered a full business website with dedicated Home, Services, Gallery, and Feedback pages, plus an online registration form that sends each new student's details directly to the center's owner via WhatsApp for instant follow-up.",
    features: [
      "Home, Services, and Contact pages",
      "Gallery section showcasing the center",
      "Student feedback / testimonials section",
      "Online student registration form",
      "Direct WhatsApp integration for instant owner notification",
      "Live, production website used by a real business",
    ],
    gallery: [somoud1,somoud2,somoud3,somoud4,somoud5,somoud6],
    liveDemo: "https://soumoud-center.vercel.app", 
    
  },
  {
    id: "job-matching-platform",
    name: "Student-Company Job Matching Platform",
    category: "Web",
    image: forsa1,
    technologies: ["React.js", "PHP", "MySQL", "SMTP / PHPMailer", "Bootstrap"],
    description:
      "A full-stack recruitment platform connecting students with companies through role-based dashboards for students, employers, and administrators.",
    problem:
      "Students and companies had no centralized system to post jobs, apply, and track application status — communication was scattered and manual.",
    solution:
      "Built a role-based platform where students manage profiles and CVs, companies post and review applications, and admins moderate the whole ecosystem, with automated email notifications at every stage.",
    features: [
      "Role-based authentication (Student, Company, Admin)",
      "Student profile management with CV upload",
      "Advanced job search and filtering",
      "Job application tracking (Pending, Accepted, Rejected)",
      "Company dashboard for job and applicant management",
      "Automated email notifications via SMTP & PHPMailer",
      "Admin dashboard for user, company, and job moderation",
      "Fully responsive across mobile, tablet, and desktop",
    ],
    gallery: [forsa1,forsa2,forsa3,forsa4,forsa5,forsa6,forsa7,forsa8,forsa9,forsa10,forsa11],

  },
  {
    id: "hospital-management-system",
    name: "Hospital Management System (HMS)",
    category: "Web",
    image: hms1,
    technologies: ["React.js", "PHP (REST API)", "MySQL", "SMTP / PHPMailer"],
    description:
      "A secure, centralized platform that digitizes hospital operations — patients, appointments, medical records, billing, and reporting — for admins, doctors, and receptionists.",
    problem:
      "Manual paperwork across patient records, appointments, and billing was slowing down hospital staff and creating room for errors.",
    solution:
      "Built a role-based system where receptionists handle registration and scheduling, doctors manage consultations and medical histories, and admins oversee operations — with automated notifications and exportable PDF/Excel reports.",
    features: [
      "Role-based authentication (Admin, Doctor, Receptionist)",
      "Patient registration and profile management",
      "Appointment scheduling, editing, and cancellation",
      "Electronic medical records with diagnosis & treatment plans",
      "Billing, invoice generation, and payment tracking",
      "Automated email notifications for appointments & invoices",
      "Interactive dashboards with statistics and charts",
      "PDF and Excel report generation",
    ],
    gallery: [hms1,hms2,hms3,hms4,hms5,hms6,hms7,hms8,hms9,hms10,hms11,hms12,hms13,hms14,hms15],

  },
  {
    id: "heart-disease-prediction",
    name: "Heart Disease Prediction System",
    category: "AI",
    image: ml1,
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "React.js"],
    description:
      "An AI-powered healthcare tool that predicts a patient's heart disease risk using machine learning and delivers results through an interactive dashboard.",
    problem:
      "Patients and clinicians often lack an accessible, data-driven way to gauge cardiovascular risk before it becomes critical.",
    solution:
      "Trained and compared multiple ML models on medical and demographic data, then deployed the best-performing one behind a Flask REST API, surfaced through a React dashboard with risk scores, explainable feature importance, and personalized recommendations.",
    features: [
      "Heart disease risk prediction using machine learning",
      "Risk probability and confidence score generation",
      "Comparison of multiple ML models (Logistic Regression, Random Forest, KNN, SVM, Decision Tree)",
      "Data preprocessing, feature engineering, and EDA",
      "Feature importance analysis for explainable AI",
      "Personalized health recommendations",
      "Interactive analytics dashboard with model performance metrics",
      "RESTful API integration between React and Flask",
    ],
    gallery: [ml0,ml1,ml2,ml3,ml4,ml5,ml6,ml7,ml8],

  },
 {
  id: "visually-impaired-assistant",
  name: "AI-Powered Assistant for the Visually Impaired",
  category: "AI",
  image: byond1,
  technologies: ["Flutter", "Firebase", "Google ML Kit", "Google Maps API"],
  description:
    "A cross-platform mobile app that helps blind and visually impaired users navigate their surroundings hands-free through voice commands and AI.",
  problem:
    "Visually impaired users often need a family member or caregiver nearby to identify objects, read text, or navigate safely.",
  solution:
    "Built a voice-first Flutter app combining computer vision, OCR, and speech technologies for full hands-free control, with a caregiver dashboard for live location tracking and emergency GPS alerts.",
  features: [
    "Voice-controlled navigation and hands-free interaction",
    "Real-time object detection using AI-powered computer vision",
    "OCR text recognition with Text-to-Speech for signs, labels, and documents",
    "Live location tracking with Google Maps integration",
    "Emergency help system with real-time GPS sharing",
    "Caregiver dashboard for monitoring user location",
    "Firebase Authentication and cloud data sync",
    "Push notifications via Firebase Cloud Messaging",
  ],
  gallery: [],
  video: byondsight, // MP4 demo instead of images
},
  {
    id: "drive-wise",
    name: "Drive Wise – Car Reservation App",
    category: "Web",
    image: home2,
    technologies: ["React.js", "Flutter", "Firebase", "Google Cloud Vision API", "Gemini API"],
    description:
      "A full-stack car reservation platform with an admin web panel and a Flutter mobile app, built for a Master's thesis and a real internship project.",
    problem:
      "Car rental businesses needed a faster, paperless way to verify renters, manage bookings, and communicate updates in real time.",
    solution:
      "Delivered an admin web platform paired with a Flutter mobile app featuring OCR-based license verification, an AI chatbot, live Google Maps integration, and real-time booking notifications.",
    features: [
      "OTP authentication via EmailJS",
      "OCR license verification using Google Cloud Vision API",
      "Google Maps integration for geolocation",
      "AI chatbot powered by Gemini API",
      "Real-time notifications and status updates",
      "Digital contract management",
    ],
    gallery: [home2, appicon, bookingformpage1, cardetails1, chatbot1, licensetrue, notificationat10, emailotp],
  },
  {
    id: "chronotrack-hr",
    name: "ChronoTrack HR Attendance System",
    category: "Web",
    image: chrono1,
    technologies: ["React.js", "CSS3", "JavaScript"],
    description:
      "An employee attendance tracking web interface with check-in/out functionality and automated salary calculation.",
    problem:
      "Manual attendance tracking made it hard for HR teams to calculate salaries accurately and on time.",
    solution:
      "Built a clean check-in/out interface tied to an automated salary engine, with dashboards for both employees and admins.",
    features: [
      "Check-in / check-out functionality",
      "Automated salary calculation",
      "Employee dashboard",
      "Admin panel for management",
    ],
    gallery: [chrono1, chrono2, chrono3, chrono4],

  },
  {
    id: "restaurant-mobile-app",
    name: "Restaurant Mobile App",
    category: "Mobile",
    image: restapp1,
    technologies: ["Flutter", "Stripe API", "SQLite"],
    description:
      "An offline-first restaurant mobile app with menu browsing, cart management, and Stripe payment integration.",
    problem:
      "The restaurant needed an app that stayed usable even with unreliable connectivity, without losing orders or cart data.",
    solution:
      "Built an offline-first Flutter app using local SQLite storage that syncs seamlessly once online, with Stripe handling secure payments.",
    features: [
      "Offline-first architecture",
      "Menu browsing and cart management",
      "Stripe payment integration",
      "Order history tracking",
    ],
    gallery: [restapp1, restapp2, restapp3, restapp4],
  },
  {
    id: "food-delivery-website",
    name: "Food Delivery Website",
    category: "Web",
    image: food1,
    technologies: ["React.js", "Laravel", "MySQL", "PHP"],
    description:
      "A restaurant food delivery platform, similar to Toters, with a complete ordering, tracking, and vendor management system.",
    problem:
      "Local restaurants lacked their own branded ordering platform and relied entirely on third-party delivery apps.",
    solution:
      "Built a full ordering system with real-time tracking, integrated payments, and separate dashboards for admins and vendors.",
    features: [
      "Restaurant management system",
      "Real-time order tracking",
      "Payment gateway integration",
      "Admin and vendor dashboards",
    ],
    gallery: [food1, food2, food3, food4, food5],
  },
  {
    id: "coffee-shop-app",
    name: "Coffee Shop Mobile App",
    category: "Mobile",
    image: cofeeapp,
    technologies: ["Flutter", "Firebase", "Stripe API"],
    description:
      "A mobile ordering app for a coffee shop with categorized menu browsing and integrated payments.",
    problem:
      "The coffee shop needed a simple mobile ordering experience to reduce in-store wait times.",
    solution:
      "Built a Flutter app with categorized menu browsing, cart management, and Stripe-powered checkout, backed by Firebase for order tracking.",
    features: [
      "Menu browsing with categories",
      "Shopping cart functionality",
      "Order placement and tracking",
      "Payment integration",
    ],
    gallery: [cofeeapp],
  },
  {
    id: "gym-management-website",
    name: "Gym Management Website",
    category: "Web",
    image: gym,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "A full-featured gym website for trainer booking, time-slot management, and equipment sales.",
    problem:
      "The gym managed trainer bookings and equipment sales manually, leading to double-bookings and lost sales.",
    solution:
      "Built a MERN-stack platform with a live booking calendar, member dashboard, and an integrated equipment store.",
    features: [
      "Trainer booking system",
      "Time slot management",
      "Equipment e-commerce",
      "Member dashboard",
    ],
    gallery: [gym, gym1, gym2, gym3, gym4],

  },
  {
    id: "chalet-reservation",
    name: "Chalet Reservation Website",
    category: "Web",
    image: chalet,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    description:
      "A booking platform with a dynamic calendar and reservation system for chalet rentals.",
    problem:
      "Chalet owners were managing bookings through phone calls and spreadsheets, causing scheduling conflicts.",
    solution:
      "Built a booking website with a live availability calendar and an admin dashboard to manage reservations in one place.",
    features: [
      "Dynamic booking calendar",
      "Real-time availability checking",
      "Reservation management system",
      "Admin dashboard for bookings",
    ],
    gallery: [chalet, chalet2, chalet3, chalet4],

  },
  {
    id: "mobile-notification-app",
    name: "Mobile Notification App",
    category: "Mobile",
    image: notiapp,
    technologies: ["Flutter", "Firebase", "Cloud Messaging"],
    description:
      "A real-time push notification mobile application built for a freelance client.",
    problem:
      "The client needed a reliable way to send instant updates and alerts directly to users' phones.",
    solution:
      "Built a Flutter app integrated with Firebase Cloud Messaging for real-time push delivery, notification history, and per-user preferences.",
    features: [
      "Real-time push notifications",
      "Notification history",
      "User preference settings",
      "Firebase Cloud Messaging integration",
    ],
    gallery: [notiapp],

  },
];

export default projects;