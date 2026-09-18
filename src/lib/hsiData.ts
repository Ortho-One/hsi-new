import { HSIPillar, AthleteStage, MembershipTier, HotspotPoint } from '@/types/hsi';

export const HSI_PILLARS: HSIPillar[] = [
  {
    id: 'smart',
    name: 'SMART',
    fullForm: 'Sports Medicine Access, Response & Timely Reach',
    tagline: 'Rapid access via telemedicine & on-field emergency care',
    description: 'Delivering instant sports medicine care on the field and through digital telemedicine channels across South India.',
    color: '#1D4589',
    accentColor: '#F6AF1F',
    subPrograms: [
      'SOW (Sportsmed On Wheels — on-field mobile ambulance & care)',
      'SMC (Sports Med Connect — direct teleconsultation with specialists)'
    ],
    keyStats: '1,00,000+ athletes reached · 500+ sports camps · State-wide coverage',
    iconName: 'Ambulance',
    href: '/smart'
  },
  {
    id: 'safe',
    name: 'SAFE',
    fullForm: 'Sports Awareness For Everyone',
    tagline: 'Preventing injuries before they happen',
    description: 'Empowering athletes, coaches, and parents with science-based injury prevention knowledge and capacity-building workshops.',
    color: '#1D4589',
    accentColor: '#F6AF1F',
    subPrograms: [
      'Capacity-Building Workshops & Talks',
      'National Mega Conferences on Sports Science',
      'School & Academy Safe-Play Certifications'
    ],
    keyStats: '5,000+ coaches trained · 10+ mega conferences · 100+ school talks',
    iconName: 'ShieldCheck',
    href: '/safe'
  },
  {
    id: 'shape',
    name: 'SHAPE',
    fullForm: 'Sports Health Assessment & Performance Evaluation',
    tagline: 'Science-driven individual profiling & monitoring',
    description: 'Comprehensive biomechanical profiling, VO2 max testing, movement screening, and SafePlay Athlete Management System (AMS) tracking.',
    color: '#1D4589',
    accentColor: '#F6AF1F',
    subPrograms: [
      'Functional Movement Screening (FMS)',
      'Body Composition Analysis (BCA) & VO2 Max',
      'SafePlay Athlete Management System (AMS)',
      'HSI Annual Athlete Membership Tiers'
    ],
    keyStats: '70,000+ athletes assessed · Custom sports diet & fitness plans',
    iconName: 'Activity',
    href: '/shape'
  },
  {
    id: 'sure',
    name: 'SURE',
    fullForm: 'Sports Surgery, Rehabilitation & Empowerment',
    tagline: 'Precision surgery to sustainable return to play',
    description: 'Advanced arthroscopic surgical intervention, structured physiotherapy rehabilitation, and return-to-play objective clearance.',
    color: '#1D4589',
    accentColor: '#F6AF1F',
    subPrograms: [
      'Keyhole Arthroscopic Surgeries',
      'Targeted Post-Op Sports Physiotherapy',
      'RTP (Return To Play) Clinical Assessment',
      'Ortho Aid Financial Support for Needy Athletes'
    ],
    keyStats: '5,000+ treated · 25,000+ arthroscopies · ₹1.5 Cr+ subsidised support',
    iconName: 'Stethoscope',
    href: '/sure'
  }
];

