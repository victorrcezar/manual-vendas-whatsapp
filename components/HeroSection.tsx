import React from 'react';
import { Lock, Star, ChevronDown } from 'lucide-react';
import { Button } from './Button';

interface HeroSectionProps {
  onReadClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReadClick }) => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-up-dark selection:bg-up-gold selection:text-up-dark">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Gradient Spotlights - Adjusted sizing for mobile */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vh] md:w-[120vh] h-[100vh] md:h-[120vh] bg-up-medium/30 rounded-full blur-[80px] md:blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[30vh] md:w-[50vh] h-[30vh] md:h-[50vh] bg-up-gold/5 rounded-full blur-[60px] md:blur-[80px]"></div>
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        
        {/* Grid Lines subtle */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
            backgroundSize: '60px 60px' 
          }}>
        </div>
      </div>

      {/* --- Main Cover Content --- */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center">
        
        {/* Top Badge */}
        <div className="mb-6 md:mb-8 animate-fade-in-down opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full border border-up-gold/30 bg-up-gold/5 backdrop-blur-md">
            <Star size={10} className="text-up-gold fill-up-gold md:w-3 md:h-3" />
            <span className="text-up-gold text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">Material Exclusivo • UP! Company</span>
            <Star size={10} className="text-up-gold fill-up-gold md:w-3 md:h-3" />
          </div>
        </div>

        {/* Main Typography Block */}
        <div className="relative border-y border-up-gold/20 py-8 md:py-16 px-4 md:px-20 backdrop-blur-sm bg-up-dark/10 max-w-4xl w-full mx-2">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 border-up-gold"></div>
          <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-r-2 border-up-gold"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-l-2 border-up-gold"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 border-up-gold"></div>

          <h2 className="text-up-offwhite/60 text-[10px] md:text-sm font-sans font-medium tracking-[0.4em] md:tracking-[0.6em] uppercase mb-3 md:mb-4 animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
            Manual do Atendimento
          </h2>
          
          {/* Responsive Heading Sizes: smaller on mobile to prevent overflow */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] md:leading-[0.9] tracking-tight mb-4 md:mb-6 animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms]">
            ALTA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-up-gold via-[#D4AF37] to-up-gold">PERFORMANCE</span>
          </h1>

          <div className="w-16 md:w-24 h-1 bg-up-gold mx-auto my-6 md:my-8 rounded-full opacity-0 animate-width [animation-fill-mode:forwards] [animation-delay:800ms]"></div>

          <p className="text-gray-400 text-xs sm:text-sm md:text-lg max-w-xl mx-auto font-light italic opacity-0 animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:1000ms] px-2">
            "Transforme conversas em clientes todos os dias no WhatsApp. Um guia definitivo de vendas."
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 md:mt-12 animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:1200ms] flex flex-col items-center justify-center w-full">
          <Button 
            onClick={onReadClick} 
            className="group w-full md:w-auto px-8 md:px-12 py-4 md:py-5 text-base md:text-lg shadow-[0_0_30px_-5px_rgba(196,155,102,0.3)] hover:shadow-[0_0_40px_-5px_rgba(196,155,102,0.5)] border border-up-gold/50"
          >
            <Lock size={20} className="md:w-[22px] md:h-[22px] group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">Acessar Ebook</span>
          </Button>
          
          <p className="mt-4 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest">
            Acesso Imediato
          </p>
        </div>

      </div>

      {/* Scroll Indicator - Hidden on small mobile to save space */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hidden md:block">
        <ChevronDown className="text-white w-6 h-6 md:w-8 md:h-8" />
      </div>

      <style>{`
        @keyframes width {
          from { width: 0; opacity: 0; }
          to { width: 6rem; opacity: 1; }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-width { animation: width 1s ease-out forwards; }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      `}</style>
    </section>
  );
};