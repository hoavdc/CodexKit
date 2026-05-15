---
name: codexkit-csat-sentiment-analyzer
description: Analyze CSAT, NPS comments, reviews, and support feedback for sentiment, recurring themes, customer pain, and service improvement actions. Use for customer support and CX feedback reviews.
version: 1.0.0
category: data
---

# CSAT Sentiment Analyzer

## When to Use

- Analyzing CSAT, NPS, app reviews, support comments, or post-interaction feedback.
- Finding recurring customer pain points and service improvement themes.
- Preparing support, CX, product, or leadership feedback summaries.
- Comparing sentiment across segments, channels, agents, products, or time periods.

## Procedure

### Step 1 - Normalize Feedback

Identify source, date range, channel, score type, segment, and any metadata. Keep raw counts separate from percentages.

### Step 2 - Classify Sentiment

Use a simple sentiment label:
- positive
- neutral
- negative
- mixed
- unclear

Include confidence when comments are short or ambiguous.

### Step 3 - Code Themes

Group feedback into themes such as speed, quality, pricing, reliability, usability, billing, support tone, missing features, or documentation.

### Step 4 - Quantify Patterns

Report counts, percentages, average score, trend direction, and representative examples. Avoid claiming statistical significance without enough data.

### Step 5 - Recommend Actions

Link every action to a theme and owner group: support, product, docs, billing, success, operations, or leadership.

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Feedback dataset | Yes | Comments, scores, reviews, tickets |
| Date range | Recommended | Start and end date |
| Segments | Optional | Plan, region, product, channel, agent |
| Scoring system | Optional | CSAT 1-5, NPS, thumbs up/down |
| Business context | Optional | Launch, outage, policy change |

## Output

```markdown
## CSAT Sentiment Analysis - [Period]

### Executive Summary
[Key trend, sentiment, and action]

### Score Snapshot
| Metric | Value | Notes |
|--------|-------|-------|

### Theme Breakdown
| Theme | Sentiment | Count | Percent | Representative Comment | Recommended Action |
|-------|-----------|-------|---------|------------------------|--------------------|

### Segment Differences
| Segment | Pattern | Confidence |
|---------|---------|------------|

### Action Plan
| Owner | Action | Evidence | Priority |
|-------|--------|----------|----------|
```

## Quality Criteria

- [ ] Counts and percentages reconcile to the input size.
- [ ] Themes are mutually understandable and not over-fragmented.
- [ ] Representative comments are short and anonymized when needed.
- [ ] Recommendations are tied to evidence.
- [ ] Sensitive customer data is removed or masked.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Do sentiment labels and theme counts match the raw feedback? |
| **Completeness** | Are scores, themes, segments, evidence, and actions included? |
| **Context-fit** | Are the recommendations realistic for the support or CX team? |
| **Consequence** | Could a small sample or biased feedback source lead to the wrong product or staffing decision? |

## Edge Cases

- **Very small sample** - Mark findings as directional and avoid percentages that imply precision.
- **Sarcasm or mixed sentiment** - Use "mixed" or "unclear" instead of forcing polarity.
- **Personally identifiable information** - Mask names, emails, phone numbers, and account IDs.
- **Outage or one-off incident** - Separate incident-driven feedback from baseline sentiment.

## Examples

> **Prompt:** "Analyze these 300 CSAT comments from April. Break down sentiment, top pain themes, and the three actions support should take next."

> **Good pattern:** "Billing confusion appears in 42 of 300 comments (14%). The most common evidence is customers not understanding prorated invoices after plan changes."

## Definition of Done

- [ ] Sentiment and theme counts are transparent.
- [ ] Representative examples support the themes.
- [ ] Actions are owner-specific and prioritized.
- [ ] Bias and sample limits are documented.

## Changelog

- v1.0.0 - Initial release
