
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Simple hash-based routing emulation for page persistence on refresh
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'services', 'casestudies', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'services':
        return <Services onNavigate={navigateTo} />;
      case 'casestudies':
        return <CaseStudies />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} />
      
      <ChatBot />
      
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left">
        <div 
          className="h-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)] transition-all duration-100"
          style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default App;
