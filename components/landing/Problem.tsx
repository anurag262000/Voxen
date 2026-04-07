"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gravityRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=250%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.fromTo(gravityRef.current, 
      { y: "100vh", opacity: 0, scale: 0.8, filter: "blur(20px)" },
      { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }
    );

    tl.fromTo(textRef.current,
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
      "-=0.5"
    );

    // Final drift upward and out
    tl.to([gravityRef.current, textRef.current], {
      opacity: 0,
      y: -200,
      duration: 1,
      ease: "power2.in",
    }, "+=0.5");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] flex flex-col items-center justify-center bg-void overflow-hidden">
      <div className="relative w-full h-screen flex flex-col items-center justify-center p-6">
        <h2 ref={gravityRef} className="text-[15vw] font-black tracking-tighter text-textMain uppercase leading-none select-none mask-text">
          GRAVITY
        </h2>

        <div ref={textRef} className="mt-12 text-center max-w-4xl space-y-8">
          <h3 className="text-4xl md:text-6xl font-black text-textMain uppercase tracking-tighter">
            Your Phone Shouldn't <br />
            <span className="text-ghost/20 italic">Be A Distraction.</span>
          </h3>
          <p className="text-xl md:text-2xl text-ghost font-light leading-relaxed max-w-2xl mx-auto">
            Traditional apps weigh you down. Fumbling with a screen between sets breaks your focus, 
            cools your muscles, and kills your pump just to type in a number.
          </p>
        </div>
      </div>

      {/* Kinetic Green Shockwave Trigger Area */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-t from-kinetic/5 to-transparent" />
      </div>
    </section>
  );
}
