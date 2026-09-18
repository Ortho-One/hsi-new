import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import MagnificationDock from "@/components/navigation/MagnificationDock";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "HALT SPORTS INJURIES (HSI) | Ortho-One Coimbatore",
  description: "Not-for-profit sports medicine initiative under Ortho-One Orthopaedic Speciality Centre, Coimbatore. SMART, SAFE, SHAPE, and SURE pillars.",
  keywords: ["Sports Medicine", "Coimbatore", "Ortho-One", "Dr David V Rajan", "Injury Prevention", "SOW Sportsmed On Wheels", "SafePlay AMS"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FDF6E8] text-[#2B3A55] font-sans selection:bg-[#1D4589] selection:text-white">
        <SmoothScroll>
          <Navbar />
          {/* pt-28 ensures top fixed navbar never overlaps hero, pb-32 reserves padding so bottom dock never overlaps content */}
          <main className="flex-1 pt-24 pb-32">{children}</main>
          <MagnificationDock />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
