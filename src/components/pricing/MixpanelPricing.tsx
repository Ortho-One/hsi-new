'use client';

import React, { useState } from 'react';
import { MEMBERSHIP_TIERS } from '@/lib/hsiData';
import { Check, Sparkles, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MixpanelPricing() {
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-[#FDF6E8] rounded-[40px] border border-[#1D4589]/20 shadow-xl my-12">
      
      {/* Ambient Background Dots */}
      <div className="absolute inset-0 bg-neural-dots opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-4 py-1.5 rounded-full border border-[#1D4589]/20">
            SHAPE MEMBERSHIP PLANS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D]">
            Invest in Injury Prevention &amp; Peak Performance
          </h2>
          <p className="text-[#2B3A55] text-sm md:text-base font-medium">
            Subsidised annual sports health plans backed by Ortho-One orthopaedic specialists and SafePlay AMS tracking.
          </p>
        </div>

        {/* 3 Pricing Cards Grid — Section 14.5 Contrast Corrected */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((tier) => {
            const isPro = tier.popular;

            return (
              <div
                key={tier.id}
                onClick={() => setSelectedPlan(tier.id)}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isPro 
                    ? 'bg-[#1D4589] text-white border-2 border-[#F6AF1F] shadow-2xl shadow-[#1D4589]/30 lg:-translate-y-4' 
                    : 'bg-white text-[#2B3A55] border border-[#1D4589]/20 shadow-lg hover:border-[#1D4589]/40'
                }`}
              >
                {/* Ribbon for Pro Card */}
                {isPro && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F6AF1F] text-[#14213D] font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-lg border border-[#14213D]/20">
                    <Sparkles className="w-3.5 h-3.5 fill-[#14213D]" /> Most Popular Tier
                  </div>
                )}

                <div>
                  {/* Tier Title & Subtitle */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-2xl font-bold ${isPro ? 'text-white' : 'text-[#14213D]'}`}>{tier.name}</h3>
                      <Shield className={`w-6 h-6 ${isPro ? 'text-[#F6AF1F]' : 'text-[#1D4589]'}`} />
                    </div>
                    {tier.subtitle && (
                      <p className={`text-xs font-semibold italic mt-1 ${isPro ? 'text-[#F6AF1F]' : 'text-[#1D4589]'}`}>
                        &ldquo;{tier.subtitle}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl md:text-5xl font-extrabold ${isPro ? 'text-white' : 'text-[#1D4589]'}`}>
                        ₹{tier.priceYr.toLocaleString('en-IN')}
                      </span>
                      <span className={`text-xs font-semibold ${isPro ? 'text-zinc-200' : 'text-[#5A6B85]'}`}>/ year, excl. GST</span>
                    </div>
                    <span className={`text-xs font-semibold line-through block mt-1 ${isPro ? 'text-zinc-200' : 'text-[#5A6B85]'}`}>
                      Original Value: ₹{tier.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Highlights Box */}
                  <div className={`p-3.5 rounded-2xl mb-6 space-y-1 ${
                    isPro 
                      ? 'bg-white/10 border border-white/20 text-white' 
                      : 'bg-[#1D4589]/5 border border-[#1D4589]/15 text-[#14213D]'
                  }`}>
                    <p className={`text-xs font-bold ${isPro ? 'text-[#F6AF1F]' : 'text-[#1D4589]'}`}>{tier.consultations}</p>
                    <p className={`text-[11px] font-medium ${isPro ? 'text-zinc-100' : 'text-[#2B3A55]'}`}>{tier.insuranceCoverage}</p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs font-medium">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPro ? 'text-[#F6AF1F]' : 'text-[#1D4589]'}`} />
                        <span className={isPro ? 'text-zinc-100' : 'text-[#2B3A55]'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3.5 rounded-full font-bold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    isPro 
                      ? 'bg-[#F6AF1F] text-[#14213D] hover:bg-amber-400 shadow-xl' 
                      : 'pill-btn-primary shadow-md'
                  }`}
                >
                  {tier.ctaText} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Insurance & Subsidy Assurance Banner */}
        <div className="p-6 rounded-3xl bg-white border border-[#1D4589]/20 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#1D4589] uppercase tracking-wide">Ortho Aid Subsidised Care Guarantee</h4>
            <p className="text-xs text-[#2B3A55] font-medium">
              Deserving athletes from low-income backgrounds can apply for financial assistance under HSI Ortho Aid Trust.
            </p>
          </div>
          <Link href="/donate" className="pill-btn-secondary text-xs whitespace-nowrap">
            Apply for Assistance
          </Link>
        </div>

      </div>
    </section>
  );
}
