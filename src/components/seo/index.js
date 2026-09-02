import { useEffect } from "react";

const description = "Full Stack Engineer specializing in React, Python, Django, backend architecture, cloud infrastructure, and scalable web applications. Explore Ali Almanea’s experience, projects, skills, education, and engineering insights.";

const Seo = () => {
  useEffect(() => {
    const url = window.location.href.split("#")[0];
    document.title = "Ali Almanea | Full Stack Engineer";
    const setMeta = (selector, attribute, value) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Person", "@id": `${url}#person`, name: "Ali Almanea", jobTitle: "Full Stack Engineer", sameAs: ["https://www.linkedin.com/in/ali-almanea/", "https://github.com/zaabta"], alumniOf: [{ "@type": "CollegeOrUniversity", name: "İstanbul Nişantaşı Üniversitesi", sameAs: "https://www.linkedin.com/school/3255132/" }, { "@type": "CollegeOrUniversity", name: "Siirt Üniversitesi", sameAs: "https://www.linkedin.com/school/15130201/" }] },
        { "@type": "WebSite", "@id": `${url}#website`, url, name: "Ali Almanea | Full Stack Engineer", description, publisher: { "@id": `${url}#person` } },
        { "@type": "ProfilePage", "@id": `${url}#profile`, url, name: "Ali Almanea | Full Stack Engineer", mainEntity: { "@id": `${url}#person` } },
      ],
    };
    let script = document.getElementById("portfolio-jsonld");
    if (!script) { script = document.createElement("script"); script.id = "portfolio-jsonld"; script.type = "application/ld+json"; document.head.appendChild(script); }
    script.textContent = JSON.stringify(schema);
  }, []);

  return null;
};

export default Seo;
