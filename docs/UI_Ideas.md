# UI Ideas and Analogs for Chatbot Arena

## Purpose
This document captures real-world UI analogs and design ideas to inform the evolution of Chatbot Arena from a single-page demo into a multi-view, research-grade workspace.

The expansion plan envisions:
- A multi-tab / multi-view workspace (Chat Arena, Team of Experts, Prompt Optimizer, Assets, Settings).
- Support for heterogeneous local and hosted models with easy switching.
- Research workflows: reproducible experiments, debate timelines, optimization runs, analytics, and exports.

The analogs below are chosen to map to those needs.

---

## Product Archetype
- **LLM comparison arena**: head-to-head or side-by-side model evaluation.
- **LLM playground/console**: flexible environment to tweak prompts, parameters, models.
- **Experiment workspace**: runs, metrics, visualizations, and asset library.
- **Multi-agent “team of experts” view**: orchestrated debates and role-based interactions.

---

## Key UI Analogs

### 1. LMSYS Chatbot Arena (chat.lmsys.org)
- **Why it’s relevant**
  - Direct inspiration for “arena” style, head-to-head model comparison.
  - Focused on blind A/B comparisons and user voting.
- **Notable UI patterns**
  - **Two-column chat layout** showing responses from Model A vs Model B side by side.
  - **Unified input box** at the bottom that broadcasts the same prompt to both models.
  - **Compact model labels and metadata** at the top of each column (model name, provider, mode).
  - **Simple voting controls** (which answer is better / tie) aligned near the response area.
  - **Minimalist chrome**: the chat takes most of the viewport, navigation is light.
- **Ideas to borrow**
  - Default **Chat Arena tab** as a two-panel layout with:
    - Shared prompt input.
    - Per-model columns with responses, metadata, and cost/latency badges.
  - Add a **“vote / pick winner” micro-interaction** per turn to feed into analytics.
  - Use **session header area** for model lineup, run config, and quick switches.

### 2. Poe (poe.com)
- **Why it’s relevant**
  - Consumer-friendly multi-model chat app with quick switching and model “characters”.
  - Great reference for handling many models without overwhelming the user.
- **Notable UI patterns**
  - **Left sidebar with bots/models** as a scrollable list of personas.
  - **Per-bot conversation threads** stored independently, creating a mental model of “one thread per bot”.
  - **Top bar actions** for settings, account, and global navigation.
  - **Inline suggestions**: suggested prompts, follow-up buttons, and quick actions under messages.
- **Ideas to borrow**
  - In **Settings / Models**: use a **sidebar-style list** for available models, with tags (local, remote, paid, experimental).
  - For **session management**: consider **per-session threads** grouped by feature (Arena, Team, Optimizer) instead of per-bot only.
  - Use **prompt suggestion chips** in the Chat and Team of Experts views for discoverability.

### 3. Perplexity (perplexity.ai)
- **Why it’s relevant**
  - Strong example of research-focused chat with citations and follow-up exploration.
  - Good reference for structuring dense outputs, sources, and follow-up questions.
- **Notable UI patterns**
  - **Single main column** with:
    - Answer at the top.
    - Citations/sources as inline chips and a references section.
  - **Follow-up question suggestions** stacked under the answer.
  - **Right-side or top filters** for model selection and modes (e.g., “Pro” vs “Quick”).
- **Ideas to borrow**
  - For **Prompt Optimizer outputs**:
    - Present a **primary result** (best prompt or synthesis) with a **secondary sources/variants section**.
    - Include **quick-follow-up buttons** like “Try with another model”, “Duplicate and tweak”.
  - In the **Chat Arena** or **Team of Experts**:
    - Represent **evidence or supporting messages** as expandable sections (similar to sources).

### 4. OpenAI Playground / Console (platform.openai.com, console.openai.com)
- **Why it’s relevant**
  - Canonical example of tunable playground UI with model/parameter controls and saved presets.
- **Notable UI patterns**
  - **Two-panel layout**: controls on the left (model, temperature, max tokens, etc.), output/chat on the right.
  - **Preset / saved configuration dropdown** at the top for quickly switching setups.
  - **Run history** or “Sessions” list for replay and debugging.
  - **JSON/raw views** for requests and responses in the developer console.
- **Ideas to borrow**
  - For **Prompt Optimizer & Experiment Runner**:
    - Use a **left-side “Experiment Config” panel** with:
      - Model lineup selection.
      - Prompt variables.
      - Evaluation metrics.
    - Reserve the **right side for runs/results**, with tabs for:
      - Outputs.
      - Metrics.
      - Raw logs/JSON.
  - Save **named experiment presets** and surface them in a **small preset dropdown**.

### 5. OpenRouter Playground (openrouter.ai)
- **Why it’s relevant**
  - Designed specifically for multi-provider, multi-model selection with a unified interface.
- **Notable UI patterns**
  - **Model dropdown with rich metadata** (provider, latency, pricing).
  - **Badges and tags** for context window, capabilities, and speed.
  - Clear **separation between request and response areas**, sometimes with token usage summaries.
- **Ideas to borrow**
  - In **Settings > Models**:
    - Represent each model with a **card or table row** listing:
      - Provider.
      - Pricing (if relevant).
      - Context length.
      - Flags (local/remote, streaming, vision).
  - In the **Chat Arena**:
    - Show **per-response metadata bar**: tokens, latency, cost.

