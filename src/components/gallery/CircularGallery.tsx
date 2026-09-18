'use client';

import React, { useState } from 'react';
import { FIELD_GALLERY_IMAGES } from '@/lib/hsiData';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera, ArrowRight, Images } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CircularGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? FIELD_GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % FIELD_GALLERY_IMAGES.length);
  };

  const current = FIELD_GALLERY_IMAGES[currentIndex];

  return (
    <div className="relative w-full rounded-[40px] glass-card border border-[#1D4589]/20 p-8 overflow-hidden bg-white shadow-xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-[#1D4589]/15 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-3 py-1 rounded-full border border-[#1D4589]/20">
            CIRCULAR CAROUSEL · {FIELD_GALLERY_IMAGES.length} PHOTOS
          </span>
          <h3 className="text-2xl font-bold text-[#14213D] mt-1">
            SHAPE Diagnostics &amp; Camps Portfolio
          </h3>
        </div>

        {/* §15.2 View Full Gallery Button */}
        <Link 
          href="/work-impact/gallery" 
          className="pill-btn-primary text-xs shrink-0 py-2.5 px-4 shadow-md"
        >
          <Images className="w-4 h-4 text-[#F6AF1F]" /> View Full Masonry Gallery <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative flex items-center justify-center max-w-4xl mx-auto min-h-[380px]">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-20 w-12 h-12 rounded-full bg-[#1D4589] border-2 border-white text-white flex items-center justify-center hover:bg-[#2A5BAE] transition-all shadow-xl focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 z-20 w-12 h-12 rounded-full bg-[#1D4589] border-2 border-white text-white flex items-center justify-center hover:bg-[#2A5BAE] transition-all shadow-xl focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Central Rotating Media Display */}
        <motion.div
          key={currentIndex}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-2xl aspect-[16/10] rounded-3xl overflow-hidden glass-card border-2 border-[#1D4589]/30 shadow-2xl shadow-[#1D4589]/20"
        >
          <Image
            src={current.src}
            alt={current.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent p-6 flex flex-col justify-end">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F6AF1F] uppercase tracking-wider mb-1">
              <Camera className="w-4 h-4 text-[#F6AF1F]" /> {current.location}
            </div>
            <h4 className="text-xl font-bold text-white">{current.title}</h4>
            <p className="text-xs text-zinc-200 mt-1 font-medium leading-relaxed">{current.caption}</p>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-1.5 mt-6 flex-wrap max-w-xl mx-auto">
        {FIELD_GALLERY_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? 'w-8 bg-[#1D4589]' : 'w-2 bg-[#1D4589]/20 hover:bg-[#1D4589]/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
