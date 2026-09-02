import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faBookOpen, faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import articles from "../../data/articles";
import "./blog.scss";

const ArticleTable = ({ table }) => table && <div className="article-table-wrap"><table className="article-table"><thead><tr>{table[0].map((cell) => <th key={cell}>{cell}</th>)}</tr></thead><tbody>{table.slice(1).map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>;

const ArticleMeta = ({ article }) => <div className="article-meta"><span>{article.category}</span><span>{article.readingTime}</span><span>{article.wordCount} words</span><span>Published {article.publicationDate}</span></div>;

const Related = ({ article }) => {
  const related = articles.filter((item) => item.slug !== article.slug && item.category !== article.category).slice(0, 3);
  return <section className="related-articles" aria-labelledby="related-heading"><h2 id="related-heading">Related notes</h2><div className="related-grid">{related.map((item) => <a className="related-card" href={`/blog/${item.slug}`} key={item.slug}><span>{item.category}</span><h3>{item.title}</h3><small>{item.readingTime}</small></a>)}</div></section>;
};

const ArticlePage = ({ article }) => {
  const [activeHeading, setActiveHeading] = useState("");
  const slugify = (heading) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  useEffect(() => {
    const updateActiveHeading = () => {
      const sections = article.body.map((section) => document.getElementById(slugify(section.heading))).filter(Boolean);
      const current = sections.reduce((active, section) => section.getBoundingClientRect().top <= 180 ? section : active, sections[0]);
      if (current) setActiveHeading(current.id);
    };
    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveHeading);
  }, [article]);

  return <main className="blog-page article-page"><div className="blog-shell"><nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Insights & Articles</a><span>/</span><span aria-current="page">{article.title}</span></nav><article><header className="article-header"><span className="article-icon"><FontAwesomeIcon icon={article.icon} aria-hidden="true" /></span><span className="article-category">{article.category}</span><h1>{article.title}</h1><p className="article-standfirst">{article.excerpt}</p><ArticleMeta article={article} /><div className="article-tags">{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></header><div className="article-layout"><aside className="table-of-contents" aria-label="Table of contents"><strong>On this page</strong><ol>{article.body.map((section) => { const id = slugify(section.heading); return <li key={section.heading}><a className={activeHeading === id ? "active" : ""} href={`#${id}`}>{section.heading}</a></li>; })}</ol></aside><div className="article-body">{article.body.map((section) => <section key={section.heading} id={slugify(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ArticleTable table={section.table} /></section>)}<div className="article-cta"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /><div><h2>Have a system to think through?</h2><p>I’m open to conversations about full stack products, backend architecture, AI applications, and practical engineering work.</p></div><a href="mailto:ali.rashad23@gmail.com">Let’s talk</a></div></div></div></article><Related article={article} /><a className="back-to-blog" href="/blog"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to all insights</a></div></main>;
};

const BlogIndex = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".blog-heading", { opacity: 0, y: 20, duration: .65, ease: "power3.out", scrollTrigger: { trigger: ".blog-heading", start: "top 86%", once: true } });
        gsap.from(".blog-card", { opacity: 0, y: 20, duration: .55, stagger: .08, ease: "power3.out", scrollTrigger: { trigger: ".blog-grid", start: "top 84%", once: true } });
      });
    }, ref);
    return () => context.revert();
  }, []);
  return <main ref={ref} className="blog-page blog-index"><div className="blog-shell"><a className="breadcrumb" href="/"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to portfolio</a><header className="blog-heading"><div className="article-icon"><FontAwesomeIcon icon={faBookOpen} aria-hidden="true" /></div><span className="article-category">Insights & Articles</span><h1>Engineering notes from real-world problem solving.</h1><p>Practical notes on frontend engineering, backend architecture, cloud infrastructure, AI systems, performance, and technical SEO—focused on the decisions, tradeoffs, and lessons behind reliable software.</p></header><div className="blog-grid">{articles.map((article, index) => <article className={`blog-card${index === 0 ? " featured" : ""}`} key={article.slug}><div className="blog-card-top"><FontAwesomeIcon icon={article.icon || faCode} aria-hidden="true" /><span>{article.category}</span></div><h2>{article.title}</h2><p>{article.excerpt}</p><div className="blog-card-tags">{article.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div><div className="blog-card-footer"><small>{article.readingTime}</small><a href={`/blog/${article.slug}`}>Read article <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a></div></article>)}</div></div></main>;
};

export { ArticlePage };
export default BlogIndex;
