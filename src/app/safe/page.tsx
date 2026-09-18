import React from 'react';
import { ShieldCheck, BookOpen, Users, Award, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'SAFE Pillar | Sports Awareness For Everyone | HSI Coimbatore',
  description: 'Preventing sports injuries through awareness talks, coach capacity-building workshops, and national mega conferences including The Athletic Knee and The Runner’s Foot.'
};

export default function SafePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-4 py-1.5 rounded-full border border-[#1D4589]/20">
          HSI PILLAR 02 · SAFE
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#14213D]">
          Sports Awareness For Everyone
        </h1>
        <p className="text-[#2B3A55] text-sm md:text-base leading-relaxed font-medium">
          Educating athletes, coaches, physical directors, and parents on evidence-based injury prevention, warm-up science, and sports nutrition.
        </p>
      </div>

      {/* §14.3 Flagship Symposia Highlight Card */}
      <div className="p-8 rounded-3xl bg-white border border-[#1D4589]/20 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1D4589] text-white text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#F6AF1F]" /> ORTHO-ONE ACADEMY SERIES
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#14213D]">Flagship National Symposia</h2>
        <p className="text-[#2B3A55] text-xs md:text-sm leading-relaxed font-medium">
          HSI hosts prestigious, specialized sports science conferences bringing together orthopaedic surgeons, biomechanists, and high-performance coaches from around the globe.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-[#1D4589]/5 border border-[#1D4589]/15 space-y-1">
            <span className="text-xs font-bold text-[#1D4589]">SYMPOSIUM 01</span>
            <h3 className="text-lg font-bold text-[#14213D]">&quot;The Athletic Knee&quot;</h3>
            <p className="text-xs text-[#2B3A55]">ACL reconstruction, cartilage restoration, dynamic movement screening, and return-to-pivot protocols.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#1D4589]/5 border border-[#1D4589]/15 space-y-1">
            <span className="text-xs font-bold text-[#1D4589]">SYMPOSIUM 02</span>
            <h3 className="text-lg font-bold text-[#14213D]">&quot;The Runner&apos;s Foot&quot;</h3>
            <p className="text-xs text-[#2B3A55]">Plantopathy biomechanics, stress fracture prevention, foot loading dynamics, and footwear ergonomics.</p>
          </div>
        </div>
      </div>

      {/* 3 Core Initiatives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 shadow-lg space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1D4589]/15 border border-[#1D4589]/30 flex items-center justify-center text-[#1D4589]">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#14213D]">Capacity-Building Talks</h3>
          <p className="text-[#2B3A55] text-xs leading-relaxed font-medium">
            Interactive sessions delivered at schools, academies, and sports clubs teaching injury mechanics and load management.
          </p>
          <div className="pt-2 text-xs font-bold text-[#1D4589]">100+ School Talks Delivered</div>
        </div>

        <div className="glass-card-warm p-6 rounded-3xl border border-[#F6AF1F]/50 shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F6AF1F]/25 border border-[#F6AF1F] flex items-center justify-center text-[#14213D]">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#14213D]">Mega Conferences</h3>
          <p className="text-[#2B3A55] text-xs leading-relaxed font-medium">
            Hosting national sports science symposiums with international sports medicine experts, orthopaedic surgeons, and biomechanists.
          </p>
          <div className="pt-2 text-xs font-bold text-[#1D4589]">10+ National Conferences Organized</div>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 shadow-lg space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1D4589]/15 border border-[#1D4589]/30 flex items-center justify-center text-[#1D4589]">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#14213D]">Coach &amp; Physio Training</h3>
          <p className="text-[#2B3A55] text-xs leading-relaxed font-medium">
            Certifying physical education teachers and grassroots coaches in emergency first responder protocols and FIFA 11+ warm-up routines.
          </p>
          <div className="pt-2 text-xs font-bold text-[#1D4589]">5,000+ Coaches Trained</div>
        </div>

      </div>

      {/* Workshop Registration Banner */}
      <div className="p-8 rounded-3xl bg-[#1D4589] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl font-bold text-white">Request a SAFE Workshop for Your Institution</h3>
          <p className="text-zinc-200 text-xs font-medium">
            We conduct customized sports safety seminars for schools, colleges, and sports associations in Coimbatore and across Tamil Nadu.
          </p>
        </div>
        <Link href="/contact" className="pill-btn-secondary bg-white text-[#1D4589] text-xs whitespace-nowrap">
          Schedule Awareness Talk
        </Link>
      </div>

    </div>
  );
}
