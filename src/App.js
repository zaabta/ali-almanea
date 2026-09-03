import Hero from './pages/Hero';
import About from './pages/About';
import Layout from './components/layout';
import Portfolio from './pages/Portfolio';
import Seo from './components/seo';
import Blog, { ArticlePage } from './pages/Blog';
import articles from './data/articles';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div className="App"><Seo /><Layout><Hero /><About/><Portfolio /></Layout></div>} />
      <Route path="/blog" element={<div className="App"><Seo blog /><Blog /></div>} />
      {articles.map((article) => <Route key={article.slug} path={`/blog/${article.slug}`} element={<div className="App"><Seo article={article} /><ArticlePage article={article} /></div>} />)}
      <Route path="*" element={<div className="App"><NotFound /></div>} />
    </Routes>
  );
}

export default App;