### 6. Anthropic Console / Claude Projects (console.anthropic.com)
- **Why it’s relevant**
  - Example of a workspace with projects, structured runs, and prompt iterations for a single provider.
- **Notable UI patterns**
  - **Projects sidebar** with recent projects and search.
  - **Central run view** showing prompt, parameters, and outputs with version history.
  - **Diff-style comparison** between prompt versions and outputs.
- **Ideas to borrow**
  - For **Prompt Versioning**:
    - Add a **“Versions” side panel** to the Prompt Optimizer view, with:
      - A list of prompt versions.
      - Selected version details and notes.
    - Consider a **diff view** for side-by-side prompt text comparison.
  - For **session organization**:
    - Use a **Projects or Workspaces** abstraction that groups:
      - Chat sessions.
      - Team debates.
      - Prompt experiments.
      - Generated assets.

### 7. Hugging Face Spaces & Chat / Eval UIs (huggingface.co)
- **Why it’s relevant**
  - Many community-built UIs for LLM evaluation, chat, and visualization.
  - Good source of varied patterns for model cards, dataset exploration, and evaluation panels.
- **Notable UI patterns**
  - **Model cards** with capabilities, limitations, and usage examples.
  - **Tabs for “Model / Dataset / Spaces”**, clearly segmenting concerns.
  - **Simple metric tables and plots** for evaluation results (accuracy, BLEU, etc.).
- **Ideas to borrow**
  - For the **Analytics Dashboard**:
    - Use **simple metric tiles and tables** before advanced visualizations.
    - Include **compact model cards** within analytics or settings, linking usage stats to context.
  - For **Assets / Workspace Library**:
    - Represent assets with **cards** (thumbnail, name, tags, source session).
    - Support **filtering by tags, session, model, and date**.

### 8. Multi-Agent / Orchestration Tools (e.g., Dust.tt, LangSmith dashboards)
- **Why it’s relevant**
  - Reference for multi-step, multi-agent flows, run inspection, and timelines.
- **Notable UI patterns**
  - **Timeline/graph views** of runs, showing agent calls, model invocations, and intermediate results.
  - **Collapsible panels** for each step, with detailed logs on demand.
  - **Filtering controls** by run status, agent, and time.
- **Ideas to borrow**
  - For **Team of Experts**:
    - Implement a **timeline view** of debate rounds:
      - Vertical list of rounds with role/name badges.
      - Collapsible details showing each model’s message and metadata.
      - Final synthesis highlighted at the end.
  - For **debugging sessions**:
    - Add an **“Advanced / Logs” tab** per session showing underlying calls and timing.

---

## UI Idea Buckets Mapped to Features

### Navigation & Layout
- Use a **persistent left sidebar** for top-level sections:
  - Chat Arena.
  - Team of Experts.
  - Prompt Optimizer.
  - Assets / Library.
  - Analytics.
  - Settings.
- Keep the **main content area tabbed** where necessary (e.g., within Prompt Optimizer: Config / Runs / Metrics / Logs).
- Provide **session/project switcher** at the top of the sidebar (similar to projects in Anthropic console).

### Chat Arena
- Default to a **two-column arena layout** (LMSYS-style) with:
  - Shared prompt input at the bottom.
  - Per-model columns with responses and metadata.
- Add **per-turn voting controls** and track them for analytics.
- Allow switching between **side-by-side** and **single-column “focus” mode** for readability.
- Surface **model lineup and configuration** in a header bar with quick edit controls.

### Team of Experts
- Use a **three-part layout**:
  - Left: **Team configuration** (models, roles, strategy).
  - Center: **Debate transcript** as a timeline view.
  - Right: **Synthesis / notes panel**.
- Represent each participant with **avatar + role + model** badges.
- Make each debate round collapsible, showing:
  - Individual model contributions.
  - Turn-level metadata (time, cost, tokens).

### Prompt Optimizer
- Layout similar to **OpenAI Playground**:
  - Left: **Experiment configuration** (base prompt, variables, models, metrics).
  - Right: **Runs and results** with tabs:
    - Outputs.
    - Metrics & charts.
    - Raw logs.
- Include a **Prompt Versions side panel** with:
  - Version list, labels, and notes.
  - Actions: duplicate, rollback, compare.
- Show **comparison tables** of models vs metrics and allow row/column highlighting.

### Assets / Workspace Library
- Present assets as **filterable cards or rows**:
  - Thumbnail (for images).
  - Title/description.
  - Tags (session, model, type).
  - Quick actions (open, export, share).
- Provide **filters and search** similar to Hugging Face’s dataset/model browsers.
- Support **bulk actions** (export, delete, retag) with checkboxes.

### Analytics Dashboard
- Start with **simple tiles** for key metrics:
  - Win rates per model.
  - Average latency and cost.
  - Number of sessions, debates, and experiments.
- Add **charts** for:
  - Win rate over time.
  - Cost vs quality per model/team.
  - Prompt optimizer performance per iteration.
- Link dashboard elements back to **underlying sessions/experiments** for drill-down.

---

## Next UI Exploration Steps
- Prioritize which analog patterns to implement in **Phase 1** vs later phases (e.g., start with arena layout + basic sidebar).
- Sketch low-fidelity wireframes for:
  - Chat Arena (two-column vs single-column).
  - Team of Experts timeline view.
  - Prompt Optimizer config/results.
- Validate navigation and terminology with a few target users or collaborators before committing to detailed visual design.

