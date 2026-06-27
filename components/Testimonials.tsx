import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Eduardo Santos",
    role: "Diretor Comercial",
    company: "Inovação Metalúrgica",
    text: "O atendimento de Vendas Técnicas da Serviços Gama é excepcional. Eles entenderam perfeitamente as especificações técnicas da nossa obra e entregaram todos os insumos com máxima qualidade e antecedência. Um parceiro indispensável para o nosso negócio.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    service: "Vendas Técnicas"
  },
  {
    id: 2,
    name: "Mariana Alvarenga",
    role: "Proprietária",
    company: "Espaço Bem-Estar",
    text: "Contratamos a Serviços Gama para a pintura técnica e textura de nossa nova clínica corporativa. O acabamento ficou impecável, o cronograma foi seguido à risca e os profissionais trabalharam com total limpeza e organização. Recomendamos sem dúvidas!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    service: "Pintura & Textura"
  },
  {
    id: 3,
    name: "Roberto Guimarães",
    role: "Coordenador de Facilities",
    company: "Tech Solutions BH",
    text: "Terceirizar nosso suporte operacional diário e manutenção com a Serviços Gama trouxe uma tranquilidade enorme para nossa gestão de facilities. Atendimento regional ágil, ético e extremamente técnico em todos os chamados.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    service: "Suporte Empresarial"
  },
  {
    id: 4,
    name: "Dra. Patrícia Silveira",
    role: "Sócia-Fundadora",
    company: "Silveira & Associados",
    text: "Utilizamos o serviço de Transporte Executivo VIP da Serviços Gama para nossos clientes corporativos internacionais. Carros novos, higienizados, condutores bilíngues discretos e pontualidade inglesa. Transmite total profissionalismo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    service: "Transporte Executivo VIP"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Autoplay do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="depoimentos" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Elementos visuais de fundo elegantes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gama-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gama-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho com ScrollReveal */}
        <ScrollReveal animation="slide-up" duration="duration-1000" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-black text-gama-orange uppercase tracking-[0.3em] mb-4 inline-block">
            Depoimentos de Sucesso
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-gama-navy mb-6 tracking-tight leading-tight">
            A Confiança de quem <br />trabalha com a <span className="text-gama-blue">Serviços Gama</span>
          </h2>
          <p className="text-slate-500 font-medium text-base">
            Garantimos a plena satisfação de nossos clientes corporativos e residenciais através de transparência, compromisso ético e alto padrão operacional.
          </p>
        </ScrollReveal>

        {/* Carrossel Principal com ScrollReveal */}
        <ScrollReveal animation="slide-up" duration="duration-1000" className="max-w-4xl mx-auto relative px-4">
          
          {/* Caixa de Depoimento Ativo */}
          <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-[0_30px_70px_-20px_rgba(13,44,84,0.08)] border border-slate-100 relative min-h-[380px] md:min-h-[300px] flex flex-col justify-between transition-all duration-300">
            
            {/* Ícone de Aspas Gigante */}
            <div className="absolute top-8 right-10 text-slate-100 -z-0">
              <Quote size={80} strokeWidth={1} className="opacity-60" />
            </div>

            <div className="relative z-10">
              {/* Estrelas de Avaliação e Categoria de Serviço */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gama-blue/10 text-gama-blue text-[10px] font-black uppercase tracking-wider">
                  <CheckCircle2 size={12} /> {testimonials[activeIndex].service}
                </span>
              </div>

              {/* Texto do Depoimento */}
              <p className={`text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic mb-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                "{testimonials[activeIndex].text}"
              </p>
            </div>

            {/* Autor do Depoimento */}
            <div className={`flex items-center gap-5 border-t border-slate-100 pt-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name} 
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-2 border-gama-orange/20 shadow-md"
              />
              <div>
                <h4 className="font-display font-black text-gama-navy text-base md:text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {testimonials[activeIndex].role} &bull; <span className="text-gama-orange">{testimonials[activeIndex].company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Controles de Navegação Flutuantes */}
          <div className="flex justify-center md:justify-between items-center mt-8 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 md:right-0 md:px-0">
            
            {/* Esquerdo */}
            <button 
              onClick={handlePrev}
              aria-label="Depoimento Anterior"
              className="md:-translate-x-1/2 w-12 h-12 rounded-2xl bg-white text-gama-navy border border-slate-100 shadow-lg flex items-center justify-center hover:bg-gama-navy hover:text-white transition-all transform hover:scale-110 active:scale-95 z-20 mx-2"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Direito */}
            <button 
              onClick={handleNext}
              aria-label="Próximo Depoimento"
              className="md:translate-x-1/2 w-12 h-12 rounded-2xl bg-white text-gama-navy border border-slate-100 shadow-lg flex items-center justify-center hover:bg-gama-navy hover:text-white transition-all transform hover:scale-110 active:scale-95 z-20 mx-2"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </ScrollReveal>

        {/* Indicadores de Paginação (Dots) */}
        <div className="flex justify-center gap-2.5 mt-10">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setActiveIndex(idx);
              }}
              aria-label={`Ir para depoimento ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-gama-orange' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>

        {/* Estatísticas de Confiança (Social Proof Stats Panel) com ScrollReveal */}
        <ScrollReveal animation="slide-up" duration="duration-1000" delay="delay-200">
          <div className="mt-20 max-w-5xl mx-auto bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-100">
            {[
              { value: "98%", label: "De Satisfação", highlight: "gama-orange" },
              { value: "1.200+", label: "Atendimentos", highlight: "gama-navy" },
              { value: "100%", label: "Pontualidade", highlight: "gama-blue" },
              { value: "24/7", label: "Suporte Técnico", highlight: "gama-orange" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center p-4 md:p-0">
                <span className={`text-4xl md:text-5xl font-display font-black tracking-tighter text-${stat.highlight} mb-2`}>
                  {stat.value}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Testimonials;
