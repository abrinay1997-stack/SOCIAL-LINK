
import React from 'react';
import { SocialLink } from '../types';
import { IconRenderer } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface LinkCardProps {
  link: SocialLink;
  index: number;
}

const getTechnicalTag = (id: string) => {
  switch (id) {
    case 'portfolio': return 'MASTERED / 24-BIT';
    case 'tiktok': return 'BITRATE: HIGH';
    case 'youtube': return 'SIGNAL: 4K SYNC';
    case 'instagram': return 'PHASE: ALIGNED';
    case 'x': return 'RAW DATA';
    default: return 'SIGNAL: ON';
  }
};

const LinkCard: React.FC<LinkCardProps> = ({ link, index }) => {
  const displayIndex = (index + 1).toString().padStart(2, '0');
  const techTag = getTechnicalTag(link.id);

  // Extraemos las clases de color de acento
  const accentClasses = link.accentColor || 'border-white/10 group-hover:border-white text-white';
  const textColor = accentClasses.split(' ').find(c => c.startsWith('text-')) || 'text-white';

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full mb-3 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]"
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      {/* Indicador lateral de 'Pista Seleccionada' */}
      <div className={`absolute left-0 top-0 bottom-0 w-0 bg-current transition-all duration-300 group-hover:w-1 z-30 ${textColor}`}></div>
      
      <div className="relative glass px-5 py-4 flex items-center justify-between transition-all duration-300 group-hover:bg-[#0c0c0c] border-white/5 group-hover:border-white/10 group-active:scale-[0.99]">
        
        <div className="flex items-center space-x-5 z-10">
          {/* Track Number / Index */}
          <div className="flex flex-col items-center">
            <span className="mono text-[9px] opacity-20 group-hover:opacity-100 transition-opacity mb-1">
              CH-{displayIndex}
            </span>
            {/* Visualizador de Señal (Mini VU Meter) con color de acento */}
            <div className="flex items-end space-x-[2px] h-3 w-4">
              <div className={`w-[2px] bg-white/10 group-hover:bg-current group-hover:animate-[vu-1_0.6s_infinite] h-1 ${textColor}`}></div>
              <div className={`w-[2px] bg-white/10 group-hover:bg-current group-hover:animate-[vu-2_0.4s_infinite] h-2 ${textColor}`}></div>
              <div className={`w-[2px] bg-white/10 group-hover:bg-current group-hover:animate-[vu-3_0.8s_infinite] h-1.5 ${textColor}`}></div>
            </div>
          </div>

          {/* Perilla / Icono con color personalizado */}
          <div className={`relative p-2.5 rounded-full border transition-all duration-500 bg-neutral-900/50 group-hover:rotate-12 ${accentClasses}`}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-current opacity-40 group-hover:opacity-100"></div>
            <IconRenderer name={link.icon} className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] leading-none text-white/80 group-hover:text-white transition-colors">
                {link.title}
              </h3>
            </div>
            
            <div className="flex items-center mt-2 space-x-3">
              <span className={`mono text-[8px] px-1.5 py-[1px] bg-white/5 border border-white/5 uppercase tracking-tighter transition-colors group-hover:border-current/20 ${textColor}`}>
                {techTag}
              </span>
              <p className="mono text-[9px] uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity hidden sm:block">
                {link.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Gain Slider / Arrow UI */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-1 opacity-5 group-hover:opacity-20 transition-opacity">
            <div className="w-12 h-[1px] bg-white"></div>
            <span className="mono text-[8px]">+12dB</span>
          </div>
          <div className={`relative overflow-hidden w-5 h-5 flex items-center justify-center transition-colors ${textColor}`}>
             <ArrowUpRight className="w-4 h-4 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 translate-y-4 -translate-x-4 opacity-0 group-hover:opacity-100" />
             <div className="w-1 h-1 bg-current opacity-20 group-hover:opacity-0 transition-opacity rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Glow Effect sutil con el color de acento */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 -z-10 bg-current ${textColor}`}></div>
    </a>
  );
};

export default LinkCard;