export const ATHLETE_JOURNEY: AthleteStage[] = [
  { step: 1, title: 'Awareness', pillar: 'safe', description: 'Participating in SAFE capacity-building workshops & injury prevention talks.', icon: 'Megaphone' },
  { step: 2, title: 'Prevention', pillar: 'safe', description: 'Mastering safe-practice warmups, load management, and sports technique.', icon: 'Shield' },
  { step: 3, title: 'Screening', pillar: 'shape', description: 'Pre-season movement screening & anatomical risk factor identification.', icon: 'Scan' },
  { step: 4, title: 'Assessment', pillar: 'shape', description: 'Deep SHAPE diagnostics: VO2 max, BCA, ECG, and biomechanical profiling.', icon: 'BarChart3' },
  { step: 5, title: 'Treatment', pillar: 'smart', description: 'Immediate SMART on-field response (SOW) or acute clinical consultation.', icon: 'Zap' },
  { step: 6, title: 'Rehabilitation', pillar: 'sure', description: 'Custom post-injury & post-op sports physiotherapy at Ortho-One.', icon: 'HeartPulse' },
  { step: 7, title: 'Return to Sport', pillar: 'sure', description: 'Objective RTP testing ensuring 100% readiness before competitive play.', icon: 'Trophy' },
  { step: 8, title: 'Performance', pillar: 'shape', description: 'Tailored strength, nutrition, and physiological enhancement plans.', icon: 'TrendingUp' },
  { step: 9, title: 'Long-term Monitoring', pillar: 'shape', description: 'Continuous SafePlay AMS tracking across career milestones.', icon: 'LineChart' }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'beginner',
    name: 'Beginner Plan',
    priceYr: 999,
    originalPrice: 5532,
    popular: false,
    consultations: '1 Telehealth / Clinical Consultation',
    appAccess: 'SafePlay App Essential Access',
    insuranceCoverage: 'Personal Accident up to ₹3L · Medical Expenses up to ₹1L',
    features: [
      '1 Physician Consultation per year',
      'Basic SafePlay AMS Profile',
      'Injury Risk Awareness Guide',
      'Personal Accident Insurance (up to ₹3 Lakhs)',
      'Medical Expense Coverage (up to ₹1 Lakh)'
    ],
    ctaText: 'Join Beginner'
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    priceYr: 2999,
    originalPrice: 10617,
    popular: true,
    consultations: '2 Consultations + Body Composition',
    appAccess: 'SafePlay App Pro Analytics',
    insuranceCoverage: 'Personal Accident up to ₹3L · Medical Expenses up to ₹2L',
    features: [
      '2 Comprehensive Consultations per year',
      'Body Composition Analysis (BCA)',
      'Basic Functional Movement Screen (FMS)',
      'SafePlay AMS Analytics & Progress Tracking',
      'Personal Accident Insurance (up to ₹3 Lakhs)',
      'Medical Expense Coverage (up to ₹2 Lakhs)'
    ],
    ctaText: 'Join Pro (Most Popular)'
  },
  {
    id: 'elite',
    name: 'Elite Plan',
    priceYr: 7499,
    originalPrice: 27167,
    popular: false,
    consultations: '2 Consultations + Complete Medical Diagnostics',
    appAccess: 'SafePlay Premium Athlete Suite',
    insuranceCoverage: 'Personal Accident up to ₹3L · Medical Expenses up to ₹2L',
    features: [
      '2 Specialist Sports Doctor Consultations',
      'Complete Fitness Assessment + Full BCA',
      'Custom Sports Diet & Nutrition Plan',
      'Blood Investigation + ECG + Chest X-Ray',
      'Priority SOW On-Field Booking Access',
      'Personal Accident Insurance (up to ₹3 Lakhs)',
      'Medical Expense Coverage (up to ₹2 Lakhs)'
    ],
    ctaText: 'Join Elite'
  }
];

// Audited & anatomical bone-center percentage coordinates for photoreal-athlete-hotspot.jpg
export const HOTSPOT_LANDMARKS: HotspotPoint[] = [
  {
    id: 'shoulder',
    name: 'Shoulder Joint',
    bodyRegion: 'Upper Body',
    x: 46.5,
    y: 22.0,
    eyebrow: 'HOTSPOT 01 · SHOULDER',
    title: 'Rotator Cuff & Labral Protection',
    description: 'Overhead athletes (cricket, badminton, swimming) face severe rotator cuff strain and instability.',
    preventionTip: 'Scapular stabilization drills reduce labral tear risks by 65%.',
    pillarLink: 'shape'
  },
  {
    id: 'elbow',
    name: 'Elbow & Forearm',
    bodyRegion: 'Upper Limb',
    x: 34.5,
    y: 31.0,
    eyebrow: 'HOTSPOT 02 · ELBOW',
    title: 'Tennis & Pitcher Elbow Care',
    description: 'Repetitive valgus stress causes medial epicondylitis and ligament laxity in racket and throwing sports.',
    preventionTip: 'Eccentric wrist flexor loading prevents tendon degeneration.',
    pillarLink: 'sure'
  },
  {
    id: 'wrist',
    name: 'Wrist & Hand',
    bodyRegion: 'Upper Extremity',
    x: 32.5,
    y: 37.5,
    eyebrow: 'HOTSPOT 03 · WRIST',
    title: 'TFCC & Scaphoid Guarding',
    description: 'High-impact falls in gymnastics, football, and martial arts risk scaphoid fractures and TFCC tears.',
    preventionTip: 'Proprioceptive taping and wrist strength screens protect joint stability.',
    pillarLink: 'smart'
  },
  {
    id: 'hip',
    name: 'Hip & Groin',
    bodyRegion: 'Core & Pelvis',
    x: 48.5,
    y: 46.5,
    eyebrow: 'HOTSPOT 04 · HIP',
    title: 'FAI & Adductor Strain Protocol',
    description: 'Femoroacetabular impingement (FAI) and groin pulls severely affect sprinters and football players.',
    preventionTip: 'Dynamic hip mobility & core rotational training prevent impingement.',
    pillarLink: 'safe'
  },
  {
    id: 'knee',
    name: 'Knee Joint',
    bodyRegion: 'Lower Limb',
    x: 60.5,
    y: 57.0,
    eyebrow: 'HOTSPOT 05 · KNEE',
    title: 'ACL, Meniscus & Patellar Protection',
    description: 'Non-contact ACL tears and cartilage wear are the single largest cause of early athletic retirement.',
    preventionTip: 'Neuromuscular jump-landing retraining cuts ACL tear rates by up to 70%.',
    pillarLink: 'sure'
  },
  {
    id: 'ankle',
    name: 'Ankle & Foot',
    bodyRegion: 'Base Foundation',
    x: 26.5,
    y: 79.5,
    eyebrow: 'HOTSPOT 06 · ANKLE',
    title: 'Lateral Ligament & Achilles Resilience',
    description: 'Inversion sprains and Achilles tendinopathy recur frequently if functional stability is uncorrected.',
    preventionTip: 'Single-leg balance & eccentric calf conditioning prevent recurrent sprains.',
    pillarLink: 'smart'
  }
];

