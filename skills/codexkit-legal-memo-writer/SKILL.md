---
name: codexkit-legal-memo-writer
description: Write structured legal memoranda following the Issue-Rule-Analysis-Conclusion (IRAC) framework. Suitable for internal legal opinions, advisory memos, and compliance assessments. Use when legal analysis needs to be documented for decision-makers. Do not use as a substitute for licensed legal advice on high-stakes matters.
version: 1.0.0
category: knowledge
---

# Legal Memo Writer

## Purpose

Produce clear, structured legal analyses using the IRAC framework — turning complex legal questions into actionable recommendations for business decision-makers.

## When to use

- documenting legal opinions on business questions
- advising on regulatory compliance issues
- preparing memos for the legal team or management review
- analyzing the legal implications of a proposed business action

## When not to use

- drafting contracts (use contract-drafter)
- litigation pleadings or court filings
- matters requiring immediate licensed attorney involvement

## Inputs

- the legal question or issue to analyze
- relevant facts and background context
- applicable jurisdiction(s)
- relevant laws, regulations, or internal policies
- specific concerns or risk areas to address
- audience (legal team, C-suite, board)

## Procedure

1. **Define the Issue** — state the legal question in one clear sentence.
2. **Identify the Rule** — cite applicable statutes, regulations, case law, or internal policies.
3. **Apply the Analysis** — reason through how the rule applies to the specific facts:
   - Identify supporting facts and counterarguments
   - Consider analogous precedents
   - Assess risk probability and severity
4. **State the Conclusion** — provide a clear answer or recommendation:
   - Risk-tiered: Low / Medium / High / Critical
   - Include conditions or caveats
5. **Write recommendations** — specific actions the business should take.
6. **Format for audience** — executive summary first, detailed analysis below.

## Output

- executive summary (3–5 sentences with conclusion and risk level)
- detailed IRAC analysis per issue
- risk assessment matrix (issue × probability × impact)
- recommended actions with timeline
- caveats and limitations of the analysis

## Definition of done

- issue is stated in one clear sentence
- applicable rules/laws are cited
- analysis applies rules to specific facts (not generic)
- conclusion includes a risk tier and specific recommendation
- executive summary is present for non-lawyer audiences

## Examples

- "Write a memo analyzing whether our data collection practices comply with GDPR Article 6."
- "Advise on the employment law implications of implementing a 4-day work week."
- "Analyze the tax implications of our proposed restructuring."

## Quality Criteria

- [ ] All claims reference specific frameworks, standards, or quantifiable data
- [ ] Content matches the stated audience's expertise level
- [ ] Recommendations are actionable — each includes a concrete next step
- [ ] No unsupported assertions or generic filler language

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Do referenced frameworks and standards match their official definitions? |
| **Completeness** | Are all key concepts covered without significant gaps for the stated audience? |
| **Context-fit** | Would this be useful for someone new to this domain, or is it too advanced/too basic? |
| **Consequence** | If a stakeholder acted on this immediately, what could they misinterpret? |

## Edge Cases

- **Conflicting frameworks** — State which framework takes precedence and why. Document the trade-off explicitly.
- **Rapidly changing domain** — Note information currency date. Flag sections likely to need updates.
- **Audience has mixed expertise levels** — Provide a glossary and mark advanced sections as optional.

## Changelog

- v1.0.0 — Initial release
