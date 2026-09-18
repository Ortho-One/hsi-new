import React from 'react';
import MasonryGallery from '@/components/gallery/MasonryGallery';
import { Users, Award, ShieldCheck, Heart } from 'lucide-react';

export const metadata = {
  title: 'Our Work & Impact | Halt Sports Injuries Coimbatore',
  description: 'Exploring HSI statistics: 1,00,000+ athletes reached, 500+ camps, 70,000+ movement assessments, and on-field care galleries.'
};

export default function WorkImpactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-4 py-1.5 rounded-full border border-[#1D4589]/20">
          FIELD IMPACT &amp; REACH
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#14213D] font-serif italic">
          Transforming Sports Medicine Across South India
        </h1>
        <p className="text-[#2B3A55] text-sm md:text-base leading-relaxed">
          Through SMART mobile response, SAFE awareness talks, SHAPE diagnostics, and SURE surgical care, HSI is protecting the future of Indian sports.
        </p>
      </div>

      {/* Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 shadow-md text-center space-y-2">
          <Users className="w-8 h-8 text-[#1D4589] mx-auto" />
          <h3 className="text-3xl font-extrabold text-[#14213D]">1,00,000+</h3>
          <p className="text-xs text-[#5A6B85]">Athletes Reached</p>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 shadow-md text-center space-y-2">
          <Award className="w-8 h-8 text-[#1D4589] mx-auto" />
          <h3 className="text-3xl font-extrabold text-[#14213D]">500+</h3>
          <p className="text-xs text-[#5A6B85]">Camps &amp; Tournaments</p>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 shadow-md text-center space-y-2">
          <ShieldCheck className="w-8 h-8 text-[#1D4589] mx-auto" />
          <h3 className="text-3xl font-extrabold text-[#14213D]">70,000+</h3>
          <p className="text-xs text-[#5A6B85]">Movement Screenings</p>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 shadow-md text-center space-y-2">
          <Heart className="w-8 h-8 text-[#1D4589] mx-auto" />
          <h3 className="text-3xl font-extrabold text-[#14213D]">₹1.5 Cr+</h3>
          <p className="text-xs text-[#5A6B85]">Subsidised Surgical Aid</p>
        </div>
      </div>

      {/* Masonry Action Gallery */}
      <MasonryGallery />

    </div>
  );
}
