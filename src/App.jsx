import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { Suspense } from 'react';
import Loader from './components/Loader';

//lazy loading
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Career = React.lazy(() => import('./pages/Career/Career'));
const Press = React.lazy(() => import('./pages/Press/Press'));
const Technology = React.lazy(() => import('./pages/Technology/Technology'));

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Suspense fallback={<div className='h-screen grid place-items-center w-full'>
          <Loader />
        </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/press" element={<Press />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
