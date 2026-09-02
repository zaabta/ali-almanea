import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBriefcase,
  faBuilding,
  faCalendarDays,
  faCloud,
  faCode,
  faDatabase,
  faEnvelope,
  faGlobe,
  faGraduationCap,
  faLock,
  faLaptopCode,
  faLocationDot,
  faMobileScreenButton,
  faServer,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../components/logo";
import articles from "../../data/articles";
import "./portfolio.scss";

const services = [
  ["Full Stack Development", "Production-ready web applications across frontend and backend, focused on performance, maintainability, scalability, and developer experience.", "React · Next.js · Vue.js · Node.js · TypeScript", faLaptopCode],
  ["Backend System Architecture", "Scalable APIs, microservices, event-driven systems, database architectures, caching strategies, queues, and distributed backends.", "NestJS · Django · PostgreSQL · Redis · System Design", faServer],
  ["Cloud & Infrastructure", "Cloud-native applications and production infrastructure designed for reliability, observability, scalability, and efficiency.", "AWS · Docker · Kubernetes · Helm · CI/CD", faCloud],
  ["AI-Powered Applications", "Practical AI products using RAG, LLMs, AI agents, semantic search, vector databases, and intelligent automation.", "RAG · LLMs · AI Agents · Vector Search", faWandMagicSparkles],
];

const projects = [
  { featured: true, title: "VCFO", subtitle: "AI-Powered Financial Intelligence Platform", description: "A financial intelligence platform transforming accounting data into structured insights, analytics, and CFO-level intelligence.", tags: "NestJS · TypeScript · PostgreSQL · Prisma · Redis · BullMQ · Next.js · AI / RAG", link: "https://vcfo-ai.com/" },
  { title: "Moeen — HR AI Agent", subtitle: "AI-Powered HR Automation Platform", description: "An AI-powered HR platform for CV screening, resume analysis, candidate intelligence, and employee support workflows.", tags: "AI · LLMs · RAG · Node.js · NestJS · PostgreSQL · Redis" },
  { title: "RAG Document Q&A", subtitle: "Retrieval-Augmented Generation for Intelligent Document Search", description: "A document intelligence system combining ingestion, chunking, semantic search, vector databases, and LLMs for contextual answers.", tags: "RAG · Vector Search · LLMs · Semantic Search · AI" },
  { title: "VibeTune", subtitle: "AI-Powered Music Recommendation Platform", description: "A recommendation platform using image analysis and contextual signals to generate personalized music suggestions and playlists.", tags: "AI · Image Analysis · Music APIs · Recommendation Systems" },
  { comingSoon: true, title: "New Platform", subtitle: "Coming Soon", description: "A new software platform is currently being prepared. More details will be announced soon.", tags: "Details to be announced", icon: faLock },
];

const companies = [
  { name: "Volt Lines", link: "https://www.linkedin.com/company/18321317/", type: "Full-time", location: "Istanbul, Türkiye", roles: [
    ["Full Stack Engineer", "Dec 2024 – Feb 2026", "1 yr 3 mos", "On-site", "Django · Python"],
    ["Frontend Engineer", "Oct 2023 – Feb 2025", "1 yr 5 mos", "Hybrid", "React.js · Kubernetes"],
  ] },
  { name: "Eduncy", link: "https://www.linkedin.com/company/100494555/", type: "Part-time", mode: "Remote", location: "Istanbul, Türkiye", roles: [
    ["Full Stack Engineer", "Jul 2023 – Jun 2024", "1 yr", "Remote", "React.js · SEO"],
    ["Back-end Developer", "Mar 2023 – Oct 2023", "8 mos", "Remote", "Code Review · API Development"],
  ] },
  { name: "YouThink Academy", link: "https://www.linkedin.com/company/38080729/", type: "Full-time", location: "Istanbul, Türkiye", roles: [
    ["Instructor & Full Stack Developer", "Aug 2022 – Oct 2023", "1 yr 3 mos", "Istanbul, Türkiye", "React.js · Express.js · JavaScript technologies"],
  ] },
  { name: "Wide Scope", link: "https://www.linkedin.com/company/1901583/", type: "Full-time", mode: "Hybrid", location: "Istanbul, Türkiye", roles: [
    ["React Native Developer", "Mar 2023 – Jun 2023", "4 mos", "Hybrid", "Android Development · iOS Development"],
  ] },
];

