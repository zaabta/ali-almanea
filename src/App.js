import { useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType, Route, Routes } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './pages/Hero';
import About from './pages/About';
import Layout from './components/layout';
import Portfolio from './pages/Portfolio';
import Seo from './components/seo';
import Blog, { ArticlePage } from './pages/Blog';
import articles from './data/articles';
import NotFound from './pages/NotFound';

const RouteScrollManager = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const firstRender = useRef(true);

  useLayoutEffect(() => {
    const shouldReset = !hash && (firstRender.current || navigationType !== 'POP');
    const resetScroll = () => {
      if (shouldReset) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    resetScroll();
    firstRender.current = false;

    const frame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      resetScroll();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash, navigationType]);

  return null;
};

const App = () => {
  return (
    <>
      <RouteScrollManager />
      <Routes>
      <Route path="/" element={<div className="App"><Seo /><Layout><Hero /><About/><Portfolio /></Layout></div>} />
      <Route path="/blog" element={<div className="App"><Seo blog /><Blog /></div>} />
      {articles.map((article) => <Route key={article.slug} path={`/blog/${article.slug}`} element={<div className="App"><Seo article={article} /><ArticlePage article={article} /></div>} />)}
      <Route path="*" element={<div className="App"><NotFound /></div>} />
      </Routes>
    </>
  );
}

export default App;
