import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faAws, faBootstrap, faCss3Alt, faDocker, faGitAlt, faGithub, faGitlab, faHtml5, faJenkins, faJs, faNodeJs, faPython, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faBriefcase, faBuilding, faCalendarDays, faCheckDouble, faCloud, faCode, faCodeBranch, faDatabase, faEnvelope, faGaugeHigh, faGlobe, faLayerGroup, faLaptopCode, faLocationDot, faMobileScreenButton, faPenNib, faPuzzlePiece, faServer, faShieldHalved, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../components/logo";
import articles from "../../data/articles";
import { companies, education, projects, services, skillGroups } from "../../data/portfolio";
import sitePath from "../../utils/sitePath";
import "./portfolio.scss";

const Icon = ({ icon, label, ...props }) => <FontAwesomeIcon icon={icon} aria-hidden="true" title={label} {...props} />;

const technologyIcons = {
  React: faReact, "React.js": faReact, "React Native": faReact,
  Vue: faVuejs, "Vue.js": faVuejs, JavaScript: faJs, TypeScript: faJs,
  "Node.js": faNodeJs, Python: faPython, Docker: faDocker, Git: faGitAlt,
  GitHub: faGithub, GitLab: faGitlab, Jenkins: faJenkins, AWS: faAws,
  Angular: faAngular, HTML5: faHtml5, CSS3: faCss3Alt, Bootstrap: faBootstrap,
  "Next.js": faReact,
  SQL: faDatabase, PostgreSQL: faDatabase, MongoDB: faDatabase, Sequelize: faDatabase, Redis: faDatabase,
  "REST API Development": faServer, "REST APIs": faServer, "Core API architecture": faServer,
  Microservices: faLayerGroup, "Event-driven Architecture": faLayerGroup, "Queue-based Architecture": faLayerGroup,
  "Background Workers": faLayerGroup, "Cron Jobs": faLayerGroup, "System Design": faLayerGroup,
  Kubernetes: faCloud, Helm: faCloud, "CI/CD": faCloud,
  "AI Agents": faWandMagicSparkles, "LLM Applications": faWandMagicSparkles, RAG: faWandMagicSparkles,
  "Vector Search": faWandMagicSparkles, "Document Ingestion": faWandMagicSparkles, "Semantic Retrieval": faWandMagicSparkles,
  SEO: faGlobe, "Technical SEO": faGlobe, "Search Engine Optimization (SEO)": faGlobe,
  NestJS: faServer, Django: faServer, Express: faServer, "Express.js": faServer,
  Prisma: faDatabase, BullMQ: faLayerGroup, "Context API": faCodeBranch, Redux: faCodeBranch,
  "Frontend Architecture": faPuzzlePiece, "Backend Architecture": faPuzzlePiece, "Reusable Design Systems": faPuzzlePiece,
  "Code Review": faCheckDouble, "Code reviews": faCheckDouble, "API Development": faServer,
  "API Performance Optimization": faGaugeHigh, "Caching Strategies": faGaugeHigh,
  "Prompt Engineering": faPenNib, "OpenAI API": faWandMagicSparkles, "AI / RAG": faWandMagicSparkles,
  "Retrieval-Augmented Generation (RAG)": faWandMagicSparkles, "Image Analysis": faWandMagicSparkles,
  "Android Development": faMobileScreenButton, "iOS Development": faMobileScreenButton, "Flexbox": faCode,
  Authentication: faShieldHalved, Security: faShieldHalved, Testing: faCheckDouble,
};

const TechnologyChip = ({ skill }) => <span className="skill-chip"><Icon icon={technologyIcons[skill] || faCode} label={`${skill} icon`} />{skill}</span>;

const Reveal = ({ children, className = "" }) => {
  return <div className={`reveal-target ${className}`}>{children}</div>;
};

