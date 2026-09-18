import React from 'react';
import MasonryGallery from '@/components/gallery/MasonryGallery';
import Link from 'next/link';
import { ArrowLeft, Images } from 'lucide-react';

export const metadata = {
  title: 'HSI Field Action & Camps Photo Gallery | Coimbatore',
  description: 'Complete photo portfolio documenting HSI sports medicine coverage, SHAPE movement screening camps, and SAFE awareness workshops.'
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between border-b border-[#1D4589]/15 pb-4">
        <Link 
          href="/work-impact"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#1D4589] hover:text-[#2A5BAE] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Our Work &amp; Impact
        </Link>
        <span className="text-xs font-semibold text-[#5A6B85]">
          HSI Sports Medicine Photo Archive
        </span>
      </div>

      {/* Main Full Masonry Gallery Component */}
      <MasonryGallery />
    </div>
  );
}
