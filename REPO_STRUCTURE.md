# Voxen Repository Structure & Architecture

This document explains the hybrid Next.js and Python environment setup for **Voxen**.

## 🧬 Hybrid Architecture

Voxen uses a dual-engine architecture to combine the strengths of a modern frontend framework with the computational capabilities of a Python-based workout engine.

- **Frontend (Next.js):** Handles the user interface, real-time voice capture via the Web Speech API, and application state.
- **Backend (FastAPI):** Handles the workout logic, progressive overload calculations, and scientific volume guidelines.

### Why this structure?
1. **Performance:** Next.js provides a fast, responsive user experience.
2. **Computational Power:** Python is ideal for complex heuristic-based engines (like the Rule-Based AI Engine for progressive overload).
3. **Developer Experience:** Using `concurrently` allows running both servers with a single command (`pnpm dev`).

## 📁 Directory Structure

```text
/
├── app/                # Next.js App Router (Frontend)
├── api/                # FastAPI Logic (Workout Engine)
│   ├── index.py        # FastAPI entry point
│   └── requirements.txt # Python dependencies
├── components/         # Shared UI components
├── lib/               # Utility functions and Supabase client
├── public/            # Static assets
├── next.config.ts     # Proxy configuration for development
├── package.json       # Node dependencies and dev scripts
└── README.md          # Core project documentation
```

## 🔄 Development Flow

### API Proxying
In development, Next.js is configured to rewrite requests from `/api/python/:path*` to the FastAPI server running on `localhost:8000`. This allows you to call your Python backend as if it were part of the Next.js server.

### Local Development
To start both servers, simply run:
```bash
pnpm dev
```
This will:
1. Start the Next.js development server on `localhost:3000`.
2. Install Python dependencies and start the FastAPI server on `localhost:8000`.

## 🛠️ Verification
- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **FastAPI Health:** [http://localhost:3000/api/python/health](http://localhost:3000/api/python/health)
