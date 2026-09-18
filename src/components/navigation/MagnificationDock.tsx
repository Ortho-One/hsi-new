'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Ambulance, ShieldCheck, Activity, Stethoscope, Users, PhoneCall, Heart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DOCK_ITEMS = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'SMART', href: '/smart', icon: Ambulance },
  { name: 'SAFE', href: '/safe', icon: ShieldCheck },
  { name: 'SHAPE', href: '/shape', icon: Activity },
  { name: 'SURE', href: '/sure', icon: Stethoscope },
  { name: 'Impact', href: '/work-impact', icon: Users },
  { name: 'Donate', href: '/donate', icon: Heart },
  { name: 'Contact', href: '/contact', icon: PhoneCall },
];

export default function MagnificationDock() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Magnification Dock — Section 18 Contrast & Navy Bookend (#0B1B33) Corrected */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block pointer-events-none">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-[#0B1B33]/95 border border-[#1D4589]/40 shadow-2xl backdrop-blur-xl"
        >
          {DOCK_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.25, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-3 rounded-full transition-all duration-200 flex items-center justify-center group ${
                    isActive 
                      ? 'bg-[#1D4589] text-[#F6AF1F] shadow-lg shadow-[#1D4589]/60 border border-[#F6AF1F]/50 ring-2 ring-[#F6AF1F]/30' 
                      : 'text-[#F5F5F0] hover:text-[#F6AF1F] hover:bg-[#1D4589] hover:shadow-lg hover:shadow-[#1D4589]/50'
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0 stroke-[2.2]" />
                  
                  {/* High-Contrast Tooltip */}
                  <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#0B1B33] text-[#F6AF1F] text-[11px] font-bold px-3 py-1 rounded-lg border border-[#1D4589]/50 whitespace-nowrap shadow-2xl z-50">
                    {item.name}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 block md:hidden bg-[#0B1B33]/95 border-t border-[#1D4589]/40 backdrop-blur-lg px-2 py-2">
        <div className="flex items-center justify-around">
          {DOCK_ITEMS.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link key={item.name} href={item.href} className="flex flex-col items-center gap-1">
                <div className={`p-1.5 rounded-xl transition-colors ${isActive ? 'bg-[#1D4589] text-[#F6AF1F]' : 'text-zinc-300'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-semibold ${isActive ? 'text-[#F6AF1F]' : 'text-zinc-300'}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
