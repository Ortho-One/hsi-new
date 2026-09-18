'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HSI_PILLARS } from '@/lib/hsiData';
import { Ambulance, ShieldCheck, Activity, Stethoscope, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PillarHoverButtons() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ambulance': return <Ambulance className="w-7 h-7 text-[#F6AF1F]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-[#F6AF1F]" />;
      case 'Activity': return <Activity className="w-7 h-7 text-[#F6AF1F]" />;
      case 'Stethoscope': return <Stethoscope className="w-7 h-7 text-[#F6AF1F]" />;
      default: return <Activity className="w-7 h-7 text-[#F6AF1F]" />;
    }
  };

  return (
    <div className="w-full py-6">
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F6AF1F] bg-[#F6AF1F]/10 px-3 py-1 rounded-full border border-[#F6AF1F]/20">
          THE HSI ECOSYSTEM
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif italic mt-2">
          4 Pillars of Integrated Athlete Care
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {HSI_PILLARS.map((pillar) => {
          const isHovered = hoveredId === pillar.id;
          return (
            <motion.div
              key={pillar.id}
              onMouseEnter={() => setHoveredId(pillar.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative rounded-3xl p-6 glass-card border border-white/10 overflow-hidden group cursor-pointer bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#F6AF1F]/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1D4589]/40 border border-[#F6AF1F]/30 flex items-center justify-center">
                  {getIcon(pillar.iconName)}
                </div>
                <span className="text-xs font-extrabold text-[#F6AF1F] bg-[#F6AF1F]/10 px-2.5 py-1 rounded-full border border-[#F6AF1F]/20">
                  {pillar.name}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#F6AF1F] transition-colors">
                {pillar.name}
              </h3>
              <p className="text-xs font-semibold text-zinc-400 mb-3">{pillar.fullForm}</p>

              <p className="text-zinc-300 text-xs leading-relaxed mb-6 line-clamp-3">
                {pillar.description}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-zinc-400 font-medium">Sub-programs included</span>
                <Link
                  href={pillar.href}
                  className="w-8 h-8 rounded-full bg-[#1D4589] flex items-center justify-center text-white group-hover:bg-[#F6AF1F] group-hover:text-black transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
