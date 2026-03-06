import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import BookCall from './pages/BookCall';
import Portfolio from './pages/Portfolio';
import Weddings from './pages/Weddings';
import WeddingGuide from './pages/WeddingGuide';
import WeddingAccess from './pages/WeddingAccess';
import InvestmentGuide from './pages/InvestmentGuide';
import InvestmentAccess from './pages/InvestmentAccess';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.slice(1);
      
      // Handle anchor links on the homepage
      if (hash === '/#philosophy' || hash === '/#blueprint' || hash === '/#benefits') {
          // If we are already on home, just scroll. If not, go home and scroll later.
          // For simplicity, we define the route as '/' if it contains an anchor
          setCurrentRoute('/');
      } else {
        setCurrentRoute(hash || '/');
      }
      
      // Auto scroll to top on page change if not an anchor link
      if (!hash.includes('#')) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative w-full min-h-screen selection:bg-moss/20">
      
      <Navbar />
      
      {currentRoute === '/' && <Weddings />}
      {currentRoute === '/about' && <About />}
      {currentRoute === '/book' && <BookCall />}
      {currentRoute === '/wedding-access' && <WeddingAccess />}
      {currentRoute === '/wedding-guide' && <WeddingGuide />}
      {currentRoute === '/investment' && <InvestmentGuide />}
      {currentRoute === '/access' && <InvestmentAccess />}
      {/* {currentRoute === '/flagship' && <Flagship />} */}
      {currentRoute === '/portfolio' && <Portfolio />}
      {/* {currentRoute === '/weddings' && <Weddings />} */}
      
      <Footer hidePreFooter={currentRoute === '/' || currentRoute === '/book' || currentRoute === '/investment' || currentRoute === '/access' || currentRoute === '/portfolio' || currentRoute === '/wedding-access'} />
    </div>
  );
};

export default App;
