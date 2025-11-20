import React, { useState, useMemo, useEffect } from 'react';
import { EBOOK_CONTENT } from '../constants';
import { ChevronLeft, ChevronRight, Menu, X, Home, BookOpen, Type, Minus, Plus, Maximize, Minimize, LogOut } from 'lucide-react';

interface EbookReaderProps {
  onBack: () => void;
}

// Interface para o novo formato exigido
interface HtmlChapter {
  id: string;
  title: string;
  subtitle?: string;
  coverImage?: string;
  html: string; // HTML Puro
}

type FontSize = 'sm' | 'base' | 'lg' | 'xl';

export const EbookReader: React.FC<EbookReaderProps> = ({ onBack }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Estados do Modo Leitura
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [showAppearanceMenu, setShowAppearanceMenu] = useState(false);

  const LOGO_WHITE = "https://static.wixstatic.com/media/1f17f3_1e2b54d2fd894dd997c6cbc18e940576~mv2.png";
  
  // --- 1. TRANSFORMAÇÃO DE DADOS (Blocos -> HTML Puro) ---
  const formattedChapters: HtmlChapter[] = useMemo(() => {
    const rawChapters = [
      EBOOK_CONTENT.intro,
      ...EBOOK_CONTENT.chapters,
      EBOOK_CONTENT.conclusion
    ];

    return rawChapters.map(c => {
      // Gera o HTML string baseado no conteúdo
      const contentHtml = c.content.map(block => {
        switch (block.type) {
          case 'paragraph':
            return `<p class="mb-5 md:mb-6 text-base md:text-lg text-gray-700 leading-relaxed text-justify font-light break-words">${block.text}</p>`;
          
          case 'heading':
            const Tag = block.level === 2 ? 'h3' : 'h4';
            const hStyle = block.level === 2 
              ? "text-xl md:text-2xl font-heading font-bold text-up-dark mt-8 md:mt-10 mb-4 md:mb-6 border-l-4 border-up-gold pl-4"
              : "text-lg md:text-xl font-heading font-semibold text-up-medium mt-6 md:mt-8 mb-3 md:mb-4";
            return `<${Tag} class="${hStyle}">${block.text}</${Tag}>`;

          case 'list':
            const items = block.items.map(item => 
              `<li class="flex items-start gap-3 mb-3">
                 <span class="mt-2 w-1.5 h-1.5 rounded-full bg-up-gold shrink-0"></span>
                 <span class="text-gray-700 text-base md:text-lg leading-relaxed">${item}</span>
               </li>`
            ).join('');
            return `<ul class="mb-8 pl-1 md:pl-2 space-y-2">${items}</ul>`;

          case 'highlight':
            const bgMap = {
              gold: 'bg-up-gold/10 border-up-gold text-up-dark',
              green: 'bg-up-green/10 border-up-green text-up-dark',
              red: 'bg-red-50 border-red-400 text-gray-800',
              dark: 'bg-up-dark text-white border-up-gold'
            };
            const icon = block.icon === 'star' ? '⭐' : block.icon === 'warning' ? '⚠️' : block.icon === 'check' ? '✅' : '🔥';
            return `
              <div class="p-5 md:p-6 rounded-xl border-l-4 mb-8 shadow-sm ${bgMap[block.variant]}">
                ${block.title ? `<h4 class="font-bold text-base md:text-lg mb-2 flex items-center gap-2">${icon} ${block.title}</h4>` : ''}
                <div class="leading-relaxed opacity-90 text-sm md:text-base">${block.text}</div>
              </div>
            `;

          case 'quote':
            return `
              <blockquote class="relative p-5 md:p-6 my-8 bg-white rounded-r-xl shadow-sm border-l-8 border-up-gold">
                <p class="text-base md:text-lg font-heading font-medium text-up-dark italic leading-relaxed">"${block.text}"</p>
                ${block.author ? `<footer class="mt-4 text-xs font-bold text-up-gold tracking-wider uppercase">— ${block.author}</footer>` : ''}
              </blockquote>
            `;

          default:
            return '';
        }
      }).join('');

      return {
        id: c.id,
        title: c.title,
        subtitle: c.subtitle,
        coverImage: c.coverImage,
        html: contentHtml
      };
    });
  }, []);

  const [currentChapterId, setCurrentChapterId] = useState<string>(formattedChapters[0].id);
  const currentIndex = formattedChapters.findIndex(c => c.id === currentChapterId);
  const currentChapter = formattedChapters[currentIndex];

  // Scroll to top on chapter change
  useEffect(() => {
    const contentDiv = document.getElementById('main-scroll-area');
    if (contentDiv) contentDiv.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentChapterId]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentChapterId(formattedChapters[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < formattedChapters.length - 1) {
      setCurrentChapterId(formattedChapters[currentIndex + 1].id);
    }
  };

  const toggleReadingMode = () => {
    setIsReadingMode(!isReadingMode);
    setIsSidebarOpen(false);
  };

  const increaseFontSize = () => {
    if (fontSize === 'sm') setFontSize('base');
    if (fontSize === 'base') setFontSize('lg');
    if (fontSize === 'lg') setFontSize('xl');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'xl') setFontSize('lg');
    if (fontSize === 'lg') setFontSize('base');
    if (fontSize === 'base') setFontSize('sm');
  };

  const getProseSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'prose-sm';
      case 'base': return 'prose-base';
      case 'lg': return 'prose-lg';
      case 'xl': return 'prose-xl';
      default: return 'prose-base';
    }
  };

  return (
    <div className="flex h-[100dvh] bg-up-offwhite overflow-hidden font-sans relative">
      
      {/* --- OVERLAY MOBILE --- */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-up-dark/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* --- SIDEBAR (MENU LATERAL) --- */}
      {!isReadingMode && (
        <aside className={`
          fixed inset-y-0 left-0 z-50 h-[100dvh]
          w-[85vw] max-w-[320px] md:w-80 md:relative
          bg-up-dark flex flex-col shadow-2xl border-r border-white/5
          transform transition-transform duration-300 ease-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          
          {/* Header da Sidebar */}
          <div className="p-5 md:p-6 bg-up-dark border-b border-white/10 flex justify-between items-start shrink-0">
             <div className="flex flex-col">
               {/* Logo no Sidebar */}
               <img 
                 src={LOGO_WHITE} 
                 alt="UP! Company" 
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.nextElementSibling!.classList.remove('hidden');
                 }}
                 className="h-6 md:h-8 w-auto object-contain mb-2 self-start"
               />
               <h1 className="hidden text-white font-heading font-bold text-xl">UP! Company</h1>
               <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Área do Aluno</p>
             </div>
             <button 
               onClick={() => setIsSidebarOpen(false)} 
               className="md:hidden text-white/80 p-2 hover:bg-white/10 rounded-full hover:text-white transition-colors"
               aria-label="Fechar menu"
             >
               <X size={24} />
             </button>
          </div>

          {/* Lista de Capítulos */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar pb-24 md:pb-4">
            <button 
              onClick={onBack} 
              className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-up-medium rounded-lg mb-6 transition-colors border border-transparent hover:border-white/10"
            >
              <LogOut size={16} /> 
              Sair do Sistema
            </button>

            <div className="px-4 pb-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Índice</div>
            
            {formattedChapters.map((chapter, idx) => (
              <button
                key={chapter.id}
                onClick={() => {
                  setCurrentChapterId(chapter.id);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-3.5 rounded-lg text-sm transition-all duration-200 flex items-start gap-3 group
                  ${currentChapterId === chapter.id 
                    ? 'bg-gradient-to-r from-up-gold to-up-gold/80 text-up-dark font-bold shadow-lg' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                `}
              >
                <span className={`
                  w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[9px] md:text-[10px] font-bold transition-colors shrink-0 mt-0.5
                  ${currentChapterId === chapter.id ? 'bg-up-dark text-up-gold' : 'bg-white/10 text-gray-500 group-hover:bg-up-gold group-hover:text-up-dark'}
                `}>
                  {idx === 0 ? 'I' : idx === formattedChapters.length - 1 ? 'C' : idx}
                </span>
                <span className="whitespace-normal leading-tight">
                  {chapter.title.replace(':', ' -')}
                </span>
              </button>
            ))}
          </nav>
        </aside>
      )}

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className={`flex-1 flex flex-col h-full relative w-full bg-gray-50 transition-all duration-500 ${isReadingMode ? 'max-w-4xl mx-auto border-x border-gray-200 shadow-2xl' : ''}`}>
        
        {/* Header Superior */}
        <header className={`h-16 md:h-18 bg-up-dark border-b border-white/10 flex items-center justify-between px-4 md:px-8 shadow-md z-30 shrink-0 transition-all ${isReadingMode ? 'sticky top-0 bg-up-dark/95 backdrop-blur' : ''}`}>
          
          <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
            {/* Botão Hamburger (Mobile) */}
            {!isReadingMode && (
              <button 
                onClick={() => setIsSidebarOpen(true)} 
                className="md:hidden text-white p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Abrir menu"
              >
                <Menu size={24} />
              </button>
            )}
            
            {/* Botão Voltar (Modo Leitura) */}
            {isReadingMode && (
              <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium py-2">
                <ChevronLeft size={18} /> <span className="hidden sm:inline">Sair</span>
              </button>
            )}

            {/* Logo Branca no Header (quando não está lendo) */}
            {!isReadingMode && (
               <>
                 <img 
                   src={LOGO_WHITE} 
                   alt="UP! Company" 
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling!.classList.remove('hidden');
                   }}
                   className="h-6 md:h-8 w-auto object-contain"
                 />
                 <h1 className="hidden text-white font-heading font-bold text-lg">UP! Company</h1>
               </>
            )}
          </div>

          {/* Controles à Direita */}
          <div className="flex items-center gap-1 md:gap-2">
            <div className="relative">
              <button 
                onClick={() => setShowAppearanceMenu(!showAppearanceMenu)}
                className="p-2.5 md:p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Ajustes de Leitura"
                aria-label="Ajustes de aparência"
              >
                <Type size={20} />
              </button>

              {/* Dropdown de Aparência */}
              {showAppearanceMenu && (
                <>
                  {/* Overlay transparente para fechar o menu ao clicar fora */}
                  <div className="fixed inset-0 z-40 cursor-default" onClick={() => setShowAppearanceMenu(false)} />
                  
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 animate-in fade-in zoom-in duration-200">
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Tamanho da Fonte</label>
                        <div className="flex items-center justify-between bg-gray-100 rounded-lg p-1">
                          <button onClick={decreaseFontSize} className="p-3 hover:bg-white rounded-md transition-shadow disabled:opacity-50 text-gray-700 touch-manipulation" disabled={fontSize === 'sm'}>
                            <Minus size={16} />
                          </button>
                          <span className="font-medium text-sm w-12 text-center capitalize text-gray-800">{fontSize}</span>
                          <button onClick={increaseFontSize} className="p-3 hover:bg-white rounded-md transition-shadow disabled:opacity-50 text-gray-700 touch-manipulation" disabled={fontSize === 'xl'}>
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Modo de Visualização</label>
                        <button 
                          onClick={() => {
                            toggleReadingMode();
                            setShowAppearanceMenu(false);
                          }}
                          className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-colors touch-manipulation
                            ${isReadingMode ? 'bg-up-dark text-white hover:bg-up-medium' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                          `}
                        >
                          {isReadingMode ? <Minimize size={16} /> : <Maximize size={16} />}
                          {isReadingMode ? 'Sair do Foco' : 'Modo Foco'}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Content Scroll Area */}
        <div 
          id="main-scroll-area" 
          className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth bg-white md:bg-gray-50"
          onClick={() => setShowAppearanceMenu(false)}
        >
          <div className={`mx-auto transition-all duration-300 
            ${isReadingMode 
              ? 'px-5 py-8 md:px-12 md:py-16 max-w-2xl' 
              : 'px-5 py-8 md:px-16 md:py-16 max-w-4xl'
            }`}
          >
            
            {/* Cabeçalho do Capítulo */}
            <div className="mb-8 md:mb-12 text-center">
              {!isReadingMode && (
                <span className="inline-block px-3 py-1 rounded-full bg-up-gold/10 text-up-gold font-bold text-[9px] md:text-xs tracking-[0.2em] uppercase mb-4 border border-up-gold/20">
                  Manual Oficial
                </span>
              )}
              <h2 className={`${isReadingMode ? 'text-2xl md:text-4xl' : 'text-2xl md:text-5xl'} font-heading font-bold text-up-dark mb-4 leading-tight`}>
                {currentChapter.title.replace(':', ' -')}
              </h2>
              {currentChapter.subtitle && (
                <p className={`text-gray-500 font-light italic mx-auto ${isReadingMode ? 'text-sm md:text-base' : 'text-sm md:text-lg max-w-2xl'}`}>
                  {currentChapter.subtitle}
                </p>
              )}
            </div>

            {/* RENDERIZAÇÃO DO CONTEÚDO */}
            <div 
              id="chapter-content"
              className={`
                prose max-w-none 
                ${getProseSizeClass()}
                prose-headings:font-heading prose-headings:text-up-dark 
                prose-p:text-gray-600 prose-strong:text-up-dark
                prose-li:marker:text-up-gold
                transition-all duration-300
                hyphens-auto
              `}
              dangerouslySetInnerHTML={{ __html: currentChapter.html }}
            />

            {/* Navigation Footer */}
            <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-gray-200 flex justify-between items-center pb-10 md:pb-0 gap-4">
               <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`group flex flex-col items-start gap-1 transition-opacity p-2 -ml-2 max-w-[45%] ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
               >
                 <span className="text-[9px] md:text-xs text-gray-400 uppercase tracking-widest group-hover:text-up-gold transition-colors">Anterior</span>
                 <div className="flex items-center gap-1 md:gap-2 text-up-dark font-bold group-hover:text-up-gold transition-colors text-sm md:text-base text-left leading-tight">
                    <ChevronLeft size={18} className="shrink-0" />
                    <span className="line-clamp-1">Voltar</span>
                 </div>
               </button>

               {!isReadingMode && (
                 <div className="hidden md:block text-up-gold opacity-20">
                   <BookOpen size={32} />
                 </div>
               )}

               <button
                onClick={handleNext}
                disabled={currentIndex === formattedChapters.length - 1}
                className={`group flex flex-col items-end gap-1 transition-opacity p-2 -mr-2 max-w-[45%] ${currentIndex === formattedChapters.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
               >
                 <span className="text-[9px] md:text-xs text-gray-400 uppercase tracking-widest group-hover:text-up-gold transition-colors">Próximo</span>
                 <div className="flex items-center gap-1 md:gap-2 text-up-dark font-bold group-hover:text-up-gold transition-colors text-sm md:text-base text-right leading-tight">
                    <span className="line-clamp-1">Avançar</span>
                    <ChevronRight size={18} className="shrink-0" />
                 </div>
               </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};
