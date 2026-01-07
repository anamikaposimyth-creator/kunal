
import React from 'react';
import { 
  BarChart3, 
  Cloud, 
  Code2, 
  Globe, 
  Lightbulb, 
  Rocket, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { Service, CaseStudy, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems to drive efficiency and innovation.',
    icon: 'Rocket',
    details: [
      'Legacy Modernization',
      'Process Automation',
      'Enterprise Architecture',
      'Digital Roadmapping'
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for your growing business.',
    icon: 'Cloud',
    details: [
      'Cloud Migration',
      'Multi-cloud Strategy',
      'DevOps Automation',
      'Security Compliance'
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data & AI Strategy',
    description: 'Leveraging data to uncover insights and drive decision making.',
    icon: 'BarChart3',
    details: [
      'Predictive Analytics',
      'Machine Learning Models',
      'Data Warehousing',
      'Business Intelligence'
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    description: 'Bespoke web and mobile applications tailored to your needs.',
    icon: 'Code2',
    details: [
      'Full-stack Development',
      'Mobile App Design',
      'API Integration',
      'UX/UI Design'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-revamp',
    client: 'Apex Financial',
    title: 'Modernizing Core Banking Systems',
    category: 'Finance',
    challenge: 'An aging infrastructure was slowing down transaction speeds and increasing security risks.',
    solution: 'We implemented a serverless architecture with real-time data synchronization across global nodes.',
    result: '45% increase in transaction speed and 30% reduction in operational costs.',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'retail-ai',
    client: 'Urban Mart',
    title: 'AI-Powered Inventory Optimization',
    category: 'Retail',
    challenge: 'Overstocking led to high waste, while stockouts resulted in lost sales.',
    solution: 'A custom ML model predicting demand patterns with 94% accuracy.',
    result: '12% increase in annual profit margin and zero stockout incidents in Q4.',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'health-cloud',
    client: 'BioStream Health',
    title: 'Secure Cloud Migration for Health Records',
    category: 'Healthcare',
    challenge: 'Need to migrate 5PB of sensitive patient data while maintaining 100% HIPAA compliance.',
    solution: 'Hybrid-cloud migration strategy with end-to-end encryption and automated audit logs.',
    result: 'Successful migration with zero downtime and improved data accessibility for doctors.',
    image: 'https://picsum.photos/800/600?random=3'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    bio: 'Former CTO with 20 years of experience in enterprise digital transformation.',
    image: 'https://picsum.photos/400/400?random=11'
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of AI & Data',
    bio: 'PhD in Computer Science, specialized in neural networks and predictive modeling.',
    image: 'https://picsum.photos/400/400?random=12'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lead UX Strategist',
    bio: 'Passionate about creating human-centric digital experiences that convert.',
    image: 'https://picsum.photos/400/400?random=13'
  }
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'Rocket': return <Rocket className={className} />;
    case 'Cloud': return <Cloud className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    case 'Code2': return <Code2 className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Lightbulb': return <Lightbulb className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Zap': return <Zap className={className} />;
    default: return <Zap className={className} />;
  }
};
