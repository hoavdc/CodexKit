---
name: codexkit-report-summarizer
description: Condense long reports, documents, or data exports into structured summaries with key findings, implications, and recommended actions. Use when the work is distilling dense content for busy readers. Do not use for original analysis, strategy formulation, or when the source material needs expert interpretation beyond summarization.
version: 1.0.0
category: knowledge
---

# Report Summarizer

## Purpose

Transform lengthy documents into actionable summaries that respect the reader's time and attention.

## When to use

- condensing a long report for executive review
- extracting key points from research, audits, or analysis documents
- creating pre-read summaries for meetings
- summarizing vendor proposals, competitive analyses, or market reports

## When not to use

- the document needs original analysis, not summarization
- technical accuracy requires domain expertise the agent lacks
- the summary replaces reading the source for compliance or legal reasons

## Inputs

- source document or report (paste text or describe contents)
- target audience (executive, peer, team, external)
- desired summary length (one-pager, 3-bullet, paragraph)
- focus areas if specific (e.g. "focus on financials" or "skip methodology")
- format preference (bullets, narrative, table)

## Procedure

1. Identify the document's purpose and core thesis.
2. Extract key findings, data points, and conclusions.
3. Note any recommendations, action items, or decisions embedded in the source.
4. Structure the summary: what (findings) → so what (implications) → now what (actions).
5. Calibrate detail level to the target audience.
6. Flag anything notable that was omitted from the summary.

## Output

- structured summary (format per user preference)
- key findings list
- recommended actions or decisions (if present in source)
- "what was left out" note (for transparency)

## Definition of done

- summary can be read in under 2 minutes
- no critical points from the source are missing
- the reader can decide whether to read the full document based on the summary
- action items are preserved with owners and timelines if mentioned

## Examples

- "Summarize this 40-page market research report into a one-page executive brief."
- "Extract the top 5 findings from the quarterly budget review and list recommended actions."
- "Create a 3-bullet pre-read summary of the vendor evaluation document for tomorrow's meeting."
- "Condense this audit report into key risks and remediation priorities."

## Quality Criteria

- [ ] The summary preserves the source's core thesis, key findings, numbers, and conclusions.
- [ ] The output separates source-backed facts from interpretation or recommended action.
- [ ] The length and detail match the requested audience and format.
- [ ] Important caveats, omitted sections, and uncertainty are visible.
- [ ] No unsupported assertions or generic filler language are introduced.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Are all findings, numbers, names, and recommendations faithful to the source? |
| **Completeness** | Are the main argument, evidence, implications, actions, and caveats covered? |
| **Context-fit** | Is the summary calibrated to the reader's role, time, and decision need? |
| **Consequence** | What could be misinterpreted if the reader skips the source and acts only on this summary? |

## Edge Cases

- **Source is too long for one pass** — Summarize by section and list any skipped portions explicitly.
- **Report mixes facts and opinion** — Label each recommendation as source-stated or inferred.
- **Audience has mixed expertise levels** — Use a top summary first, then optional detail.
- **Legal, financial, or compliance report** — Preserve caveats and recommend expert review before action.

## Changelog

- v1.1.0 — Added source-faithful summarization quality gates and edge cases.
- v1.0.0 — Initial release
