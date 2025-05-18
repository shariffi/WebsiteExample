export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface ValueProp {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  id: number;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  ctaText: string;
  recommended?: boolean;
  oneTimeCost?: number; // Add this property
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
  category: string;
}