


import { useEffect, Suspense, lazy } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import Portfolio from '../pages/portfolio/Portfolio';
import About from '../pages/about/About';
import WorkProcess from '../pages/ourwork/WorkProcess';
import ServiceDetail from '../pages/sevices/ServiceDetail';
import Blogs from '../pages/blogs/Blogs';
import BlogDetail from '../pages/blogs/BlogDetail';
// Import the new components
import CategoryPage from '../pages/portfolio/CategoryPage';
import PortfolioDetails from '../pages/portfolio/PortfolioDetails';
import ProjectDetail from '../pages/portfolio/PortfolioDetails';
import Team from '../pages/team/Team';
import Allprojects from '../pages/ourwork/Allprojects';



const Home = lazy(() => import('../../src/pages/Home'));
const Services = lazy(() => import('../pages/sevices/Services'));
const AppWork = lazy(() => import('../pages/ourwork/AppWork'));
const WebWork = lazy(() => import('../pages/ourwork/WebWork'));
const OurClients = lazy(() => import('../pages/clients/OurClients'));
const ClientReviews = lazy(() => import('../pages/clients/ClientReviews'));
const ContactUs = lazy(() => import('../pages/contact/ContactUs'));

const ContactUsDetailed = lazy(() => import('../pages/contact/ContactUsDetailed'));
const AboutUsDetailed = lazy(() => import('../pages/about/AboutUsDetailed'));

const Spinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// Component that combines all home page sections
const HomePage = () => (
  <>
    <Suspense ><Home /></Suspense>
    <Suspense ><Services /></Suspense>
    {/* <Suspense ><AppWork /></Suspense>
    <Suspense ><WebWork /></Suspense> */}
    {/* <Suspense ><OurProjects /></Suspense> */}
    <Suspense ><Allprojects /></Suspense>
    <Suspense ><About /></Suspense>
    <Suspense ><WorkProcess /></Suspense>
    <Suspense ><ClientReviews /></Suspense>
    <Suspense ><ContactUs /></Suspense>
  </>
);

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <SEO />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* NEW: Dynamic Service Detail Route */}
          <Route path="/services/:serviceId" element={
            <Suspense fallback={<Spinner />}>
              <ServiceDetail />
            </Suspense>
          } />

          <Route path="/portfolio/:categoryName" element={
            <Suspense fallback={<Spinner />}>
              <CategoryPage />
            </Suspense>
          } />

          <Route path="/portfolio/:categoryName/:itemId" element={
            <Suspense fallback={<Spinner />}>
              <ProjectDetail />
            </Suspense>
          } />

          <Route path="/contactus" element={
            <Suspense fallback={<Spinner />}>
              <ContactUsDetailed />
            </Suspense>
          } />

          <Route path="/about" element={
            <Suspense fallback={<Spinner />}>
              <AboutUsDetailed />
            </Suspense>
          } />

          <Route path="/portfolio" element={
            <Suspense fallback={<Spinner />}>
              <Portfolio />
            </Suspense>
          } />

          <Route path="/contact" element={
            <Suspense fallback={<Spinner />}>
              <ContactUsDetailed />
            </Suspense>
          } />

          <Route path="/blogs" element={
            <Suspense fallback={<Spinner />}>
              <Blogs />
            </Suspense>
          } />

          <Route path="/blogs/:id" element={
            <Suspense fallback={<Spinner />}>
              <BlogDetail />
            </Suspense>
          } />
          <Route path="/team" element={
            <Suspense fallback={<Spinner />}>
              <Team />
            </Suspense>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default Layout;