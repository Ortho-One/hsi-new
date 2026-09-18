'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ATHLETE_JOURNEY } from '@/lib/hsiData';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Megaphone, 
  Shield, 
  Scan, 
  BarChart3, 
  Zap, 
  HeartPulse, 
  Trophy, 
  TrendingUp, 
  LineChart 
} from 'lucide-react';

export default function AthleteJourneyTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined') {
      isReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    if (!sectionRef.current || isReducedMotion.current) return;

    // Create GSAP ScrollTrigger Pinned Scrubbing Animation (§13.2)
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top+=80',
      end: '+=1200',
      pin: true,
      scrub: 0.5,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Map 0 -> 1 progress smoothly across 9 steps
        const calculatedStep = Math.min(9, Math.max(1, Math.floor(self.progress * 8.99) + 1));
        setActiveStep(calculatedStep);
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-[#1D4589]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#1D4589]" />;
      case 'Scan': return <Scan className="w-5 h-5 text-[#1D4589]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#1D4589]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#1D4589]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#1D4589]" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-[#1D4589]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#1D4589]" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-[#1D4589]" />;
      default: return <Shield className="w-5 h-5 text-[#1D4589]" />;
    }
  };

  const activeStage = ATHLETE_JOURNEY.find((s) => s.step === activeStep) || ATHLETE_JOURNEY[0];

  return (
    <div 
      ref={sectionRef} 
      className="w-full py-10 px-4 sm:px-8 rounded-[40px] glass-card border border-[#1D4589]/20 shadow-xl bg-neural-dots my-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-3 py-1 rounded-full border border-[#1D4589]/20">
          THE CONTINUUM OF CARE
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#14213D] font-serif italic">
          The 9-Stage Athlete Journey
        </h2>
        <p className="text-[#2B3A55] text-xs md:text-sm">
          Scroll down to scrub through the complete athlete lifecycle from awareness to long-term monitoring.
        </p>
      </div>

      {/* Horizontal Interactive Scrub Bar */}
      <div className="relative max-w-5xl mx-auto mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-[#1D4589]/15 -translate-y-1/2 rounded-full"></div>
        <div 
          className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-[#1D4589] to-[#F6AF1F] -translate-y-1/2 rounded-full transition-all duration-300 shadow-md"
          style={{ width: `${((activeStep - 1) / (ATHLETE_JOURNEY.length - 1)) * 100}%` }}
        ></div>

        <div className="relative z-10 flex items-center justify-between">
          {ATHLETE_JOURNEY.map((stage) => {
            const isActive = stage.step === activeStep;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(stage.step)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-extrabold text-xs transition-all ${
                  isActive 
                    ? 'bg-[#1D4589] text-white scale-125 shadow-lg shadow-[#1D4589]/40 ring-4 ring-[#F6AF1F]' 
                    : 'bg-white border border-[#1D4589]/20 text-[#2B3A55] hover:text-[#1D4589] hover:border-[#1D4589]'
                }`}
                aria-label={`Jump to stage ${stage.step}: ${stage.title}`}
              >
                {stage.step}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Blurb Card */}
      <motion.div
        key={activeStage.step}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-2xl mx-auto p-6 md:p-8 rounded-3xl glass-card-warm border border-[#F6AF1F]/50 text-center space-y-4 shadow-xl"
      >
        <div className="w-14 h-14 rounded-2xl bg-[#1D4589]/15 border border-[#1D4589]/30 flex items-center justify-center mx-auto shadow-sm">
          {getStageIcon(activeStage.icon)}
        </div>

        <div className="inline-block">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#14213D] bg-[#F6AF1F]/30 px-3.5 py-1 rounded-full border border-[#F6AF1F]/50">
            STAGE {activeStage.step} OF 9 · {activeStage.pillar.toUpperCase()} PILLAR
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#14213D] mt-2 font-serif">
            {activeStage.title}
          </h3>
        </div>

        <p className="text-[#2B3A55] text-sm md:text-base leading-relaxed font-medium">
          {activeStage.description}
        </p>

        <div className="pt-2 text-xs font-semibold text-[#1D4589] flex items-center justify-center gap-2">
          <span>Scroll to advance stages</span>
          <span className="inline-block animate-bounce">↓</span>
        </div>
      </motion.div>
    </div>
  );
}
