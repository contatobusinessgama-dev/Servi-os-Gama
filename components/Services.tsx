
import React from 'react';
import { 
  Wrench, 
  Paintbrush, 
  Briefcase, 
  Truck, 
  Car, 
  CheckCircle2 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'vendas-tecnicas',
      title: 'Vendas Técnicas',
      description: 'Consultoria e vendas de produtos técnicos com foco no melhor custo-benefício para sua obra ou manutenção.',
      icon: <Wrench className="w-8 h-8" />,
      features: ['Orientação Técnica', 'Projetos sob medida', 'Eficiência Operacional'],
      color: 'orange'
    },
    {
      id: 'pintura',
      title: 'Pintura & Textura',
      description: 'Acabamento de alto padrão para ambientes exigentes. Residencial, comercial e industrial.',
      icon: <Paintbrush className="w-8 h-8" />,
      features: ['Texturas Decorativas', 'Pintura Predial', 'Materiais Premium'],
      color: 'navy'
    },
    {
      id: 'mei-empresas',
      title: 'Suporte Empresarial',
      description: 'Apoio técnico e operacional para MEIs e empresas que buscam terceirização de confiança.',
      icon: <Briefcase className="w-8 h-8" />,
      features: ['Manutenção de Rotina', 'Apoio MEI', 'Consultoria Técnica'],
      color: 'blue'
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-black text-gama-orange uppercase tracking-[0.3em] mb-4">Portfólio</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-black text-gama-navy mb-6">Excelência em cada detalhe</h3>
          <p className="text-lg text-slate-500 font-medium italic">"Qualidade e Competência em cada serviço"</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-12 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(13,44,84,0.05)] border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] group-hover:bg-gama-beige/30 transition-colors -z-0"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gama-navy text-white group-hover:scale-110 group-hover:bg-gama-orange transition-all duration-500`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black text-gama-navy mb-4">{service.title}</h4>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gama-navy font-bold">
                      <CheckCircle2 className="text-gama-orange w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Transport Redesign */}
        <div className="bg-gama-navy rounded-[4rem] p-8 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gama-orange/10 -skew-x-12 translate-x-1/4"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gama-orange text-[10px] font-black uppercase tracking-widest mb-6 border border-white/5">
                Logística Premium
              </div>
              <h4 className="text-4xl lg:text-5xl font-display font-black mb-8 leading-tight">Transporte com <br /> <span className="text-gama-orange">Discrição & Conforto.</span></h4>
              <p className="text-blue-100/70 text-lg mb-10 leading-relaxed font-medium">
                Atendimento executivo para viagens corporativas, eventos e transporte especializado de cargas delicadas. Segurança absoluta e pontualidade rigorosa.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href="https://wa.me/5531983903283" className="orange-gradient text-white px-10 py-5 rounded-2xl font-black hover:shadow-2xl hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1">
                  Agendar Agora
                </a>
              </div>
            </div>

            <div className="grid gap-6">
               <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 flex items-center gap-6 group hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 bg-gama-orange rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-gama-orange/20">
                    <Truck size={32} />
                  </div>
                  <div>
                    <h5 className="text-xl font-black mb-1">Cargas & Normal</h5>
                    <p className="text-blue-100/60 text-sm font-medium">Eficiência e cuidado para sua logística diária.</p>
                  </div>
               </div>

               <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 flex items-center gap-6 group hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 bg-gama-blue rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-gama-blue/20">
                    <Car size={32} />
                  </div>
                  <div>
                    <h5 className="text-xl font-black mb-1">Executivo VIP</h5>
                    <p className="text-blue-100/60 text-sm font-medium">Máximo conforto para seus compromissos mais importantes.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