const skillGroups = [
  ["Frontend", "React.js · React Native · JavaScript", faCode],
  ["Backend", "Python · Django · Express.js · API Development", faDatabase],
  ["Cloud & Infrastructure", "Kubernetes", faCloud],
  ["Mobile", "Android Development · iOS Development", faMobileScreenButton],
  ["Engineering & Growth", "Code Review · Search Engine Optimization (SEO)", faGlobe],
];

const education = [
  { dates: "Oct 2023 – Oct 2026", title: "Master’s Degree in Artificial Intelligence Engineering", school: "İstanbul Nişantaşı Üniversitesi", status: "In progress", detail: "Istanbul, Türkiye", link: "https://www.linkedin.com/school/3255132/", icon: faWandMagicSparkles },
  { dates: "Mar 2021 – Jul 2021", title: "Computer Software Technology/Technician", school: "Woz U", status: "Software Development Bootcamp", detail: "HTML5 · CSS3 · JavaScript · jQuery · React.js · React Hooks · Node.js · Redux · Context API · Express.js · SQL · MongoDB · Sequelize · Flexbox · Bootstrap · Git · GitHub", link: "https://www.linkedin.com/school/27022380/", icon: faCode },
  { dates: "Oct 2017 – Aug 2021", title: "Bachelor’s Degree in Computer Engineering", school: "Siirt Üniversitesi", status: "Grade: 3.0/4.0", detail: "Verified skills: Git · C#", link: "https://www.linkedin.com/school/15130201/", icon: faGraduationCap },
];

const Reveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
};

const Icon = ({ icon, label }) => <FontAwesomeIcon icon={icon} aria-hidden="true" title={label} />;

