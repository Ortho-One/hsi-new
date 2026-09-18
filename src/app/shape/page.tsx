import React from 'react';
import MixpanelPricing from '@/components/pricing/MixpanelPricing';
import CircularGallery from '@/components/gallery/CircularGallery';
import { Activity, Scan, HeartPulse, LineChart, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'SHAPE Pillar | Athlete Assessment & SafePlay AMS | HSI Coimbatore',
  description: 'Science-driven biomechanical profiling, VO2 max testing, body composition analysis, and SafePlay Athlete Management System.'
};

export default function ShapePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-4 py-1.5 rounded-full border border-[#1D4589]/20">
          HSI PILLAR 03 · SHAPE
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#14213D] font-serif italic">
          Sports Health Assessment &amp; Performance Evaluation
        </h1>
        <p className="text-[#2B3A55] text-sm md:text-base leading-relaxed">
          Combining clinical biomechanics, cardiopulmonary exercise testing, and digital AMS tracking to optimize athletic performance and identify hidden injury risks.
        </p>
      </div>

      {/* Diagnostics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 shadow-md space-y-3">
          <Scan className="w-8 h-8 text-[#1D4589]" />
          <h3 className="text-lg font-bold text-[#14213D] font-serif">Functional Movement Screen (FMS)</h3>
          <p className="text-[#2B3A55] text-xs">7-point movement quality screen to uncover joint restriction and muscle asymmetry.</p>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 shadow-md space-y-3">
          <HeartPulse className="w-8 h-8 text-[#1D4589]" />
          <h3 className="text-lg font-bold text-[#14213D] font-serif">VO2 Max &amp; Aerobic Testing</h3>
          <p className="text-[#2B3A55] text-xs">Cardiopulmonary metabolic assessment determining exact heart rate training zones.</p>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 shadow-md space-y-3">
          <Activity className="w-8 h-8 text-[#1D4589]" />
          <h3 className="text-lg font-bold text-[#14213D] font-serif">Body Composition (BCA)</h3>
          <p className="text-[#2B3A55] text-xs">Bioelectrical impedance measuring muscle mass, visceral fat, and hydration ratios.</p>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 shadow-md space-y-3">
          <LineChart className="w-8 h-8 text-[#1D4589]" />
          <h3 className="text-lg font-bold text-[#14213D] font-serif">SafePlay AMS Tracking</h3>
          <p className="text-[#2B3A55] text-xs">Digital athlete portal storing historical screening data, diet plans, and recovery scores.</p>
        </div>

      </div>

      {/* SHAPE Gallery Showcase */}
      <CircularGallery />

      {/* Mixpanel Pricing Section */}
      <MixpanelPricing />

    </div>
  );
}
