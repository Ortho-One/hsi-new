'use client';

import React, { useState } from 'react';
import UXStateRenderer from '@/components/ui/UXStateRenderer';
import { CONTACT_INFO } from '@/lib/hsiData';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', query: '', honeypot: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F6AF1F] bg-[#F6AF1F]/10 px-4 py-1.5 rounded-full border border-[#F6AF1F]/20">
          COIMBATORE FACILITY & TEAM
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#14213D] font-serif italic">
          Get in Touch
        </h1>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
          Located inside Ortho-One Orthopaedic Speciality Centre, Singanallur, Coimbatore. Reach our sports coordinators for camp bookings, athlete screening, or telehealth consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Side: Contact Information & Team */}
        <div className="space-y-6 glass-card p-8 rounded-3xl border border-white/10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white font-serif">Singanallur Facility Address</h3>
            <p className="text-zinc-300 text-sm flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[#F6AF1F] shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <h4 className="text-sm font-bold text-[#F6AF1F] uppercase tracking-wide">Key Operational Contacts</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CONTACT_INFO.contacts.map((c, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <h5 className="font-bold text-white">{c.name}</h5>
                  <p className="text-[#F6AF1F]">{c.title}</p>
                  <a href={`tel:${c.phone.replace(/\s+/g, '')}`} className="text-zinc-300 block font-mono hover:text-white">
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#1D4589]/20 border border-[#F6AF1F]/30 text-xs text-zinc-300 flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#F6AF1F] shrink-0" />
            <div>
              <strong className="text-white">Working Hours:</strong> Mon – Sat: 8:00 AM – 8:00 PM · Emergency Teleconsult: 24/7
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="glass-card p-8 rounded-3xl border border-[#F6AF1F]/30 bg-black/60">
          {formStatus === 'success' ? (
            <UXStateRenderer
              type="success"
              title="Message Sent!"
              message="Our sports coordinator will reach out to your phone number within 2 hours."
              onAction={() => setFormStatus('idle')}
              actionText="Send Another Message"
            />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-white font-serif">Send an Inquiry</h3>

              {/* Honeypot field */}
              <input type="text" tabIndex={-1} className="hidden" value={formData.honeypot} onChange={(e) => setFormData({...formData, honeypot: e.target.value})} />

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                />
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
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anand@domain.com"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Inquiry / Consultation Request</label>
                <textarea
                  rows={4}
                  required
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  placeholder="Describe your sports injury, assessment requirement, or event details..."
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full pill-btn-primary text-xs justify-center py-3"
              >
                <Send className="w-4 h-4" /> {formStatus === 'submitting' ? 'Sending...' : 'Dispatch Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
