import React from 'react';
import { TEAM_MEMBERS, ADVISORY_COMMITTEE } from '@/lib/hsiData';
import { ShieldCheck, Award, Heart, Building2, UserCheck, Calendar, Trophy, Medal } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About HSI | Leadership & Advisory Committee | Coimbatore',
  description: 'Founded in 2024 under Ortho-One Orthopaedic Speciality Centre (est. 2007) by Dr. David V. Rajan in partnership with Ortho Aid Charitable Trust.'
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589] bg-[#1D4589]/10 px-4 py-1.5 rounded-full border border-[#1D4589]/20">
          ORGANIZATIONAL IDENTITY
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#14213D]">
          Founded on Clinical Excellence &amp; Compassion
        </h1>
        <p className="text-[#2B3A55] text-sm md:text-base leading-relaxed font-medium">
          HALT SPORTS INJURIES (HSI) is a not-for-profit sports-medicine initiative established in 2024 under Ortho-One Orthopaedic Speciality Centre, Coimbatore (founded 2007 by Dr. David V. Rajan), in partnership with Ortho Aid Charitable Trust.
        </p>
      </div>

      {/* §14.3 Founding Timeline Element */}
      <div className="p-8 rounded-3xl glass-card border border-[#1D4589]/20 space-y-6">
        <h2 className="text-2xl font-bold text-[#14213D] text-center">Institutional Legacy Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border border-[#1D4589]/20 shadow-md space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4589] text-white text-xs font-bold">
              <Calendar className="w-3.5 h-3.5" /> 2007 · FOUNDATION
            </div>
            <h3 className="text-xl font-bold text-[#14213D]">Ortho-One Established</h3>
            <p className="text-xs text-[#2B3A55] leading-relaxed">
              Dr. David V. Rajan founded Ortho-One Orthopaedic Speciality Centre in Coimbatore, establishing South India&apos;s premier center for keyhole arthroscopy and joint restoration.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1D4589] text-white shadow-xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6AF1F] text-[#14213D] text-xs font-bold">
              <Calendar className="w-3.5 h-3.5" /> 2024 · LAUNCH
            </div>
            <h3 className="text-xl font-bold text-white">HSI Initiative Launched</h3>
            <p className="text-xs text-zinc-100 leading-relaxed">
              HALT SPORTS INJURIES established as a dedicated non-profit initiative under Ortho Aid Charitable Trust to protect athletes across all levels via SMART, SAFE, SHAPE, and SURE.
            </p>
          </div>
        </div>
      </div>

      {/* §14.3 Trusted by Athletes Discipline Credibility Strip */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#1D4589] via-[#122C5A] to-[#1D4589] text-white shadow-xl text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F6AF1F]">HIGH-PERFORMANCE CREDIBILITY</span>
        <h3 className="text-2xl font-bold text-white">Trusted by National &amp; International Athletes</h3>
        <p className="text-xs md:text-sm text-zinc-200 max-w-2xl mx-auto">
          Providing specialized sports medicine, movement assessments, and recovery protocols for athletes competing in <strong>Pole Vault</strong>, <strong>Karate</strong>, <strong>Basketball</strong>, <strong>Hockey</strong>, and <strong>Track &amp; Field</strong>.
        </p>
        <div className="flex justify-center gap-6 pt-2 text-xs font-semibold text-[#F6AF1F]">
          <span>• Pole Vault Champions</span>
          <span>• National Karate Medallists</span>
          <span>• State Basketball Teams</span>
        </div>
      </div>

      {/* Vision, Mission, Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="glass-card p-8 rounded-3xl border border-[#1D4589]/20 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1D4589]">VISION</span>
          <h3 className="text-xl font-bold text-[#14213D]">Protect Every Athlete</h3>
          <p className="text-[#2B3A55] text-xs leading-relaxed font-medium">
            Build a future where athletes at all levels reach their full potential through performance enhancement and are protected from preventable sports injuries.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-[#1D4589]/20 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1D4589]">MISSION</span>
          <h3 className="text-xl font-bold text-[#14213D]">4-Pillar Integration</h3>
          <p className="text-[#2B3A55] text-xs leading-relaxed font-medium">
            Improve athlete performance · Reduce risk of injuries · Spread awareness of sports medicine/science · Provide subsidised treatment for deserving athletes.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-[#1D4589]/20 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1D4589]">CORE VALUES</span>
          <h3 className="text-xl font-bold text-[#14213D]">Pillars of Integrity</h3>
          <p className="text-[#2B3A55] text-xs leading-relaxed font-medium">
            Compassion · Clinical Excellence · Prevention First · Accessibility · Transparency.
          </p>
        </div>

      </div>

      {/* Founder Profile Spotlight */}
      <div className="p-8 md:p-12 rounded-[40px] glass-card border border-[#1D4589]/30 bg-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
        <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-[#1D4589] shrink-0 bg-[#1D4589]/10 flex items-center justify-center text-[#1D4589] font-bold text-xl shadow-lg">
          <Image
            src="/assets/care-3.jpg"
            alt="Dr. David V. Rajan"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4589]">FOUNDER &amp; MANAGING DIRECTOR</span>
          <h2 className="text-3xl font-bold text-[#14213D]">Dr. David V. Rajan</h2>
          <p className="text-[#2B3A55] text-sm leading-relaxed font-medium">
            Pioneer of Arthroscopic Surgery &amp; Sports Medicine in South India. Dr. Rajan founded Ortho-One Orthopaedic Speciality Centre in 2007, delivering over 25,000 successful keyhole surgeries and establishing HSI in 2024 to democratize sports medicine for grassroots athletes.
          </p>
        </div>
      </div>

      {/* Leadership Team Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#14213D] text-center">Operational &amp; Clinical Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.slice(1).map((member, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl border border-[#1D4589]/20 space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#1D4589] flex items-center justify-center text-white font-bold text-sm mb-2 shadow-md">
                {member.name[0]}
              </div>
              <h3 className="text-lg font-bold text-[#14213D]">{member.name}</h3>
              <p className="text-xs font-semibold text-[#1D4589]">{member.role}</p>
              <p className="text-xs text-[#2B3A55] leading-relaxed pt-1 font-medium">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Committee */}
      <div className="p-8 rounded-3xl glass-card border border-[#1D4589]/20 space-y-6">
        <h2 className="text-xl font-bold text-[#14213D] text-center">HSI Advisory Committee</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {ADVISORY_COMMITTEE.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-[#1D4589]/15 shadow-sm">
              <h4 className="text-sm font-bold text-[#14213D]">{item.name}</h4>
              <p className="text-xs text-[#1D4589] font-semibold">{item.organization}</p>
            </div>
          ))}
        </div>
      </div>

      {/* §14.3 Awards & Recognition Placeholder */}
      <div className="p-8 rounded-3xl border border-dashed border-[#1D4589]/30 bg-[#1D4589]/5 text-center space-y-2">
        <Award className="w-8 h-8 text-[#1D4589] mx-auto opacity-60" />
        <h3 className="text-lg font-bold text-[#14213D]">Awards &amp; Recognition</h3>
        <p className="text-xs text-[#5A6B85] font-medium">
          Official recognition and clinical excellence awards documentation coming soon.
        </p>
      </div>

    </div>
  );
}
