import SmoothScroll from "@/components/SmoothScroll";
import Scene3D from "@/components/landing/Scene3D";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Features from "@/components/landing/Features";
import Results from "@/components/landing/Results";
import Benefits from "@/components/landing/Benefits";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-void selection:bg-kinetic/30 selection:text-kinetic">
        <Navbar />
        
        {/* Persistent 3D Layer */}
        <Scene3D />

        <main className="flex flex-col w-full">
          <Hero />
          <Problem />
          <Features />
          <Results />
          <Benefits />
          <Footer />
        </main>

        {/* Cinematic Nebula Layer */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-logic/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-kinetic/5 blur-[120px] rounded-full" />
        </div>
      </div>
    </SmoothScroll>
  );
}
