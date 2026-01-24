
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Logo space - the circular icon from your brand */}
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gama-orange bg-white shadow-sm">
               <div className="w-full h-full flex items-center justify-center font-extrabold text-gama-navy text-xs bg-gama-beige">GAMA</div>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className={`text-xl font-display font-extrabold tracking-tight ${isScrolled ? 'text-gama-navy' : 'text-gama-navy'}`}>
                Serviços <span className="text-gama-orange">Gama</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gama-blue">Vendas Técnicas e Serviços</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gama-navy font-semibold hover:text-gama-orange transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="orange-gradient text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-xl hover:shadow-orange-200 transition-all transform hover:-translate-y-0.5"
            >
              Orçamento
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gama-navy hover:text-gama-orange focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl animate-in fade-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-4 text-base font-bold text-gama-navy hover:text-gama-orange hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a
                href="#contato"
                className="block w-full text-center orange-gradient text-white px-5 py-4 rounded-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                Orçamento Grátis
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
