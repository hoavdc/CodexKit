# Common Mistakes — Bug Hunt

> Anti-patterns to watch for when using the Bug Hunt skill.

## 1. Fixing without reproducing

**What goes wrong:** Guessing the cause and shipping a change — may fix the symptom but miss the real problem

**How to fix it:** Always reproduce first. If you can't reproduce, document exactly what you tried.

## 2. Scope creep in bug fix

**What goes wrong:** Refactoring adjacent code, adding features, or cleaning up unrelated tech debt in the bug fix PR

**How to fix it:** Bug fix PRs should be minimal. Create separate issues for cleanup work.

## 3. Verification by absence

**What goes wrong:** 'I can't reproduce it anymore' as proof of fix, without confirming the mechanism

**How to fix it:** Write a failing test first, then make it pass. The test is the proof.
