import { useEffect } from "react";

const description = "Full Stack Engineer specializing in React, Python, Django, backend architecture, cloud infrastructure, and scalable web applications. Explore Ali Almanea’s experience, projects, skills, education, and engineering insights.";

const Seo = ({ article, blog = false }) => {
  useEffect(() => {
    const url = window.location.href.split("#")[0];
    const pageTitle = article ? article.seoTitle : blog ? "Insights & Articles | Ali Almanea" : "Ali Almanea | Full Stack Engineer";
    const pageDescription = article ? article.seoDescription : blog ? "Engineering notes from real-world problem solving across frontend, backend, cloud infrastructure, AI systems, performance, and technical SEO." : description;
    document.title = pageTitle;
    const setMeta = (selector, attribute, value) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', "content", pageDescription);
    setMeta('link[rel="canonical"]', "href", article ? article.canonicalUrl : url);
    setMeta('meta[property="og:title"]', "content", pageTitle);
    setMeta('meta[property="og:description"]', "content", pageDescription);
    setMeta('meta[property="og:url"]', "content", url);
    if (article) setMeta('meta[property="og:image"]', "content", article.openGraphImage);

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Person", "@id": `${url}#person`, name: "Ali Almanea", jobTitle: "Full Stack Engineer", sameAs: ["https://www.linkedin.com/in/ali-almanea/", "https://github.com/zaabta"], alumniOf: [{ "@type": "CollegeOrUniversity", name: "İstanbul Nişantaşı Üniversitesi", sameAs: "https://www.linkedin.com/school/3255132/" }, { "@type": "CollegeOrUniversity", name: "Siirt Üniversitesi", sameAs: "https://www.linkedin.com/school/15130201/" }] },
        { "@type": "WebSite", "@id": `${url}#website`, url, name: "Ali Almanea | Full Stack Engineer", description: pageDescription, publisher: { "@id": `${url}#person` } },
        { "@type": "ProfilePage", "@id": `${url}#profile`, url, name: "Ali Almanea | Full Stack Engineer", mainEntity: { "@id": `${url}#person` } },
        ...(article ? [{ "@type": "BlogPosting", "@id": `${article.canonicalUrl}#article`, mainEntityOfPage: article.canonicalUrl, headline: article.title, description: article.seoDescription, url: article.canonicalUrl, image: article.openGraphImage, datePublished: article.publicationDate, dateModified: article.updatedDate, author: { "@type": "Person", name: "Ali Almanea" }, articleSection: article.category, keywords: article.tags.join(", ") }] : []),
      ],
    };
    let script = document.getElementById("portfolio-jsonld");
    if (!script) { script = document.createElement("script"); script.id = "portfolio-jsonld"; script.type = "application/ld+json"; document.head.appendChild(script); }
    script.textContent = JSON.stringify(schema);
  }, []);

  return null;
};

export default Seo;
