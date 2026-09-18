'use client';

import React, { useState } from 'react';
import UXStateRenderer from '@/components/ui/UXStateRenderer';
import { UXStateType } from '@/types/hsi';
import { ShieldAlert, RefreshCw } from 'lucide-react';

const SYSTEM_STATES: { id: UXStateType; label: string; description: string }[] = [
  { id: 'empty', label: '1. Empty State', description: 'When no camps or assessment history exist' },
  { id: 'error', label: '2. System Error (500)', description: 'Granular runtime exception boundary' },
  { id: 'loading', label: '3. Skeleton Loading', description: 'Perceived performance loading skeleton' },
  { id: 'no-internet', label: '4. No Internet (Offline)', description: 'Network disconnect with cached mode' },
  { id: 'slow-internet', label: '5. Low Bandwidth', description: 'Low bandwidth fallback mode' },
  { id: 'no-results', label: '6. No Search Results', description: 'Query filter with 0 matches' },
  { id: 'permission-denied', label: '7. Permission Denied (RBAC)', description: 'Unauthorized access to PHI records' },
  { id: 'session-expired', label: '8. Session Expired', description: 'Security JWT token timeout' },
  { id: 'validation-error', label: '9. Form Validation', description: 'Inline validation feedback' },
  { id: 'success', label: '10. Success Confirmation', description: 'Booking or donation success screen' }
];

export default function SystemStatesPage() {
  const [activeState, setActiveState] = useState<UXStateType>('empty');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F6AF1F] bg-[#F6AF1F]/10 px-4 py-1.5 rounded-full border border-[#F6AF1F]/20">
          SYSTEM DESIGN & QA SUITE
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white font-serif italic">
          10 Master UX & System States
        </h1>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
          Interactive showcase demonstrating HSI&apos;s 10 standardized, theme-consistent system state components.
        </p>
      </div>

      {/* State Selector Buttons */}
      <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
        {SYSTEM_STATES.map((st) => (
          <button
            key={st.id}
            onClick={() => setActiveState(st.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeState === st.id
                ? 'bg-[#1D4589] text-[#F6AF1F] border border-[#F6AF1F] shadow-lg shadow-[#1D4589]/40'
                : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {st.label}
          </button>
        ))}
      </div>

      {/* Active State Preview Frame */}
      <div className="p-8 md:p-12 rounded-[40px] glass-card border border-white/10 bg-gradient-to-b from-black via-[#122C5A]/20 to-black min-h-[400px] flex flex-col justify-center items-center">
        <div className="mb-6 text-center">
          <span className="text-xs font-mono text-[#F6AF1F] uppercase tracking-wider">ACTIVE COMPONENT PREVIEW</span>
          <h3 className="text-xl font-bold text-white">
            {SYSTEM_STATES.find(s => s.id === activeState)?.label}
          </h3>
          <p className="text-xs text-zinc-400">
            {SYSTEM_STATES.find(s => s.id === activeState)?.description}
          </p>
        </div>

        <div className="w-full max-w-xl">
          <UXStateRenderer
            type={activeState}
            onRetry={() => alert('Retry action triggered!')}
            onAction={() => alert('Primary action triggered!')}
          />
        </div>
      </div>

    </div>
  );
}
