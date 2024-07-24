import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/style.css';
import About from './pages/About';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import ToTop from './components/ToTop';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <Landing/>
    <Header/>
    <ToTop/>
    <Skills/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
    </HelmetProvider>
  </React.StrictMode>
);


