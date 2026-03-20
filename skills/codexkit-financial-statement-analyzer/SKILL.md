---
name: codexkit-financial-statement-analyzer
description: Read and interpret financial statements — Income Statement, Balance Sheet, and Cash Flow Statement. Calculate key ratios, identify trends, and produce an analysis narrative. Use when reviewing company performance, preparing for investor meetings, or conducting due diligence. Do not use for preparing or auditing financial statements — this is an analysis tool only.
version: 1.0.0
---

# Financial Statement Analyzer

## Purpose

Turn raw financial statements into a structured analysis with key ratios, trend identification, and an executive-ready narrative.

## When to use

- reviewing quarterly or annual financial results
- preparing for board meetings or investor presentations
- conducting financial due diligence on a target company
- comparing financial performance across business units or competitors

## When not to use

- preparing financial statements (use management-accounts-writer)
- statutory audit or compliance reporting
- tax preparation

## Inputs

- Income Statement (P&L) for 2+ periods
- Balance Sheet for 2+ periods
- Cash Flow Statement for 2+ periods
- industry context or peer companies for comparison (optional)
- specific questions to answer (optional)

## Procedure

1. **Analyze Income Statement**:
   - Revenue trend: growth rate YoY
   - Gross margin and trend
   - Operating expenses as % of revenue
   - EBITDA and net profit margins
   - Unusual or one-off items
2. **Analyze Balance Sheet**:
   - Liquidity: Current Ratio (CA/CL), Quick Ratio
   - Leverage: Debt-to-Equity, Interest Coverage
   - Working capital: DSO, DPO, DIO, Cash Conversion Cycle
   - Asset utilization: Total Asset Turnover, ROA
3. **Analyze Cash Flow Statement**:
   - Operating CF quality: is it positive and growing?
   - Free Cash Flow = Operating CF − Capex
   - Cash conversion: Net Income → Operating CF (quality of earnings)
   - Investing and financing activities — are they sustainable?
4. **Calculate DuPont decomposition** (ROE = Net Margin × Asset Turnover × Equity Multiplier)
5. **Identify red flags**: declining margins, rising debt, negative operating CF, DSO spike
6. **Write analysis narrative**: structured as Situation → Key Findings → Concerns → Recommendations

## Output

- ratio analysis table organized by category (profitability, liquidity, leverage, efficiency)
- trend analysis (current vs prior period with directional arrows)
- DuPont decomposition of ROE
- red flags and areas of concern
- executive narrative (1-page analysis summary)

## Definition of done

- minimum 12 financial ratios calculated across 4 categories
- at least 2 periods compared with trend direction noted
- red flags are explicitly called out
- narrative is in plain business language, not accounting jargon

## Examples

- "Analyze our Q3 financials vs Q2 — what's improving and what's not?"
- "Review this company's annual report and tell me if it's a good acquisition target."
- "Why is our ROE declining despite growing revenue? Run a DuPont analysis."
