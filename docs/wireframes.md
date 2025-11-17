# Chatbot Arena Wireframes (Low-Fidelity, Text-Only)

This document sketches low-fi wireframes for the multi-view workspace described in `docs/expansion-plan.md`, while keeping continuity with the current `index.html` single-page app.

The goal is to:
- Preserve familiar elements (dark theme, header, configuration panel, two-column arena).
- Introduce a **workspace shell** with sidebar navigation and per-feature views.
- Make it easier to map these sketches to React/Next.js components later.

All diagrams are ASCII-style and approximate, not pixel-perfect.

---

## Shared Layout Shell

Continuity with `index.html`:
- Keep the **header title and subtitle**.
- Reuse the **dark Tailwind theme** and card styles (gray panels, rounded corners).
- Preserve the **two-column “Discussion Arena”** as the core of the Chat Arena view.

Wireframe:

```
┌───────────────────────────────────────────────────────────────┐
│ Header: AI Chatbot Arena                                      │
│ Subtitle: Let the models discuss a topic.                     │
└───────────────────────────────────────────────────────────────┘
┌───────────────┬───────────────────────────────────────────────┐
│ Sidebar       │ Main Content                                  │
│               │                                               │
│ [Chat Arena]  │  (View-specific content)                      │
│ [Team of Exp] │                                               │
│ [Optimizer]   │                                               │
│ [Assets]      │                                               │
│ [Analytics]   │                                               │
│ [Settings]    │                                               │
└───────────────┴───────────────────────────────────────────────┘
│ Footer (links, coffee, etc.)                                  │
└───────────────────────────────────────────────────────────────┘
```

Notes:
- Sidebar can be collapsible on small screens (icon-only).
- On mobile, this may become a top navigation bar with horizontal tabs.

---

## Chat Arena View

This is the spiritual successor to the current `index.html` page.

Continuity:
- Reuse the **configuration panel** (bot selectors, topic, instructions, file upload, controls).
- Preserve **two-pane “Discussion Arena”** with `Bot A` and `Bot B` logs.
- Keep **status/error indicators** and loader spinners.

Wireframe:

```
┌───────────────────────────────────────────────────────────────┐
│ Header                                                         │
└───────────────────────────────────────────────────────────────┘
┌───────────────┬───────────────────────────────────────────────┐
│ Sidebar       │ Chat Arena                                    │
│               │                                               │
│ [Chat Arena]* │ ┌───────────────────────────────────────────┐ │
│ [Team of Exp] │ │ Configuration Panel                       │ │
│ [Optimizer]   │ │                                           │ │
│ [Assets]      │ │ Bot A select  [▼]  Bot B select [▼]       │ │
│ [Analytics]   │ │ Max turns [ 5 ]                            │ │
│ [Settings]    │ │                                           │ │
│               │ │ Topic textarea                            │ │
│               │ │ Bot A instructions | Bot B instructions   │ │
│               │ │ File upload                                 │ │
│               │ │ [Start] [Stop] [Reset]                     │ │
│               │ │ Status / errors                            │ │
│               │ └───────────────────────────────────────────┘ │
│               │                                               │
│               │ ┌───────────────────────────────────────────┐ │
│               │ │ Discussion Arena                         │ │
│               │ │                                           │ │
│               │ │ ┌───────────────┐   ┌───────────────┐    │ │
│               │ │ │ Bot A Title   │   │ Bot B Title   │    │ │
│               │ │ ├───────────────┤   ├───────────────┤    │ │
│               │ │ │ chat log      │   │ chat log      │    │ │
│               │ │ │ (scroll)      │   │ (scroll)      │    │ │
│               │ │ │               │   │               │    │ │
│               │ │ └───────────────┘   └───────────────┘    │ │
│               │ │ Loader A             Loader B            │ │
│               │ └───────────────────────────────────────────┘ │
└───────────────┴───────────────────────────────────────────────┘
│ Footer                                                         │
└────────────────────────────────────────────────────────────────┘
```

Potential enhancements (later phases):
- Add **per-turn voting controls** inside each column.
- Toggle between **side-by-side** and **single-column focus** modes.

---

## Team of Experts View

Purpose:
- Configure a **team of models** with roles and strategies.
- Visualize **debate rounds** as a timeline.
- Show a **final synthesis** panel.

Continuity:
- Reuse current configuration card styling (header, gray background, rounded corners).
- Reuse icons/buttons where possible.

Wireframe:

