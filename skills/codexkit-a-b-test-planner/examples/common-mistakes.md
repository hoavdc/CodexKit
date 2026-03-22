# Common Mistakes — A/B Test Planner

> Anti-patterns to watch for when using the A/B Test Planner skill.

## 1. Peeking and stopping early

**What goes wrong:** Checking results daily and stopping when p<0.05 — massively inflates false positives

**How to fix it:** Pre-commit to test duration. If you must peek, use sequential testing methods.

## 2. Testing too many changes at once

**What goes wrong:** New layout + new copy + new colors — can't attribute the effect

**How to fix it:** One change per test. If testing multiple factors, use a proper factorial design.

## 3. Ignoring guardrails

**What goes wrong:** Conversion up 5% but support tickets up 40% — net negative experience

**How to fix it:** Define guardrail metrics upfront. A 'win' must not violate any guardrail.
