
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export type Page = 'home' | 'services' | 'casestudies' | 'about' | 'contact';
