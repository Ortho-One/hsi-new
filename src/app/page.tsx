import React from 'react';
import { NeuralSatelliteHub } from '@/components/home/NeuralSatelliteHub';
import PillarHoverButtons from '@/components/home/PillarHoverButtons';
import ExpandingCards from '@/components/ui/ExpandingCards';
import DotPattern from '@/components/ui/DotPattern';
import AthleteJourneyTimeline from '@/components/timeline/AthleteJourneyTimeline';
import AthleteCardStack from '@/components/home/AthleteCardStack';
import MixpanelPricing from '@/components/pricing/MixpanelPricing';
import CircularGallery from '@/components/gallery/CircularGallery';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, PhoneCall, Heart, ArrowRight, Layers } from 'lucide-react';

export const metadata = {
  title: 'Halt Sports Injuries (HSI) | Sports Medicine & Performance Initiative Coimbatore',
  description: 'A not-for-profit sports medicine initiative run under Ortho-One Orthopaedic Speciality Centre, Coimbatore. SMART, SAFE, SHAPE, and SURE pillars.',
  keywords: ['Sports Medicine Coimbatore', 'Ortho-One', 'Dr David V Rajan', 'Sports Injury Prevention', 'SOW Sportsmed On Wheels', 'SafePlay AMS']
};

export default function HomePage() {
  return (
    <div className="space-y-20 pb-12 bg-[#FDF6E8]">
      
      {/* SECTION 1: HERO CONTAINER (Section 9.1 & 12.3 Canonical DotPattern) */}
      <section className="relative pt-12 pb-16 px-4 overflow-hidden">
        {/* Canonical Dot Pattern Component */}
        <DotPattern className="opacity-70" />

        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1D4589]/15 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          {/* Main Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D4589]/10 border border-[#1D4589]/20 text-[#1D4589] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#C68608]" /> EST. 2024 · ORTHO-ONE COIMBATORE
            </div>
            
            {/* Bold Modern Sans Headline in Dark Navy (#1D4589) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1D4589] leading-[1.15] tracking-tight">
              Protecting Athletes. <br className="hidden sm:inline" /> Elevating Human Performance.
            </h1>

            <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              South India&apos;s pioneering sports medicine initiative. From on-field emergency response (SOW) to keyhole surgery (SURE) and science-driven diagnostics (SHAPE).
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link href="/contact" className="pill-btn-primary text-sm">
                <PhoneCall className="w-4 h-4" /> Book Consultation
              </Link>
              <Link href="#ecosystem" className="pill-btn-secondary text-sm">
                <Layers className="w-4 h-4 text-[#1D4589]" /> Explore Ecosystem
              </Link>
            </div>
          </div>

          {/* Floating Tilted Satellite Media Cards (Section 7.1 & Section 9.2) */}
          <div className="hidden lg:flex items-center justify-center gap-6 pt-4">
            <div className="relative w-56 h-36 rounded-2xl overflow-hidden glass-card border border-[#1D4589]/20 -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl">
              <Image src="/assets/care-1.jpg" alt="On-field Care" fill sizes="224px" className="object-cover opacity-90 hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent p-3 flex items-end">
                <span className="text-[11px] font-bold text-white">SOW Rapid Field Care</span>
              </div>
            </div>

            <div className="relative w-64 h-40 rounded-2xl overflow-hidden glass-card border-2 border-[#F6AF1F] scale-105 shadow-2xl shadow-[#1D4589]/30">
              <Image src="/assets/care-3.jpg" alt="Ortho-One Desk" fill sizes="256px" className="object-cover opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent p-3 flex items-end justify-between">
                <span className="text-xs font-bold text-[#F6AF1F]">Ortho-One Sports MD Desk</span>
                <span className="text-[10px] bg-[#1D4589] px-2 py-0.5 rounded text-white font-semibold">Coimbatore</span>
              </div>
            </div>

            <div className="relative w-56 h-36 rounded-2xl overflow-hidden glass-card border border-[#1D4589]/20 rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl">
              <Image src="/assets/care-5.jpg" alt="Stretching Care" fill sizes="224px" className="object-cover opacity-90 hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent p-3 flex items-end">
                <span className="text-[11px] font-bold text-white">ABTP Hamstring Protocol</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: NEURAL SATELLITE HUB (SECTION 10.2 & 12.2 SPEC) */}
      <div id="ecosystem">
        <NeuralSatelliteHub />
      </div>

      {/* SECTION 3: EXPANDING CARDS 4 PILLARS SECTION (SECTION 12.4 SPEC) */}
      <section className="max-w-7xl mx-auto px-4">
        <ExpandingCards />
      </section>

      {/* SECTION 4: IMPACT STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10 rounded-[40px] glass-card border border-[#1D4589]/20 bg-gradient-to-r from-[#1D4589] via-[#122C5A] to-slate-900 text-white shadow-2xl">
          <div className="text-center space-y-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#F6AF1F]">1,00,000+</h3>
            <p className="text-xs text-zinc-200 font-semibold uppercase tracking-wider">Athletes Reached</p>
          </div>
          <div className="text-center space-y-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">500+</h3>
            <p className="text-xs text-zinc-200 font-semibold uppercase tracking-wider">Sports Camps Covered</p>
          </div>
          <div className="text-center space-y-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#F6AF1F]">70,000+</h3>
            <p className="text-xs text-zinc-200 font-semibold uppercase tracking-wider">SHAPE Assessments</p>
          </div>
          <div className="text-center space-y-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">₹1.5 Cr+</h3>
            <p className="text-xs text-zinc-200 font-semibold uppercase tracking-wider">Subsidised Care Granted</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: 9-STAGE ATHLETE JOURNEY TIMELINE */}
      <section className="max-w-7xl mx-auto px-4">
        <AthleteJourneyTimeline />
      </section>

      {/* SECTION 6: ATHLETE STORIES & VIDEO STACK */}
      <section className="max-w-7xl mx-auto px-4">
        <AthleteCardStack />
      </section>

      {/* SECTION 7: SHAPE MEMBERSHIP PRICING */}
      <section className="max-w-7xl mx-auto px-4">
        <MixpanelPricing />
      </section>

      {/* SECTION 8: CIRCULAR GALLERY */}
      <section className="max-w-7xl mx-auto px-4">
        <CircularGallery />
      </section>

      {/* SECTION 9: CALL TO ACTION BANNER (Section 17.1 Contrast Corrected) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="p-10 md:p-14 rounded-[40px] glass-card border border-[#1D4589]/20 bg-white text-[#2B3A55] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-3 py-1 rounded-full border border-[#1D4589]/20">
              GET INVOLVED
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#14213D]">
              Partner With HSI or Request SOW Support for Your Event
            </h2>
            <p className="text-[#2B3A55] text-sm md:text-base font-medium leading-relaxed">
              Whether you are an athlete, coach, school, or sports federation in Tamil Nadu, access world-class sports medicine care today.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/smart" className="pill-btn-primary text-sm">
              Request SOW Mobile Unit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/donate" 
              className="pill-btn-secondary text-sm font-bold inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> Support via CSR
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
