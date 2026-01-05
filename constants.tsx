
import React from 'react';
import { 
  Youtube, 
  Instagram, 
  Twitter, 
  Music, 
  ExternalLink, 
  Mail, 
  Send as SendIcon, 
  MessageSquare,
  Mic2,
  Disc
} from 'lucide-react';
import { SocialLink, Profile } from './types';

export const USER_PROFILE: Profile = {
  name: "ABRINAY",
  handle: "PRODUCER MUSIC // ARTIST",
  bio: "Diseño Sonoro | Composición | Grabacion | Mezcla | Mastering",
  avatarUrl: "https://pbs.twimg.com/profile_images/1628222549631852544/-slaixel_400x400.jpg"
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'portfolio',
    title: ' / PORTAFOLIO',
    url: 'https://abrinay1997-stack.github.io/Abrinay-portafolio/',
    icon: 'disc',
    color: 'from-neutral-800 to-neutral-950',
    accentColor: 'border-amber-500/30 group-hover:border-amber-500 text-amber-500',
    description: 'MATERIAL INÉDITO Y MASTERIZADO'
  },
  {
    id: 'tiktok',
    title: ' / TIKTOK',
    url: 'https://www.tiktok.com/@abrinay',
    icon: 'tiktok',
    color: 'from-neutral-900 to-black',
    accentColor: 'border-cyan-500/30 group-hover:border-cyan-400 text-cyan-400',
    description: 'PROCESO Y CAOS'
  },
  {
    id: 'youtube',
    title: ' / YOUTUBE',
    url: 'https://www.youtube.com/@Abrinay_',
    icon: 'youtube',
    color: 'from-neutral-800 via-neutral-900 to-black',
    accentColor: 'border-red-600/30 group-hover:border-red-500 text-red-500',
    description: 'LA EXPERIENCIA CINEMÁTICA'
  },
  {
    id: 'instagram',
    title: ' / INSTAGRAM',
    url: 'https://www.instagram.com/abrinay_/',
    icon: 'instagram',
    color: 'from-neutral-700 to-neutral-900',
    accentColor: 'border-pink-600/30 group-hover:border-pink-500 text-pink-500',
    description: 'OBSESIONES DIARIAS'
  },
  {
    id: 'x',
    title: ' / X',
    url: 'https://x.com/abrinaystudios',
    icon: 'twitter',
    color: 'from-neutral-900 to-black',
    accentColor: 'border-indigo-400/30 group-hover:border-indigo-400 text-indigo-400',
    description: 'PENSAMIENTOS SIN FILTRO'
  }
];

export const CONTACT_METHODS = [
  {
    name: 'WHATSAPP',
    url: 'https://wa.me/message/FPGTFNBU6YMLM1',
    icon: 'whatsapp',
    color: 'bg-neutral-100'
  },
  {
    name: 'TELEGRAM',
    url: 'https://t.me/SoyAbrinay_',
    icon: 'telegram',
    color: 'bg-neutral-800'
  },
  {
    name: 'CORREO',
    url: 'mailto:abrinay1997@gmail.com',
    icon: 'email',
    color: 'bg-neutral-500'
  }
];

export const IconRenderer: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  switch (name) {
    case 'disc': return <Disc className={className} />;
    case 'youtube': return <Youtube className={className} />;
    case 'instagram': return <Instagram className={className} />;
    case 'twitter': return <Twitter className={className} />;
    case 'tiktok': return <Music className={className} />;
    case 'whatsapp': return <MessageSquare className={className} />;
    case 'telegram': return <SendIcon className={className} />;
    case 'email': return <Mail className={className} />;
    case 'mic': return <Mic2 className={className} />;
    default: return <ExternalLink className={className} />;
  }
};