const Portfolio = () => (
  <main className="portfolio-content">
    <section id="services" className="portfolio-section services-section">
      <Reveal><div className="section-heading"><div className="line-text"><h4>What I Do</h4></div><h2>Engineering products that are built to last.</h2></div></Reveal>
      <div className="service-grid">{services.map(([title, text, tools, icon], index) => <Reveal className="stagger-item" key={title}><article className="service-card"><div className="service-icon"><Icon icon={icon} label={title} /></div><span className="card-number">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><small>{tools}</small></article></Reveal>)}</div>
    </section>

    <section id="projects" className="portfolio-section projects-section">
      <Reveal><div className="section-heading"><div className="line-text"><h4>Selected Work</h4></div><h2>Products, platforms, and intelligent systems.</h2></div></Reveal>
      <div className="project-grid">{projects.map((project) => <Reveal key={project.title}><article className={`project-card${project.featured ? " featured" : ""}${project.comingSoon ? " coming-soon" : ""}`}><span className="project-type">{project.featured ? "Featured Project" : project.comingSoon ? "Coming Soon" : "Selected Project"}</span>{project.icon && <div className="project-icon"><Icon icon={project.icon} label="Coming soon" /></div>}<h3>{project.title}</h3><h4>{project.subtitle}</h4><p>{project.description}</p><small>{project.tags}</small>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Visit website <Icon icon={faArrowUpRightFromSquare} label="Open project website" /></a>}</article></Reveal>)}</div>
    </section>

    <section id="experience" className="portfolio-section experience-section">
      <Reveal><div className="section-heading"><div className="line-text"><h4>Experience</h4></div><h2>Verified roles across product, platform, and mobile engineering.</h2></div></Reveal>
      <Reveal className="experience-line-reveal"><div className="experience-timeline">{companies.map((company) => <Reveal key={company.name}><article className="company-block"><div className="company-heading"><Icon icon={faBuilding} label="Company" /><div><a href={company.link} target="_blank" rel="noopener noreferrer">{company.name} <Icon icon={faArrowUpRightFromSquare} label="Open company profile" /></a><div className="company-meta"><span><Icon icon={faBriefcase} label="Employment type" />{company.type}</span>{company.mode && <span><Icon icon={faLaptopCode} label="Work mode" />{company.mode}</span>}<span><Icon icon={faLocationDot} label="Location" />{company.location}</span></div></div></div><div className="company-roles">{company.roles.map(([role, dates, duration, mode, skills]) => <div className="role-item" key={`${company.name}-${role}`}><div className="role-title"><Icon icon={faBriefcase} label="Position" /><h3>{role}</h3></div><div className="role-meta"><span><Icon icon={faCalendarDays} label="Dates" />{dates}</span><span><Icon icon={faBriefcase} label="Duration" />{duration}</span><span><Icon icon={mode === "Remote" || mode === "Hybrid" ? faLaptopCode : faLocationDot} label="Work mode" />{mode}</span></div><div className="role-skills"><Icon icon={faCode} label="Technology and verified skills" /><span>{skills}</span></div></div>)}</div></article></Reveal>)}</div></Reveal>
    </section>

    <section id="skills" className="portfolio-section skills-section"><Reveal><div className="section-heading"><div className="line-text"><h4>Technologies & Expertise</h4></div><h2>A focused toolkit for building complete products.</h2></div></Reveal><div className="skills-grid">{skillGroups.map(([category, values, icon]) => <Reveal key={category}><article className="skill-group"><div className="skill-icon"><Icon icon={icon} label={category} /></div><h3>{category}</h3><p>{values}</p></article></Reveal>)}</div></section>

    <section id="education" className="portfolio-section education-section"><Reveal><div className="section-heading"><div className="line-text"><h4>Education</h4></div><h2>Always learning, always building.</h2></div></Reveal><div className="education-path">{education.map((entry) => <Reveal key={entry.school}><article className="education-entry"><div className="education-entry-icon"><Icon icon={entry.icon} label="Education" /></div><div className="education-entry-content"><a className="institution-link" href={entry.link} target="_blank" rel="noopener noreferrer"><Icon icon={faBuilding} label="Institution" />{entry.school} <Icon icon={faArrowUpRightFromSquare} label="Open institution profile" /></a><h3>{entry.title}</h3><div className="education-meta"><span><Icon icon={faCalendarDays} label="Dates" />{entry.dates}</span><strong>{entry.status}</strong></div><p><Icon icon={entry.title.includes("Bootcamp") ? faCode : faGraduationCap} label="Curriculum or degree" />{entry.detail}</p></div></article></Reveal>)}</div></section>

    <section id="insights" className="portfolio-section insights-section"><Reveal><div className="section-heading"><div className="line-text"><h4>Insights & Articles</h4></div><h2>Engineering notes for curious builders.</h2></div></Reveal>{articles.filter((article) => article.status === "published").length === 0 ? <Reveal><div className="insights-empty"><Icon icon={faCode} label="Articles" /><h3>Technical articles and engineering notes are coming soon.</h3><p>Future writing will cover full stack development, backend architecture, cloud infrastructure, Kubernetes, API engineering, frontend engineering, AI engineering, and SEO.</p></div></Reveal> : <div className="article-grid">{articles.filter((article) => article.status === "published").map((article) => <Reveal key={article.slug}><article className="article-card"><span>{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><a href={`/blog/${article.slug}`}>Read article</a></article></Reveal>)}</div>}</section>

    <section id="contact" className="portfolio-section contact-section"><Reveal><div className="section-heading"><div className="line-text"><h4>Contact</h4></div><h2>Let’s Build Something Great</h2></div><p>Have an idea, a product to build, or a technical challenge to solve? I’m open to discussing software products, AI applications, scalable backend systems, and interesting engineering opportunities.</p><a className="hover-button" href="mailto:ali.rashad23@gmail.com"><Icon icon={faEnvelope} label="Email" /><span>Let’s Talk</span></a><div className="contact-links"><a href="mailto:ali.rashad23@gmail.com"><Icon icon={faEnvelope} label="Email" /> ali.rashad23@gmail.com</a><a href="https://www.linkedin.com/in/ali-almanea/" target="_blank" rel="noopener noreferrer"><Icon icon={faBriefcase} label="LinkedIn" /> LinkedIn</a><a href="https://github.com/zaabta" target="_blank" rel="noopener noreferrer"><Icon icon={faCode} label="GitHub" /> GitHub</a><span><Icon icon={faLocationDot} label="Location" /> Istanbul, Türkiye</span></div></Reveal></section>
    <footer className="site-footer"><Logo /><span>© Ali Almanea · Full Stack Engineer</span></footer>
  </main>
);

export default Portfolio;
