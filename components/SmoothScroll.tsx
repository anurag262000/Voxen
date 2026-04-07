"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      ref={lenisRef} 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true 
      }}
    >
      {children}
    </ReactLenis>
  );
}