```
┌───────────────┬───────────────────────────────────────────────┐
│ Sidebar       │ Team of Experts                              │
│               │                                               │
│ [Chat Arena]  │ ┌───────────────────────────────────────────┐ │
│ [Team of Exp]*│ │ Team Configuration                       │ │
│ [Optimizer]   │ │                                           │ │
│ [Assets]      │ │ Team name  [           ]                  │ │
│ [Analytics]   │ │ Debate strategy [▼] (round-robin, ToT…)   │ │
│ [Settings]    │ │                                           │ │
│               │ │ Participants:                             │ │
│               │ │  - [Model select ▼] [Role input] [x]      │ │
│               │ │  - [Add participant +]                    │ │
│               │ │                                           │ │
│               │ │ Controls:                                 │ │
│               │ │  [Start debate] [Pause] [Reset]           │ │
│               │ └───────────────────────────────────────────┘ │
│               │                                               │
│               │ ┌───────────────────────────────────────────┐ │
│               │ │ Debate Timeline                          │ │
│               │ │                                           │ │
│               │ │ Round 1: Topic intro                      │ │
│               │ │  [Role A • Model X] message preview…      │ │
│               │ │  [Role B • Model Y] message preview…      │ │
│               │ │  [Expand ▼] shows full messages + meta    │ │
│               │ │                                           │ │
│               │ │ Round 2: Follow-up                        │ │
│               │ │  ...                                      │ │
│               │ │                                           │ │
│               │ └───────────────────────────────────────────┘ │
│               │                                               │
│               │ ┌───────────────────────────────────────────┐ │
│               │ │ Synthesis / Notes                        │ │
│               │ │                                           │ │
│               │ │ [Final synthesis message / editable area] │ │
│               │ └───────────────────────────────────────────┘ │
└───────────────┴───────────────────────────────────────────────┘
```

Notes:
- Each **Round** is a collapsible card with per-model contributions.
- Timeline can be vertical (list) and scrollable; future enhancement could add a mini-map or filter by participant.

---

## Prompt Optimizer View

Purpose:
- Configure and run **prompt experiments** across multiple models.
- Compare outputs and metrics.
- Manage **prompt versions**.

Continuity:
- Reuse gray cards, button styles, typography, and overall density.
- Use a configuration + results split similar to how the current settings panel precedes the arena.

Wireframe:

```
┌───────────────┬───────────────────────────────────────────────┐
│ Sidebar       │ Prompt Optimizer                             │
│               │                                               │
│ [Chat Arena]  │ ┌───────────────────────────────────────────┐ │
│ [Team of Exp] │ │ Experiment Configuration                  │ │
│ [Optimizer]*  │ │                                           │ │
│ [Assets]      │ │ Base prompt [ multi-line textarea      ]  │ │
│ [Analytics]   │ │ Variables (name, values) table            │ │
│ [Settings]    │ │   name | values (comma-separated)         │ │
│               │ │ Models to test [multi-select dropdown]    │ │
│               │ │ Metrics [checkboxes: win rate, BLEU, etc] │ │
│               │ │                                           │ │
│               │ │ [Run experiment] [Save as preset]         │ │
│               │ └───────────────────────────────────────────┘ │
│               │                                               │
│               │ ┌───────────────────────────────────────────┐ │
│               │ │ Right Pane: Results                      │ │
│               │ │                                           │ │
│               │ │ ┌───────────────┬───────────────────────┐ │ │
│               │ │ │ Tabs          │                       │ │ │
│               │ │ │ [Outputs]     │ [Metrics] [Logs]      │ │ │
│               │ │ └───────────────┴───────────────────────┘ │ │
│               │ │                                           │ │
│               │ │ Outputs tab:                              │ │
│               │ │  - Table: model × prompt variant          │ │
│               │ │  - Expandable rows to see full output     │ │
│               │ │                                           │ │
│               │ │ Metrics tab:                              │ │
│               │ │  - Metric tiles and sortable table        │ │
│               │ │                                           │ │
│               │ │ Logs tab:                                 │ │
│               │ │  - Raw requests/responses (JSON-like)     │ │
│               │ └───────────────────────────────────────────┘ │
└───────────────┴───────────────────────────────────────────────┘
```

### Prompt Versions Side Panel (Optional)

In a future iteration, you can add a right-side or left-side panel:

```
┌───────────────┬───────────────┬──────────────────────────────┐
│ Sidebar       │ Versions      │ Config + Results             │
│               │               │                              │
└───────────────┴───────────────┴──────────────────────────────┘
```

- Each version row: name, timestamp, notes, [Use], [Compare].

---

## Continuity Checklist

When implementing these wireframes, aim to:
- Keep the **visual language** from `index.html`:
  - Dark background, gray cards, blue/green accents.
  - Button shapes and hover styles.
  - Typography (Inter).
- Maintain **mental model continuity**:
  - “Configuration panel above, arena below” for Chat Arena.
  - Similar card structure in Team and Optimizer views.
- Gradually introduce new elements:
  - Start with **Chat Arena view** in the new shell.
  - Then add **Team of Experts** and **Prompt Optimizer**.

This should let you migrate the current single-page app into a multi-view workspace without disorienting existing users.

