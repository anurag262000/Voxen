"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Database, Layout } from "lucide-react";

export default function Trust() {
  const techs = [
    { name: "Next.js", icon: <Layout className="w-5 h-5" />, color: "textMain" },
    { name: "Clerk", icon: <ShieldCheck className="w-5 h-5" />, color: "kinetic" },
    { name: "FastAPI", icon: <Cpu className="w-5 h-5" />, color: "logic" },
    { name: "Supabase", icon: <Database className="w-5 h-5" />, color: "kinetic" },
  ];

  return (
    <section className="relative py-24 px-6 flex flex-col items-center gap-12 bg-void/30 w-full overflow-hidden">
      <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-ghost/40">
          Engineered for Performance
        </h3>
        <p className="text-2xl md:text-3xl font-black tracking-tighter text-textMain">
          Built with the speed of <span className="text-kinetic">Next.js 16</span> and the <br />
          precision of <span className="text-logic">Python Core</span>
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {techs.map((tech) => (
          <div key={tech.name} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <div className={`p-2 rounded-lg bg-void/50 border border-ghost/10 text-${tech.color}`}>
              {tech.icon}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-ghost">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-8 px-8 py-4 glass-container glass-border shadow-glow-kinetic">
        <div className="text-center">
          <span className="block text-3xl font-black text-kinetic">98%</span>
          <span className="block text-[10px] font-bold uppercase tracking-widest text-ghost">
            Transcription Accuracy
          </span>
        </div>
        <div className="w-[1px] h-12 bg-ghost/10" />
        <div className="max-w-[180px] text-[10px] font-medium text-ghost uppercase tracking-wide leading-relaxed">
          Optimized NLP filters for <br />
          high-decibel gym environments.
        </div>
      </div>
    </section>
  );
}
