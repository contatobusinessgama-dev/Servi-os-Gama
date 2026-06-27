
import React from 'react';
import { Target, Eye, Shield, Users, Award, Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 bg-white border-t border-slate-50 relative overflow-hidden">
      <div className="absolute top-10 right-0 -z-10 w-72 h-72 bg-gama-blue/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 left-0 -z-10 w-72 h-72 bg-gama-orange/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Coluna de Conteúdo Escrito */}
          <div>
            <ScrollReveal animation="slide-up" duration="duration-1000">
              <h2 className="text-sm font-black text-gama-orange uppercase tracking-[0.3em] mb-4">Quem Somos</h2>
              <h3 className="text-4xl lg:text-5xl font-display font-black text-gama-navy mb-8 leading-tight">
                A força técnica por trás do seu <span className="text-gama-blue underline decoration-gama-orange underline-offset-8">sucesso.</span>
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                A Serviços Gama nasceu da necessidade de unir competência técnica e excelência no atendimento comercial. Atuamos com foco na resolução de desafios operacionais, oferecendo desde vendas especializadas até serviços de infraestrutura e logística de alto padrão. Nosso compromisso é entregar qualidade absoluta, pontualidade e transparência em cada etapa do seu projeto.
              </p>
            </ScrollReveal>
            
            {/* Grid de diferenciais resumidos */}
            <ScrollReveal animation="slide-up" duration="duration-1000" delay="delay-200">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {[
                  { title: "Qualidade", desc: "Comprovada em cada detalhe" },
                  { title: "Competência", desc: "Profissionais altamente treinados" },
                  { title: "Pontualidade", desc: "Compromisso rigoroso com o relógio" },
                  { title: "Preço Justo", desc: "Custo-benefício de excelência" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gama-orange/10 flex items-center justify-center text-gama-orange group-hover:bg-gama-orange group-hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gama-navy text-sm uppercase tracking-wider">{item.title}</div>
                      <div className="text-xs text-slate-500 font-medium">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Painel de Missão & Visão */}
            <div className="grid sm:grid-cols-2 gap-6">
              <ScrollReveal animation="slide-up" duration="duration-700" delay="delay-300" className="h-full">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-gama-orange/20 transition-all duration-300 hover:shadow-xl group h-full">
                  <div className="w-12 h-12 bg-gama-navy text-white rounded-xl flex items-center justify-center mb-5 group-hover:bg-gama-orange transition-colors">
                    <Target size={24} />
                  </div>
                  <h4 className="text-lg font-black text-gama-navy mb-2">Missão</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Entregar soluções práticas e seguras, superando expectativas através da excelência técnica e ética comercial.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" duration="duration-700" delay="delay-500" className="h-full">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-gama-blue/20 transition-all duration-300 hover:shadow-xl group h-full">
                  <div className="w-12 h-12 bg-gama-navy text-white rounded-xl flex items-center justify-center mb-5 group-hover:bg-gama-blue transition-colors">
                    <Eye size={24} />
                  </div>
                  <h4 className="text-lg font-black text-gama-navy mb-2">Visão</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Ser a principal referência em serviços técnicos, integrando tecnologia e atendimento de alto nível.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Coluna Visual: Imagem Realística da Empresa & Valores */}
          <div className="space-y-8">
            {/* Moldura da Imagem com Badges e Overlays de Design */}
            <ScrollReveal animation="zoom-in" duration="duration-1000">
              <div className="relative group rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(13,44,84,0.15)] border-8 border-slate-50 aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                {/* Efeito de Gradiente por cima da imagem */}
                <div className="absolute inset-0 bg-gradient-to-t from-gama-navy/90 via-gama-navy/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
                
                {/* Imagem de Alta Qualidade Unsplash (Technical corporate team) */}
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Equipe Serviços Gama em reunião técnica" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Elementos Decorativos de Linha */}
                <div className="absolute top-6 left-6 z-20 flex gap-1.5">
                  <span className="w-8 h-2 bg-gama-orange rounded-full"></span>
                  <span className="w-4 h-2 bg-gama-blue rounded-full"></span>
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>

                {/* Informações Sobrepostas na Imagem (Legend) */}
                <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gama-orange/90 text-[10px] font-black uppercase tracking-widest mb-3">
                    <Users size={12} /> Equipe Operacional
                  </span>
                  <h4 className="text-2xl font-black tracking-tight mb-2">
                    Nosso time de especialistas em campo
                  </h4>
                  <p className="text-xs text-blue-100/80 font-medium leading-relaxed">
                    Profissionais treinados de acordo com os mais rigorosos padrões de segurança e normas técnicas nacionais.
                  </p>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20">
                  <div className="w-8 h-8 rounded-lg bg-gama-orange flex items-center justify-center text-white font-black text-sm">
                    ★
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Qualidade</div>
                    <div className="text-xs font-black text-gama-navy uppercase">100% Garantida</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Bloco de Valores com Design Inovador */}
            <ScrollReveal animation="slide-up" duration="duration-1000" delay="delay-200">
              <div className="logo-gradient p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full border border-white/10"></div>
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-gama-orange/10 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="text-gama-orange w-6 h-6 animate-pulse" />
                    <h4 className="text-2xl font-black italic">Nossos Princípios Fundamentais</h4>
                  </div>
                  <p className="text-blue-100/70 text-sm mb-6 leading-relaxed font-medium">
                    A base de todas as nossas parcerias é o compromisso com a integridade, transparência e eficiência em cada chamado técnico.
                  </p>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {[
                      { label: 'Ética Comercial', icon: <Award size={14} className="text-gama-orange" /> },
                      { label: 'Suporte Dedicado', icon: <Briefcase size={14} className="text-gama-blue" /> },
                      { label: 'Competência Técnica', icon: <Users size={14} className="text-gama-orange" /> },
                      { label: 'Compromisso com Prazo', icon: <Target size={14} className="text-gama-blue" /> }
                    ].map((val, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                          {val.icon}
                        </div>
                        <span className="font-bold uppercase text-[10px] tracking-wider text-blue-50">{val.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
