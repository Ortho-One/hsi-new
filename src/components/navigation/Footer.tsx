'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TEAM_MEMBERS, ADVISORY_COMMITTEE, PARTNER_LOGOS, CONTACT_INFO } from '@/lib/hsiData';
import { MapPin, Phone, Mail, Heart, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-zinc-300 border-t border-white/10 relative overflow-hidden pt-16 pb-28">
      {/* Background Neural Overlay */}
      <div className="absolute inset-0 bg-neural-dots opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-16">
        
        {/* Top: Ecosystem Identity & 4 Pillars Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/90 p-1 border border-[#F6AF1F] flex items-center justify-center shrink-0">
                <Image
                  src="/assets/hsi-logo.png"
                  alt="HALT SPORTS INJURIES Official Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">HALT SPORTS INJURIES</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              A not-for-profit sports-medicine initiative (est. 2024) run under Ortho-One Orthopaedic Speciality Centre, Coimbatore, in partnership with Ortho Aid Charitable Trust.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#F6AF1F] font-semibold">
              <ShieldCheck className="w-4 h-4" /> 1,00,000+ Athletes Served
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F6AF1F] pl-3">
              Core Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/smart" className="hover:text-[#F6AF1F] transition-colors">SMART — Sports Medicine Response (SOW / SMC)</Link></li>
              <li><Link href="/safe" className="hover:text-[#F6AF1F] transition-colors">SAFE — Awareness & Capacity Building</Link></li>
              <li><Link href="/shape" className="hover:text-[#F6AF1F] transition-colors">SHAPE — Health Diagnostics & Membership</Link></li>
              <li><Link href="/sure" className="hover:text-[#F6AF1F] transition-colors">SURE — Surgery & RTP Rehabilitation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F6AF1F] pl-3">
              Coimbatore Facility
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F6AF1F] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </p>
              {CONTACT_INFO.contacts.slice(0, 2).map((c, i) => (
                <p key={i} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F6AF1F]" />
                  <span>{c.name} ({c.title}): <strong className="text-white">{c.phone}</strong></span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F6AF1F] pl-3">
              Leadership & Trust
            </h4>
            <p className="text-xs text-zinc-400 mb-2">
              Founded by <strong className="text-white">Dr. David V. Rajan</strong> (Founder & MD).
            </p>
            <p className="text-xs text-zinc-400">
              COO: Bharadwaj Malepati · Academic: Shyam Sundar · Sports MD: Dr. Emil Cyril · Physio: Paul Earnest.
            </p>
          </div>

        </div>

        {/* Partner Logos Strip */}
        <div className="space-y-4">
          <h4 className="text-center text-xs font-bold uppercase tracking-widest text-[#F6AF1F]">
            PARTNERS & INSTITUTIONAL SUPPORT
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-80">
            {PARTNER_LOGOS.map((partner, idx) => (
              <div 
                key={idx} 
                className="px-4 py-2 rounded-xl glass-card border border-white/10 text-xs font-semibold text-zinc-300 hover:border-[#F6AF1F]/50 transition-colors"
              >
                {partner.name} <span className="text-[10px] text-zinc-500 font-normal">({partner.description})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Halt Sports Injuries (HSI). All rights reserved. Ortho-One, Coimbatore.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300">Terms of Use</Link>
            <Link href="/system-states" className="text-amber-400 hover:underline">System States QA</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
