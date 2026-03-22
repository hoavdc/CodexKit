# 4C Verification Checklist — Repo Onboarding

> Use this checklist after generating output. Answer each question honestly.

## Correctness — Is it right?

- [ ] Architecture description matches the actual codebase structure
- [ ] Setup instructions work on a clean machine from scratch
- [ ] Listed dependencies are current and version-accurate

## Completeness — Is it done?

- [ ] Covers: purpose, architecture, setup, key abstractions, conventions, where to start
- [ ] Environment requirements include OS, language versions, and required services
- [ ] Common gotchas and known issues are documented

## Context-fit — Does it match?

- [ ] Depth matches the reader's expected role (contributor vs maintainer vs reviewer)
- [ ] Code examples reference actual files in the repo, not hypothetical patterns
- [ ] Complexity areas are identified: 'This module is tricky because...'

## Consequence — Is it safe to use?

- [ ] If a new dev follows this guide, can they make their first PR within 24 hours?
- [ ] If setup fails at step 3, is troubleshooting guidance provided?
- [ ] If the repo structure changes, how quickly will this guide become outdated?

---

**Final question:** _If this output were used immediately in production, what is the single biggest risk?_

Write the answer here before considering the skill output complete.
