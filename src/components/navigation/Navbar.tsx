'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneCall, 
  Heart, 
  Menu, 
  X, 
  Shield, 
  Activity, 
  Stethoscope, 
  Ambulance, 
  ChevronDown, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillarsDropdownOpen, setPillarsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Condense header after 80px scroll
      if (currentScrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide on scroll down, reveal on scroll up (for mobile & desktop smoothness)
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setNavVisible(false);
        } else {
          setNavVisible(true);
        }
      } else {
        setNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          navVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Top Emergency & Teleconsult Bar — Hides when condensed */}
        <div 
          className={`bg-gradient-to-r from-[#0B1B33] via-[#1D4589] to-[#0B1B33] text-white text-xs px-4 border-b border-white/10 transition-all duration-300 overflow-hidden ${
            scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-1.5 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-semibold text-emerald-300 tracking-wide text-[11px] sm:text-xs">
                SMC TELECONSULT ONLINE
              </span>
              <span className="hidden md:inline text-zinc-300 text-[11px]">
                | Rapid Sports Medicine Response by Ortho-One Coimbatore
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <a href="tel:+919790599880" className="hover:text-[#F6AF1F] transition-colors font-medium">
                PRO Ops: +91 97905 99880
              </a>
              <a href="tel:+919790551264" className="hover:text-[#F6AF1F] transition-colors hidden sm:inline font-medium">
                Sports Ops: +91 97905 51264
              </a>
            </div>
          </div>
        </div>

        {/* Main Shrinking / Condensing Header Container */}
        <div 
          className={`w-full transition-all duration-300 border-b ${
            scrolled 
              ? 'bg-[#0B1B33]/95 backdrop-blur-xl border-[#1D4589]/30 py-2 shadow-xl shadow-[#1D4589]/10' 
              : 'bg-[#0B1B33]/90 backdrop-blur-md border-white/10 py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            
            {/* Official HSI Logo & Brand Name */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div 
                className={`relative rounded-xl overflow-hidden bg-white/95 p-1 border border-[#F6AF1F]/60 shadow-lg group-hover:scale-105 transition-all flex items-center justify-center ${
                  scrolled ? 'w-10 h-10' : 'w-12 h-12'
                }`}
              >
                <Image
                  src="/assets/hsi-logo.png"
                  alt="HALT SPORTS INJURIES Official Logo"
                  width={scrolled ? 36 : 48}
                  height={scrolled ? 36 : 48}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span 
                  className={`font-bold text-white tracking-tight group-hover:text-[#F6AF1F] transition-all block leading-tight ${
                    scrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  HALT SPORTS INJURIES
                </span>
                <span className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase block">
                  Under Ortho-One &amp; Ortho Aid Trust
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links — Max 6-7 top level items */}
            <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold tracking-wide">
              {/* Pillars Submenu Dropdown — Click/Focus Activated */}
              <div className="relative">
                <button
                  onClick={() => setPillarsDropdownOpen(!pillarsDropdownOpen)}
                  onBlur={() => setTimeout(() => setPillarsDropdownOpen(false), 200)}
                  className="text-zinc-200 hover:text-[#F6AF1F] flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
                  aria-expanded={pillarsDropdownOpen}
                >
                  <Layers className="w-4 h-4 text-[#F6AF1F]" />
                  <span>4 Pillars</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${pillarsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {pillarsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#0B1B33]/95 backdrop-blur-2xl border border-[#1D4589]/40 p-2 shadow-2xl z-50 space-y-1">
                    <Link
                      href="/smart"
                      className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/10 text-white transition-colors"
                      onClick={() => setPillarsDropdownOpen(false)}
                    >
                      <Ambulance className="w-4 h-4 text-[#F6AF1F]" />
                      <div>
                        <div className="text-xs font-bold text-white">SMART</div>
                        <div className="text-[10px] text-zinc-400">Mobile On-Field &amp; Telehealth</div>
                      </div>
                    </Link>
                    <Link
                      href="/safe"
                      className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/10 text-white transition-colors"
                      onClick={() => setPillarsDropdownOpen(false)}
                    >
                      <Shield className="w-4 h-4 text-[#F6AF1F]" />
                      <div>
                        <div className="text-xs font-bold text-white">SAFE</div>
                        <div className="text-[10px] text-zinc-400">Injury Prevention &amp; Talks</div>
                      </div>
                    </Link>
                    <Link
                      href="/shape"
                      className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/10 text-white transition-colors"
                      onClick={() => setPillarsDropdownOpen(false)}
                    >
                      <Activity className="w-4 h-4 text-[#F6AF1F]" />
                      <div>
                        <div className="text-xs font-bold text-white">SHAPE</div>
                        <div className="text-[10px] text-zinc-400">Assessment &amp; Membership</div>
                      </div>
                    </Link>
                    <Link
                      href="/sure"
                      className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/10 text-white transition-colors"
                      onClick={() => setPillarsDropdownOpen(false)}
                    >
                      <Stethoscope className="w-4 h-4 text-[#F6AF1F]" />
                      <div>
                        <div className="text-xs font-bold text-white">SURE</div>
                        <div className="text-[10px] text-zinc-400">Surgery &amp; Rehabilitation</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/work-impact" className="text-zinc-200 hover:text-[#F6AF1F] py-1 px-2 rounded-lg hover:bg-white/5 transition-colors">
                Our Work
              </Link>
              <Link href="/about" className="text-zinc-200 hover:text-[#F6AF1F] py-1 px-2 rounded-lg hover:bg-white/5 transition-colors">
                About Team
              </Link>
              <Link href="/system-states" className="text-amber-400 font-bold bg-amber-400/10 px-2 py-1 rounded-lg border border-amber-400/30 hover:bg-amber-400/20 transition-colors">
                QA States
              </Link>
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/donate" className="pill-btn-secondary text-xs py-2 px-4 shadow-sm">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> Donate / CSR
              </Link>
              <Link href="/contact" className="pill-btn-primary text-xs py-2 px-4 shadow-md">
                <PhoneCall className="w-3.5 h-3.5" /> Book Consultation
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Glass Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B1B33]/98 backdrop-blur-3xl pt-28 px-6 pb-10 flex flex-col justify-between overflow-y-auto lg:hidden">
          <div className="space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F6AF1F] border-b border-white/10 pb-2">
              HSI Ecosystem Navigation
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Link 
                href="/smart" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-between active:scale-95 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#1D4589]/50 text-[#F6AF1F]">
                    <Ambulance className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">SMART Care</div>
                    <div className="text-xs text-zinc-400">Mobile Care &amp; Telehealth</div>
                  </div>
                </div>
                <span className="text-xs text-[#F6AF1F] font-semibold">Explore →</span>
              </Link>

              <Link 
                href="/safe" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-between active:scale-95 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#1D4589]/50 text-[#F6AF1F]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">SAFE Awareness</div>
                    <div className="text-xs text-zinc-400">Injury Prevention Talks</div>
                  </div>
                </div>
                <span className="text-xs text-[#F6AF1F] font-semibold">Explore →</span>
              </Link>

              <Link 
                href="/shape" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-between active:scale-95 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#1D4589]/50 text-[#F6AF1F]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">SHAPE Membership</div>
                    <div className="text-xs text-zinc-400">Fitness &amp; Movement Labs</div>
                  </div>
                </div>
                <span className="text-xs text-[#F6AF1F] font-semibold">Explore →</span>
              </Link>

              <Link 
                href="/sure" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-between active:scale-95 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#1D4589]/50 text-[#F6AF1F]">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">SURE Surgery &amp; Rehab</div>
                    <div className="text-xs text-zinc-400">Return-to-Play Care</div>
                  </div>
                </div>
                <span className="text-xs text-[#F6AF1F] font-semibold">Explore →</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link 
                href="/work-impact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white text-center text-xs font-semibold"
              >
                Our Work &amp; Impact
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white text-center text-xs font-semibold"
              >
                Team &amp; Advisory
              </Link>
              <Link 
                href="/system-states" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-center text-xs font-bold col-span-2"
              >
                QA System States Demo
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <Link 
              href="/donate" 
              onClick={() => setMobileMenuOpen(false)} 
              className="pill-btn-secondary text-xs text-center justify-center w-full py-3"
            >
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" /> Support via CSR / Donation
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="pill-btn-primary text-xs text-center justify-center w-full py-3"
            >
              <PhoneCall className="w-4 h-4" /> Book Telehealth Consultation
            </Link>
          </div>
        </div>
      )}

      {/* Pinned Mobile Floating Quick Consultation Button (§13.4) */}
      <div className="fixed bottom-20 right-4 z-40 sm:hidden">
        <Link 
          href="/contact"
          className="w-12 h-12 rounded-full bg-[#1D4589] border-2 border-[#F6AF1F] text-white shadow-2xl flex items-center justify-center animate-bounce"
          aria-label="Book Consultation"
        >
          <PhoneCall className="w-5 h-5 text-[#F6AF1F]" />
        </Link>
      </div>
    </>
  );
}
