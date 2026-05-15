---
name: codexkit-document-summarizer
description: Summarize document-heavy inputs such as memos, policies, PDFs, research notes, proposals, and multi-document packets. Use when users need key points, obligations, questions, and action implications from documents.
version: 1.0.0
category: review
---

# Document Summarizer

## When to Use

- Summarizing long documents that are not formal business reports.
- Extracting key points from policies, proposals, PDFs, research notes, or document packets.
- Preparing a quick readout before deciding whether to read the full document.
- Comparing multiple documents for themes, contradictions, or action items.

## Procedure

### Step 1 - Identify Document Type

Classify the source: policy, proposal, memo, research, contract-like document, transcript, academic paper, operating document, or mixed packet.

### Step 2 - Extract Core Content

Capture:
- purpose
- main claims or findings
- dates, parties, obligations, or deadlines
- decisions requested
- open questions
- risks or caveats

### Step 3 - Separate Summary From Interpretation

Keep source-backed summary separate from analysis or recommendation. Mark anything inferred.

### Step 4 - Produce Audience-Specific Output

Adapt format for executive, manager, student, legal/compliance reviewer, or team member.

### Step 5 - Add Reading Guidance

State which sections deserve human review and why.

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Document text or excerpt | Yes | Pasted text, extracted notes, OCR |
| Document type | Recommended | Proposal, policy, memo, research, etc. |
| Audience | Recommended | Executive, manager, student, team |
| Desired length | Optional | 5 bullets, one page, detailed brief |
| Focus area | Optional | Risks, obligations, actions, decisions |

## Output

```markdown
## Document Summary - [Document Name]

### One-Line Takeaway
[Core point]

### Key Points
- [Point backed by source]

### Actions / Decisions
| Item | Owner | Deadline | Source Note |
|------|-------|----------|-------------|

### Risks / Caveats
- [Risk]

### Needs Human Review
- [Section or issue]
```

## Quality Criteria

- [ ] The summary stays faithful to the document and does not invent missing facts.
- [ ] Important dates, obligations, numbers, and decisions are preserved.
- [ ] Source-backed summary is separated from interpretation.
- [ ] The output states what was not reviewed or could not be verified.
- [ ] High-risk documents are flagged for expert review.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Are all summarized claims traceable to the document text? |
| **Completeness** | Are key points, actions, deadlines, risks, and review needs captured? |
| **Context-fit** | Does the summary match the audience and intended decision? |
| **Consequence** | What could be misread if the user relies only on the summary? |

## Edge Cases

- **OCR or extraction errors** - Flag low confidence and avoid definitive claims.
- **Legal, financial, or compliance content** - Summarize only and recommend expert review before acting.
- **Multiple documents conflict** - Show a contradiction table instead of choosing a winner.
- **Very long packet** - Summarize by section and list skipped or unread portions.

## Examples

> **Prompt:** "Summarize this vendor proposal for an operations manager. Focus on deliverables, pricing assumptions, risks, and questions for the vendor."

> **Good pattern:** "The proposal assumes customer data export is available by June 1. This is a dependency, not a confirmed commitment."

## Definition of Done

- [ ] The user can decide whether to read the full document.
- [ ] Important actions and risks are visible.
- [ ] Uncertainty and review needs are explicit.

## Changelog

- v1.0.0 - Initial release
