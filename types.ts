
export interface SocialLink {
  id: string;
  title: string;
  url: string;
  icon: string;
  color: string;
  accentColor: string; // Color para la perilla y detalles visuales
  description?: string;
}

export interface Profile {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
}
