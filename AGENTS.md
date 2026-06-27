# AGENTS.md

## Project Instructions

This is the `manh-birthday` frontend-only birthday landing page.

Before implementing UI, read:

- `docs/DESIGN_SYSTEM.md`
- `.docs/superpowers/specs/2026-06-27-manh-birthday-design.md`

## Design System Requirement

Do not create random CSS entities for colors, glass effects, spacing, shadows, gradients, animation timing, or section layout.

Use the design system as the source of truth:

- Add shared tokens before using new visual values.
- Prefer reusable components and variants.
- Keep ocean background logic in an `OceanScene`-style component.
- Keep liquid/glassmorphism styling in a reusable `LiquidGlassPanel`-style primitive.
- Keep music player styling consistent with the documented Spotify-like ocean glass direction.

If implementation needs a new visual primitive, update `docs/DESIGN_SYSTEM.md` first.

## Content Rules

Main user-facing content should be Vietnamese.

Japanese/kawaii text may appear only as small decorative labels and must not replace Vietnamese content.

## Scope

The landing page has three main sections:

1. Greeting
2. Music player with hardcoded songs
3. Birthday card

Do not add extra sections unless the design spec is updated.

## Frontend Stack

Planned stack:

- Vite
- React
- TypeScript
- Motion for React

No backend is planned.
