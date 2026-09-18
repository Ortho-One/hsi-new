'use client';

import React, { useState } from 'react';
import { FIELD_GALLERY_IMAGES } from '@/lib/hsiData';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, X, Camera } from 'lucide-react';
import Image from 'next/image';

export default function MasonryGallery() {
  const [selectedImg, setSelectedImg] = useState<typeof FIELD_GALLERY_IMAGES[0] | null>(null);

  return (
    <div className="w-full py-8 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-3 py-1 rounded-full border border-[#1D4589]/20">
          REAL FIELD ACTION &amp; CAMPS PORTFOLIO ({FIELD_GALLERY_IMAGES.length} PHOTOS)
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#14213D]">
          On-Field Sports Medicine &amp; Diagnostics in Action
        </h2>
        <p className="text-xs md:text-sm text-[#2B3A55] font-medium">
          Documenting acute trauma triage, baseline movement screening, and coach capacity building across Coimbatore &amp; Tamil Nadu.
        </p>
      </div>

      {/* §15.2 Masonry Grid with Always-Visible Bottom Caption Strip & Border Divider */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {FIELD_GALLERY_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
            onClick={() => setSelectedImg(img)}
            className="break-inside-avoid relative rounded-3xl overflow-hidden glass-card border border-[#1D4589]/20 bg-white shadow-lg group cursor-pointer hover:shadow-2xl hover:border-[#1D4589]/40 transition-all duration-300"
          >
            {/* Top Image Box */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1D4589]/5">
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0F172A]/80 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10">
                <Maximize2 className="w-4 h-4 text-[#F6AF1F]" />
              </div>
            </div>

            {/* §15.2 ALWAYS-VISIBLE Bottom Caption Strip separated by a visible border/divider line */}
            <div className="p-4 bg-white border-t border-[#1D4589]/15 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#1D4589] uppercase tracking-wider">
                <MapPin className="w-3 h-3 text-[#1D4589]" /> {img.location}
              </div>
              <h4 className="text-sm font-bold text-[#14213D] leading-snug group-hover:text-[#1D4589] transition-colors">
                {img.title}
              </h4>
              <p className="text-xs text-[#2B3A55] leading-relaxed font-medium line-clamp-2 pt-0.5">
                {img.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-[#0B1B33]/90 backdrop-blur-xl p-4 flex items-center justify-center overflow-y-auto"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-card border-2 border-[#1D4589]/40 p-6 bg-white shadow-2xl space-y-4"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#1D4589] text-white flex items-center justify-center hover:bg-[#2A5BAE] transition-colors shadow-lg"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-[#1D4589]/20 shadow-inner">
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-2 border-t border-[#1D4589]/15 pt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1D4589] uppercase tracking-wider">
                  <Camera className="w-4 h-4 text-[#1D4589]" /> {selectedImg.location}
                </div>
                <h3 className="text-2xl font-bold text-[#14213D]">{selectedImg.title}</h3>
                <p className="text-[#2B3A55] text-sm leading-relaxed font-medium">{selectedImg.caption}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
