import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import WhoWeServe from './pages/WhoWeServe';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import Testimonies from './pages/Testimonies';
import Partners from './pages/Partners';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Prayer from './pages/Prayer';
import FAQ from './pages/FAQ';
import CMFIAffiliation from './pages/CMFIAffiliation';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/who-we-serve" element={<WhoWeServe />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/testimonies" element={<Testimonies />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/prayer" element={<Prayer />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/cmfi" element={<CMFIAffiliation />} />
            </Routes>
            <Footer />
            <BackToTop />
            <CustomCursor />
          </>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
