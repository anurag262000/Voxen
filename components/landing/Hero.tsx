"use client";

import { SignUpButton, useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mic } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Zoom-in/fade-out effect with improved timing
    tl.to(headlineRef.current, { scale: 2, opacity: 0, duration: 2, ease: "power2.inOut" });
    tl.to(pulseRef.current, { scale: 8, opacity: 0, duration: 2, ease: "power2.inOut" }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-10 pt-24 bg-void"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col items-center text-center gap-12"
      >
        <div ref={headlineRef} className="space-y-4 w-full">
          <h1 className="text-[15vw] font-black tracking-tighter text-textMain leading-[0.75] uppercase w-full">
            STOP LOGGING.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kinetic to-logic">
              START LIFTING.
            </span>
          </h1>
          <p className="max-w-4xl mx-auto text-xl md:text-3xl text-ghost font-light tracking-wide leading-tight mt-8 opacity-60">
            The first workout tracker that listens. No typing, no distractions—just your voice and your progress.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 mt-4 transition-opacity">
          {!isLoaded ? (
            <div className="w-56 h-16 bg-ghost/10 rounded-full animate-pulse" />
          ) : !userId ? (
            <SignUpButton mode="modal">
              <button className="px-12 py-6 rounded-full bg-kinetic text-void font-black shadow-glow-kinetic transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-base">
                Start Your Journey — Free
              </button>
            </SignUpButton>
          ) : (
            <Link href="/dashboard">
              <button className="px-12 py-6 rounded-full bg-logic text-textMain font-black shadow-glow-logic transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-base">
                Enter Command Deck
              </button>
            </Link>
          )}
        </div>

        {/* Cinematic Vox Pulse */}
        <div ref={pulseRef} className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-20">
          <div className="w-[800px] h-[800px] border border-kinetic/10 rounded-full animate-pulse blur-3xl bg-kinetic/5" />
          <div className="absolute w-[400px] h-[400px] border border-logic/20 rounded-full animate-ping-slow blur-2xl" />
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-ghost">Begin Mission</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-kinetic to-transparent" />
      </div>
    </section>
  );
}
