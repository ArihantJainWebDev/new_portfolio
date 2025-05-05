import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Services from './pages/Services/Services';
import About from './pages/about/About';
import Achievements from './pages/achievements/Achievements';
import Home from './pages/home/Home';
import Contact from './pages/Contact/Contact';
import Layout from './components/layout/Layout';
import Works from './pages/works/Works';
import './App.css';

const pageVariants = {
  initial: {
    delay: 0.6,
    opacity: 0,
    y: 200, // New page comes from below
  },
  animate: {
    opacity: 1,
    y: 0, // Page moves to its normal position
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -100, // Current page goes upwards
    transition: { duration: 0.6, ease: 'easeIn' },
  },
};

const PageTransition = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/achievements"
            element={
              <PageTransition>
                <Achievements />
              </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />
          <Route
            path="/works"
            element={
              <PageTransition>
                <Works />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;