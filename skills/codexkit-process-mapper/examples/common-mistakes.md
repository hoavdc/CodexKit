# Common Mistakes — Process Mapper

> Anti-patterns to watch for when using the Process Mapper skill.

## 1. Happy path only

**What goes wrong:** Map shows the ideal flow — ignores rejections, errors, and exceptions

**How to fix it:** Map exceptions first. They're where the real complexity lives.

## 2. Mapping the desired state, not current state

**What goes wrong:** Process map shows how it should work, not how it actually works

**How to fix it:** Always map as-is first. Then create a to-be map separately for comparison.

## 3. Too much detail

**What goes wrong:** Mapping every click and screen transition — unreadable

**How to fix it:** Match detail to audience. Executives need 5-10 steps. Operators might need 30.
