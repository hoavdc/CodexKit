# Good Output Example — High-Signal Review

> This example demonstrates what well-executed high-signal review output looks like.

## Scenario

Reviewing a technical RFC for a caching layer migration

## Why It Works

1. Each comment references the exact section and proposes a specific alternative
2. Severity is clear: 'BLOCKER: cache invalidation strategy missing' vs 'NIT: typo in line 45'
3. Reviewer acknowledges what's good: 'The latency analysis in §3 is excellent'
4. Final summary prioritizes: 'Fix the 2 blockers. The 5 suggestions can wait for v2.'

## Key Patterns to Replicate

- Comments follow: Location → Issue → Why it matters → Suggested fix
- Blockers are separated from suggestions
- Review ends with a clear verdict: approve / approve-with-changes / request-changes
