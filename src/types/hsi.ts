export type PillarId = 'smart' | 'safe' | 'shape' | 'sure';

export interface HSIPillar {
  id: PillarId;
  name: string;
  fullForm: string;
  tagline: string;
  description: string;
  color: string;
  accentColor: string;
  subPrograms: string[];
  keyStats: string;
  iconName: string;
  href: string;
}

export interface AthleteStage {
  step: number;
  title: string;
  pillar: PillarId;
  description: string;
  icon: string;
}

export interface MembershipTier {
  id: 'beginner' | 'pro' | 'elite';
  name: string;
  priceYr: number;
  originalPrice: number;
  popular?: boolean;
  features: string[];
  consultations: string;
  appAccess: string;
  insuranceCoverage: string;
  ctaText: string;
}

export interface HotspotPoint {
  id: string;
  name: string;
  bodyRegion: string;
  x: number; // percentage offset on hero image
  y: number;
  eyebrow: string;
  title: string;
  description: string;
  preventionTip: string;
  pillarLink: PillarId;
}

export type UXStateType = 
  | 'empty'
  | 'error'
  | 'loading'
  | 'no-internet'
  | 'slow-internet'
  | 'no-results'
  | 'permission-denied'
  | 'session-expired'
  | 'validation-error'
  | 'success';

export interface UserRole {
  role: 'SUPER_ADMIN' | 'HOSPITAL_ADMIN' | 'DOCTOR' | 'SPORTS_PHYSICIAN' | 'PHYSIO' | 'MARKETING' | 'ATHLETE' | 'GUEST';
  permissions: string[];
}

export interface SOWRequestPayload {
  organizationName: string;
  eventType: string;
  eventDate: string;
  location: string;
  expectedAthletes: number;
  contactPerson: string;
  phone: string;
  email: string;
  notes?: string;
  honeypot?: string;
}

export interface DonationPayload {
  amount: number;
  donorName: string;
  email: string;
  phone: string;
  panNumber?: string;
  isCSR: boolean;
  companyName?: string;
}
