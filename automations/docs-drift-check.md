# Docs Drift Check

## Goal

Detect when project docs no longer match the current scripts, entrypoints, or setup flow.

## Good fit

- weekly
- repos with frequent contributor onboarding

## Guardrails

- compare docs against actual manifests and scripts
- surface exact outdated sections when possible
- do not open noisy reports for formatting-only changes
