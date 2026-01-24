
import React from 'react';
import { ChevronRight, ShieldCheck, TrendingUp, Settings } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Visual background based on logo elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gama-beige/50 rounded-bl-[200px] hidden lg:block"></div>
      <div className="absolute top-1/2 left-10 -z-10 w-64 h-64 bg-gama-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 -z-10 w-96 h-96 bg-gama-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gama-navy text-white text-[10px] font-extrabold tracking-widest uppercase">
              <ShieldCheck size={14} className="text-gama-orange" />
              Qualidade e Competência em cada serviço
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-gama-navy leading-[1.05]">
              Vendas Técnicas <br />
              & <span className="text-gama-orange">Serviços Especializados.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              A Serviços Gama entrega soluções práticas e seguras para residências e empresas, com o profissionalismo que você exige.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-3 orange-gradient text-white px-10 py-5 rounded-2xl font-extrabold hover:shadow-2xl hover:shadow-orange-200 transition-all transform hover:-translate-y-1 group"
              >
                Nossos Serviços
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center bg-white text-gama-navy border-2 border-gama-navy px-10 py-5 rounded-2xl font-extrabold hover:bg-gama-navy hover:text-white transition-all shadow-md"
              >
                Falar com Consultor
              </a>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-6">
               <div className="flex items-center gap-3">
                 <div className="p-3 bg-slate-50 text-gama-orange rounded-xl border border-slate-100 shadow-sm">
                   <Settings size={22} className="animate-spin-slow" />
                 </div>
                 <div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Suporte</div>
                   <div className="font-extrabold text-gama-navy">Técnico</div>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="p-3 bg-slate-50 text-gama-blue rounded-xl border border-slate-100 shadow-sm">
                   <TrendingUp size={22} />
                 </div>
                 <div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Foco em</div>
                   <div className="font-extrabold text-gama-navy">Eficiência</div>
                 </div>
               </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            {/* The Logo visual circle representation */}
            <div className="relative z-10 mx-auto w-full max-w-[480px] aspect-square rounded-full border-[12px] border-gama-beige bg-white shadow-[0_40px_100px_-20px_rgba(13,44,84,0.15)] overflow-hidden flex items-center justify-center group">
              {/* Replace the content below with the actual logo image if available locally */}
              <div className="text-center p-8 transition-transform duration-700 group-hover:scale-110">
                <div className="text-gama-navy font-display font-black text-6xl lg:text-8xl mb-2 tracking-tighter">GAMA</div>
                <div className="h-2 w-24 bg-gama-orange mx-auto rounded-full mb-4"></div>
                <div className="text-gama-navy/60 font-bold uppercase tracking-[0.4em] text-sm lg:text-lg">Excelência</div>
              </div>
              
              {/* Decorative elements similar to the logo */}
              <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gama-orange/10 -rotate-45 -z-10 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-white/80 pointer-events-none"></div>
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-6 right-10 z-20 bg-gama-navy p-6 rounded-[2rem] shadow-2xl text-white transform rotate-3 hover:rotate-0 transition-transform cursor-default">
              <div className="text-3xl font-black text-gama-orange">31+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Experiência & Confiança</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
