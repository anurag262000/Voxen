"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mic2, BrainCircuit, Ruler } from "lucide-react";

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bubble1Ref = useRef<HTMLDivElement>(null);
  const bubble2Ref = useRef<HTMLDivElement>(null);
  const bubble3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.fromTo(bubble1Ref.current, { x: -200, opacity: 0, scale: 0.5 }, { x: 0, opacity: 1, scale: 1, duration: 1 });
    tl.fromTo(bubble2Ref.current, { x: 200, opacity: 0, scale: 0.5 }, { x: 0, opacity: 1, scale: 1, duration: 1 }, "-=0.2");
    tl.fromTo(bubble3Ref.current, { y: 200, opacity: 0, scale: 0.5 }, { y: 0, opacity: 1, scale: 1, duration: 1 }, "-=0.2");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center gap-20 bg-void/50">
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl z-10">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-textMain lowercase">
          THE <span className="text-kinetic italic uppercase">VOICE ENGINE</span>
        </h2>
      </div>

      {/* Floating Command Bubbles */}
      <div className="relative w-full max-w-6xl h-[400px] flex items-center justify-center pointer-events-none">
        <div ref={bubble1Ref} className="absolute top-0 left-0 glass-container glass-border p-6 shadow-glow-kinetic">
          <div className="flex items-center gap-4">
            <Mic2 className="w-6 h-6 text-kinetic" />
            <span className="text-xl font-bold text-textMain capitalize">"Set 1, 100kg, 10 reps"</span>
          </div>
        </div>

        <div ref={bubble2Ref} className="absolute top-20 right-0 glass-container glass-border p-6 shadow-glow-logic">
          <div className="flex items-center gap-4">
            <BrainCircuit className="w-6 h-6 text-logic" />
            <span className="text-xl font-bold text-textMain capitalize">"Calculate Overload..."</span>
          </div>
        </div>

        <div ref={bubble3Ref} className="absolute bottom-0 left-1/2 -translate-x-1/2 glass-container glass-border p-6 shadow-glow-kinetic">
          <div className="flex items-center gap-4">
            <Ruler className="w-6 h-6 text-textMain" />
            <span className="text-xl font-bold text-textMain capitalize">"RPE 8 Logged"</span>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center max-w-2xl z-10 px-6">
        <p className="text-2xl text-ghost font-light leading-relaxed">
          The barbell is your stage. Speak your metrics into existence and watch the weight of the data 
          shatter your old plateaus.
        </p>
      </div>
    </section>
  );
}
