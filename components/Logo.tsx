
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
            <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3498DB" />
              <stop offset="100%" stopColor="#2980B9" />
            </linearGradient>
            <linearGradient id="orangeRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E67E22" />
              <stop offset="100%" stopColor="#F39C12" />
            </linearGradient>
          </defs>

          {/* Círculo de Fundo (Off-white) */}
          <circle cx="256" cy="256" r="240" fill="#FDFDFD" />
          
          {/* Aro Externo Azul Marinho */}
          <circle cx="256" cy="256" r="230" stroke="#0D2C54" strokeWidth="14" />

          {/* Arco Laranja de Fundo (Dinamismo) */}
          <path 
            d="M80 256 A 176 176 0 1 1 432 256" 
            stroke="url(#orangeRing)" 
            strokeWidth="40" 
            strokeLinecap="round" 
            fill="none" 
            opacity="0.8"
          />

          {/* Gráfico de Barras de Crescimento - Ligeiramente deslocado para a direita */}
          <g transform="translate(180, 420)">
            <rect x="0" y="-140" width="50" height="140" rx="10" fill="url(#barGradient)" className="transition-all duration-500 group-hover:height-[160px] group-hover:y-[-160px]" />
            <rect x="65" y="-220" width="50" height="220" rx="10" fill="url(#barGradient)" className="transition-all duration-700 group-hover:height-[240px] group-hover:y-[-240px]" />
            <rect x="130" y="-300" width="50" height="300" rx="10" fill="url(#barGradient)" className="transition-all duration-1000 group-hover:height-[340px] group-hover:y-[-340px]" />
          </g>

          {/* Engrenagem Técnica - Agora "encaixada" na primeira barra */}
          <g transform="translate(145, 275) scale(1.15)" className="transition-transform duration-1000 group-hover:rotate-45">
            <circle r="48" fill="#0D2C54" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
              <rect key={deg} x="-14" y="-65" width="28" height="28" rx="5" fill="#0D2C54" transform={`rotate(${deg})`} />
            ))}
            <circle r="22" fill="#FDFDFD" />
          </g>

          {/* Seta de Progresso - Seguindo o gráfico */}
          <path 
            d="M310 210 L 410 110 M 410 110 H 350 M 410 110 V 170" 
            stroke="#0D2C54" 
            strokeWidth="28" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
          />

          {/* Detalhes de Conexão entre Engrenagem e Gráfico (Sombras/Interseção) */}
          <rect x="180" y="270" width="10" height="10" fill="#0D2C54" opacity="0.3" className="rounded-full" />
          
          {/* Linhas Laterais Decorativas (Direita) */}
          <g opacity="0.4">
            <rect x="440" y="240" width="40" height="10" rx="5" fill="#E67E22" />
            <rect x="445" y="265" width="50" height="10" rx="5" fill="#0D2C54" />
            <rect x="440" y="290" width="40" height="10" rx="5" fill="#E67E22" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Logo;
