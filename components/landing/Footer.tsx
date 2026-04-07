"use client";

import { SignUpButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { ShieldCheck, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const { isLoaded, userId } = useAuth();
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Live Mission Logs Crawl
    const logs = logRef.current;
    if (logs) {
      gsap.to(logs, {
        yPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  const missionLogs = [
    "User_842 // PB Logged: 140kg Deadlift",
    "Athlete_09 // Mission Sync: Complete",
    "Vox_Alpha // Calibration: Optimal",
    "User_221 // RPE 9 // Session Saved",
    "System // Engine 1.0.8 // Status: Weightless",
  ];

  return (
    <footer className="relative py-48 px-6 flex flex-col items-center justify-center gap-24 bg-void border-t border-ghost/5 w-full overflow-hidden">
      <div className="flex flex-col items-center text-center gap-8 max-w-5xl relative z-10">
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-textMain leading-tight uppercase">
          YOU PROVIDE THE SWEAT. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-kinetic via-logic to-kinetic animate-gradient-x">WE PROVIDE THE SCIENCE.</span>
        </h2>
        
        <div className="mt-12 group">
          {!isLoaded ? (
            <div className="w-64 h-24 bg-ghost/10 rounded-full animate-pulse" />
          ) : !userId ? (
            <SignUpButton mode="modal">
              <button className="relative flex items-center gap-8 px-16 py-8 rounded-full bg-void border border-ghost/20 text-textMain font-black shadow-glow-kinetic transition-all hover:scale-105 active:scale-95 uppercase tracking-[0.2em] text-xl group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-kinetic/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                CALIBRATE MISSION
                <div className="w-12 h-[1px] bg-kinetic group-hover:w-20 transition-all" />
              </button>
            </SignUpButton>
          ) : (
            <Link href="/dashboard">
              <button className="relative flex items-center gap-8 px-16 py-8 rounded-full bg-void border border-ghost/20 text-textMain font-black shadow-glow-logic transition-all hover:scale-105 active:scale-95 uppercase tracking-[0.2em] text-xl group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-logic/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                ENTER MISSION DECK
                <div className="w-12 h-[1px] bg-logic group-hover:w-20 transition-all" />
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Immersive Mission Logs */}
      <div className="absolute bottom-0 w-full h-40 overflow-hidden pointer-events-none opacity-20 bg-gradient-to-t from-void to-transparent">
        <div ref={logRef} className="flex flex-col items-center gap-2">
          {[...missionLogs, ...missionLogs].map((log, i) => (
            <span key={i} className="text-[10px] font-mono uppercase tracking-[0.5em] text-ghost whitespace-nowrap">
              {log}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-8 flex items-center gap-6 opacity-30">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3 h-3 text-kinetic" />
          <span className="text-[8px] font-bold uppercase tracking-widest text-ghost">MISSION SECURE</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3 text-logic" />
          <span className="text-[8px] font-bold uppercase tracking-widest text-ghost">SYSTEM IDLE</span>
        </div>
      </div>

      {/* Extreme nebula glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-logic/5 blur-[180px] rounded-full pointer-events-none" />
    </footer>
  );
}
