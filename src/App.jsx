import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blogs from './pages/blogs/Blogs';
import Contact from './pages/Contact';
import ContactUsDetailed from './pages/contact/ContactUsDetailed';
import AboutUsDetailed from './pages/about/AboutUsDetailed';
import Portfolio from './pages/portfolio/Portfolio';
import $ from 'jquery';
// Make jQuery global for plugins and direct access
window.jQuery = $;
window.$ = $;

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/aboutus" element={<AboutUsDetailed />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactus" element={<ContactUsDetailed />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
