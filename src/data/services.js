export const serviceCategories = [
  {
    id: "ai",
    icon: "BrainCircuit",
    title: "AI Solutions",
    shortDescription:
      "Build intelligent AI applications, chatbots, automation systems, and machine learning solutions.",
    whatIsOffered:
      "Custom AI applications, conversational chatbots, workflow automation, machine learning models, OCR pipelines, and computer vision systems designed around a real business problem.",
    whoItsFor:
      "Startups automating repetitive work, businesses wanting a branded AI assistant, and teams that need document or image data extracted at scale.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "FastAPI"],
    workflow: ["Discovery & data audit", "Model / architecture design", "Prototype & test", "Integration", "Monitoring & tuning"],
    items: ["AI Chatbots", "Automation Systems", "Machine Learning", "OCR", "Computer Vision"],
  },
  {
    id: "web",
    icon: "Globe",
    title: "Web Development",
    shortDescription:
      "Modern responsive websites built with React, Next.js, and the latest technologies.",
    whatIsOffered:
      "Landing pages, full company websites, admin dashboards, content-managed sites, and e-commerce platforms — fast, responsive, and built for growth.",
    whoItsFor:
      "Businesses needing an online presence that converts, and teams that need a dashboard or CMS to manage their own content.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "MySQL", "Tailwind CSS"],
    workflow: ["Requirements & sitemap", "UI/UX design", "Development", "QA & performance pass", "Launch & handover"],
    items: ["Landing Pages", "Company Websites", "Dashboards", "CMS Systems", "E-commerce Platforms"],
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile Applications",
    shortDescription: "Cross-platform Android & iOS applications.",
    whatIsOffered:
      "Native-feeling Android and iOS apps built with Flutter or React Native, connected to secure backends and ready for the app stores.",
    whoItsFor:
      "Businesses that want one codebase covering both platforms, and startups validating a mobile-first product.",
    technologies: ["Flutter", "React Native", "Firebase", "REST APIs", "SQLite"],
    workflow: ["Product scoping", "Wireframes", "Build & integrate", "Device testing", "Store submission"],
    items: ["Android Applications", "iOS Applications", "Flutter Apps", "React Native Apps"],
  },
  {
    id: "cybersecurity",
    icon: "ShieldCheck",
    title: "Cybersecurity",
    shortDescription:
      "Security assessments, penetration testing, vulnerability analysis, and cybersecurity consulting.",
    whatIsOffered:
      "Hands-on penetration testing, vulnerability assessments, hardened web and API security reviews, and ongoing security consultation.",
    whoItsFor:
      "Businesses handling sensitive data, teams shipping an API or web app that needs a security review before launch, and organizations wanting a security baseline.",
    technologies: ["Burp Suite", "Nmap", "Metasploit", "OWASP ZAP", "Wireshark"],
    workflow: ["Scoping & rules of engagement", "Reconnaissance", "Testing & exploitation", "Reporting", "Remediation support"],
    items: ["Penetration Testing", "Vulnerability Assessment", "Web Security", "API Security", "Security Consultation"],
  },
];

export default serviceCategories;
