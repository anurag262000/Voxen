"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BatteryLow, Music, LineChart, Smartphone } from "lucide-react";

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.to(".benefit-orb", {
        rotate: 360,
        duration: 3,
        ease: "none",
      });

      tl.to(".benefit-content", {
        opacity: 1,
        stagger: 0.5,
      }, 0);
    });

    return () => matchMedia.revert();
  }, []);

  const benefits = [
    {
      id: "ui",
      title: "Invisible UI",
      content: "Deep-black design meant to be read from afar.",
      icon: <BatteryLow className="w-8 h-8 text-logic" />,
    },
    {
      id: "hands",
      title: "Hands-Free",
      content: "Speak naturally. Avoid 'fat-fingering' buttons.",
      icon: <Music className="w-8 h-8 text-kinetic" />,
    },
    {
      id: "calibration",
      title: "Progressive Calibration",
      content: "Real body-comp tracking with Navy Formula.",
      icon: <LineChart className="w-8 h-8 text-logic" />,
    },
    {
      id: "zen",
      title: "Zen Focus",
      content: "Pure performance. No distractions.",
      icon: <Smartphone className="w-8 h-8 text-kinetic" />,
    },
  ];

  return (
    <section ref={containerRef} className="relative h-screen bg-void overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={orbContainerRef} className="benefit-orb relative w-[600px] h-[600px] border border-ghost/5 rounded-full flex items-center justify-center">
          {benefits.map((benefit, i) => (
            <div 
              key={benefit.id}
              className="absolute benefit-content opacity-0"
              style={{
                top: `${50 + 40 * Math.sin(i * Math.PI / 2)}%`,
                left: `${50 + 40 * Math.cos(i * Math.PI / 2)}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="glass-container glass-border p-8 flex flex-col items-center text-center gap-4 w-64 shadow-glow-logic hover:shadow-glow-kinetic transition-all duration-700">
                <div className="p-4 bg-void/50 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-black text-textMain uppercase tracking-tighter">{benefit.title}</h3>
                <p className="text-sm text-ghost font-light">{benefit.content}</p>
              </div>
            </div>
          ))}

          {/* Central Core */}
          <div className="w-32 h-32 bg-void border border-kinetic/20 rounded-full flex items-center justify-center shadow-glow-kinetic">
            <div className="w-16 h-16 bg-kinetic/10 rounded-full animate-ping" />
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-20">
        <h2 className="text-4xl md:text-6xl font-black text-textMain uppercase tracking-tighter">
          Zero-G <br />
          <span className="text-ghost/30">Benefits</span>
        </h2>
      </div>
    </section>
  );
}
