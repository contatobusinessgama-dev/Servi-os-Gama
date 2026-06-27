
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`${className} flex items-center justify-center relative group select-none`}>
      <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-md">
        <defs>
          <linearGradient id="orangeArcGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D35400" />
            <stop offset="50%" stopColor="#E67E22" />
            <stop offset="100%" stopColor="#F39C12" />
          </linearGradient>
          
          <linearGradient id="blueArcGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1F3A60" />
            <stop offset="50%" stopColor="#2980B9" />
            <stop offset="100%" stopColor="#3498DB" />
          </linearGradient>

          <linearGradient id="barOrangeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#D35400" />
            <stop offset="100%" stopColor="#F1C40F" />
          </linearGradient>

          <linearGradient id="barBlueGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1B4F72" />
            <stop offset="100%" stopColor="#5DADE2" />
          </linearGradient>
        </defs>

        {/* Arco Laranja Externo (Lado Esquerdo) */}
        <path 
          d="M 210 80 A 185 185 0 1 0 345 385" 
          stroke="url(#orangeArcGrad)" 
          strokeWidth="32" 
          fill="none" 
          strokeLinecap="round" 
        />

        {/* Arco Azul Externo (Lado Direito) */}
        <path 
          d="M 310 405 A 185 185 0 0 0 415 180" 
          stroke="url(#blueArcGrad)" 
          strokeWidth="32" 
          fill="none" 
          strokeLinecap="round" 
        />

        {/* Seta de Crescimento Integrada no Arco Azul */}
        <path 
          d="M 390 210 L 450 130" 
          stroke="url(#blueArcGrad)" 
          strokeWidth="32" 
          strokeLinecap="round" 
        />
        
        {/* Ponta da Seta */}
        <path 
          d="M 475 100 L 385 125 L 410 145 L 415 195 Z" 
          fill="url(#blueArcGrad)" 
          stroke="url(#blueArcGrad)" 
          strokeWidth="4" 
          strokeLinejoin="round" 
        />

        {/* Arco Azul Interno Secundário (Trás do Profissional) */}
        <path 
          d="M 180 125 A 185 185 0 0 1 405 170" 
          stroke="url(#blueArcGrad)" 
          strokeWidth="16" 
          fill="none" 
          opacity="0.35" 
          strokeLinecap="round" 
        />

        {/* Engrenagem Laranja (Lado Esquerdo) */}
        <g transform="translate(135, 256) rotate(22.5)">
          <circle r="36" fill="url(#orangeArcGrad)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
            <rect key={deg} x="-9" y="-46" width="18" height="18" rx="4" fill="url(#orangeArcGrad)" transform={`rotate(${deg})`} />
          ))}
          <circle r="16" fill="#FFFFFF" />
        </g>

        {/* Barras de Gráficos de Crescimento (Esquerda - Laranja/Amarelo) */}
        <rect x="190" y="325" width="18" height="55" rx="5" fill="url(#barOrangeGrad)" />
        <rect x="214" y="285" width="18" height="95" rx="5" fill="url(#barOrangeGrad)" />

        {/* Barras de Gráficos de Crescimento (Direita - Azul) */}
        <rect x="284" y="285" width="18" height="95" rx="5" fill="url(#barBlueGrad)" />
        <rect x="308" y="245" width="18" height="135" rx="5" fill="url(#barBlueGrad)" />
        <rect x="332" y="205" width="18" height="175" rx="5" fill="url(#barBlueGrad)" />

        {/* Linhas Decorativas de Movimento (Esquerda) */}
        <g transform="translate(10, 236)">
          <rect x="25" y="0" width="35" height="8" rx="4" fill="url(#orangeArcGrad)" />
          <rect x="10" y="14" width="50" height="8" rx="4" fill="url(#orangeArcGrad)" />
          <rect x="25" y="28" width="35" height="8" rx="4" fill="url(#orangeArcGrad)" />
        </g>

        {/* Linhas Decorativas de Movimento (Direita) */}
        <g transform="translate(415, 236)">
          <rect x="15" y="0" width="35" height="8" rx="4" fill="url(#blueArcGrad)" />
          <rect x="15" y="14" width="50" height="8" rx="4" fill="url(#blueArcGrad)" />
          <rect x="15" y="28" width="35" height="8" rx="4" fill="url(#orangeArcGrad)" />
        </g>

        {/* Profissional de Terno (Centralizado) */}
        <g transform="translate(256, 235)">
          {/* Cabeça */}
          <circle cx="0" cy="-110" r="30" fill="#0D2C54" />
          
          {/* Pescoço */}
          <path d="M -10 -82 L 10 -82 L 8 -70 L -8 -70 Z" fill="#0D2C54" />
          
          {/* Paletó do Terno */}
          <path d="M -45 -70 C -60 -70, -75 -50, -75 -40 L -65 60 C -65 70, -50 80, -40 80 L -30 160 H 30 L 40 80 C 50 80, 65 70, 65 60 L 75 -40 C 75 -50, 60 -70, 45 -70 Z" fill="#0D2C54" />
          
          {/* Camisa Branca (V-Neck) */}
          <polygon points="0,-70 -18,-70 -11,-35 0,-15 11,-35 18,-70" fill="#FFFFFF" />
          
          {/* Gravata Marinho */}
          <polygon points="0,-50 -5,-40 -3,15 0,32 3,15 5,-40" fill="#0D2C54" />
          
          {/* Lapelas do Terno com realce de borda branca fina */}
          <path d="M -18 -70 L -4 -35 L -30 -45 Z" fill="#0D2C54" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M 18 -70 L 4 -35 L 30 -45 Z" fill="#0D2C54" stroke="#FFFFFF" strokeWidth="1" />
          
          {/* Braços com leve sombreamento de cor */}
          <path d="M -50 -70 C -62 -65, -72 -45, -72 -25 L -63 40 C -63 48, -53 48, -53 40 L -50 -20 C -50 -28, -45 -48, -45 -48 Z" fill="#0A1E3A" />
          <path d="M 50 -70 C 62 -65, 72 -45, 72 -25 L 63 40 C 63 48, 53 48, 53 40 L 50 -20 C 50 -28, 45 -48, 45 -48 Z" fill="#0A1E3A" />

          {/* Mãos */}
          <circle cx="-58" cy="46" r="6" fill="#0D2C54" />
          <circle cx="58" cy="46" r="6" fill="#0D2C54" />

          {/* Pernas / Calças */}
          <path d="M -22 155 L -12 250 H -1 L -3 160 L 3 160 L 1 250 H 12 L 22 155 Z" fill="#0D2C54" />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
