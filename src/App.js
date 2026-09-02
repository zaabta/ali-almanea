import Hero from './pages/Hero';
import About from './pages/About';
import Layout from './components/layout';
import Portfolio from './pages/Portfolio';
import Seo from './components/seo';

const App = () => {
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
