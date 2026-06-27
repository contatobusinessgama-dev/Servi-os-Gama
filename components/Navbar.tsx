
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-[80] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-3' : 'bg-transparent py-7'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gama-orange/10 rounded-full blur-lg scale-0 group-hover:scale-150 transition-transform duration-500"></div>
              <Logo className="w-16 h-16 flex-shrink-0 relative z-10 transition-all duration-500" />
            </div>
            
            <div className="flex flex-col -space-y-1">
              <span className={`text-2xl font-display font-black tracking-tight transition-colors duration-300 ${isScrolled ? 'text-gama-navy' : 'text-gama-navy'}`}>
                Serviços <span className="text-gama-orange">Gama</span>
              </span>
              <span className="text-[10px] font-bold text-gama-navy opacity-80 uppercase tracking-widest">Venda Técnicas e Serviços</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gama-navy text-[11px] font-black uppercase tracking-[0.2em] hover:text-gama-orange transition-all relative group/link"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gama-orange group-hover/link:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contato"
              className="orange-gradient text-white px-9 py-3.5 rounded-full text-xs font-black uppercase tracking-widest hover:shadow-[0_15px_30px_-5px_rgba(230,126,34,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Orçamento
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gama-navy hover:text-gama-orange transition-all focus:outline-none p-2.5 bg-slate-50 border border-slate-100 rounded-2xl"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-t border-slate-100 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="px-6 pt-6 pb-12 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-6 py-5 text-xs font-black uppercase tracking-[0.3em] text-gama-navy hover:text-gama-orange hover:bg-slate-50 rounded-[1.5rem] transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-8">
              <a
                href="#contato"
                className="block w-full text-center orange-gradient text-white py-6 rounded-[2rem] text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-gama-orange/20"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
