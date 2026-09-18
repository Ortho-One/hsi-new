'use client';

import React, { useState } from 'react';
import UXStateRenderer from '@/components/ui/UXStateRenderer';
import { Ambulance, Video, Calendar, MapPin, Users, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function SmartPage() {
  const [activeTab, setActiveTab] = useState<'sow' | 'smc'>('sow');
  
  // SOW Form state
  const [formData, setFormData] = useState({
    organizationName: '',
    eventType: '',
    eventDate: '',
    location: '',
    expectedAthletes: 100,
    contactPerson: '',
    phone: '',
    email: '',
    notes: '',
    honeypot: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const res = await fetch('/api/sow-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-4 py-1.5 rounded-full border border-[#1D4589]/20">
          HSI PILLAR 01 · SMART
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#14213D] font-serif italic">
          Sports Medicine Access, Response &amp; Timely Reach
        </h1>
        <p className="text-[#2B3A55] text-sm md:text-base leading-relaxed">
          Bringing specialized sports physicians and mobile emergency care directly to competitive fields, school sports days, and remote athletes across Tamil Nadu.
        </p>
      </div>

      {/* Sub-Program Selector Tabs */}
      <div className="flex justify-center gap-4 border-b border-white/10 pb-4">
        <button
          onClick={() => setActiveTab('sow')}
          className={`px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${
            activeTab === 'sow'
              ? 'bg-[#1D4589] text-[#F6AF1F] border border-[#F6AF1F]/40 shadow-lg'
              : 'bg-white/5 text-zinc-400 hover:text-white'
          }`}
        >
          <Ambulance className="w-5 h-5 text-[#F6AF1F]" /> SOW — Sportsmed On Wheels
        </button>

        <button
          onClick={() => setActiveTab('smc')}
          className={`px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${
            activeTab === 'smc'
              ? 'bg-[#1D4589] text-[#F6AF1F] border border-[#F6AF1F]/40 shadow-lg'
              : 'bg-white/5 text-zinc-400 hover:text-white'
          }`}
        >
          <Video className="w-5 h-5 text-[#F6AF1F]" /> SMC — Teleconsult Portal
        </button>
      </div>

      {/* SOW View */}
      {activeTab === 'sow' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Details Card */}
          <div className="space-y-6 glass-card p-8 rounded-3xl border border-[#1D4589]/20 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1D4589]/15 border border-[#1D4589]/30 flex items-center justify-center text-[#1D4589]">
                <Ambulance className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#14213D] font-serif">SOW (Sportsmed On Wheels)</h3>
                <span className="text-xs text-[#5A6B85]">On-Field Mobile Ambulance &amp; Emergency Response</span>
              </div>
            </div>

            <p className="text-[#2B3A55] text-sm leading-relaxed">
              SOW is a fully equipped mobile sports injury response unit deployed at sports tournaments, school meets, marathon routes, and academy trials.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-[#2B3A55]">
                <CheckCircle2 className="w-4 h-4 text-[#1D4589] shrink-0 mt-0.5" />
                <span>On-site acute trauma management, acute sprain triage, and cryotherapy.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#2B3A55]">
                <CheckCircle2 className="w-4 h-4 text-[#1D4589] shrink-0 mt-0.5" />
                <span>Manned by qualified sports physiotherapists &amp; paramedic staff.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#2B3A55]">
                <CheckCircle2 className="w-4 h-4 text-[#1D4589] shrink-0 mt-0.5" />
                <span>Direct rapid transport link to Ortho-One Speciality Centre, Coimbatore.</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1D4589]/10 border border-[#1D4589]/20 text-xs space-y-1">
              <h4 className="font-bold text-[#1D4589]">SMART Key Statistics</h4>
              <p className="text-[#2B3A55]">1,00,000+ athletes served · 500+ sports tournaments covered across Tamil Nadu.</p>
            </div>
          </div>

          {/* SOW Request Form */}
          <div className="glass-card-warm p-8 rounded-3xl border border-[#F6AF1F]/40 shadow-xl">
            {formStatus === 'success' ? (
              <UXStateRenderer
                type="success"
                title="SOW Request Submitted!"
                message="HSI Sports Operations team will contact you within 24 hours to confirm event mobile unit availability."
                onAction={() => setFormStatus('idle')}
                actionText="Submit Another Request"
              />
            ) : formStatus === 'error' ? (
              <UXStateRenderer
                type="error"
                title="Submission Error"
                message="Failed to submit SOW request. Please try calling PRO directly at +91 97905 99880."
                onRetry={() => setFormStatus('idle')}
              />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#14213D] font-serif mb-2">Request SOW Support for Event</h3>
                
                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block mb-1">Organization / School Name</label>
                    <input
                      type="text"
                      required
                      value={formData.organizationName}
                      onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                      placeholder="e.g. Coimbatore Sports Academy"
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block mb-1">Event Type</label>
                    <input
                      type="text"
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      placeholder="e.g. District Athletics Meet"
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block mb-1">Event Date</label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block mb-1">Location / Venue</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Nehru Stadium, Coimbatore"
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block mb-1">Contact Person</label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                    />
                  </div>

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
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Additional Requirements</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Specify number of courts, athlete age group, special medical needs..."
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-[#F6AF1F] outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full pill-btn-primary text-xs justify-center py-3"
                >
                  <Send className="w-4 h-4" /> {formStatus === 'submitting' ? 'Submitting...' : 'Dispatch SOW Request'}
                </button>
              </form>
            )}
          </div>

        </div>
      )}

      {/* SMC Teleconsult View */}
      {activeTab === 'smc' && (
        <div className="p-8 md:p-12 rounded-3xl glass-card border border-white/10 max-w-3xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
            <Video className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
            SMC TELECONSULTATION PORTAL ONLINE
          </span>
          <h3 className="text-2xl font-bold text-white font-serif">Connect with Ortho-One Sports Physician</h3>
          <p className="text-zinc-300 text-sm leading-relaxed max-w-xl mx-auto">
            Get instant video guidance from sports doctors for acute strain assessment, MRI report reviews, and rehabilitation progress checks without traveling.
          </p>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-xs text-left space-y-2">
            <div className="flex justify-between font-semibold">
              <span className="text-zinc-300">Doctor Status:</span>
              <span className="text-emerald-400 font-bold">Dr. Emil Cyril (Available)</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Consultation Helpline:</span>
              <a href="tel:+919790551264" className="text-[#F6AF1F] font-bold">+91 97905 51264</a>
            </div>
          </div>

          <a href="tel:+919790551264" className="pill-btn-primary text-sm inline-flex">
            <Phone className="w-4 h-4" /> Dial Telehealth Helpline
          </a>
        </div>
      )}

    </div>
  );
}
