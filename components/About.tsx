
import React from 'react';
import { Target, Eye, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-black text-gama-orange uppercase tracking-[0.3em] mb-4">Quem Somos</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-black text-gama-navy mb-8 leading-tight">
              A força técnica por trás do seu <span className="text-gama-blue underline decoration-gama-orange underline-offset-8">sucesso.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              A Serviços Gama é focada em soluções técnicas integradas. Atendemos desde pequenas demandas residenciais até grandes desafios corporativos, sempre com o compromisso de entregar pontualidade e transparência.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { title: "Qualidade", desc: "Comprovada em cada detalhe" },
                { title: "Competência", desc: "Profissionais qualificados" },
                { title: "Pontualidade", desc: "Compromisso com o relógio" },
                { title: "Preço Justo", desc: "Custo-benefício real" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gama-orange/10 flex items-center justify-center text-gama-orange">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  </div>
                  <div>
                    <div className="font-bold text-gama-navy text-sm uppercase tracking-wider">{item.title}</div>
                    <div className="text-xs text-slate-500 font-medium">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-gama-orange/20 transition-all hover:shadow-xl group">
                <div className="w-14 h-14 bg-gama-navy text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gama-orange transition-colors">
                  <Target size={28} />
                </div>
                <h4 className="text-xl font-black text-gama-navy mb-3">Missão</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Entregar soluções práticas e seguras, superando expectativas através da excelência técnica.
                </p>
              </div>

              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-gama-blue/20 transition-all hover:shadow-xl group">
                <div className="w-14 h-14 bg-gama-navy text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gama-blue transition-colors">
                  <Eye size={28} />
                </div>
                <h4 className="text-xl font-black text-gama-navy mb-3">Visão</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Ser a principal referência em serviços técnicos e transporte na região metropolitana.
                </p>
              </div>
            </div>

            <div className="logo-gradient p-10 rounded-[2.5rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-gama-orange" />
                  <h4 className="text-2xl font-black italic">Nossos Valores</h4>
                </div>
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                  {['Ética', 'Compromisso', 'Competência', 'Respeito'].map(val => (
                    <div key={val} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-gama-orange rounded-full"></span>
                      <span className="font-bold uppercase text-xs tracking-[0.2em] text-blue-100">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Background graphic */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full border border-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
