import {
  faCloud,
  faBus,
  faChalkboardUser,
  faCode,
  faDatabase,
  faGlobe,
  faGraduationCap,
  faLaptopCode,
  faMobileScreenButton,
  faServer,
  faWandMagicSparkles,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export const services = [
  ["Full Stack Development", "Production-ready web applications across frontend and backend, focused on performance, maintainability, scalability, and developer experience.", "React · Next.js · Vue.js · Node.js · TypeScript", faLaptopCode],
  ["Backend System Architecture", "Scalable APIs, microservices, event-driven systems, database architectures, caching strategies, queues, and distributed backends.", "NestJS · Django · PostgreSQL · Redis · System Design", faServer],
  ["Cloud & Infrastructure", "Cloud-native applications and production infrastructure designed for reliability, observability, scalability, and efficiency.", "AWS · Docker · Kubernetes · Helm · CI/CD", faCloud],
  ["AI-Powered Applications", "Practical AI products using RAG, LLMs, AI agents, semantic search, vector databases, and intelligent automation.", "RAG · LLMs · AI Agents · Vector Search", faWandMagicSparkles],
];

export const projects = [
  { featured: true, title: "VCFO", subtitle: "AI-Powered Financial Intelligence Platform", role: "Founder & CTO", description: "A financial intelligence platform transforming accounting data into structured insights, analytics, and CFO-level intelligence.", technologies: ["NestJS", "React.js", "Next.js", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "Prisma", "AWS", "Docker", "AI / RAG"], logo: "assets/vcfo-logo.svg", tags: "NestJS · React.js · Next.js · TypeScript · PostgreSQL · Redis · RabbitMQ · Prisma · AWS · Docker · AI / RAG", link: "https://vcfo-ai.com/" },
  { title: "Moeen — HR AI Agent", subtitle: "AI-Powered HR Automation Platform", description: "An AI-powered HR platform for LLM-based CV screening, resume parsing, candidate analysis, employee support, and workflow automation.", tags: "AI · LLMs · RAG · Node.js · NestJS · PostgreSQL · Redis", status: "Technical Project" },
  { title: "RAG Document Q&A", subtitle: "Retrieval-Augmented Generation for Intelligent Document Search", description: "A document intelligence system combining ingestion, chunking, semantic search, vector databases, LLM-based contextual answers, and retrieval optimization.", tags: "RAG · Vector Search · LLMs · Semantic Search · AI", status: "Technical Project" },
  { title: "VibeTune", subtitle: "AI-Powered Music Recommendation Platform", description: "A recommendation platform using image-based mood detection, contextual signals, external music APIs, and real-time backend suggestions.", tags: "AI · Image Analysis · Music APIs · Recommendation Systems", status: "Technical Project" },
  { comingSoon: true, title: "New Platform", subtitle: "Coming Soon", description: "A new software platform is currently being prepared. More details will be announced soon.", tags: "Details to be announced", icon: faLock },
];

export const companies = [
  { id: "vcfo", name: "VCFO AI", icon: faWandMagicSparkles, logo: "assets/vcfo-logo.svg", type: "", location: "", roles: [
    { id: "vcfo-founder-cto", title: "Founder & CTO", dates: "Current", duration: "Current", mode: "", technologies: ["NestJS", "React.js", "Next.js", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "Prisma", "AWS", "Docker", "AI / RAG"], responsibilities: ["Building an AI-powered financial intelligence platform from product direction through technical delivery."], progression: null },
  ] },
  { id: "volt-lines", name: "Volt Lines", icon: faBus, logo: "assets/volt-lines-icon.svg", link: "https://www.linkedin.com/company/18321317/", type: "Full-time", location: "Istanbul, Türkiye", roles: [
    { id: "volt-lines-frontend", title: "Frontend Engineer", dates: "Oct 2023 – Feb 2025", duration: "1 yr 5 mos", mode: "Hybrid", technologies: ["React", "Next.js", "Vue.js", "GSAP", "Kubernetes", "Jenkins", "CI/CD"], responsibilities: ["Built frontend applications using React, Next.js, and Vue.js.", "Developed SEO-optimized applications and a reusable Vue.js design system.", "Worked with cloud-native deployment environments and improved UI delivery through reusable components."], progression: "Career progression — Frontend to Full Stack" },
    { id: "volt-lines-full-stack", title: "Full Stack Engineer", dates: "Dec 2024 – Feb 2026", duration: "1 yr 3 mos", mode: "On-site", technologies: ["Python", "Django", "Core API architecture", "AWS", "Docker", "Kubernetes", "Helm", "CI/CD"], responsibilities: ["Owned end-to-end delivery across frontend and backend systems.", "Designed a unified Core API architecture that reduced duplicated business logic.", "Improved scalability and stability under high-traffic conditions."], progression: null },
  ] },
  { id: "eduncy", name: "Eduncy", icon: faGraduationCap, logo: "assets/eduncy-logo.svg", link: "https://www.linkedin.com/company/100494555/", type: "Part-time", mode: "Remote", location: "Istanbul, Türkiye", roles: [
    { id: "eduncy-backend", title: "Back-end Developer", dates: "Mar 2023 – Oct 2023", duration: "8 mos", mode: "Remote", technologies: ["Code Review", "API Development"], responsibilities: [], progression: "Career progression — Backend to Full Stack" },
    { id: "eduncy-full-stack", title: "Full Stack Engineer", dates: "Jul 2023 – Jun 2024", duration: "1 yr", mode: "Remote", technologies: ["React.js", "Search Engine Optimization (SEO)"], responsibilities: [], progression: null },
  ] },
  { id: "youthink", name: "YouThink Academy powered by WozU", icon: faChalkboardUser, link: "https://www.linkedin.com/company/38080729/", type: "Full-time", location: "Istanbul, Türkiye", roles: [
    { id: "youthink-instructor", title: "Instructor & Full Stack Developer", dates: "Aug 2022 – Oct 2023", duration: "1 yr 3 mos", mode: "Istanbul, Türkiye", technologies: ["JavaScript", "React", "Node.js", "Express.js", "Code reviews"], responsibilities: ["Mentored 60+ students through project-based software development training.", "Delivered technical mentoring, code reviews, and practical full-stack engineering guidance."], progression: null },
  ] },
  { id: "wide-scope", name: "Wide Scope", icon: faMobileScreenButton, link: "https://www.linkedin.com/company/1901583/", type: "Full-time", mode: "Hybrid", location: "Istanbul, Türkiye", roles: [
    { id: "wide-scope-react-native", title: "React Native Developer", dates: "Mar 2023 – Jun 2023", duration: "4 mos", mode: "Hybrid", technologies: ["React Native", "Android Development", "iOS Development", "REST APIs", "Redux"], responsibilities: [], progression: null },
  ] },
];

export const skillGroups = [
  { id: "frontend", title: "Frontend Engineering", icon: faCode, skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "React Native", "JavaScript", "TypeScript", "Tailwind CSS", "GSAP", "Redux", "Context API"] },
  { id: "backend", title: "Backend Engineering", icon: faServer, skills: ["Node.js", "NestJS", "Express.js", "Python", "Django", "REST API Development", "Microservices", "Event-driven Architecture", "System Design", "Background Workers", "Cron Jobs", "tRPC"] },
  { id: "data", title: "Databases & Caching", icon: faDatabase, skills: ["PostgreSQL", "SQL", "MongoDB", "Sequelize", "Redis"] },
  { id: "devops", title: "DevOps & Cloud", icon: faCloud, skills: ["AWS", "Docker", "Kubernetes", "Helm", "Jenkins", "CI/CD"] },
  { id: "ai", title: "AI Engineering", icon: faWandMagicSparkles, skills: ["Retrieval-Augmented Generation (RAG)", "AI Agents", "LLM Applications", "Prompt Engineering", "OpenAI API", "Vector Search", "Document Ingestion", "Semantic Retrieval"] },
  { id: "practices", title: "Engineering Practices", icon: faGlobe, skills: ["Frontend Architecture", "Backend Architecture", "Code Review", "API Performance Optimization", "Caching Strategies", "Queue-based Architecture", "Technical SEO", "Reusable Design Systems"] },
];

export const education = [
  { dates: "Oct 2023 – Oct 2026", title: "Master’s Degree in Artificial Intelligence Engineering", school: "İstanbul Nişantaşı Üniversitesi", status: "In progress", detail: "Istanbul, Türkiye", link: "https://www.linkedin.com/school/3255132/", icon: faWandMagicSparkles },
  { dates: "Mar 2021 – Jul 2021", title: "Computer Software Technology/Technician", school: "Woz U", status: "Software Development Bootcamp", detail: "HTML5 · CSS3 · JavaScript · jQuery · React.js · React Hooks · Node.js · Redux · Context API · Express.js · SQL · MongoDB · Sequelize · Flexbox · Bootstrap · Git · GitHub", link: "https://www.linkedin.com/school/27022380/", icon: faCode },
  { dates: "Oct 2017 – Aug 2021", title: "Bachelor’s Degree in Computer Engineering", school: "Siirt Üniversitesi", status: "Grade: 3.0/4.0", detail: "Verified skills: Git · C#", link: "https://www.linkedin.com/school/15130201/", icon: faGraduationCap },
];
