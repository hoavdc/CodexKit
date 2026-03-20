---
name: codexkit-report-summarizer
description: Condense long reports, documents, or data exports into structured summaries with key findings, implications, and recommended actions. Use when the work is distilling dense content for busy readers. Do not use for original analysis, strategy formulation, or when the source material needs expert interpretation beyond summarization.
version: 1.0.0
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
