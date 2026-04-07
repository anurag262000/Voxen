import { UserButton, UserProfile } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <div className="flex flex-col flex-1 p-8 items-center">
      <div className="flex justify-between items-center w-full max-w-5xl mb-12">
        <h1 className="text-3xl font-bold text-textMain tracking-tight">DASHBOARD</h1>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "border-2 border-kinetic/20 p-0.5 shadow-glow-kinetic bg-void/50",
              userButtonTrigger: "focus:shadow-glow-kinetic",
              userButtonPopoverCard: "bg-void border border-ghost/20 shadow-glow-logic",
              userButtonPopoverActionButton: "hover:bg-logic/10 text-textMain",
              userButtonPopoverActionButtonText: "text-ghost",
            }
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="glass-container glass-border p-8 shadow-glow-logic col-span-2">
          <h2 className="text-xl font-bold text-logic mb-4 uppercase tracking-wider">Workout Stream</h2>
          <div className="h-64 flex items-center justify-center border-t border-ghost/10 mt-4 italic text-ghost">
            System ready. Voice logging idle.
          </div>
        </div>

        <div className="glass-container glass-border p-8">
          <h2 className="text-xl font-bold text-kinetic mb-4 uppercase tracking-wider">Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-ghost text-sm">
              <span>Gravity Factor</span>
              <span className="text-kinetic font-mono">1.0g</span>
            </div>
            <div className="w-full bg-void/50 h-1.5 rounded-full overflow-hidden">
              <div className="bg-kinetic h-full w-[65%] shadow-glow-kinetic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