export const TEAM_MEMBERS = [
  { name: 'Dr. David V. Rajan', role: 'Founder & Managing Director', bio: 'Pioneer of Arthroscopic Surgery & Sports Medicine in South India. Founded Ortho-One in 2007.' },
  { name: 'Bharadwaj Malepati', role: 'Chief Operating Officer (COO)', bio: 'Directing strategic initiatives and institutional partnerships for HSI expansion.' },
  { name: 'Shyam Sundar', role: 'Academic Affairs Lead', bio: 'Overseeing sports science research, awareness programs, and conference curricula.' },
  { name: 'Dr. Emil Cyril', role: 'Sports Physician', bio: 'Specializing in non-operative sports injury care, VO2 max diagnostics, and athlete recovery.' },
  { name: 'Paul Earnest', role: 'Sports Physiotherapy Lead', bio: 'Leading post-operative rehabilitation and objective Return-To-Play (RTP) protocols.' }
];

export const ADVISORY_COMMITTEE = [
  { name: 'Neelam Babardesai', organization: 'Sports Science Specialist' },
  { name: 'Shekhar Manoharan', organization: 'Sports Administration Expert' },
  { name: 'Prabhakaran', organization: 'Athletics Federation Advisor' },
  { name: 'Sridharan', organization: 'Olympic Sports Consultant' }
];

export const PARTNER_LOGOS = [
  { name: 'Ortho-One', description: 'Orthopaedic Speciality Centre' },
  { name: 'Ortho Aid', description: 'Charitable Trust' },
  { name: 'NEIDA', description: 'North East Initiative Development Agency' },
  { name: 'TATA Trust', description: 'Philanthropic Partner' },
  { name: 'SDAT', description: 'Sports Development Authority of Tamil Nadu' },
  { name: 'ABTP', description: 'Abhinav Bindra Targeting Performance' },
  { name: 'Coimbatore Rifle Club', description: 'Sports Partner' },
  { name: 'Sports Authority of India', description: 'National Apex Body' },
  { name: 'Lloyd Metals & Energy', description: 'CSR Partner' }
];

export const CONTACT_INFO = {
  address: 'No. 657 & 658, Trichy Road, Singanallur, Coimbatore – 641005, Tamil Nadu',
  contacts: [
    { name: 'Mr. Jeyamurugan', title: 'PRO & Operations', phone: '+91 97905 99880' },
    { name: 'Ms. Gayathri', title: 'Sports Operations', phone: '+91 97905 51264' },
    { name: 'Mr. Talib Syed', title: 'Dy. Manager Sports Ops & BD', phone: '+91 99760 99881' },
    { name: 'Ms. Sowmia', title: 'Sports Coordinator', phone: '+91 90950 71234' }
  ]
};

