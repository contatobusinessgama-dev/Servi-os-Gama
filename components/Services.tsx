
import React from 'react';
import { 
  Wrench, 
  Paintbrush, 
  Briefcase, 
  Truck, 
  Car, 
  CheckCircle2 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  const services = [
    {
      id: 'vendas-tecnicas',
      title: 'Vendas Técnicas',
      description: 'Consultoria e vendas de produtos técnicos com foco no melhor custo-benefício para sua obra ou manutenção.',
      icon: <Wrench className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
      features: ['Orientação Técnica', 'Projetos sob medida', 'Eficiência Operacional'],
      delayClass: 'delay-100' as const
    },
    {
      id: 'pintura',
      title: 'Pintura & Textura',
      description: 'Acabamento de alto padrão para ambientes exigentes. Residencial, comercial e industrial.',
      icon: <Paintbrush className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=600&auto=format&fit=crop",
      features: ['Texturas Decorativas', 'Pintura Predial', 'Materiais Premium'],
      delayClass: 'delay-300' as const
    },
    {
      id: 'mei-empresas',
      title: 'Suporte Empresarial',
      description: 'Apoio técnico e operacional para MEIs e empresas que buscam terceirização de confiança.',
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
      features: ['Manutenção de Rotina', 'Apoio MEI', 'Consultoria Técnica'],
      delayClass: 'delay-500' as const
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <ScrollReveal animation="slide-up" duration="duration-1000" className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-black text-gama-orange uppercase tracking-[0.3em] mb-4">Portfólio</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-black text-gama-navy mb-6">Excelência em cada detalhe</h3>
          <p className="text-lg text-slate-500 font-medium italic">"Qualidade e Competência em cada serviço"</p>
        </ScrollReveal>

        {/* Grid de Serviços com Staggered ScrollReveal */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {services.map((service) => (
            <ScrollReveal 
              key={service.id} 
              animation="slide-up" 
              duration="duration-1000" 
              delay={service.delayClass}
              className="flex h-full"
            >
              <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(13,44,84,0.05)] border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col w-full">
                {/* Imagem de Capa do Serviço */}
                <div className="h-52 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute top-6 left-6 z-20 w-12 h-12 rounded-xl flex items-center justify-center bg-gama-navy text-white group-hover:scale-110 group-hover:bg-gama-orange transition-all duration-500 shadow-md`}>
                    {service.icon}
                  </div>
                </div>

                <div className="p-10 pt-4 flex-grow relative z-10">
                  <h4 className="text-2xl font-black text-gama-navy mb-4">{service.title}</h4>
                  <p className="text-slate-500 mb-8 leading-relaxed font-medium text-sm">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gama-navy font-bold">
                        <CheckCircle2 className="text-gama-orange w-5 h-5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Transport Redesign com ScrollReveal */}
        <ScrollReveal animation="slide-up" duration="duration-1000">
          <div className="bg-gama-navy rounded-[4rem] p-8 lg:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gama-orange/10 -skew-x-12 translate-x-1/4"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gama-orange text-[10px] font-black uppercase tracking-widest mb-6 border border-white/5">
                  Logística Premium
                </div>
                <h4 className="text-4xl lg:text-5xl font-display font-black mb-8 leading-tight">Transporte com <br /> <span className="text-gama-orange">Discrição & Conforto.</span></h4>
                <p className="text-blue-100/70 text-lg mb-10 leading-relaxed font-medium">
                  Atendimento executivo exclusivo para viagens de negócios, traslados de diretoria, eventos corporativos e receptivo VIP. Segurança absoluta e pontualidade de alto nível.
                </p>
                <div className="flex flex-wrap gap-5">
                  <a href="https://wa.me/5531984279865" className="orange-gradient text-white px-10 py-5 rounded-2xl font-black hover:shadow-2xl hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1">
                    Agendar Agora
                  </a>
                </div>
              </div>

              <div className="grid gap-6">
                 <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 flex items-center gap-6 group hover:bg-white/10 transition-all">
                    <div className="w-16 h-16 bg-gama-blue rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-gama-blue/20">
                      <Car size={32} />
                    </div>
                    <div>
                      <h5 className="text-xl font-black mb-1">Executivo VIP</h5>
                      <p className="text-blue-100/60 text-sm font-medium">Veículos de alto padrão com absoluto conforto, privacidade e pontualidade.</p>
                    </div>
                 </div>

                 <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 flex items-center gap-6 group hover:bg-white/10 transition-all">
                    <div className="w-16 h-16 bg-gama-orange rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-gama-orange/20">
                      <Briefcase size={32} />
                    </div>
                    <div>
                      <h5 className="text-xl font-black mb-1">Viagens & Corporativo</h5>
                      <p className="text-blue-100/60 text-sm font-medium">Atendimento a traslados de diretoria, reuniões de negócios e eventos.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Services;
