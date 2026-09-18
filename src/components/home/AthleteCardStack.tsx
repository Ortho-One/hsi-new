'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, RotateCw } from 'lucide-react';
import Image from 'next/image';

const TESTIMONIAL_CARDS = [
  {
    id: '1',
    athlete: 'Rohan Sharma',
    sport: 'State Basketball Player',
    injury: 'ACL Tear & Reconstruction (SURE)',
    quote: 'From on-field acute response to Dr. David Rajan surgical precision and post-op rehab, HSI got me back to competing in 8 months.',
    image: '/assets/care-1.jpg'
  },
  {
    id: '2',
    athlete: 'Kavitha Ramaswamy',
    sport: 'National Track Sprinter',
    injury: 'Movement Screening & VO2 Max (SHAPE)',
    quote: 'The SHAPE assessment uncovered hidden asymmetry in my hamstring activation. The custom conditioning boosted my 200m timing by 0.4s.',
    image: '/assets/care-2.jpg'
  },
  {
    id: '3',
    athlete: 'Coimbatore District Academy',
    sport: '50+ Junior Athletes',
    injury: 'SOW Event Medical Coverage (SMART)',
    quote: 'Having Sportsmed On Wheels (SOW) stationed at our mega tournament gave all 500+ participants immediate medical peace of mind.',
    image: '/assets/care-3.jpg'
  }
];

export default function AthleteCardStack() {
  const [cards, setCards] = useState(TESTIMONIAL_CARDS);

  const handleSendToBack = () => {
    setCards((prev) => {
      const copy = [...prev];
      const front = copy.shift();
      if (front) copy.push(front);
      return copy;
    });
  };

  return (
    <div className="w-full py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
        
        {/* Left Side Copy */}
        <div className="md:w-1/2 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F6AF1F] bg-[#F6AF1F]/10 px-3 py-1 rounded-full border border-[#F6AF1F]/20">
            ATHLETE IMPACT STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif italic">
            Empowering Athletes Across Every Stage of Recovery
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Discover real stories from state level competitors, coaches, and academies supported by HSI&apos;s 4 pillars of care across Coimbatore and South India.
          </p>
          
          <button
            onClick={handleSendToBack}
            className="pill-btn-secondary text-xs mt-2"
          >
            <RotateCw className="w-4 h-4 text-[#F6AF1F]" /> Swap Next Story Card
          </button>
        </div>

        {/* Right Side: Interactive Stack with Opaque Masking (Section 7.3 Fix) */}
        <div className="md:w-1/2 relative h-[380px] w-full max-w-sm mx-auto flex items-center justify-center">
          <AnimatePresence>
            {cards.map((card, index) => {
              const isTop = index === 0;
              const rotation = isTop ? 0 : (index % 2 === 0 ? 6 : -6) * index;
              const scale = 1 - index * 0.05;
              const translateY = index * 12;

              return (
                <motion.div
                  key={card.id}
                  style={{ zIndex: cards.length - index }}
                  animate={{
                    scale,
                    rotate: rotation,
                    y: translateY,
                    opacity: isTop ? 1 : 0.85
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  onClick={isTop ? handleSendToBack : undefined}
                  className={`absolute top-0 left-0 w-full h-[360px] rounded-3xl p-6 border shadow-2xl cursor-pointer overflow-hidden flex flex-col justify-between transition-all ${
                    isTop 
                      ? 'bg-[#0a0a0a] border-[#F6AF1F]/60 shadow-[#1D4589]/50' 
                      : 'bg-[#122C5A] border-white/20'
                  }`}
                >
                  <div className="relative h-36 w-full rounded-2xl overflow-hidden border border-white/10 mb-3 shrink-0">
                    <Image
                      src={card.image}
                      alt={card.athlete}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-3">
                      <span className="text-xs font-bold text-[#F6AF1F] bg-black/80 px-2.5 py-0.5 rounded border border-white/10">
                        {card.sport}
                      </span>
                    </div>
                  </div>

                  {/* Fully Occluded Text Box */}
                  <div className="space-y-2 relative z-10 bg-[#0a0a0a] p-3 rounded-xl border border-white/5">
                    <Quote className="w-4 h-4 text-[#F6AF1F]" />
                    <p className="text-xs text-zinc-200 italic leading-relaxed line-clamp-3">
                      &quot;{card.quote}&quot;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between relative z-10">
                    <div>
                      <h4 className="text-sm font-bold text-white">{card.athlete}</h4>
                      <span className="text-[11px] text-[#F6AF1F] font-medium">{card.injury}</span>
                    </div>
                    {isTop && (
                      <span className="text-[10px] text-zinc-400 bg-white/10 px-2 py-1 rounded">
                        Tap to cycle
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
