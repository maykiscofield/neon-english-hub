# GitHub Copilot Instructions — Neon English Hub

Short, practical guidance for AI coding agents working in this repository.

- Repo type: Vite + React (TypeScript) frontend in `src/` with a small Express backend at `server.js`.
- Dev workflow: `npm run dev` (frontend), `npm run server` (backend), `npm run dev:all` runs both concurrently.
- Env vars: backend requires `GEMINI_API_KEY` in `.env`. Frontend uses `VITE_API_URL` to point to backend.

Key files and where to change AI behavior
- `server.js`: Express proxy to Gemini. Update generationConfig, endpoints, or safety settings here. Example endpoint: `/api/gemini`.
- `src/services/aiService.ts`: Frontend client wrapper that calls the backend. It expects the Gemini response at `data.candidates[0].content.parts[0].text` and falls back to `data.text`.

Architecture & data flow (quick)
- UI components live under `src/components/*` (shadcn-style primitives in `src/components/ui/`).
- Pages in `src/pages/` orchestrate flows and call `src/services/aiService.ts` for AI features.
- The frontend sends `{ prompt, userText }` to the backend; `server.js` forwards that to Gemini and returns Gemini's raw response.

Project-specific conventions
- Keep user-facing logs and messages in Turkish where present — many strings and console output are Turkish.
- Use `VITE_API_URL` in dev to point to `http://localhost:3001` if the backend is run locally.
- When adding new UI components, follow the existing `components/ui/*` patterns (Radix + Tailwind + shadcn conventions).
- Many small components are TypeScript React (`.tsx`); some legacy JSX/JS files exist (e.g., `NeonCard.jsx`) — prefer `.tsx` for new code.

Debugging & run notes
- Start frontend: `npm run dev` (Vite). Start backend: `npm run server`. To run both: `npm run dev:all`.
- Health check: `GET /api/health` (server prints API key presence on start).
- To reproduce Gemini requests locally use curl or Postman POST to `http://localhost:3001/api/gemini` with JSON `{ "prompt": "...", "userText": "..." }`.

Integration points & external deps
- Gemini generative API is proxied from `server.js` (uses `node-fetch`). Keep secrets in `.env` (server prints helpful messages on start).
- `supabaseClient.js` exists in `src/` for potential DB/auth integration — inspect before changing auth flows.

Editing AI prompts or response handling
- If you modify prompt composition, update both `src/services/aiService.ts` (what frontend sends) and `server.js` (how backend sends to Gemini).
- Prefer inspecting `data.candidates[0].content.parts[0].text` as the primary output; add robust fallbacks and clear error messages as in current `aiService.ts`.

Tone, logging & localization
- Preserve Turkish in user-facing strings where present. Console logs commonly include emojis (✅, ❌, 🔄) — it's okay to keep this style for clarity.

When to open PRs vs small fixes
- Small UI tweaks (styling, copy) → small PRs. Backend changes that affect AI prompts or API shapes → describe behavior and add a short manual test (curl example) in the PR body.

Files to inspect before major changes
- [server.js](server.js)
- [src/services/aiService.ts](src/services/aiService.ts)
- [README.md](README.md)
- [src/contexts/LearningContext.tsx](src/contexts/LearningContext.tsx)

If anything is unclear, ask which feature or file to focus on and whether the change should be localized (frontend only) or full-stack (frontend + `server.js`).
