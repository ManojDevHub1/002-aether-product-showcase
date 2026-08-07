export interface IndustryAward {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: string;
}

export interface MediaQuote {
  id: string;
  outlet: string;
  headline: string;
  quote: string;
  author: string;
  role: string;
}

export interface GlobalMetric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface TrustPrinciple {
  id: string;
  title: string;
  badge: string;
  description: string;
}
