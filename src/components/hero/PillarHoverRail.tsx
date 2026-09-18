'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HSI_PILLARS } from '@/lib/hsiData';
import { ArrowUpRight, ShieldCheck, Ambulance, Activity, Stethoscope } from 'lucide-react';
import Link from 'next/link';

export default function PillarHoverRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle every 4 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HSI_PILLARS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activePillar = HSI_PILLARS[activeIndex];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Ambulance': return <Ambulance className="w-6 h-6 text-[#1D4589]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#1D4589]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#1D4589]" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-[#1D4589]" />;
      default: return <Activity className="w-6 h-6 text-[#1D4589]" />;
    }
  };

  return (
    <div 
      className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-[32px] glass-card border border-[#1D4589]/20 shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Active Floating Light-Glass Card (Section 12.5 Restyled) */}
      <div className="flex-1 w-full min-h-[220px] relative overflow-hidden p-6 rounded-2xl glass-card-warm border border-[#F6AF1F]/50 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-[#14213D] bg-[#F6AF1F]/30 px-3 py-1 rounded-full border border-[#F6AF1F]/50">
                HSI PILLAR {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <div className="p-2 rounded-xl bg-[#1D4589]/10 border border-[#1D4589]/20">
                {getPillarIcon(activePillar.iconName)}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#14213D] font-serif italic">
              {activePillar.name} <span className="text-sm font-sans font-normal text-[#5A6B85] block md:inline">— {activePillar.fullForm}</span>
            </h3>

            <p className="text-[#2B3A55] text-sm md:text-base leading-relaxed font-medium">
              {activePillar.description}
            </p>

            <div className="pt-3 flex items-center justify-between border-t border-[#1D4589]/15">
              <span className="text-xs text-[#1D4589] font-bold">{activePillar.keyStats}</span>
              <Link 
                href={activePillar.href}
                className="inline-flex items-center gap-1 text-sm font-bold text-[#1D4589] hover:text-[#2A5BAE] transition-colors"
              >
                Explore {activePillar.name} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Numbered Vertical Rail (01–04) */}
      <div className="flex md:flex-col gap-3 w-full md:w-auto justify-center">
        {HSI_PILLARS.map((pillar, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={pillar.id}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`px-4 py-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                isActive 
                  ? 'bg-[#1D4589] border-[#F6AF1F] text-white shadow-lg shadow-[#1D4589]/40 scale-105' 
                  : 'bg-white/80 border-[#1D4589]/15 text-[#5A6B85] hover:bg-white hover:text-[#1D4589]'
              }`}
            >
              <span className={`text-xs font-extrabold ${isActive ? 'text-[#F6AF1F]' : 'text-[#5A6B85]'}`}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-bold tracking-wider">{pillar.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
