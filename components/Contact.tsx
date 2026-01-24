
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contato" className="bg-gama-navy pt-24 pb-12 text-white overflow-hidden relative">
      {/* Decorative logo background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gama-orange/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-sm font-black text-gama-orange uppercase tracking-[0.3em] mb-6">Fale Conosco</h2>
            <h3 className="text-5xl font-display font-black mb-10 leading-tight">Pronto para <br /> <span className="text-gama-blue italic underline underline-offset-8 decoration-gama-orange/30">transformar</span> seu projeto?</h3>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/10 text-gama-orange rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gama-orange group-hover:text-white transition-all shadow-xl">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] text-blue-200 mb-1">WhatsApp Comercial</h4>
                  <p className="text-2xl font-black">(31) 98390-3283</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/10 text-gama-orange rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gama-orange group-hover:text-white transition-all shadow-xl">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] text-blue-200 mb-1">E-mail Corporativo</h4>
                  <p className="text-xl font-bold">contato@servicosgama.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/10 text-gama-orange rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gama-orange group-hover:text-white transition-all shadow-xl">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] text-blue-200 mb-1">Área de Atuação</h4>
                  <p className="text-xl font-bold">Belo Horizonte e Região Metropolitana</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 mt-16">
              {[
                { icon: <Instagram size={22} />, link: "https://www.instagram.com/servicos.gama/" },
                { icon: <Facebook size={22} />, link: "#" },
                { icon: <Linkedin size={22} />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-gama-orange transition-all hover:-translate-y-1 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 sm:p-14 rounded-[3.5rem] shadow-2xl">
            <h4 className="text-3xl font-black text-gama-navy mb-8">Solicite seu <span className="text-gama-orange">Orçamento</span></h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Seu Nome</label>
                  <input 
                    type="text" 
                    placeholder="Ex: João Silva" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-gama-navy font-bold focus:outline-none focus:border-gama-orange transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="joao@email.com" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-gama-navy font-bold focus:outline-none focus:border-gama-orange transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Serviço de Interesse</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-gama-navy font-bold focus:outline-none focus:border-gama-orange transition-all appearance-none cursor-pointer">
                  <option>Vendas Técnicas</option>
                  <option>Pintura Profissional</option>
                  <option>Transporte Executivo</option>
                  <option>Manutenção MEI</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Sua Mensagem</label>
                <textarea 
                  placeholder="Descreva seu projeto ou necessidade..." 
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-gama-navy font-bold focus:outline-none focus:border-gama-orange transition-all"
                ></textarea>
              </div>
              <button className="w-full orange-gradient text-white font-black py-5 rounded-2xl hover:shadow-2xl hover:shadow-orange-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                ENVIAR AGORA
                <ExternalLink size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full border-2 border-gama-orange bg-white flex items-center justify-center font-black text-gama-navy text-[10px]">G</div>
             <div className="flex flex-col -space-y-1">
               <span className="font-black text-lg">Serviços <span className="text-gama-orange">Gama</span></span>
               <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-blue-200">Vendas Técnicas e Serviços</span>
             </div>
          </div>
          <p className="text-blue-100/40 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Serviços Gama. Qualidade e Competência.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-blue-100/40 hover:text-gama-orange text-[10px] font-black uppercase tracking-widest transition-colors">Privacidade</a>
            <a href="#" className="text-blue-100/40 hover:text-gama-orange text-[10px] font-black uppercase tracking-widest transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
