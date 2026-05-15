# CodexKit v0.10.0 - Office Productivity Expansion

> 90 skills, 18 templates, 14 automations, and 9 starter workspaces for Codex and ChatGPT users doing everyday work.

## Summary

v0.10.0 expands CodexKit beyond deep professional workflows into high-frequency office work for non-coders: daily briefs, meeting summaries, support tickets, sales forecasts, onboarding checklists, SOPs, document summaries, and CSAT feedback analysis.

## Added

- 8 new skills:
  - `codexkit-daily-brief-generator`
  - `codexkit-meeting-summary-generator`
  - `codexkit-support-ticket-summarizer`
  - `codexkit-sales-forecast-analyzer`
  - `codexkit-onboarding-checklist-creator`
  - `codexkit-sop-writer`
  - `codexkit-document-summarizer`
  - `codexkit-csat-sentiment-analyzer`
- 5 new templates:
  - `email-introduction-templates`
  - `personal-weekly-planner`
  - `weekly-status-report`
  - `marketing-calendar`
  - `team-meeting-agenda`
- 4 automation recipes:
  - `daily-standup-reminder`
  - `weekly-status-report-automation`
  - `meeting-follow-up-assistant`
  - `quarterly-okr-reminder`
- 3 starter workspaces:
  - `team-onboarding`
  - `startup-launch`
  - `weekly-team-sync`

## Improved

- Added Tier 2 examples and verification checklists for email, report summarization, SQL, data storytelling, and performance reviews.
- Updated README, skill finder, docs site data, installation docs, launcher counts, package versions, and changelog for v0.10.0.
- Improved update scripts so ZIP users sync local skills, templates, workspaces, playbooks, automations, MCP guides, and reference docs from the latest release package.

## Validation

Before publishing the tag, run:

```bash
npm run check
```

Expected release package names:

```text
codexkit-source-v0.10.0.zip
codexkit-starter-pack-v0.10.0.zip
```

## Upgrade Notes

Existing users can update normally, then restart Codex and run `/skills`. No migration is required. New non-coder users should download `codexkit-starter-pack-v0.10.0.zip`, run the `START-HERE` launcher for their platform, and open `skill-finder.md`.
