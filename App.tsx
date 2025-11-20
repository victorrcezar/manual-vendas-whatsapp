import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { EbookReader } from './components/EbookReader';
import { ViewState } from './types';
import { Lock } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  // Mantemos o estado para controle interno, mas ele será setado como true imediatamente
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const LOGO_WHITE = "https://static.wixstatic.com/media/1f17f3_1e2b54d2fd894dd997c6cbc18e940576~mv2.png";

  // Efeito para manipular a navbar ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lógica de Acesso (Simplificada - Sem Senha)
  const handleAccessClick = () => {
    setIsAuthenticated(true);
    setView('reader');
    scrollToTop();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView('landing');
    scrollToTop();
  };

  if (view === 'reader') {
    return <EbookReader onBack={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-up-offwhite font-sans text-up-dark">
      
      {/* Navigation Bar - Transparente no topo, sólido ao rolar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-up-dark/95 backdrop-blur-md border-b border-up-gray/30 py-3 md:py-4 shadow-lg' : 'bg-transparent py-4 md:py-6 border-b border-white/5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo Image */}
          <div className="flex items-center gap-2">
            <img 
              src={LOGO_WHITE} 
              alt="UP! Company" 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </div>
          
          <button 
            onClick={handleAccessClick}
            className={`
              px-3 py-1.5 md:px-5 md:py-2 border text-[10px] md:text-xs uppercase tracking-widest rounded transition-all font-bold flex items-center gap-2
              ${scrolled 
                ? 'border-up-gold text-up-gold hover:bg-up-gold hover:text-white' 
                : 'border-white/20 text-white hover:bg-white hover:text-up-dark'}
            `}
          >
            <Lock size={12} />
            Acessar Ebook
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <HeroSection onReadClick={handleAccessClick} />
      </div>

      {/* Footer */}
      <footer className="bg-up-dark text-white py-10 md:py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="opacity-80">
             <img 
              src={LOGO_WHITE} 
              alt="UP! Company" 
              className="h-6 md:h-8 w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="text-xs text-gray-500 text-center md:text-right uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} UP! Company.</p>
            <p className="mt-2">Manual de Alta Performance • Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;