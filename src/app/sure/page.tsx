import React from 'react';
import { Stethoscope, HeartPulse, Trophy, Heart, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'SURE Pillar | Sports Surgery & Rehabilitation | HSI Coimbatore',
  description: 'Precision keyhole arthroscopic surgery by Dr. David V. Rajan, targeted sports physiotherapy, and objective Return to Play clearance.'
};

export default function SurePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-4 py-1.5 rounded-full border border-[#1D4589]/20">
          HSI PILLAR 04 · SURE
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#14213D] font-serif italic">
          Sports Surgery, Rehabilitation &amp; Empowerment
        </h1>
        <p className="text-[#2B3A55] text-sm md:text-base leading-relaxed">
          From advanced minimally-invasive keyhole arthroscopy at Ortho-One to objective Return to Play (RTP) clinical clearance and financial subsidies for needy athletes.
        </p>
      </div>

      {/* 4 Pillars of Surgical & Rehab Excellence */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="glass-card p-8 rounded-3xl border border-[#1D4589]/20 shadow-lg space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1D4589]/15 border border-[#1D4589]/30 flex items-center justify-center text-[#1D4589]">
            <Stethoscope className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#14213D] font-serif">Keyhole Arthroscopy</h3>
          <p className="text-[#2B3A55] text-xs leading-relaxed">
            Pioneered by Dr. David V. Rajan. Minimally invasive knee (ACL/PCL/Meniscus), shoulder (Labral/Rotator Cuff), and ankle joint reconstructions with minimal tissue trauma.
          </p>
          <div className="pt-2 text-xs font-bold text-[#1D4589]">25,000+ Arthroscopies Performed</div>
        </div>

        <div className="glass-card-warm p-8 rounded-3xl border border-[#F6AF1F]/50 shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F6AF1F]/25 border border-[#F6AF1F] flex items-center justify-center text-[#14213D]">
            <HeartPulse className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#14213D] font-serif">Sports Physiotherapy</h3>
          <p className="text-[#2B3A55] text-xs leading-relaxed">
            Phase-specific post-operative sports rehabilitation protocols directed by lead physios Paul Earnest and team to rebuild strength and proprioception.
          </p>
          <div className="pt-2 text-xs font-bold text-[#1D4589]">5,000+ Treated &amp; Rehabilitated</div>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-[#1D4589]/20 shadow-lg space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1D4589]/15 border border-[#1D4589]/30 flex items-center justify-center text-[#1D4589]">
            <Trophy className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#14213D] font-serif">Objective RTP Clearance</h3>
          <p className="text-[#2B3A55] text-xs leading-relaxed">
            No athlete returns to competitive play based on time alone. We mandate strength symmetry &gt;90%, limb-symmetry index (LSI), and functional field tests.
          </p>
          <div className="pt-2 text-xs font-bold text-[#1D4589]">Zero Compromise Return Protocol</div>
        </div>

      </div>

      {/* Ortho Aid Financial Support Banner */}
      <div className="p-10 rounded-[40px] glass-card border border-[#1D4589]/20 bg-gradient-to-r from-[#1D4589] via-[#122C5A] to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#F6AF1F] uppercase tracking-wider">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" /> ORTHO AID CHARITABLE TRUST SUPPORT
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white font-serif italic">
            ₹1.5 Crores+ Granted for Needy Athletes
          </h3>
          <p className="text-zinc-200 text-xs leading-relaxed">
            Financial barriers should never end an athlete&apos;s career. HSI provides subsidised or free surgical care and rehabilitation to deserving national &amp; state talent.
          </p>
        </div>
        <Link href="/contact" className="pill-btn-primary text-xs whitespace-nowrap">
          Apply for Surgical Support
        </Link>
      </div>

    </div>
  );
}
