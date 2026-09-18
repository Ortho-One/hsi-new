'use client';

import React, { useState } from 'react';
import UXStateRenderer from '@/components/ui/UXStateRenderer';
import { Heart, ShieldCheck, Building2, Calculator, ArrowRight } from 'lucide-react';

export default function DonatePage() {
  const [amount, setAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCSR, setIsCSR] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    phone: '',
    panNumber: '',
    companyName: '',
    honeypot: ''
  });

  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const effectiveAmount = customAmount ? Number(customAmount) : amount;
  const taxSavings80G = Math.round(effectiveAmount * 0.5 * 0.3); // 50% deduction at 30% tax bracket

  const handleDonateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('processing');

    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: effectiveAmount,
          donorName: formData.donorName,
          email: formData.email,
          phone: formData.phone,
          panNumber: formData.panNumber,
          isCSR,
          companyName: formData.companyName,
          honeypot: formData.honeypot
        })
      });

      const data = await res.json();
      if (data.success) {
        setOrderDetails(data);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F6AF1F] bg-[#F6AF1F]/10 px-4 py-1.5 rounded-full border border-[#F6AF1F]/20">
          ORTHO AID CHARITABLE TRUST
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white font-serif italic">
          Support Subsidised Sports Care for Needy Talent
        </h1>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
          100% of donations fund arthroscopic surgeries, rehabilitative physiotherapy, and SOW mobile emergency care for underprivileged athletes. 80G tax benefits applicable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
        
        {/* Left Side: Tax Benefit Calculator */}
        <div className="space-y-6 glass-card p-8 rounded-3xl border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <Heart className="w-6 h-6 fill-rose-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-serif">80G Tax Benefit Calculator</h3>
              <span className="text-xs text-zinc-400">Ortho Aid Trust Registration No. AAATO1234E</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400">Contribution Amount:</span>
              <span className="text-white font-extrabold text-sm">₹{effectiveAmount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400">Deduction under Sec 80G (50%):</span>
              <span className="text-emerald-400 font-bold">₹{(effectiveAmount * 0.5).toLocaleString('en-IN')}</span>
            </div>
            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="text-[#F6AF1F] font-bold">Est. Tax Savings (30% slab):</span>
              <span className="text-[#F6AF1F] font-extrabold text-sm">₹{taxSavings80G.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-zinc-300">
            <p className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F6AF1F]" /> Official 80G receipt issued instantly via email.
            </p>
            <p className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#F6AF1F]" /> Corporate CSR partnerships compliant with MCA Section 135.
            </p>
          </div>
        </div>

        {/* Right Side: Payment Form */}
        <div className="glass-card p-8 rounded-3xl border border-[#F6AF1F]/30 bg-black/60">
          {status === 'success' ? (
            <UXStateRenderer
              type="success"
              title="Donation Order Generated!"
              message={`Order ID: ${orderDetails?.orderId}. Amount: ₹${orderDetails?.amount}. Payment Gateway Ready.`}
              onAction={() => setStatus('idle')}
              actionText="Make Another Donation"
            />
          ) : status === 'error' ? (
            <UXStateRenderer
              type="error"
              title="Payment Gateway Error"
              message="Failed to initialize gateway order. Please try again."
              onRetry={() => setStatus('idle')}
            />
          ) : (
            <form onSubmit={handleDonateSubmit} className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white font-serif">Select Contribution</h3>
                <button
                  type="button"
                  onClick={() => setIsCSR(!isCSR)}
                  className={`text-xs px-3 py-1 rounded-full font-semibold border ${
                    isCSR ? 'bg-[#F6AF1F] text-black border-[#F6AF1F]' : 'bg-white/5 text-zinc-300 border-white/10'
                  }`}
                >
                  {isCSR ? 'CSR Corporate Mode' : 'Switch to CSR Mode'}
                </button>
              </div>

              {/* Preset Amounts */}
              <div className="grid grid-cols-4 gap-2">
                {[1000, 2500, 5000, 10000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setAmount(amt); setCustomAmount(''); }}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      amount === amt && !customAmount
                        ? 'bg-[#1D4589] text-[#F6AF1F] border border-[#F6AF1F]'
                        : 'bg-white/5 text-zinc-300 hover:bg-white/15'
                    }`}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Or Enter Custom Amount (₹)</label>
                <input
                  type="number"
                  placeholder="e.g. 15000"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Full Name / Entity</label>
                  <input
                    type="text"
                    required
                    value={formData.donorName}
                    onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Email (for 80G Receipt)</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">PAN Card No (for 80G Tax)</label>
                  <input
                    type="text"
                    required
                    value={formData.panNumber}
                    onChange={(e) => setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })}
                    placeholder="ABCDE1234F"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'processing'}
                className="w-full pill-btn-primary text-xs justify-center py-3"
              >
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                {status === 'processing' ? 'Generating Order...' : `Donate ₹${effectiveAmount.toLocaleString('en-IN')} & Claim 80G`}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
