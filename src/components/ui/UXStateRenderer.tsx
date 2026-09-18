'use client';

import React from 'react';
import { 
  Inbox, 
  AlertTriangle, 
  WifiOff, 
  Gauge, 
  SearchX, 
  ShieldAlert, 
  Clock, 
  CheckCircle2, 
  Loader2, 
  FileWarning, 
  RefreshCw,
  ArrowRight
} from 'lucide-react';
import { UXStateType } from '@/types/hsi';

interface UXStateProps {
  type: UXStateType;
  title?: string;
  message?: string;
  onRetry?: () => void;
  onAction?: () => void;
  actionText?: string;
}

export default function UXStateRenderer({
  type,
  title,
  message,
  onRetry,
  onAction,
  actionText
}: UXStateProps) {
  switch (type) {
    case 'empty':
      return (
        <div className="p-8 md:p-12 text-center rounded-3xl glass-card border border-white/10 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-[#1D4589]/20 border border-[#F6AF1F]/30 flex items-center justify-center mx-auto mb-4 text-[#F6AF1F]">
            <Inbox className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title || 'No Data Found'}</h3>
          <p className="text-zinc-400 text-sm mb-6">{message || 'There are currently no records or active sports camps in this view.'}</p>
          {onRetry && (
            <button onClick={onRetry} className="pill-btn-secondary text-sm">
              <RefreshCw className="w-4 h-4" /> Refresh View
            </button>
          )}
        </div>
      );

    case 'error':
      return (
        <div className="p-8 md:p-12 text-center rounded-3xl glass-card border border-red-500/30 max-w-lg mx-auto bg-red-950/20">
          <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center mx-auto mb-4 text-red-400">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title || 'System Exception'}</h3>
          <p className="text-zinc-300 text-sm mb-6">{message || 'An unexpected error occurred. Technical logs have been dispatched to HSI Security Ops.'}</p>
          <div className="flex gap-3 justify-center">
            {onRetry && (
              <button onClick={onRetry} className="pill-btn-primary text-sm">
                <RefreshCw className="w-4 h-4" /> Try Again
              </button>
            )}
          </div>
        </div>
      );

    case 'loading':
      return (
        <div className="p-8 rounded-3xl glass-card border border-white/10 max-w-2xl mx-auto space-y-4 animate-pulse">
          <div className="h-6 bg-white/10 rounded-lg w-1/3"></div>
          <div className="h-24 bg-white/5 rounded-2xl"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-12 bg-white/5 rounded-xl"></div>
            <div className="h-12 bg-white/5 rounded-xl"></div>
          </div>
        </div>
      );

    case 'no-internet':
      return (
        <div className="p-8 text-center rounded-3xl glass-card border border-amber-500/30 max-w-lg mx-auto bg-amber-950/20">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto mb-4 text-amber-400">
            <WifiOff className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title || 'Offline Connection'}</h3>
          <p className="text-zinc-300 text-sm mb-6">{message || 'Internet connection lost. SafePlay AMS cached mode active.'}</p>
          {onRetry && (
            <button onClick={onRetry} className="pill-btn-secondary text-sm">
              <RefreshCw className="w-4 h-4" /> Reconnect
            </button>
          )}
        </div>
      );

    case 'slow-internet':
      return (
        <div className="p-6 text-center rounded-2xl glass-card border border-amber-500/20 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-3 text-amber-400 font-medium text-sm mb-2">
            <Gauge className="w-5 h-5 animate-pulse" /> Low Bandwidth Detected
          </div>
          <p className="text-zinc-400 text-xs">Switching WebGL 3D graphics to static high-resolution fallback mode.</p>
        </div>
      );

    case 'no-results':
      return (
        <div className="p-8 text-center rounded-3xl glass-card border border-white/10 max-w-md mx-auto">
          <SearchX className="w-12 h-12 text-zinc-500 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-white mb-1">{title || 'No Matching Query'}</h4>
          <p className="text-zinc-400 text-xs">{message || 'Try adjusting your search filters or keyword terms.'}</p>
        </div>
      );

    case 'permission-denied':
      return (
        <div className="p-8 text-center rounded-3xl glass-card border border-red-500/30 max-w-lg mx-auto bg-red-950/20">
          <ShieldAlert className="w-14 h-14 text-red-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">{title || 'Access Restricted (RBAC/ABAC)'}</h3>
          <p className="text-zinc-300 text-sm mb-6">{message || 'Your account credentials do not possess authority for medical record export.'}</p>
        </div>
      );

    case 'session-expired':
      return (
        <div className="p-8 text-center rounded-3xl glass-card border border-blue-500/30 max-w-lg mx-auto">
          <Clock className="w-14 h-14 text-[#F6AF1F] mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">{title || 'Session Timeout'}</h3>
          <p className="text-zinc-300 text-sm mb-6">{message || 'Your security session has expired for patient safety. Please authenticate again.'}</p>
          {onAction && (
            <button onClick={onAction} className="pill-btn-primary text-sm">
              Authenticate Now <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      );

    case 'validation-error':
      return (
        <div className="p-6 rounded-2xl bg-red-950/40 border border-red-500/40 text-red-200 text-sm space-y-2">
          <div className="flex items-center gap-2 font-semibold text-red-400">
            <FileWarning className="w-5 h-5" /> {title || 'Submission Incomplete'}
          </div>
          <p className="text-xs">{message || 'Please correct the highlighted fields before submitting.'}</p>
        </div>
      );

    case 'success':
      return (
        <div className="p-8 md:p-12 text-center rounded-3xl glass-card border border-emerald-500/40 max-w-lg mx-auto bg-emerald-950/20">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{title || 'Request Confirmed'}</h3>
          <p className="text-zinc-300 text-sm mb-6">{message || 'Your submission has been dispatched to HSI Sports Medicine Team, Coimbatore.'}</p>
          {onAction && (
            <button onClick={onAction} className="pill-btn-primary text-sm">
              {actionText || 'Continue'} <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      );

    default:
      return null;
  }
}
