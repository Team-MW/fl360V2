import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Transport = lazy(() => import('./pages/Transport'));
const JetsPrives = lazy(() => import('./pages/JetsPrives'));
const Helicopteres = lazy(() => import('./pages/Helicopteres'));
const AvionsAffaires = lazy(() => import('./pages/AvionsAffaires'));
const AvionsTaxi = lazy(() => import('./pages/AvionsTaxi'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const Formation = lazy(() => import('./pages/Formation'));
const CaoCamo = lazy(() => import('./pages/CaoCamo'));
const CapList = lazy(() => import('./pages/CapList'));
const Mro = lazy(() => import('./pages/Mro'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen w-screen bg-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
        </div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="transport" element={<Transport />} />
            <Route path="jets-prives" element={<JetsPrives />} />
            <Route path="helicopteres" element={<Helicopteres />} />
            <Route path="avions-affaires" element={<AvionsAffaires />} />
            <Route path="avions-taxi" element={<AvionsTaxi />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="formation" element={<Formation />} />
            <Route path="cao-camo" element={<CaoCamo />} />
            <Route path="cap-list" element={<CapList />} />
            <Route path="mro" element={<Mro />} />
            <Route path="contact" element={<Contact />} />
            <Route path="mentions-legales" element={<MentionsLegales />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
