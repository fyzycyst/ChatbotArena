# WEB APPS PLAYBOOK

## Project Context
- Build modern, accessible, responsive web apps with a clear separation of concerns, strong TypeScript types, and a focus on DX and maintainability.
- Default to the preferred stack below; if there’s a strong technical reason to deviate, raise it explicitly (see Deviation Policy).

## Preferred Stack (Baseline)
- Framework: Next.js (App Router, RSC where appropriate)
- Language: TypeScript
- Styling: Tailwind CSS
- Data platform: Supabase (Postgres, RLS, Storage, Edge Functions)
- Auth: Clerk
- Billing: Stripe
- Email: Resend (transactional email)
- Analytics: PostHog
- Hosting: Vercel (with envs, previews, and observability)

## Deviation Policy
- If deviating from the baseline stack or patterns, propose a short ADR with: the problem, proposed change, alternatives considered, risks, migration/rollback, and impact on ops/testing.
- Obtain approval before implementation; prefer reversible changes and incremental adoption.

## Architecture And Design
- Feature-oriented structure: colocate UI, state, and effects per feature; avoid monoliths. Common dirs: `app/`, `components/`, `lib/`, `server/`, `db/` (or `supabase/`).
- Next.js usage: default to Server Components; use Client Components only for interactive stateful UI. Keep server data access in RSC/Route Handlers.
- Data access: prefer thin `lib/` or `server/` modules wrapping Supabase queries; centralize Zod schemas/types shared client/server when needed.
- AuthN/Z: integrate Clerk middleware with Next.js; propagate the user identity to backend calls. For Supabase, align RLS policies with Clerk IDs and JWT claims.
- Background work: prefer webhooks/Route Handlers/Edge Functions (Stripe, Resend) with idempotency and retries. Offload long tasks to queues if needed.
- Configuration: manage environment via Vercel envs; document required variables and secrets. Provide safe defaults and fallbacks for local dev.

## Coding Standards
- Keep components small and composable; use descriptive naming, early returns, and immutability-friendly patterns.
- TypeScript is part of the contract: prefer discriminated unions and exact object shapes; avoid `any`; document complex generics at the type level.
- Tailwind: rely on utilities for layout and design; extract shared tokens and patterns into Tailwind config or small UI primitives.
- Accessibility: use semantic HTML, ARIA where necessary, keyboard navigation, and color-contrast checks; integrate a11y linting where possible.

## Testing And Quality
- Unit and integration tests for critical logic; component tests with Testing Library; end-to-end tests with Playwright for key user journeys.
- Mock external services (Clerk, Supabase, Stripe, Resend, PostHog) in tests; avoid network calls. Use fixtures for webhook payloads.
- Typecheck and lint in CI; track bundle size/perf regressions. For Next.js, verify server/client boundary correctness and RSC constraints.

## Data And Integrations
- Supabase: migrations tracked in VCS; enforce Row-Level Security; document roles and policies. Keep performance in mind with indexes.
- Clerk: define a minimal user profile model; handle account linking/migrations; fail closed on auth checks in server code.
- Stripe: use Checkout/Customer Portal where possible; secure webhooks with signature verification; ensure idempotency and accurate state sync.
- Resend: template and locale management; send from server routes; avoid PII in logs; add test mode strategies.
- PostHog: instrument both client and server events; avoid PII; respect user privacy and consent; verify identifiers line up with auth model.

## Documentation And Handoff
- Keep architectural decisions, environment variables, onboarding steps, and integration docs up to date with changes.
- Summarize UX assumptions, accessibility notes, and operational runbooks (webhooks, scheduled jobs, alerts) for collaborators.

---

## Codex Notes (FOR CODEX ONLY!)
- If you cannot run commands, specify what to run locally (e.g., `npm run dev`, `npm run test`, `npm run typecheck`, `npm run lint`, `npm run build`).
- When editing UI without a preview, describe expected visual changes, affected breakpoints, and any Tailwind classes that may need design confirmation.
- For integration work (Clerk, Supabase, Stripe, Resend, PostHog), list required env vars and local test steps; suggest follow-ups for manual verification.
