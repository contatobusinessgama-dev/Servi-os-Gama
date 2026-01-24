
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    { role: 'bot', content: 'Olá! Sou o assistente da Serviços Gama. Como posso ajudar você com nossos serviços técnicos ou transporte?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMessage);
    setMessages(prev => [...prev, { role: 'bot', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gama-navy text-white p-5 rounded-full shadow-[0_20px_50px_rgba(13,44,84,0.3)] hover:bg-gama-orange hover:scale-110 transition-all flex items-center gap-2 group border-2 border-white"
        >
          <Bot size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black uppercase text-xs tracking-widest whitespace-nowrap px-0 group-hover:px-2">
            Gama AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] sm:w-[400px] h-[550px] rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(13,44,84,0.4)] border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gama-navy p-6 text-white flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gama-orange/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-2.5 bg-gama-orange rounded-xl shadow-lg">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <div className="font-black text-sm uppercase tracking-wider">Suporte Gama AI</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-blue-200 uppercase font-bold tracking-widest">Especialista Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors relative z-10">
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${m.role === 'user' ? 'bg-gama-orange text-white' : 'bg-gama-navy text-white'}`}>
                    {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed font-medium ${m.role === 'user' ? 'bg-gama-orange text-white rounded-tr-none shadow-md' : 'bg-white text-gama-navy shadow-sm border border-slate-100 rounded-tl-none'}`}>
                    {m.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-1.5 h-1.5 bg-gama-orange rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gama-orange rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-gama-orange rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Qual sua dúvida hoje?"
                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gama-orange/20 focus:border-gama-orange transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-gama-navy text-white p-3 rounded-2xl hover:bg-gama-orange disabled:bg-slate-300 transition-all shadow-lg"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="mt-3 text-[9px] text-center text-slate-400 font-black uppercase tracking-[0.2em]">
              Qualidade e Competência
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
