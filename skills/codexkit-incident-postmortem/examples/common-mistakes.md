# Common Mistakes — Incident Postmortem

> Anti-patterns to watch for when using the Incident Postmortem skill.

## 1. Blame in disguise

**What goes wrong:** 'The on-call engineer should have noticed sooner' — blame wrapped in process language

**How to fix it:** Ask 'why was it hard to notice?' not 'why didn't they notice?' Focus on system design.

## 2. Action items without deadlines

**What goes wrong:** 'We should add monitoring' — good intention, never happens

**How to fix it:** Every action item: What (specific) + Who (single owner) + When (sprint/date)

## 3. Shallow root cause

**What goes wrong:** 'The server crashed' as root cause — that's the symptom, not the cause

**How to fix it:** Keep asking 'why' until you reach a process or design flaw that can be changed
