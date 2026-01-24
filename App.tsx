
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-gama-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Why Choose Us Ribbon - Themed after the logo stripes */}
        <section id="diferenciais" className="bg-white py-14 relative overflow-hidden">
          {/* Accent stripes in the background */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gama-orange"></div>
          <div className="absolute top-2 left-0 w-full h-0.5 bg-gama-blue opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center">
               {[
                 { label: "Qualidade", value: "Premium" },
                 { label: "Profissionais", value: "Capacitados" },
                 { label: "Atendimento", value: "Personalizado" },
                 { label: "Compromisso", value: "Prazos" },
                 { label: "Preço", value: "Justo" }
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center group cursor-default">
                   <div className="mb-2 text-gama-orange font-black text-xl group-hover:scale-125 transition-transform">✔</div>
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-gama-navy transition-colors">{item.label}</div>
                   <div className="text-xs font-black text-gama-navy uppercase tracking-tighter">{item.value}</div>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gama-navy/10"></div>
        </section>

        <About />
        <Services />
        <Contact />
      </main>

      {/* AI Floating Assistant */}
      <GeminiAssistant />

      {/* CTA Bottom Banner for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-slate-100 z-40">
        <a 
          href="https://wa.me/5531983903283" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full orange-gradient text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(230,126,34,0.3)]"
        >
          <span className="text-sm uppercase tracking-widest">WhatsApp Comercial</span>
        </a>
      </div>
    </div>
  );
};

export default App;
