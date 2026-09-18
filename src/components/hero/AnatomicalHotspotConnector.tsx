'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOTSPOT_LANDMARKS } from '@/lib/hsiData';
import { HotspotPoint } from '@/types/hsi';
import { Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AnatomicalHotspotConnector() {
  const [activeHotspot, setActiveHotspot] = useState<HotspotPoint>(HOTSPOT_LANDMARKS[4]); // Default Knee
  const [isPaused, setIsPaused] = useState(false);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle through hotspots when idle
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveHotspot((prev) => {
        const idx = HOTSPOT_LANDMARKS.findIndex((h) => h.id === prev.id);
        return HOTSPOT_LANDMARKS[(idx + 1) % HOTSPOT_LANDMARKS.length];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Section 8.3: Debounced hover handler (≤100ms)
  const handleSpotHover = (spot: HotspotPoint) => {
    setIsPaused(true);
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setActiveHotspot(spot);
    }, 80);
  };

  // Section 15.1: Dev-only hotspot click logger helper
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (process.env.NODE_ENV === 'development') {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = Math.round(((e.clientX - rect.left) / rect.width) * 100);
      const clickY = Math.round(((e.clientY - rect.top) / rect.height) * 100);
      console.log(`[HOTSPOT DEV CALIBRATOR] x: ${clickX}%, y: ${clickY}%`);
    }
  };

  return (
    <div 
      className="relative w-full rounded-[40px] border border-[#F6AF1F]/30 p-6 md:p-8 overflow-hidden bg-gradient-to-br from-[#FDF6E8]/10 via-[#122C5A]/40 to-black backdrop-blur-xl shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Photorealistic Athlete Canvas (§8.2 & §15.1) */}
        <div 
          onClick={handleImageClick}
          className="relative w-full lg:w-1/2 aspect-[4/3] max-w-lg rounded-3xl overflow-hidden border-2 border-white/30 bg-black/40 shadow-2xl"
        >
          {/* Photorealistic AI Indian Athlete Asset */}
          <Image
            src="/assets/indian-sprinter-hotspot.jpg"
            alt="Photorealistic Indian Athlete Runner Landmark Assessment"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover opacity-95 transition-opacity"
            priority
          />

          {/* Dynamic SVG Gradient Connector Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
            <defs>
              <linearGradient id="photorealGradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1D4589" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#F6AF1F" stopOpacity="1" />
              </linearGradient>
            </defs>
            
            <motion.path
              key={activeHotspot.id}
              d={`M ${activeHotspot.x}% ${activeHotspot.y}% Q ${activeHotspot.x + 18}% ${activeHotspot.y - 12}%, 85% 25%`}
              fill="none"
              stroke="url(#photorealGradientLine)"
              strokeWidth="3.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="animate-pulsing-branch drop-shadow-[0_0_10px_rgba(246,175,31,0.8)]"
            />
          </svg>

          {/* Hotspot Pins with Keyboard Accessibility (§8.3) */}
          {HOTSPOT_LANDMARKS.map((spot) => {
            const isActive = spot.id === activeHotspot.id;
            return (
              <button
                key={spot.id}
                tabIndex={0}
                onMouseEnter={() => handleSpotHover(spot)}
                onFocus={() => handleSpotHover(spot)}
                onClick={() => setActiveHotspot(spot)}
                style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all cursor-pointer outline-none focus:ring-4 focus:ring-[#1D4589] rounded-full group ${
                  isActive ? 'scale-125 z-40' : 'scale-100 opacity-85 hover:opacity-100'
                }`}
                aria-label={`Hotspot landmark for ${spot.name}`}
              >
                <span className="relative flex h-7 w-7 items-center justify-center">
                  {isActive && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6AF1F] opacity-80"></span>
                  )}
                  <span className={`relative inline-flex rounded-full h-5 w-5 border-2 ${
                    isActive ? 'bg-[#F6AF1F] border-white shadow-lg shadow-[#F6AF1F]' : 'bg-[#1D4589] border-white'
                  }`}></span>
                </span>
                
                {/* Hover Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black/95 text-[#F6AF1F] text-[10px] font-bold px-2 py-1 rounded border border-white/20 whitespace-nowrap z-50">
                  {spot.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Side: Theme C Light Warm Ivory Glass Floating Card (§1.1.1 & §8.1) */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="p-6 md:p-8 rounded-3xl glass-card-warm shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#F6AF1F]/30 pb-3">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-3 py-1 rounded-full border border-[#1D4589]/20">
                  {activeHotspot.eyebrow}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#1D4589] font-serif italic mt-2">
                  {activeHotspot.name} <span className="text-xs font-sans text-slate-600 font-normal">({activeHotspot.bodyRegion})</span>
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1D4589] text-[#F6AF1F] flex items-center justify-center shrink-0 shadow-md">
                <Activity className="w-5 h-5" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeHotspot.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-slate-900">{activeHotspot.title}</h4>
                <p className="text-slate-800 text-xs md:text-sm leading-relaxed">{activeHotspot.description}</p>
                
                <div className="p-3.5 rounded-2xl bg-[#FBEED2] border border-[#F6E4BE] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C68608] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[11px] font-bold text-[#C68608] uppercase tracking-wide">HSI Prevention Protocol</h5>
                    <p className="text-xs text-slate-900 font-medium mt-0.5">{activeHotspot.preventionTip}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href={`/${activeHotspot.pillarLink}`}
                    className="pill-btn-primary text-xs"
                  >
                    View Care Protocol <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-600 font-semibold">
                    Targeted by <strong className="text-[#1D4589] uppercase font-bold">{activeHotspot.pillarLink}</strong> Pillar
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Body Region Selector Tabs */}
          <div className="pt-2 flex flex-wrap gap-2">
            {HOTSPOT_LANDMARKS.map((spot) => (
              <button
                key={spot.id}
                onMouseEnter={() => handleSpotHover(spot)}
                onClick={() => setActiveHotspot(spot)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  spot.id === activeHotspot.id
                    ? 'bg-[#1D4589] text-[#F6AF1F] font-bold shadow-lg scale-105'
                    : 'bg-white/10 text-zinc-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {spot.name}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
