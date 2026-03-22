# Good Output Example — Repo Onboarding

> This example demonstrates what well-executed repo onboarding output looks like.

## Scenario

Onboarding guide for a Node.js monorepo with 3 services

## Why It Works

1. Purpose: 'Handles user auth (auth-service), product catalog (catalog-api), and order processing (order-worker)'
2. Setup: 'Step 1: Clone. Step 2: nvm use (reads .nvmrc). Step 3: pnpm install. Step 4: docker compose up -d (Postgres + Redis).'
3. First task: 'Look at packages/catalog-api/src/routes/product.ts — add a new GET endpoint for /products/:id/reviews'
4. Gotcha: 'order-worker uses Bull queues — if Redis isn't running, it fails silently. Check docker ps first.'

## Key Patterns to Replicate

- Setup is copy-paste-able — each step is a single command
- Architecture is visual: folder tree + data flow diagram
- First task is concrete, achievable, and teaches the key patterns
