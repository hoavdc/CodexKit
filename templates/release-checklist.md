# Release Checklist

> **How to use:** Complete before every production release. Pair with `codexkit-docs-shipper` skill for documentation updates and `codexkit-high-signal-review` for final code review.

## Release Info

| Field | Value |
|-------|-------|
| **Version** | <!-- e.g. v2.3.1 --> |
| **Date** | <!-- e.g. 2026-03-20 --> |
| **Release Lead** | <!-- e.g. Mark Liu --> |
| **Type** | Hotfix / Patch / Minor / Major |

## Verification

<!-- Check each item. Do NOT skip — each is a gate. -->

- [ ] **Build** — CI passes on release branch (`main` or `release/*`)
- [ ] **Tests** — All unit, integration, and E2E tests pass
- [ ] **Migrations** — Database migrations run cleanly on staging
- [ ] **Observability** — Alerts, dashboards, and logs confirmed for new features
- [ ] **Security** — No new high/critical vulnerabilities in dependency scan
- [ ] **Performance** — No regression on key latency/throughput benchmarks

## Documentation

<!-- Documentation must ship WITH the code, not after. -->

- [ ] **Changelog** — `CHANGELOG.md` updated with user-facing changes
- [ ] **README / Operator docs** — Updated if setup, config, or API changed
- [ ] **Migration guide** — Written if there are breaking changes
- [ ] **Internal handoff** — Support team briefed on new behavior

## Rollout

<!-- How are we shipping and what's the safety net? -->

| Item | Detail |
|------|--------|
| **Feature flags** | <!-- e.g. `new-checkout-flow` flag ON for 10% of users --> |
| **Rollout strategy** | <!-- e.g. Canary 5% → 25% → 100% over 48h --> |
| **Rollback plan** | <!-- e.g. Revert to v2.3.0 via CI deploy, <5 min --> |
| **Owner on point** | <!-- e.g. Mark Liu (primary), Linh Vo (backup) --> |
| **Rollback trigger** | <!-- e.g. Error rate >1% or p99 latency >500ms --> |

## Post-Release

- [ ] **Smoke test** — Core user flows verified in production
- [ ] **Monitoring** — Watch dashboards for 30 min post-deploy
- [ ] **Stakeholder notify** — Slack/email sent to affected teams
- [ ] **Retro notes** — Any deployment issues captured for retro

---

<details>
<summary>📋 Worked Example</summary>

## Release Info
| Field | Value |
|-------|-------|
| **Version** | v2.3.1 |
| **Date** | 2026-03-20 |
| **Release Lead** | Mark Liu |
| **Type** | Patch |

## Verification
- [x] **Build** — CI green on `release/2.3.1`
- [x] **Tests** — 847 tests pass (2 skipped, known flaky)
- [x] **Migrations** — 1 migration (add `reset_token_expires_at` column) clean on staging
- [x] **Observability** — Password reset dashboard added, alert on >5 failures/min
- [x] **Security** — No new vulnerabilities in `npm audit`
- [x] **Performance** — p99 latency unchanged at 180ms

## Documentation
- [x] **Changelog** — Added "Password reset flow" entry
- [x] **README** — Updated env vars section with `RESET_TOKEN_TTL`
- [ ] **Migration guide** — N/A (no breaking changes)
- [x] **Internal handoff** — Support team briefed in #support-eng Slack

## Rollout
| Item | Detail |
|------|--------|
| **Feature flags** | `password-reset-v2` ON for Sales team pilot (120 users) |
| **Rollout strategy** | Sales pilot → All internal → External, over 2 weeks |
| **Rollback plan** | Revert to v2.3.0 via `deploy --rollback`, <3 min |
| **Owner on point** | Mark Liu (primary), Linh Vo (backup, Apr 15–22) |
| **Rollback trigger** | Reset failure rate >2% or p99 >300ms |

## Post-Release
- [x] **Smoke test** — Reset flow tested with 3 pilot users
- [x] **Monitoring** — Dashboard clear for 45 min post-deploy
- [x] **Stakeholder notify** — Posted in #releases and #sales
- [ ] **Retro notes** — Minor: staging migration took 8 min (expected 2) — investigate

</details>
