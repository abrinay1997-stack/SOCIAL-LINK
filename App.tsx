
import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { SOCIAL_LINKS, USER_PROFILE, CONTACT_METHODS, IconRenderer } from './constants';
import LinkCard from './components/LinkCard';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center py-20 px-6 overflow-hidden bg-[#050505]">
      {/* Subtle Smog Effect */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none"></div>

      <main className="w-full max-w-[420px] z-20 flex flex-col items-center">
        {/* Profile Section */}
        <div className={`flex flex-col items-center text-center mb-16 transition-all duration-[1500ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative mb-12 group cursor-crosshair">
            {/* Contenedor de la foto circular */}
            <div className="relative z-10 w-32 h-32 rounded-full border border-white/5 shadow-[0_0_60px_rgba(255,255,255,0.03)] overflow-hidden">
              <img 
                src={USER_PROFILE.avatarUrl} 
                alt={USER_PROFILE.name}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-1 right-1 bg-white rounded-full p-1 z-20 shadow-xl border-4 border-[#050505]">
              <ShieldCheck className="w-3 h-3 text-black" />
            </div>
          </div>

          <h1 className="brand-reveal text-5xl md:text-6xl mb-6 uppercase">
            {USER_PROFILE.name}
          </h1>
          
          <div className="flex items-center space-x-3 mb-10 mono">
            <span className="h-[1px] w-3 bg-white/10"></span>
            <p className="text-white/30 text-[9px] uppercase tracking-[0.5em] font-bold">{USER_PROFILE.handle}</p>
            <span className="h-[1px] w-3 bg-white/10"></span>
          </div>

          <div className="relative py-8 border-t border-white/5 w-full">
             <p className="mono text-white/40 max-w-[320px] mx-auto text-[9px] leading-relaxed uppercase tracking-[0.2em] whitespace-pre-line">
              {USER_PROFILE.bio}
            </p>
          </div>
        </div>

        {/* Links Section */}
        <section className="w-full space-y-2">
          {SOCIAL_LINKS.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </section>

        {/* Contact CTA Section - Minimalist Industrial */}
        <div 
          className={`mt-20 w-full transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="border border-white/5 p-8 relative overflow-hidden group">
            <h2 className="text-[10px] font-extrabold text-white/40 mb-6 uppercase tracking-[0.4em] flex items-center">
              <span className="w-6 h-[1px] bg-white/10 mr-4"></span>
              DIRECT CHANNEL
            </h2>
            
            <div className="grid grid-cols-1 gap-2 w-full">
              {CONTACT_METHODS.map((method) => (
                <a 
                  key={method.name}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono flex items-center justify-between p-4 border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500 text-[9px] uppercase tracking-[0.25em] text-white/40 hover:text-white"
                >
                  <div className="flex items-center">
                    <IconRenderer name={method.icon} className="w-3 h-3 mr-4 opacity-50" />
                    {method.name}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/60 transition-colors"></span>
                    <span className="text-[7px] opacity-20 group-hover:opacity-40">CONNECT</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 py-10 mono text-white/10 text-[7px] tracking-[0.6em] uppercase flex flex-col items-center">
          <div className="h-[60px] w-[1px] bg-gradient-to-b from-white/10 to-transparent mb-8"></div>
          <p className="mb-2">EST. 1997 / VOID RECORDS</p>
          <p>© {new Date().getFullYear()} {USER_PROFILE.name} // ALL RIGHTS RESERVED</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
