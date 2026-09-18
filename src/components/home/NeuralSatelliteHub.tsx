'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Activity, Video, Shield, ArrowRight, Radio, Ambulance, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const NeuralSatelliteHub: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  const hubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (hubRef.current) observer.unobserve(hubRef.current);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (hubRef.current) {
      observer.observe(hubRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={hubRef}
      id="hsi-hub"
      className={`hsi-hub-module relative min-h-[700px] py-16 px-4 max-w-7xl mx-auto overflow-hidden bg-neural-dots ${isInView ? 'in-view' : ''}`}
    >
      {/* Section Header (Section 12.2 Spec: Headline renamed to "Your Athlete's Intelligent Ecosystem") */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D4589]/10 border border-[#1D4589]/20 text-[#1D4589] text-xs font-bold uppercase tracking-wider mb-4">
          <Radio className="w-3.5 h-3.5 animate-pulse text-[#F6AF1F]" />
          Integrated Hub Architecture
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#14213D] font-serif italic leading-tight">
          Your Athlete&apos;s <span className="text-[#1D4589] not-italic font-sans font-extrabold">Intelligent</span> Ecosystem
        </h2>
        <p className="mt-4 text-[#2B3A55] text-base md:text-lg">
          Connecting on-field rapid response, sports medicine teleconsultations, baseline health profiling, and surgical rehabilitation into one unified care continuum.
        </p>
      </div>

      {/* Main Hub Container — Desktop & Tablet Layout */}
      <div className="relative min-h-[540px] hidden md:flex items-center justify-center">
        {/* SVG Connector Lines Layer */}
        <svg className="hsi-connector-svg absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hsi-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D4589" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F6AF1F" stopOpacity="0.9" />
            </linearGradient>
            <filter id="hsiGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Line 1: Top-Left Satellite (SMART) -> Hub */}
          <motion.path
            d="M 180 120 C 300 130, 360 200, 440 230"
            fill="none"
            stroke="url(#hsi-line-gradient)"
            strokeWidth={activeCard === 1 ? 3.5 : 2.5}
            strokeDasharray="8 10"
            className={`hsi-line transition-all duration-300 ${activeCard === 1 ? 'opacity-100' : 'opacity-75'}`}
            initial={{ strokeDashoffset: 400 }}
            animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 400 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            filter="url(#hsiGlow)"
          />

          {/* Line 2: Top-Right Satellite (SAFE) -> Hub */}
          <motion.path
            d="M 1050 110 C 920 130, 860 200, 780 230"
            fill="none"
            stroke="url(#hsi-line-gradient)"
            strokeWidth={activeCard === 2 ? 3.5 : 2.5}
            strokeDasharray="8 10"
            className={`hsi-line transition-all duration-300 ${activeCard === 2 ? 'opacity-100' : 'opacity-75'}`}
            initial={{ strokeDashoffset: 400 }}
            animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 400 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            filter="url(#hsiGlow)"
          />

          {/* Line 3: Bottom-Left Satellite (SHAPE) -> Hub */}
          <motion.path
            d="M 220 450 C 320 410, 380 350, 440 310"
            fill="none"
            stroke="url(#hsi-line-gradient)"
            strokeWidth={activeCard === 3 ? 3.5 : 2.5}
            strokeDasharray="8 10"
            className={`hsi-line transition-all duration-300 ${activeCard === 3 ? 'opacity-100' : 'opacity-75'}`}
            initial={{ strokeDashoffset: 400 }}
            animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 400 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            filter="url(#hsiGlow)"
          />

          {/* Line 4: Bottom-Right Satellite (SURE) -> Hub */}
          <motion.path
            d="M 1020 450 C 900 410, 840 350, 780 310"
            fill="none"
            stroke="url(#hsi-line-gradient)"
            strokeWidth={activeCard === 4 ? 3.5 : 2.5}
            strokeDasharray="8 10"
            className={`hsi-line transition-all duration-300 ${activeCard === 4 ? 'opacity-100' : 'opacity-75'}`}
            initial={{ strokeDashoffset: 400 }}
            animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 400 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            filter="url(#hsiGlow)"
          />
        </svg>

        {/* Central Hub Card (Section 12.1 Spec: Photorealistic Indian Athlete Image) */}
        <motion.div
          className="hsi-hub-card relative z-10 w-[42%] aspect-[16/10] rounded-[36px] overflow-hidden glass-card shadow-2xl border-2 border-[#1D4589]/25 group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/assets/indian-athlete-hub-v2.jpg"
            alt="HSI Sports Medicine Care Hub - Indian Athlete Performance"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent" />

          {/* Bottom Left Hub Label */}
          <div className="hsi-hub-label absolute bottom-5 left-5 right-5 flex items-center justify-between z-20">
            <div className="px-3.5 py-1.5 rounded-full bg-[#0F172A]/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F6AF1F] animate-ping" />
              HSI CARE // COIMBATORE HUB
            </div>
            <Link
              href="/about"
              className="px-4 py-1.5 rounded-full bg-[#1D4589] hover:bg-[#2A5BAE] text-white text-xs font-bold transition-all inline-flex items-center gap-1 shadow-lg"
            >
              Explore Hub <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Satellite 1: Top-Left -> SMART Pillar Navigation Link (Section 12.2 Spec) */}
        <motion.div
          className={`hsi-satellite hsi-satellite--tl absolute top-4 left-6 z-20 w-64 p-4 rounded-2xl glass-card border border-[#1D4589]/20 transition-all duration-300 cursor-pointer ${
            activeCard === 1 ? 'scale-105 shadow-xl border-[#1D4589] !z-30' : 'hover:scale-105'
          }`}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/smart" className="block space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1D4589]/15 flex items-center justify-center text-[#1D4589]">
                  <Ambulance className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D4589] block">PILLAR 01</span>
                  <h4 className="text-xs font-bold text-[#14213D]">SMART Pillar</h4>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#1D4589]" />
            </div>
            <p className="text-[11px] text-[#2B3A55] leading-snug">
              On-field mobile response (SOW) &amp; instant teleconsultations (SMC).
            </p>
          </Link>
        </motion.div>

        {/* Satellite 2: Top-Right -> SAFE Pillar Navigation Link (Section 12.2 Spec) */}
        <motion.div
          className={`hsi-satellite hsi-satellite--tr absolute top-6 right-8 z-20 w-64 p-4 rounded-2xl glass-card border border-[#1D4589]/20 transition-all duration-300 cursor-pointer ${
            activeCard === 2 ? 'scale-105 shadow-xl border-[#1D4589] !z-30' : 'hover:scale-105'
          }`}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(null)}
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/safe" className="block space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F6AF1F]/25 flex items-center justify-center text-[#14213D]">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D4589] block">PILLAR 02</span>
                  <h4 className="text-xs font-bold text-[#14213D]">SAFE Pillar</h4>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#1D4589]" />
            </div>
            <p className="text-[11px] text-[#2B3A55] leading-snug">
              Sports Awareness For Everyone, conferences &amp; coach training.
            </p>
          </Link>
        </motion.div>

        {/* Satellite 3: Bottom-Left -> SHAPE Pillar Navigation Link (Section 12.2 Spec) */}
        <motion.div
          className={`hsi-satellite hsi-satellite--bl absolute bottom-4 left-6 z-20 w-64 p-4 rounded-2xl glass-card border border-[#1D4589]/20 transition-all duration-300 cursor-pointer ${
            activeCard === 3 ? 'scale-105 shadow-xl border-[#1D4589] !z-30' : 'hover:scale-105'
          }`}
          onMouseEnter={() => setActiveCard(3)}
          onMouseLeave={() => setActiveCard(null)}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/shape" className="block space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1D4589]/15 flex items-center justify-center text-[#1D4589]">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D4589] block">PILLAR 03</span>
                  <h4 className="text-xs font-bold text-[#14213D]">SHAPE Pillar</h4>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#1D4589]" />
            </div>
            <p className="text-[11px] text-[#2B3A55] leading-snug">
              Movement screening, VO2 max profiling &amp; SafePlay AMS.
            </p>
          </Link>
        </motion.div>

        {/* Satellite 4: Bottom-Right -> SURE Pillar Navigation Link (Section 12.2 Spec) */}
        <motion.div
          className={`hsi-satellite hsi-satellite--br absolute bottom-4 right-6 z-20 w-64 p-4 rounded-2xl glass-card border border-[#1D4589]/20 transition-all duration-300 cursor-pointer ${
            activeCard === 4 ? 'scale-105 shadow-xl border-[#1D4589] !z-30' : 'hover:scale-105'
          }`}
          onMouseEnter={() => setActiveCard(4)}
          onMouseLeave={() => setActiveCard(null)}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/sure" className="block space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1D4589]/15 flex items-center justify-center text-[#1D4589]">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D4589] block">PILLAR 04</span>
                  <h4 className="text-xs font-bold text-[#14213D]">SURE Pillar</h4>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#1D4589]" />
            </div>
            <p className="text-[11px] text-[#2B3A55] leading-snug">
              Keyhole arthroscopy, RTP rehab &amp; ₹1.5 Cr+ surgical aid.
            </p>
          </Link>
        </motion.div>
      </div>

      {/* Mobile Stacked Fallback Layout */}
      <div className="flex md:hidden flex-col gap-4 mt-6">
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden glass-card border border-[#1D4589]/20">
          <Image
            src="/assets/indian-athlete-hub-v2.jpg"
            alt="HSI Sports Medicine Care Hub"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#0F172A]/80 text-white text-xs font-semibold">
            HSI CARE // COIMBATORE HUB
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link href="/smart" className="p-3.5 rounded-xl glass-card border border-[#1D4589]/20 flex items-center gap-2">
            <Ambulance className="w-4 h-4 text-[#1D4589] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#14213D]">SMART</h4>
              <p className="text-[10px] text-[#2B3A55]">Response</p>
            </div>
          </Link>

          <Link href="/safe" className="p-3.5 rounded-xl glass-card border border-[#1D4589]/20 flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#1D4589] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#14213D]">SAFE</h4>
              <p className="text-[10px] text-[#2B3A55]">Awareness</p>
            </div>
          </Link>

          <Link href="/shape" className="p-3.5 rounded-xl glass-card border border-[#1D4589]/20 flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#1D4589] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#14213D]">SHAPE</h4>
              <p className="text-[10px] text-[#2B3A55]">Screening</p>
            </div>
          </Link>

          <Link href="/sure" className="p-3.5 rounded-xl glass-card border border-[#1D4589]/20 flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-[#1D4589] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#14213D]">SURE</h4>
              <p className="text-[10px] text-[#2B3A55]">Surgery</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
