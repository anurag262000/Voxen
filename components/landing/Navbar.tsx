"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { isLoaded, userId } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center backdrop-blur-md border-b border-white/5 transition-all duration-500">
      <Link href="/" className="text-2xl font-bold tracking-tighter text-textMain">
        VOXEN
      </Link>

      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ghost">
          <Link href="#features" className="hover:text-textMain transition-colors">Features</Link>
          <Link href="#engine" className="hover:text-textMain transition-colors">Engine</Link>
          <Link href="#pricing" className="hover:text-textMain transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          {!isLoaded ? (
            <div className="w-10 h-10 bg-ghost/10 rounded-full animate-pulse" />
          ) : !userId ? (
            <SignInButton mode="modal">
              <button className="text-sm font-bold text-kinetic hover:text-kinetic/80 transition-colors uppercase tracking-widest">
                Login
              </button>
            </SignInButton>
          ) : (
            <UserButton 
              appearance={{
                elements: {
                  userButtonTrigger: "focus:shadow-glow-kinetic",
                  userButtonPopoverCard: "bg-void border border-ghost/20 shadow-glow-logic",
                }
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
