# Chatbot Arena Expansion Plan

## Vision
Create a modular, extensible playground for experimenting with heterogeneous LLM teams, local and hosted models, and automated prompt optimization. The application should evolve from a single-page demo into a multi-view workspace that supports research-grade workflows.

## Guiding Principles
- **Modularity first**: separate core services (model connectors, session state, prompt optimizer) from the UI so components can evolve independently.
- **LLM agnosticism**: abstract model providers so both remote APIs and local LLM Studio deployments can be plugged in with minimal configuration.
- **Reproducibility**: persist chat history, prompt versions, and experiment metadata to make comparisons meaningful.
- **User-centric UX**: provide clear navigation (e.g., tabbed or sidebar layout) between major features while keeping the learning curve gentle.

## High-Level Architecture
1. **Backend Service (Node/Express or Python/FastAPI)**
   - Routes for managing sessions, models, prompt optimizations, and asset generation.
   - Connectors for external APIs (OpenAI, Anthropic, etc.) and local LLM Studio models via REST/WebSocket bridges.
   - Job queue or async task layer for long-running actions (image generation, file exports).
   - Persistent storage (SQLite to start) for conversations, prompts, optimization runs, and settings.
2. **Frontend Application (React or similar)**
   - Component-based UI with routing (tabs/sections) for Chat Arena, Team of Experts, Prompt Optimizer, Assets, and Settings.
   - State management (React Query/Zustand) to sync with backend and support offline caching.
   - Visualization components for model comparisons, optimization metrics, and debate timelines.
3. **Shared Core Package**
   - Model capability definitions, schema validation (TypeScript types or Pydantic models), and utility functions shared across frontend/backends.

## Feature Roadmap
### Phase 1 – Foundation
- **Project Setup**: migrate from single HTML to monorepo-style structure (`/frontend`, `/backend`, `/shared`). Add build tooling, linting, and test scaffolding.
- **Model Abstraction Layer**: design interface for model clients (send message, stream tokens, metadata). Implement connectors for existing API provider and local LLM Studio via HTTP bridge.
- **Session Management**: backend endpoints for creating sessions, storing chat history, and retrieving transcripts. Persist to SQLite.
- **UI Restructure**: implement a basic multi-tab layout (Chat, Teams, Assets, Optimizer, Settings) with placeholder content wired to backend session APIs.

### Phase 2 – Heterogeneous Team of Experts
- **Team Composition UI**: allow users to create teams combining remote and local models, assign roles, and configure debate strategies.
- **Coordinator Logic**: backend orchestrator that runs debate rounds, aggregates responses, and allows user intervention.
- **Visualization**: timeline view of debate turns, role assignments, and final synthesis summary.

### Phase 3 – Expanded Outputs & Assets
- **File Generation**: enable exporting conversations, debate transcripts, and synthesized outputs as Markdown/JSON files.
- **Image & Media Support**: integrate with multimodal-capable models or local diffusion pipelines; handle async job status and asset storage.
- **Workspace Library**: UI to browse generated assets with filtering by session, model, or tag.

### Phase 4 – Prompt Optimizer
- **Prompt Experimentation Interface**: form to define base prompt, variables, evaluation metrics (manual rubric or automated scoring).
- **Evaluation Harness**: orchestrate batch runs across models, capture outputs, compute metrics, and visualize comparisons.
- **Prompt Versioning**: track history of iterations, allow rollbacks, and annotate with notes.

### Phase 5 – Advanced Enhancements
- **Analytics Dashboard**: charts for model cost, latency, win rates in debates, and optimization outcomes.
- **Plugin System**: allow community-contributed connectors (new models, evaluation metrics, visualizations) via configuration.
- **Collaboration Features**: shareable session links, multi-user access, and role-based permissions.

## Technical Considerations
- **Local LLM Integration**: leverage LLM Studio's API or CLI; create a local bridge service if necessary to standardize streaming responses and metadata.
- **State Persistence**: use Prisma/TypeORM (Node) or SQLModel (Python) for migrations; store large payloads (images) in filesystem/S3-compatible storage.
- **Prompt/Output Storage**: version outputs with hashed content to avoid duplicates; enable diffing between prompt iterations.
- **Testing Strategy**: unit tests for connectors, integration tests for team orchestrator, and end-to-end tests (Playwright/Cypress) for critical flows.
- **Security**: secure storage of API keys, support per-user secrets, and sandbox untrusted model-generated files.

## Milestones & Timeline (Rough)
1. **Month 1**: Establish new architecture, backend session APIs, basic multi-tab frontend.
2. **Month 2**: Implement heterogeneous team orchestration and visualization.
3. **Month 3**: Deliver file/image output management and prompt optimizer MVP.
4. **Month 4**: Add analytics, plugin system groundwork, and collaboration features.

## Success Metrics
- Ability to switch between local and remote models without code changes.
- Persistent chat histories with replay and export options.
- Prompt optimizer supporting automated comparison across at least three models.
- Debate/Team feature reducing manual coordination time by >50% compared to baseline workflow.
- Modular codebase enabling contributors to add a new model connector within one sprint.

## Next Steps
1. Finalize technology stack decisions (Node vs. Python backend, React vs. Svelte frontend).
2. Draft technical specifications for model connector interface and session schema.
3. Set up repository restructuring and CI/CD pipeline for new multi-package architecture.
4. Begin Phase 1 implementation with focus on session persistence and UI layout.
