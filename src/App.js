import Hero from './pages/Hero';
import About from './pages/About';
import Layout from './components/layout';
import Portfolio from './pages/Portfolio';
import Seo from './components/seo';
import Blog, { ArticlePage } from './pages/Blog';
import articles from './data/articles';
import NotFound from './pages/NotFound';

const App = () => {
  const basePath = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
  const pathname = window.location.pathname;
  const routePath = basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
    ? pathname.slice(basePath.length)
    : pathname;
  const path = routePath.replace(/\/$/, "") || "/";
  if (path === "/blog") return <div className="App"><Seo blog /><Blog /></div>;
  if (path.startsWith("/blog/")) {
    const article = articles.find((item) => `/blog/${item.slug}` === path);
    return article ? <div className="App"><Seo article={article} /><ArticlePage article={article} /></div> : <div className="App"><NotFound /></div>;
  }
  if (path !== "/") return <div className="App"><NotFound /></div>;
  return (
    <div className="App">
     <Seo />
     <Layout>
      <Hero />
      <About/>
      <Portfolio />
     </Layout>
    </div>
  );
}

export default App;
