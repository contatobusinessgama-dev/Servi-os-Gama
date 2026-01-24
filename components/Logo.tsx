
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`${className} flex items-center justify-center relative group select-none`}>
      {!imgError ? (
        <img 
          src="logo.png" 
          alt="Serviços Gama" 
          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-xl">
          <defs>
            <linearGradient id="gamaPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D2C54" />
              <stop offset="100%" stopColor="#1E4B8A" />
            </linearGradient>
            <linearGradient id="gamaAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F39C12" />
              <stop offset="100%" stopColor="#E67E22" />
            </linearGradient>
            <linearGradient id="gamaLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3498DB" />
              <stop offset="100%" stopColor="#2980B9" />
            </linearGradient>
            
            {/* Glossy Effect */}
            <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Shield - Geometria Hexagonal Suave */}
          <path d="M256 40L440 140V372L256 472L72 372V140L256 40Z" fill="white" className="opacity-10" />
          
          {/* O NOVO "G" MONOGRAMA - Três pilares integrados */}
          <g filter="url(#innerGlow)">
            {/* Segmento Superior (Pilar Técnico) */}
            <path 
              d="M160 140 H 350 C 380 140, 400 160, 400 190 V 220 H 320 V 190 H 160 V 320 H 320 V 280 H 400 V 322 C 400 380, 350 420, 256 420 C 120 420, 80 340, 80 256 C 80 150, 150 140, 160 140Z" 
              fill="url(#gamaPrimary)" 
              className="transition-all duration-500 group-hover:opacity-90"
            />
            
            {/* Elemento de Conexão Central (Destaque Orange) */}
            <path 
              d="M320 220 H 420 V 280 H 320 V 220Z" 
              fill="url(#gamaAccent)" 
              className="transition-all duration-300 group-hover:translate-x-2"
            />
            
            {/* Detalhe de Precisão (Pilar de Serviços) */}
            <path 
              d="M120 230 L 160 210 V 302 L 120 282 V 230Z" 
              fill="url(#gamaLight)" 
              opacity="0.8"
            />
          </g>

          {/* Dots Decorativos - Representando Redes e Pontos de Atendimento */}
          <circle cx="256" cy="40" r="12" fill="url(#gamaAccent)" />
          <circle cx="440" cy="140" r="8" fill="url(#gamaLight)" />
          <circle cx="440" cy="372" r="8" fill="url(#gamaPrimary)" />
          <circle cx="72" cy="140" r="8" fill="url(#gamaLight)" />
          
          {/* Linha de Base - Fundamento */}
          <rect x="180" y="450" width="152" height="6" rx="3" fill="url(#gamaPrimary)" opacity="0.2" />
        </svg>
      )}
    </div>
  );
};

export default Logo;