export const FIELD_GALLERY_IMAGES = [
  { src: '/assets/hsi-gallery/hsi-1.jpg', title: 'On-Field Rapid Triage & First Aid', location: 'District Athletics Championship', caption: 'SOW mobile sports medicine unit delivering immediate acute triage for track sprinters.' },
  { src: '/assets/hsi-gallery/hsi-2.jpg', title: 'Functional Movement Screening (FMS)', location: 'SHAPE Diagnostic Lab, Coimbatore', caption: 'Biomechanical profiling and dynamic joint screening under Ortho-One sports physical protocols.' },
  { src: '/assets/hsi-gallery/hsi-3.jpg', title: 'Sports Physician Teleconsult Station', location: 'SMC Telemed Center, Singanallur', caption: 'Remote sports medicine consult desk evaluating athlete injury recovery trends.' },
  { src: '/assets/hsi-gallery/hsi-4.jpg', title: 'Keyhole Arthroscopy Rehabilitation', location: 'SURE Recovery Wing, Ortho-One', caption: 'Post-operative joint stabilization and progressive weight-bearing conditioning.' },
  { src: '/assets/hsi-gallery/hsi-5.jpg', title: 'Coach Capacity-Building Workshop', location: 'SAFE Community Seminar, Coimbatore', caption: 'Educating physical directors and grassroots coaches on FIFA 11+ injury prevention warm-ups.' },
  { src: '/assets/hsi-gallery/hsi-6.jpg', title: 'Grassroots Athlete Movement Assessment', location: 'School Sports Safety Camp', caption: 'Individualized movement screening and posture alignment checks for student athletes.' },
  { src: '/assets/hsi-gallery/hsi-7.jpg', title: 'SOW On-Field Emergency Coverage', location: 'State Hockey Tournament', caption: 'Dedicated emergency medical vehicle and acute trauma care response on the sideline.' },
  { src: '/assets/hsi-gallery/hsi-8.jpg', title: 'VO2 Max Aerobic Capacity Testing', location: 'SHAPE High Performance Center', caption: 'Cardiorespiratory endurance profiling using metabolic gas analysis.' },
  { src: '/assets/hsi-gallery/hsi-9.jpg', title: 'Objective Return-to-Play Testing', location: 'Ortho-One Sports Rehab Lab', caption: 'Force plate and single-leg hop testing for objective clearance before competitive return.' },
  { src: '/assets/hsi-gallery/hsi-10.jpg', title: 'Sports Nutrition & Hydration Seminar', location: 'SAFE Academy Series', caption: 'Evidence-based hydration and fueling strategies for youth endurance athletes.' },
  { src: '/assets/hsi-gallery/hsi-11.jpg', title: 'Taping & Scapular Stabilization Protocol', location: 'Basketball Championship Camp', caption: 'Prophylactic joint taping and shoulder stabilization care prior to tournament play.' },
  { src: '/assets/hsi-gallery/hsi-12.jpg', title: 'Community Sports Health Awareness Talk', location: 'Coimbatore Rifle Club & Academies', caption: 'Spreading injury prevention awareness and baseline sports health education.' },
  { src: '/assets/hsi-gallery/hsi-13.jpg', title: 'Acute Ankle Sprain Cryotherapy', location: 'SOW Mobile Care Station', caption: 'Immediate RICE protocol and soft-tissue compression for sideline ankle inversion sprains.' },
  { src: '/assets/hsi-gallery/hsi-14.jpg', title: 'Body Composition (BCA) Profiling', location: 'SHAPE Health Lab', caption: 'Multi-frequency bioelectrical impedance analysis measuring skeletal muscle mass and body fat.' },
  { src: '/assets/hsi-gallery/hsi-15.jpg', title: 'Flagship Symposia: The Athletic Knee', location: 'Ortho-One Academic Series', caption: 'National symposium on ACL reconstruction, cartilage restoration, and return-to-pivot care.' },
  { src: '/assets/hsi-gallery/hsi-16.jpg', title: 'Flagship Symposia: The Runner\'s Foot', location: 'Ortho-One Academic Series', caption: 'Specialized conference on foot loading biomechanics, footwear ergonomics, and stress fracture prevention.' },
  { src: '/assets/hsi-gallery/hsi-17.jpg', title: 'Hamstring & Groin Eccentric Conditioning', location: 'State Athletics Training Ground', caption: 'Physiotherapist-guided Nordic hamstring exercises for sprinter strain reduction.' },
  { src: '/assets/hsi-gallery/hsi-18.jpg', title: 'SafePlay AMS Digital Career Tracking', location: 'HSI Sports Ops Desk', caption: 'Longitudinal workload and health tracking dashboard for registered HSI athletes.' }
];
