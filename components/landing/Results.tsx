"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { TrendingUp, Flame, Target } from "lucide-react";

export default function Results() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".horizontal-item");
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1.5,
        snap: 1 / (sections.length - 1),
        end: () => `+=${window.innerHeight * 3}`,
        anticipatePin: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const outcomes = [
    {
      id: "muscle",
      title: "For Muscle Building",
      icon: <Target className="w-16 h-16 text-kinetic" />,
      content: "Track your 'Volume Load' and get notified the second it's time to increase the weight.",
      color: "kinetic",
    },
    {
      id: "fat",
      title: "For Fat Loss",
      icon: <Flame className="w-16 h-16 text-logic" />,
      content: "Optimize rest periods with a floating 'Voice-Active' timer to keep your heart rate in the burn zone.",
      color: "logic",
    },
    {
      id: "strength",
      title: "For Strength",
      icon: <TrendingUp className="w-16 h-16 text-textMain" />,
      content: "Precision tracking of RPE (Rate of Perceived Exertion) to ensure you're hitting your true potential every session.",
      color: "textMain",
    },
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-void">
      <div ref={horizontalRef} className="horizontal-scroll-section h-screen items-center">
        {outcomes.map((outcome) => (
          <div key={outcome.id} className="horizontal-item flex items-center justify-center p-12">
            <div className="max-w-6xl flex flex-col items-center text-center gap-12 group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className={`p-12 bg-void/50 rounded-full shadow-glow-${outcome.color} border border-ghost/10 transform-gpu hover:scale-110 transition-transform duration-700`}
              >
                {outcome.icon}
              </motion.div>
              <div className="space-y-6">
                <h3 className="text-[10vw] font-black text-textMain uppercase tracking-tighter leading-none reveal-text">
                  {outcome.title}
                </h3>
                <p className="text-xl md:text-3xl text-ghost font-light leading-relaxed max-w-2xl mx-auto opacity-60 reveal-text delay-200">
                  {outcome.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
