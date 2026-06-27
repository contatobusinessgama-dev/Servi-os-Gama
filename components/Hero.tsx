
import React from 'react';
import { ChevronRight, ShieldCheck, Award, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decorativo Geométrico */}
      <div className="absolute top-0 right-0 -z-10 w-2/5 h-full bg-slate-50 rounded-bl-[300px] hidden lg:block opacity-60"></div>
      <div className="absolute top-1/4 left-10 -z-10 w-80 h-80 bg-gama-orange/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-[500px] h-[500px] bg-gama-blue/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 order-2 lg:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-gama-navy text-[10px] font-black tracking-[0.2em] uppercase">
              <span className="flex h-2 w-2 rounded-full bg-gama-orange animate-pulse"></span>
              Vendas Técnicas e Serviços de Alto Padrão
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-display font-black text-gama-navy leading-[0.95] tracking-tighter">
                O Padrão <br />
                <span className="text-gama-orange relative">
                  Gama.
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none"><path d="M1 15C50 5 150 5 299 15" stroke="#E67E22" strokeWidth="4" strokeLinecap="round" opacity="0.3"/></svg>
                </span>
              </h1>
              <p className="text-2xl font-bold text-gama-navy/70 leading-relaxed italic border-l-4 border-gama-orange pl-6 py-2">
                "Qualidade e Competência em cada serviço"
              </p>
              <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
                Sua parceira estratégica em vendas técnicas, reformas, pintura profissional e suporte corporativo. Soluções integradas com foco em resultados reais e acabamento premium.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-3 orange-gradient text-white px-12 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:shadow-[0_20px_40px_-10px_rgba(230,126,34,0.4)] transition-all transform hover:-translate-y-1 group"
              >
                Conheça Nossos Serviços
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center bg-white text-gama-navy border-2 border-gama-navy px-12 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-gama-navy hover:text-white transition-all shadow-md active:scale-95 animate-pulse hover:animate-none"
              >
                Orçamento Rápido
              </a>
            </div>

            <div className="flex flex-wrap gap-x-14 gap-y-8 pt-8 border-t border-slate-100">
               <div className="flex items-center gap-4 group">
                 <div className="p-4 bg-white shadow-lg rounded-2xl group-hover:bg-gama-navy group-hover:text-white transition-all duration-300">
                   <Zap size={24} className="text-gama-orange" />
                 </div>
                 <div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Agilidade</div>
                   <div className="font-bold text-gama-navy">Resposta Imediata</div>
                 </div>
               </div>
               <div className="flex items-center gap-4 group">
                 <div className="p-4 bg-white shadow-lg rounded-2xl group-hover:bg-gama-orange group-hover:text-white transition-all duration-300">
                   <Award size={24} className="text-gama-blue" />
                 </div>
                 <div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Garantia</div>
                   <div className="font-bold text-gama-navy">Certificação Técnica</div>
                 </div>
               </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
            <div className="relative z-10 w-full max-w-[500px] aspect-square rounded-[5rem] bg-white shadow-[0_60px_120px_-30px_rgba(13,44,84,0.2)] overflow-hidden group animate-float border-[12px] border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                alt="Serviços Gama Premium" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gama-navy/90 via-gama-navy/20 to-transparent flex items-end p-6">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-[2rem] border border-white/20 w-full">
                  <div className="w-12 h-12 bg-gama-orange text-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 font-display font-black text-lg">
                    SG
                  </div>
                  <div>
                    <p className="text-white text-xs font-black tracking-wider uppercase">Serviços Gama</p>
                    <p className="text-white/80 text-[10px] font-bold">Vendas Técnicas e Serviços</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Badge de Atendimento Premium Profissional */}
            <div className="absolute -bottom-10 -right-4 lg:-right-6 z-20 bg-white px-8 py-6 rounded-[3rem] shadow-2xl border-4 border-slate-50 transform -rotate-2 flex items-center gap-4 hover:rotate-0 transition-transform duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gama-orange/10 flex items-center justify-center text-gama-orange flex-shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Suporte e Confiança</div>
                <div className="text-sm font-black text-gama-navy">Atendimento Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
