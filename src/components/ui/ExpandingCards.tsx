'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Ambulance, Shield, Activity, Stethoscope, ArrowRight } from 'lucide-react';

export interface ExpandingPillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  href: string;
  accent: string;
}

const PILLARS_DATA: ExpandingPillarItem[] = [
  {
    id: 'smart',
    title: 'SMART',
    subtitle: 'Sports Medicine Access & Response',
    description: 'On-field emergency response (SOW) & instant teleconsultations (SMC) connecting 100,000+ athletes across Tamil Nadu.',
    icon: Ambulance,
    image: '/assets/care-1.jpg',
    href: '/smart',
    accent: '#1D4589'
  },
  {
    id: 'safe',
    title: 'SAFE',
    subtitle: 'Sports Awareness For Everyone',
    description: 'Preventing injuries before they occur through 100+ school talks, mega conferences, and 5,000+ certified coaches.',
    icon: Shield,
    image: '/assets/care-2.jpg',
    href: '/safe',
    accent: '#F6AF1F'
  },
  {
    id: 'shape',
    title: 'SHAPE',
    subtitle: 'Health Assessment & Performance',
    description: 'Science-driven biomechanical screening, VO2 max testing, body composition, and SafePlay AMS digital tracking.',
    icon: Activity,
    image: '/assets/care-3.jpg',
    href: '/shape',
    accent: '#1D4589'
  },
  {
    id: 'sure',
    title: 'SURE',
    subtitle: 'Surgery, Rehabilitation & RTP',
    description: 'Pioneering keyhole arthroscopy by Dr. David V. Rajan, targeted rehab, and ₹1.5 Cr+ subsidised surgical care.',
    icon: Stethoscope,
    image: '/assets/care-4.jpg',
    href: '/sure',
    accent: '#F6AF1F'
  }
];

export const ExpandingCards: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('smart');

  return (
    <section className="w-full py-12">
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-3.5 py-1.5 rounded-full border border-[#1D4589]/20">
          THE 4 PILLARS OF INTEGRATED CARE
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#14213D] font-serif italic">
          Explore The HSI Ecosystem
        </h2>
        <p className="text-[#2B3A55] text-sm md:text-base">
          Hover or tap any pillar panel to inspect our comprehensive sports medicine continuum.
        </p>
      </div>

      {/* Desktop Expanding Cards Grid */}
      <div className="hidden md:flex gap-4 h-[460px] max-w-7xl mx-auto px-4">
        {PILLARS_DATA.map((pillar) => {
          const isExpanded = activeId === pillar.id;
          const Icon = pillar.icon;

          return (
            <motion.div
              key={pillar.id}
              onClick={() => setActiveId(pillar.id)}
              onMouseEnter={() => setActiveId(pillar.id)}
              onFocus={() => setActiveId(pillar.id)}
              tabIndex={0}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border ${
                isExpanded
                  ? 'flex-[3] border-[#1D4589]/30 shadow-2xl'
                  : 'flex-[1] border-slate-200/60 hover:flex-[1.2]'
              }`}
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className={`object-cover transition-transform duration-700 ${
                  isExpanded ? 'scale-105 opacity-90' : 'opacity-60 grayscale hover:grayscale-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent" />

              {/* Collapsed Strip View */}
              {!isExpanded && (
                <div className="absolute inset-0 p-6 flex flex-col justify-between items-center z-10">
                  <div className="w-10 h-10 rounded-2xl bg-[#1D4589] text-white flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="rotate-[-90deg] whitespace-nowrap text-lg font-bold text-white font-serif tracking-widest uppercase">
                    {pillar.title}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#F6AF1F]" />
                </div>
              )}

              {/* Expanded Panel View */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-8 flex flex-col justify-between z-20 text-white"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#1D4589] text-[#F6AF1F] border border-white/20 flex items-center justify-center shadow-xl">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#F6AF1F]">
                          HSI PILLAR
                        </span>
                        <h3 className="text-2xl font-bold font-serif">{pillar.title}</h3>
                      </div>
                    </div>

                    <Link
                      href={pillar.href}
                      className="pill-btn-primary text-xs !py-2 !px-4"
                    >
                      Explore Pillar <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="max-w-md space-y-2">
                    <h4 className="text-lg font-bold text-zinc-100 font-serif">{pillar.subtitle}</h4>
                    <p className="text-xs text-zinc-300 leading-relaxed font-normal">{pillar.description}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Stacked Fallback */}
      <div className="grid md:hidden grid-cols-1 gap-4 px-4">
        {PILLARS_DATA.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="relative rounded-2xl overflow-hidden glass-card border border-[#1D4589]/20 p-5 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1D4589] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#1D4589] uppercase">PILLAR</span>
                    <h3 className="text-lg font-bold text-[#14213D] font-serif">{pillar.title}</h3>
                  </div>
                </div>
                <Link href={pillar.href} className="text-xs font-bold text-[#1D4589] flex items-center gap-1">
                  View <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <p className="text-xs text-[#2B3A55]">{pillar.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExpandingCards;
