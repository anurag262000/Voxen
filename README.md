# 🎙️ Voxen (v1.0.0)
> **The Voice-Driven Fitness Engine.**

Voxen is an intelligent workout companion designed to remove the friction of manual data entry during high-intensity training. By combining **Web Speech API** for real-time logging and a **Rule-Based AI Engine** for progressive overload, Voxen allows athletes to stay in the "Zen" state while the system handles the data.

## 🚀 Key Features
- **Voice-to-Data Logging:** Record sets, reps, weight, and RPE mid-workout using natural language.
- **Adaptive PPL Engine:** Dynamically generates Push/Pull/Legs routines based on equipment access (Home/Gym) and experience level.
- **Progressive Overload Automation:** Automatically calculates weight/rep increases based on historical performance and the "Rule of 2."
- **The Navy Method Integration:** Built-in body fat estimation via anthropometric measurements for non-invasive progress tracking.

## 🛠️ Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Database & Auth:** [Supabase](https://supabase.com/)
- **State Management:** TanStack Query (React Query)
- **Voice Processing:** Web Speech API + Custom NLP Parsing
- **Styling:** Tailwind CSS + Shadcn UI

## 🧬 System Architecture
Voxen operates on a **Profile -> Engine -> Feedback** loop:
1. **Onboarding:** Captures environment constraints (Home/Gym) and equipment (Dumbbell weights, etc.).
2. **Generation:** Maps user goals to scientific volume guidelines.
3. **Adaptation:** Adjusts the "Next Session" variables based on "Current Session" failure points and exertion levels.

---
*Built for developers who lift.*