const Role = ({ role }) => (
  <Reveal className="role-reveal"><div className="role-item">
    <span className="timeline-marker" aria-hidden="true" />
    <div className="role-title"><Icon icon={faBriefcase} label="Position" /><h3>{role.title}</h3></div>
    <div className="role-meta"><span><Icon icon={faCalendarDays} label="Dates" />{role.dates}</span><span>{role.duration}</span>{role.mode && <span><Icon icon={role.mode === "Remote" || role.mode === "Hybrid" ? faLaptopCode : faLocationDot} label="Work mode" />{role.mode}</span>}</div>
    {role.responsibilities.length > 0 && <ul className="role-responsibilities">{role.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>}
    <div className="role-skills"><Icon icon={faCode} label="Technologies and verified skills" /><div><strong>Technologies used</strong><div className="technology-badges">{role.technologies.map((technology) => <span key={technology}><Icon icon={technologyIcons[technology] || faCode} label={`${technology} icon`} />{technology}</span>)}</div></div></div>
  </div></Reveal>
);

const Portfolio = () => {
  const pageRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const publishedArticles = articles.filter((article) => article.status === "published");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".reveal-target", { clearProps: "all" });
        gsap.set(".timeline-progress", { scaleY: 1 });
        gsap.set(".timeline-marker", { scale: 1, backgroundColor: "#eb83f8", borderColor: "#eb83f8" });
      });
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray(".reveal-target").forEach((element) => {
          gsap.from(element, { opacity: 0, y: 20, duration: 0.65, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } });
        });
        gsap.utils.toArray(".role-reveal").forEach((entry) => {
          const marker = entry.querySelector(".timeline-marker");
          if (marker) gsap.fromTo(marker, { scale: 0.9, backgroundColor: "#000", borderColor: "rgba(255,255,255,.6)" }, { scale: 1, backgroundColor: "#eb83f8", borderColor: "#eb83f8", duration: 0.3, ease: "power2.out", scrollTrigger: { trigger: entry, start: "top 82%", once: true } });
        });
        const timeline = pageRef.current.querySelector(".experience-timeline");
        const progress = pageRef.current.querySelector(".timeline-progress");
        if (timeline && progress) gsap.fromTo(progress, { scaleY: 0 }, { scaleY: 1, transformOrigin: "top center", ease: "none", scrollTrigger: { trigger: timeline, start: "top 72%", end: "bottom 68%", scrub: 0.6 } });
      });
    }, pageRef);
    return () => context.revert();
  }, []);
  return (
    <main ref={pageRef} className="portfolio-content">
      <section id="services" className="portfolio-section services-section">
        <Reveal><div className="section-heading"><div className="line-text"><h4>What I Do</h4></div><h2>Engineering products that are built to last.</h2></div></Reveal>
        <div className="service-grid">{services.map(([title, text, tools, icon]) => <Reveal className="stagger-item" key={title}><article className="service-card"><div className="service-icon"><Icon icon={icon} label={title} /></div><h3>{title}</h3><p>{text}</p><small>{tools}</small></article></Reveal>)}</div>
      </section>
      <section id="projects" className="portfolio-section projects-section">
        <Reveal><div className="section-heading"><div className="line-text"><h4>Selected Work</h4></div><h2>Products, platforms, and intelligent systems.</h2></div></Reveal>
        <div className="project-grid">{projects.map((project) => <Reveal key={project.title}><article className={`project-card${project.featured ? " featured" : ""}${project.comingSoon ? " coming-soon" : ""}`}>{project.logo && <img className="project-logo" src={`${process.env.PUBLIC_URL}/${project.logo}`} alt={`${project.title} logo`} />}<span className="project-type">{project.featured ? "Featured Project" : project.comingSoon ? "Coming Soon" : project.status}</span>{project.icon && <div className="project-icon"><Icon icon={project.icon} label="Coming soon" /></div>}<h3>{project.title}</h3><h4>{project.subtitle}</h4>{project.role && <strong className="project-role">{project.role}</strong>}<p>{project.description}</p><small>{project.tags}</small>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Visit website</a>}</article></Reveal>)}</div>
      </section>
      <section id="experience" className="portfolio-section experience-section">
        <Reveal><div className="section-heading"><div className="line-text"><h4>Experience</h4></div><h2>Career progression across product, platform, and mobile engineering.</h2></div></Reveal>
        <Reveal className="experience-line-reveal"><div className="experience-timeline"><div className="timeline-axis" aria-hidden="true"><div className="timeline-track" /><div className="timeline-progress" /></div>{companies.map((company) => <Reveal key={company.id}><article className={`company-block${company.note ? " source-note" : ""}`}><div className="company-heading">{company.logo ? <img className="company-logo" src={`${process.env.PUBLIC_URL}/${company.logo}`} alt={`${company.name} logo`} /> : <Icon icon={company.icon || faBuilding} size={'xl'} label={`${company.name} company icon`} />}<div>{company.link ? <a href={company.link} target="_blank" rel="noopener noreferrer">{company.name}</a> : <h3>{company.name}</h3>}<div className="company-meta">{company.type && <span><Icon icon={faBriefcase} label="Employment type" />{company.type}</span>}{company.mode && <span><Icon icon={faLaptopCode} label="Work mode" />{company.mode}</span>}{company.location && <span><Icon icon={faLocationDot} label="Location" />{company.location}</span>}</div></div></div>{company.note ? <p className="conflict-note">{company.note}</p> : <div className="company-roles">{company.roles.map((role) => <div key={role.id}><Role role={role} />{role.progression && <div className="progression-label">{role.progression}</div>}</div>)}</div>}</article></Reveal>)}</div></Reveal>
      </section>
      <section id="skills" className="portfolio-section skills-section"><Reveal><div className="section-heading"><div className="line-text"><h4>Technical Expertise</h4></div><h2>A capability map grounded in real product work.</h2></div></Reveal><div className="skills-grid">{skillGroups.map((group) => <Reveal key={group.id}><button type="button" className={`skill-group${activeSkill === group.id ? " active" : ""}`} onClick={() => setActiveSkill(activeSkill === group.id ? null : group.id)} onFocus={() => setActiveSkill(group.id)}><span className="skill-group-heading"><span className="skill-icon"><Icon icon={group.icon} label={group.title} /></span><strong>{group.title}</strong></span><span className="skill-chips">{group.skills.map((skill) => <TechnologyChip skill={skill} key={skill} />)}</span>{activeSkill === group.id && <small className="skill-context">Used across verified roles and projects</small>}</button></Reveal>)}</div></section>
      <section id="education" className="portfolio-section education-section"><Reveal><div className="section-heading"><div className="line-text"><h4>Education</h4></div><h2>Always learning, always building.</h2></div></Reveal><div className="education-path">{education.map((entry) => <Reveal key={entry.school}><article className="education-entry"><div className="education-entry-icon"><Icon icon={entry.icon} label="Education" /></div><div className="education-entry-content"><a className="institution-link" href={entry.link} target="_blank" rel="noopener noreferrer"><Icon icon={faBuilding} label="Institution" />{entry.school}</a><h3>{entry.title}</h3><div className="education-meta"><span><Icon icon={faCalendarDays} label="Dates" />{entry.dates}</span><strong>{entry.status}</strong></div><p><Icon icon={faCode} label="Curriculum or verified skills" />{entry.detail}</p></div></article></Reveal>)}</div></section>
      <section id="insights" className="portfolio-section insights-section"><Reveal><div className="section-heading"><div className="line-text"><h4>Insights & Articles</h4></div><h2>Engineering notes from real-world problem solving.</h2><p>Practical notes on frontend engineering, backend architecture, cloud infrastructure, AI systems, performance, and technical SEO—focused on the decisions, tradeoffs, and lessons behind reliable software.</p></div></Reveal><div className="article-grid">{publishedArticles.map((article, index) => <Reveal key={article.slug}><article className={`article-card${index === 0 ? " featured" : ""}`}><div className="article-card-heading"><span className="article-card-icon"><Icon icon={article.icon || faCode} label="Article" /></span><span>{article.category}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><div className="article-card-tags">{article.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div><small>{article.readingTime}</small><a href={sitePath(`/blog/${article.slug}`)}>Read article <Icon icon={faArrowRight} label="Read article" /></a></article></Reveal>)}</div></section>
      <section id="contact" className="portfolio-section contact-section"><Reveal><div className="section-heading"><div className="line-text"><h4>Contact</h4></div><h2>Let’s Build Something Great</h2></div><p>Have an idea, a product to build, or a technical challenge to solve? I’m open to discussing software products, AI applications, scalable backend systems, and interesting engineering opportunities.</p><a className="hover-button" href="mailto:ali.rashad23@gmail.com"><Icon icon={faEnvelope} label="Email" /><span>Let’s Talk</span></a><div className="contact-links"><a href="mailto:ali.rashad23@gmail.com"><Icon icon={faEnvelope} label="Email" /> ali.rashad23@gmail.com</a><a href="https://www.linkedin.com/in/ali-almanea/" target="_blank" rel="noopener noreferrer"><Icon icon={faBriefcase} label="LinkedIn" /> LinkedIn</a><a href="https://github.com/zaabta" target="_blank" rel="noopener noreferrer"><Icon icon={faCode} label="GitHub" /> GitHub</a><span><Icon icon={faLocationDot} label="Location" /> Istanbul, Türkiye</span></div></Reveal></section>
      <footer className="site-footer"><Logo /><span>© Ali Almanea · Full Stack Engineer</span></footer>
    </main>
  );
};

export default Portfolio;
