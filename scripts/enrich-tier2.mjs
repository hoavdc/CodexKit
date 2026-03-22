/**
 * enrich-tier2.mjs
 * Creates verification/checklist.md, examples/good-output.md, and
 * examples/common-mistakes.md for 20 Tier 2 core skills.
 *
 * Content is domain-specific per skill, not generic.
 *
 * Run:  node scripts/enrich-tier2.mjs
 * Dry:  node scripts/enrich-tier2.mjs --dry-run
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dryRun = process.argv.includes("--dry-run");

// ── Tier 2 Skills with domain-specific content ────────────────────────

const tier2 = {
  "codexkit-execution-planner": {
    title: "Execution Planner",
    checklist: {
      correctness: [
        "Every task has a single accountable owner — no \"TBD\" allowed",
        "Dependencies are mapped and sequenced correctly (no circular refs)",
        "Timeline estimates are justified by evidence, not default padding",
      ],
      completeness: [
        "All workstreams from the brief are represented as tasks",
        "Risk mitigations are paired with every High/Critical risk",
        "Success criteria are defined before execution starts",
      ],
      contextFit: [
        "Plan granularity matches the audience (exec summary vs team sprint plan)",
        "Resource assumptions reflect actual team capacity, not wishful thinking",
        "Milestones align with known external deadlines (board meetings, launches)",
      ],
      consequence: [
        "If a critical-path task slips by 1 week, is the impact visible in the plan?",
        "If this plan is shared with the CEO, are any gaps in reasoning exposed?",
        "If a new team member reads this, can they find their tasks within 2 minutes?",
      ],
    },
    goodExample: {
      scenario: "Q3 product launch plan for a B2B SaaS feature",
      whyItWorks: [
        "Each task has owner + due date + dependency ID, making accountability clear",
        "Milestones tie to customer-facing commitments (beta invite, GA announcement)",
        "Risks include '3rd-party API deprecation' with fallback plan and trigger date",
        "Resource section shows capacity vs demand, flagging the overloaded QA team",
      ],
      patterns: [
        "Tasks use verb-noun format: 'Ship API v2', not 'API v2 work'",
        "Dependencies are explicit: 'Blocked by: TASK-012'",
        "Every section answers 'so what?' — why this matters to the outcome",
      ],
    },
    mistakes: [
      {
        name: "Phantom milestones",
        desc: "Milestones listed without tasks that lead to them — the plan looks complete but has no execution path",
        fix: "Every milestone must have ≥1 task dependency chain leading to it",
      },
      {
        name: "Everyone owns everything",
        desc: "Tasks assigned to 'Team' or 'Engineering' — no individual accountability",
        fix: "Assign one person as the DRI (Directly Responsible Individual) per task",
      },
      {
        name: "Optimistic-only timeline",
        desc: "No buffer, no risk-adjusted dates — plan breaks on first delay",
        fix: "Add 20% buffer for unknowns, explicitly mark dates as 'target' vs 'hard deadline'",
      },
    ],
  },

  "codexkit-high-signal-review": {
    title: "High-Signal Review",
    checklist: {
      correctness: [
        "Every critique cites a specific line, paragraph, or section — not vague 'could be better'",
        "Technical claims in the review are verified against authoritative sources",
        "Suggested fixes are tested or proven patterns, not speculative improvements",
      ],
      completeness: [
        "All major sections of the reviewed material are addressed",
        "Both strengths and weaknesses are documented",
        "Missing context or assumptions are flagged explicitly",
      ],
      contextFit: [
        "Review depth matches the material's maturity (draft vs final)",
        "Terminology matches the author's domain (don't use dev terms for marketing docs)",
        "Feedback is actionable by the author — not requiring skills they don't have",
      ],
      consequence: [
        "If the author ignored all feedback, what is the worst outcome for the project?",
        "If the author implemented everything literally, could any suggestion cause harm?",
        "Would this review damage the working relationship if delivered as-is?",
      ],
    },
    goodExample: {
      scenario: "Reviewing a technical RFC for a caching layer migration",
      whyItWorks: [
        "Each comment references the exact section and proposes a specific alternative",
        "Severity is clear: 'BLOCKER: cache invalidation strategy missing' vs 'NIT: typo in line 45'",
        "Reviewer acknowledges what's good: 'The latency analysis in §3 is excellent'",
        "Final summary prioritizes: 'Fix the 2 blockers. The 5 suggestions can wait for v2.'",
      ],
      patterns: [
        "Comments follow: Location → Issue → Why it matters → Suggested fix",
        "Blockers are separated from suggestions",
        "Review ends with a clear verdict: approve / approve-with-changes / request-changes",
      ],
    },
    mistakes: [
      {
        name: "Wall of nitpicks",
        desc: "20 minor comments with no severity ranking — the author can't tell what matters",
        fix: "Categorize: Blockers (must fix) → Important (should fix) → Nits (nice to fix)",
      },
      {
        name: "Destructive feedback",
        desc: "'This section is wrong' without explaining what's wrong or how to fix it",
        fix: "Every critique must include: what's wrong + why + specific improvement",
      },
      {
        name: "Reviewing what you wish it was",
        desc: "Redesigning the author's approach instead of reviewing what they actually wrote",
        fix: "Review against the stated goals. If goals are wrong, say so — but that's a separate discussion.",
      },
    ],
  },

  "codexkit-bug-hunt": {
    title: "Bug Hunt",
    checklist: {
      correctness: [
        "Reproduction steps produce the exact observed failure, not something similar",
        "Root cause hypothesis explains the mechanism, not just the symptom",
        "Patch addresses the root cause, not a surface-level workaround",
      ],
      completeness: [
        "Expected vs actual behavior is clearly documented",
        "Environment details are captured (OS, versions, config)",
        "Regression testing confirms the fix doesn't break adjacent functionality",
      ],
      contextFit: [
        "The fix is proportional to the bug's severity — no over-engineering for cosmetic issues",
        "Related code areas are inspected for similar patterns",
        "Fix follows existing code style and conventions",
      ],
      consequence: [
        "If this fix ships to production and the root cause was wrong, what else could break?",
        "If we revert this fix, is the rollback path clean?",
        "Are there other code paths that share the same root cause?",
      ],
    },
    goodExample: {
      scenario: "Dashboard shows incorrect monthly totals when timezone offset crosses midnight",
      whyItWorks: [
        "Reproduction: 'Set timezone to UTC+12, create record at 11pm local → total shows in wrong month'",
        "Root cause: 'Date aggregation uses server UTC, not user's local timezone'",
        "Fix: 'Convert to user timezone before GROUP BY; added test for UTC+12 and UTC-12 edge cases'",
        "Verification: 'Tested with 5 timezone offsets, confirmed totals match across all'",
      ],
      patterns: [
        "Reproduction is minimal — fewest steps to trigger the bug",
        "Root cause is mechanical ('X because Y'), not descriptive ('something wrong with dates')",
        "Fix includes new test cases that would have caught this bug",
      ],
    },
    mistakes: [
      {
        name: "Fixing without reproducing",
        desc: "Guessing the cause and shipping a change — may fix the symptom but miss the real problem",
        fix: "Always reproduce first. If you can't reproduce, document exactly what you tried.",
      },
      {
        name: "Scope creep in bug fix",
        desc: "Refactoring adjacent code, adding features, or cleaning up unrelated tech debt in the bug fix PR",
        fix: "Bug fix PRs should be minimal. Create separate issues for cleanup work.",
      },
      {
        name: "Verification by absence",
        desc: "'I can't reproduce it anymore' as proof of fix, without confirming the mechanism",
        fix: "Write a failing test first, then make it pass. The test is the proof.",
      },
    ],
  },

  "codexkit-survey-analyzer": {
    title: "Survey Analyzer",
    checklist: {
      correctness: [
        "Statistical methods match the data type (ordinal Likert data not treated as interval)",
        "Sample size is sufficient for the confidence level claimed",
        "Calculations are reproducible from the raw data provided",
      ],
      completeness: [
        "All survey questions are analyzed — none silently dropped",
        "Both quantitative scores and qualitative themes are covered",
        "Response rate and non-response bias are acknowledged",
      ],
      contextFit: [
        "Analysis depth matches the stakeholder's decision context",
        "Visualization choices make patterns obvious to non-statisticians",
        "Recommendations are within the organization's ability to act",
      ],
      consequence: [
        "If leadership acts on finding #1 immediately, is the evidence strong enough?",
        "Are any sensitive demographic patterns surfaced responsibly?",
        "Could the framing of results create false urgency or complacency?",
      ],
    },
    goodExample: {
      scenario: "Employee engagement survey analysis for a 500-person tech company",
      whyItWorks: [
        "NPS broken down by department reveals Engineering at 72 vs Support at 31 — actionable gap",
        "Open-text analysis uses proper coding: 237 responses → 8 themes with frequency counts",
        "Benchmark comparison: 'Your eNPS (45) vs industry median (38)' with source cited",
        "Recommendation: 'Support team: exit interview pattern suggests manager training → pilot in Q2'",
      ],
      patterns: [
        "Starts with executive summary: 3 key findings in 5 sentences",
        "Every chart has so-what annotation: 'This means...' below the visualization",
        "Recommendations link to specific data points, not general impressions",
      ],
    },
    mistakes: [
      {
        name: "Over-reading small samples",
        desc: "Drawing conclusions from 12 responses in a department of 15 — treating it as statistically significant",
        fix: "Flag when n < 30. Report as 'directional' not 'conclusive'. Show confidence intervals.",
      },
      {
        name: "Ignoring non-response bias",
        desc: "42% response rate treated as representative without acknowledging who didn't respond",
        fix: "Always state response rate. Compare responders vs non-responders on known attributes.",
      },
      {
        name: "Cherry-picking positive results",
        desc: "Highlighting high scores while burying problematic trends in appendices",
        fix: "Lead with top 3 wins AND top 3 concerns. Let leadership decide priorities.",
      },
    ],
  },

  "codexkit-incident-postmortem": {
    title: "Incident Postmortem",
    checklist: {
      correctness: [
        "Timeline events are verified against logs, not memory alone",
        "5 Whys reaches a systemic cause, not an individual's mistake",
        "Impact numbers (users, duration, revenue) come from monitoring data",
      ],
      completeness: [
        "Timeline covers detection → response → resolution → follow-up",
        "Action items have types (prevent / detect / mitigate), owners, and deadlines",
        "Contributing factors include both technical and process gaps",
      ],
      contextFit: [
        "Postmortem depth is proportional to incident severity (SEV1 gets full analysis)",
        "Language is blameless — no individual named as the cause",
        "Audience can understand without deep system knowledge",
      ],
      consequence: [
        "If none of the action items were completed, how likely is recurrence?",
        "Is there a single action item that would prevent 80% of similar incidents?",
        "If this postmortem were published externally, would it be embarrassing?",
      ],
    },
    goodExample: {
      scenario: "Payment processing outage lasting 47 minutes affecting 12,000 transactions",
      whyItWorks: [
        "Timeline: '14:03 Alert fired → 14:07 Engineer paged → 14:15 Root cause identified → 14:50 Fix deployed'",
        "5 Whys: 'Connection pool exhausted ← config not updated for new capacity ← no validation in deploy pipeline ← missing checklist item'",
        "Impact: '$340K in delayed transactions, 89 support tickets, 3 merchant escalations'",
        "Actions: 'Prevent: add connection pool config validation to CI (owner: Platform, due: Sprint 12)'",
      ],
      patterns: [
        "Detection gap is explicit: '4 minutes between failure start and first alert'",
        "Every action item is SMART: specific, measurable, assigned, realistic, time-bound",
        "Postmortem ends with 'lessons learned' that are reusable beyond this incident",
      ],
    },
    mistakes: [
      {
        name: "Blame in disguise",
        desc: "'The on-call engineer should have noticed sooner' — blame wrapped in process language",
        fix: "Ask 'why was it hard to notice?' not 'why didn't they notice?' Focus on system design.",
      },
      {
        name: "Action items without deadlines",
        desc: "'We should add monitoring' — good intention, never happens",
        fix: "Every action item: What (specific) + Who (single owner) + When (sprint/date)",
      },
      {
        name: "Shallow root cause",
        desc: "'The server crashed' as root cause — that's the symptom, not the cause",
        fix: "Keep asking 'why' until you reach a process or design flaw that can be changed",
      },
    ],
  },

  "codexkit-contract-risk-review": {
    title: "Contract Risk Review",
    checklist: {
      correctness: [
        "Risk ratings reference specific clause numbers and contract language",
        "Legal interpretations match the governing law jurisdiction specified",
        "Financial exposure calculations use realistic worst-case scenarios",
      ],
      completeness: [
        "All high-risk clause categories checked: liability, IP, termination, indemnity, confidentiality",
        "Missing protective clauses are identified (not just what's wrong, but what's absent)",
        "Counterparty obligations are analyzed alongside our obligations",
      ],
      contextFit: [
        "Risk tolerance matches the deal value and strategic importance",
        "Recommendations distinguish between 'must negotiate' vs 'accept and monitor'",
        "Language is understandable by business stakeholders, not just lawyers",
      ],
      consequence: [
        "If we sign this contract as-is, what is our maximum financial exposure?",
        "Which clause, if triggered, would cause the most operational disruption?",
        "If the counterparty went bankrupt, which clauses protect us?",
      ],
    },
    goodExample: {
      scenario: "Reviewing a SaaS vendor agreement worth $240K/year",
      whyItWorks: [
        "Risk matrix: 'Clause 8.2 (auto-renewal) → HIGH — 60-day notice required, we've missed this before'",
        "Missing clause identified: 'No data portability clause — if we exit, data extraction is undefined'",
        "Financial exposure: 'Liability cap at 12 months fees ($240K) — acceptable for this deal size'",
        "Recommendation: 'Accept with 2 amendments: add data portability and reduce auto-renewal notice to 30 days'",
      ],
      patterns: [
        "Each risk references exact clause: '§4.3(b)' not 'the liability section'",
        "Risk severity: Critical (deal-breaker) → High (negotiate) → Medium (monitor) → Low (accept)",
        "Negotiation guidance: 'Propose: [language]. Fallback: [alternative]. Walk-away: [threshold]'",
      ],
    },
    mistakes: [
      {
        name: "Reviewing without business context",
        desc: "Flagging every non-standard clause as high-risk without knowing which risks the business would accept",
        fix: "Start with: deal value, strategic importance, relationship history. Calibrate risk tolerance.",
      },
      {
        name: "Missing absent clauses",
        desc: "Only reviewing what's present — missing that there's no data protection clause at all",
        fix: "Use a mandatory clause checklist. Check for presence first, content second.",
      },
      {
        name: "Legal jargon overload",
        desc: "Review written for lawyers, but the decision-maker is a VP of Operations",
        fix: "Executive summary in plain English. Legal details in appendix for counsel reference.",
      },
    ],
  },

  "codexkit-sprint-planning-assistant": {
    title: "Sprint Planning Assistant",
    checklist: {
      correctness: [
        "Story points or estimates reflect actual complexity, not wishful thinking",
        "Sprint goal is achievable given team capacity (accounting for PTO, on-call, meetings)",
        "Dependencies on other teams are confirmed, not assumed",
      ],
      completeness: [
        "All stories have acceptance criteria before entering the sprint",
        "Capacity calculation accounts for velocity average, not just last sprint",
        "Carry-over items from previous sprint are explicitly tracked",
      ],
      contextFit: [
        "Sprint scope aligns with the current quarter's OKRs",
        "Mix of features, bugs, and tech debt reflects agreed ratios",
        "Team confidence in the plan is captured (fist-of-five or similar)",
      ],
      consequence: [
        "If the team completes only 70% of planned work, are the right 70% prioritized?",
        "If a mid-sprint emergency pulls 1 engineer, which stories are dropped?",
        "If stakeholders review this sprint plan, will they agree with the priorities?",
      ],
    },
    goodExample: {
      scenario: "2-week sprint plan for a 5-person engineering team",
      whyItWorks: [
        "Capacity: '5 engineers × 10 days = 50 days. PTO: 3 days. On-call: 2 days. Net: 45 days (36 SP at 0.8 velocity)'",
        "Sprint goal: 'Ship user profile redesign and reduce P1 bug count by 50%'",
        "Priority stack: 'Stories 1-5 (must), 6-8 (should), 9-10 (stretch)'",
        "Risks: 'Story #3 depends on API team — standup sync on Tuesday to confirm.'",
      ],
      patterns: [
        "Stories ordered by priority, not by who picks them first",
        "Capacity is math, not vibes: show the calculation",
        "Sprint goal can pass a newspaper test: someone outside the team understands it",
      ],
    },
    mistakes: [
      {
        name: "Planning to 100% capacity",
        desc: "Filling every available hour with planned work — no slack for bugs, reviews, or surprises",
        fix: "Plan to 80% capacity. The remaining 20% is interrupt buffer.",
      },
      {
        name: "Stories without acceptance criteria",
        desc: "'Implement search' with no definition of done — endless scope creep",
        fix: "Every story must have ≥1 testable acceptance criterion before entering sprint",
      },
      {
        name: "Ignoring velocity",
        desc: "Planning 45 points when team's 3-sprint average is 32",
        fix: "Use trailing velocity average. If planning above it, explicitly state why this sprint is different.",
      },
    ],
  },

  "codexkit-okr-writer": {
    title: "OKR Writer",
    checklist: {
      correctness: [
        "Objectives are outcomes (what changes), not activities (what we do)",
        "Key Results are measurable with current instrumentation",
        "Baseline and target values are specified for every Key Result",
      ],
      completeness: [
        "3-5 Objectives with 2-4 Key Results each — not too many, not too few",
        "Alignment map shows how team OKRs connect to company-level OKRs",
        "Each KR has a scoring method defined (binary, percentage, threshold)",
      ],
      contextFit: [
        "OKRs reflect the team's actual sphere of influence",
        "Ambition level matches the organization's OKR scoring convention (0.7 = good?)",
        "Timeframe is realistic for the scope of change expected",
      ],
      consequence: [
        "If the team achieves 100% on all KRs, will the Objective actually be met?",
        "If we optimize for these KRs at the expense of everything else, what breaks?",
        "Would a new team member understand what to prioritize from reading these OKRs?",
      ],
    },
    goodExample: {
      scenario: "Q3 OKRs for a Growth team at a Series B SaaS company",
      whyItWorks: [
        "O: 'Make the self-serve onboarding path the primary revenue driver' — outcome, not task",
        "KR1: 'Increase self-serve conversion from 4.2% to 6.0%' — baseline + target",
        "KR2: 'Reduce time-to-first-value from 14 days to 7 days' — measurable, impactful",
        "Alignment: 'Supports Company O2: Scale revenue without proportional headcount growth'",
      ],
      patterns: [
        "Objectives are inspiring enough to rally the team, specific enough to focus",
        "Key Results would be meaningful to someone outside the team",
        "Each KR passes the 'so what' test: if we hit this number, we know we succeeded",
      ],
    },
    mistakes: [
      {
        name: "Activity-based objectives",
        desc: "'Launch the new pricing page' — that's a task, not an outcome",
        fix: "Ask: 'If we do this successfully, what changes for the customer/business?'",
      },
      {
        name: "Unmeasurable Key Results",
        desc: "'Improve customer satisfaction' — how do you know when you've achieved it?",
        fix: "Specify the metric, baseline, and target: 'CSAT from 7.2 to 8.0'",
      },
      {
        name: "Sandbag OKRs",
        desc: "Setting targets you're 100% sure to hit — no stretch",
        fix: "Good OKRs are 60-70% likely. If you're sure you'll hit it, the bar is too low.",
      },
    ],
  },

  "codexkit-business-case-writer": {
    title: "Business Case Writer",
    checklist: {
      correctness: [
        "Financial projections use conservative assumptions with sources cited",
        "Cost estimates include implementation, ongoing, and opportunity costs",
        "ROI timeline is realistic given comparable precedents",
      ],
      completeness: [
        "Problem statement, proposed solution, alternatives, and recommendation are all present",
        "Risk section covers financial, operational, and execution risks",
        "Stakeholder impact analysis includes both supporters and opponents",
      ],
      contextFit: [
        "Level of detail matches the investment size (don't write 20 pages for a $5K tool)",
        "Financial metrics use the audience's preferred format (NPV, IRR, payback period)",
        "Language is executive-friendly — no technical jargon without explanation",
      ],
      consequence: [
        "If funded, can the team actually execute on this timeline?",
        "If rejected, were alternatives presented that could still solve the problem?",
        "If the author's assumptions are wrong by 30%, does the case still hold?",
      ],
    },
    goodExample: {
      scenario: "Business case for adopting an AI-assisted customer support tool ($120K/year)",
      whyItWorks: [
        "Problem: '38% of Tier-1 tickets are answerable by KB — costing $42 per ticket vs $0.50 for AI deflection'",
        "ROI: 'Year 1: -$30K (implementation cost). Year 2+: +$180K/year net savings. Payback: 8 months.'",
        "Alternatives: 'a) Hire 2 more agents ($160K/year) b) Expand KB only (20% deflection vs 55%)'",
        "Sensitivity: 'Even at 30% deflection (worst case), payback is 14 months'",
      ],
      patterns: [
        "Executive summary fits on one page: problem → solution → cost → ROI",
        "Assumptions are listed separately with sensitivity analysis",
        "Recommendation is clear: 'We recommend Option B with Q2 implementation'",
      ],
    },
    mistakes: [
      {
        name: "Solution in search of a problem",
        desc: "Leading with 'We should buy Tool X' instead of 'We have Problem Y'",
        fix: "Start with the pain. Quantify the cost of doing nothing. Then propose.",
      },
      {
        name: "Optimistic-only projections",
        desc: "Best-case scenario presented as the expected outcome",
        fix: "Include base case, best case, and worst case. Show NPV for all three.",
      },
      {
        name: "Missing total cost of ownership",
        desc: "License cost listed but training, integration, migration, and ongoing maintenance ignored",
        fix: "Calculate 3-year TCO including: license + setup + training + migration + ongoing ops",
      },
    ],
  },

  "codexkit-go-to-market-planner": {
    title: "Go-to-Market Planner",
    checklist: {
      correctness: [
        "Target segments are defined by observable criteria (industry, size, behavior), not assumptions",
        "Channel strategy matches where the target audience actually researches and buys",
        "Pricing is benchmarked against at least 3 market comparables",
      ],
      completeness: [
        "All GTM pillars covered: positioning, pricing, channels, launch timeline, success metrics",
        "Competitive positioning map includes at least the top 3 alternatives",
        "First 90 days plan is week-by-week, not just 'launch and see'",
      ],
      contextFit: [
        "GTM approach matches company stage (startup scrappy vs enterprise polished)",
        "Resource requirements are realistic for the team size",
        "Launch timing accounts for market seasonality and competitive moves",
      ],
      consequence: [
        "If launch fails to hit 30-day targets, is there a pivot plan?",
        "If a competitor launches a similar feature next week, which elements of the plan are defensible?",
        "If sales team reads this plan, can they start selling from it?",
      ],
    },
    goodExample: {
      scenario: "GTM plan for a compliance automation product targeting mid-market fintech",
      whyItWorks: [
        "ICP: 'Fintech companies, 50-500 employees, Series A-C, regulated by OCC or state banking'",
        "Channel: 'Primary: fintech Slack communities + compliance officer LinkedIn. Secondary: fintech conferences.'",
        "Pricing: '$500/mo per entity — positioned 40% below manual compliance cost ($850/mo avg)'",
        "Week 1-4 plan: specific outreach targets, content pieces, and metrics per week",
      ],
      patterns: [
        "ICP is specific enough to build a prospect list from it",
        "Channels are prioritized by expected CAC, not by what's familiar",
        "Success metrics are leading indicators (meetings booked) not just lagging (revenue)",
      ],
    },
    mistakes: [
      {
        name: "Target everyone",
        desc: "'Any company that needs compliance' — too broad to execute",
        fix: "Define ICP with firmographic + behavioral criteria. 'If you can't name 50 prospects, it's too broad.'",
      },
      {
        name: "All channels, no priority",
        desc: "Listing 8 marketing channels without ranking or budgeting",
        fix: "Pick 2 primary channels. Fund and measure for 90 days before adding more.",
      },
      {
        name: "Pricing by cost-plus, not value",
        desc: "Setting price based on development cost, not customer willingness to pay",
        fix: "Price based on value delivered vs alternatives. Run pricing sensitivity research.",
      },
    ],
  },

  "codexkit-financial-statement-analyzer": {
    title: "Financial Statement Analyzer",
    checklist: {
      correctness: [
        "Ratios are calculated using the correct line items (e.g., current ratio uses current assets/current liabilities, not total)",
        "Period-over-period comparisons use consistent accounting methods",
        "Industry benchmarks cite source and year",
      ],
      completeness: [
        "All three statements analyzed: income statement, balance sheet, cash flow",
        "Horizontal analysis (trends) and vertical analysis (composition) both included",
        "Key ratios cover profitability, liquidity, efficiency, and leverage",
      ],
      contextFit: [
        "Analysis depth matches the user's purpose (investment due diligence vs internal review)",
        "Industry-specific metrics are included where relevant (SaaS: ARR, churn; Retail: same-store sales)",
        "Red flags and positive signals are explicitly called out",
      ],
      consequence: [
        "If an investor relied solely on this analysis, what would they miss?",
        "Are there off-balance-sheet items or footnotes that change the picture?",
        "If revenue growth looks strong but cash flow is negative, is that flagged?",
      ],
    },
    goodExample: {
      scenario: "Analyzing a SaaS company's financials for Series B due diligence",
      whyItWorks: [
        "Revenue quality: 'ARR $4.2M, 92% recurring. Non-recurring services revenue declining — positive signal.'",
        "Unit economics: 'LTV:CAC ratio 3.8x (healthy >3x). Payback period 14 months (benchmark: <18).'",
        "Cash burn: 'Net burn $280K/mo at current growth rate. 16 months runway at current raise.'",
        "Red flag: 'Deferred revenue declining 12% QoQ while booked ARR grew 8% — investigate recognition timing.'",
      ],
      patterns: [
        "Every metric has context: value + benchmark + interpretation",
        "Red flags and green flags are explicit, not buried in data",
        "Summary bridges from numbers to narrative: 'what this means for the decision'",
      ],
    },
    mistakes: [
      {
        name: "Ratios without context",
        desc: "Reporting 'Current ratio: 1.8' without explaining if that's good, bad, or normal for the industry",
        fix: "Every ratio needs: value + industry benchmark + trend direction + interpretation",
      },
      {
        name: "Ignoring cash flow",
        desc: "Profitable on paper but burning cash — a common trap",
        fix: "Always reconcile net income to operating cash flow. Explain the difference.",
      },
      {
        name: "Snapshot without trend",
        desc: "Single period analysis — can't distinguish improving from deteriorating",
        fix: "Minimum 3 periods for trend analysis. Flag inflection points.",
      },
    ],
  },

  "codexkit-data-quality-auditor": {
    title: "Data Quality Auditor",
    checklist: {
      correctness: [
        "Scoring methodology is consistent across all six DAMA dimensions",
        "Null rate calculations exclude columns that legitimately allow nulls",
        "Duplicate detection uses the correct uniqueness key, not arbitrary columns",
      ],
      completeness: [
        "All six dimensions assessed: Completeness, Accuracy, Consistency, Timeliness, Validity, Uniqueness",
        "Issue log includes severity, affected records count, and example",
        "Remediation plan addresses all Critical and High issues",
      ],
      contextFit: [
        "Quality thresholds are calibrated to the data's business purpose",
        "Audit scope matches what's feasible (full scan vs sample for 100M+ row tables)",
        "Recommendations are actionable by the data team, not aspirational",
      ],
      consequence: [
        "If downstream dashboards use this data as-is, which metrics would be wrong?",
        "If the worst quality issue is ignored for 3 months, what is the business impact?",
        "Are there regulatory implications for any of the quality failures?",
      ],
    },
    goodExample: {
      scenario: "Auditing a customer orders dataset (145K rows) for a new analytics dashboard",
      whyItWorks: [
        "Profile: '23 columns, 145K rows. 3.2% overall null rate. Date range: Jan-Dec 2024.'",
        "Scores: 'Completeness: 4/5 (email 12% null). Accuracy: 3/5 (3% price mismatches).'",
        "Issue: '#1 | Accuracy | price | 3% don't match catalog | High | 4,350 rows | row 1234: $0.00'",
        "Fix: 'Backfill prices from catalog master. Add validation rule on ingest. Owner: Data Eng, Sprint 4.'",
      ],
      patterns: [
        "Profiling data shown before assessment — sets context",
        "Each issue has severity + root cause + fix + owner + deadline",
        "Monitoring rules defined for ongoing prevention",
      ],
    },
    mistakes: [
      {
        name: "Flagging every null as a problem",
        desc: "Optional fields reported as quality failures — noise overwhelms signal",
        fix: "Distinguish required fields (nulls = issue) from optional (nulls = expected)",
      },
      {
        name: "No root cause investigation",
        desc: "'12% of emails are null' without understanding why — data entry? migration? system bug?",
        fix: "For every High/Critical issue, trace back to the source: where does the bad data enter?",
      },
      {
        name: "Audit without follow-up plan",
        desc: "Beautiful report, no remediation steps, issues never get fixed",
        fix: "Every issue needs: fix + owner + deadline. Review cadence established.",
      },
    ],
  },

  "codexkit-onboarding-plan-creator": {
    title: "Onboarding Plan Creator",
    checklist: {
      correctness: [
        "Day-by-day schedule matches the role's actual ramp expectations",
        "Tool access and account provisioning checklist is complete for the role",
        "30-60-90 milestones are achievable by someone at the expected level",
      ],
      completeness: [
        "Covers all phases: pre-arrival, Week 1 (orientation), Month 1 (learning), Month 2-3 (contributing)",
        "Buddy/mentor assignment is included with clear expectations",
        "Culture, process, and technical onboarding are all addressed",
      ],
      contextFit: [
        "Onboarding intensity matches the role seniority (senior hires need less hand-holding, more context)",
        "Remote vs in-person logistics are addressed appropriately",
        "Department-specific content is included alongside company-wide orientation",
      ],
      consequence: [
        "If the new hire follows this plan exactly, will they be productive by Day 30?",
        "If the buddy is unavailable for a week, does the plan still work?",
        "If a critical tool access is delayed, are workarounds documented?",
      ],
    },
    goodExample: {
      scenario: "90-day onboarding plan for a Senior Backend Engineer (remote)",
      whyItWorks: [
        "Pre-Day 1: 'Ship laptop, accounts created, welcome email with reading list (architecture doc, team norms)'",
        "Week 1: 'Day 1: buddy intro + dev env setup. Day 2-3: codebase walkthrough. Day 4-5: first small PR.'",
        "30-day goal: 'Ship 3 PRs of increasing complexity. Lead one bug fix independently.'",
        "90-day goal: 'Own one feature end-to-end. Participate in on-call rotation.'",
      ],
      patterns: [
        "Every day has a specific activity, not 'get familiar with the codebase'",
        "Success is measurable at each checkpoint: 'X PRs', 'Y meetings attended'",
        "Plan includes social integration, not just technical: 'coffee chat with 5 people by Day 10'",
      ],
    },
    mistakes: [
      {
        name: "Information overload in Week 1",
        desc: "8 hours of meetings per day for 5 days — exhausting and low retention",
        fix: "Max 4 hours of meetings per day in Week 1. Alternate with hands-on exploration time.",
      },
      {
        name: "No success criteria",
        desc: "'By Day 30, the new hire should be comfortable' — unmeasurable",
        fix: "Define specific outputs: 'Merged 3 PRs, completed security training, documented one process.'",
      },
      {
        name: "Plan stops after Week 1",
        desc: "Detailed first week, then 'figure it out' — new hire feels abandoned",
        fix: "Plan through 90 days. Less detail but clear milestones for each month.",
      },
    ],
  },

  "codexkit-root-cause-analyzer": {
    title: "Root Cause Analyzer",
    checklist: {
      correctness: [
        "Each 'Why' in the chain is causally connected — not just correlated",
        "Contributing factors distinguish between necessary and sufficient causes",
        "Root cause is a system/process flaw, not an individual's action",
      ],
      completeness: [
        "Problem statement includes who, what, when, where, and magnitude",
        "Multiple causal chains explored — not just the first plausible explanation",
        "Corrective AND preventive actions are both proposed",
      ],
      contextFit: [
        "Analysis depth matches the severity and recurrence risk",
        "Method chosen (5 Whys, Fishbone, Fault Tree) suits the problem type",
        "Recommendations are within the team's control to implement",
      ],
      consequence: [
        "If only the corrective action is taken (not preventive), will this recur?",
        "Is the root cause systemic enough that other teams should be notified?",
        "If we fixed nothing, what's the expected frequency and impact of recurrence?",
      ],
    },
    goodExample: {
      scenario: "Analyzing why a production deployment caused a 2-hour outage",
      whyItWorks: [
        "Problem: 'Deployment v3.2.1 caused API errors for 2 hours on March 15, affecting 8,400 users.'",
        "5 Whys: 'API errored → config mismatch → config not validated in CI → no config schema defined → never prioritized'",
        "Root cause: 'No schema validation for configuration changes in the deployment pipeline'",
        "Fix: 'Corrective: rollback config. Preventive: add JSON schema validation to CI pipeline (Sprint 12).'",
      ],
      patterns: [
        "Problem statement is specific and quantified — not 'things broke'",
        "5 Whys reaches a process/system issue — not 'John forgot to check'",
        "Preventive action addresses the root cause, not just the symptom",
      ],
    },
    mistakes: [
      {
        name: "Stopping at the human layer",
        desc: "'Root cause: engineer deployed without testing' — that's blame, not analysis",
        fix: "Ask: 'Why was it possible to deploy without testing?' Fix the system, not the person.",
      },
      {
        name: "Single causal chain tunnel vision",
        desc: "Following one 'Why' chain and missing alternative contributing factors",
        fix: "After the first chain, ask: 'What else contributed?' Use Fishbone for multi-factor problems.",
      },
      {
        name: "Analysis without action",
        desc: "Beautiful root cause diagram, zero action items with deadlines",
        fix: "Every root cause must produce ≥1 action item with owner and due date.",
      },
    ],
  },

  "codexkit-a-b-test-planner": {
    title: "A/B Test Planner",
    checklist: {
      correctness: [
        "Sample size calculation uses the correct MDE, baseline rate, and significance level",
        "Randomization unit matches the analysis unit (user-level, not session-level for most tests)",
        "Primary metric is defined before the test starts — no post-hoc metric shopping",
      ],
      completeness: [
        "Hypothesis, primary metric, guardrail metrics, and test duration are all defined",
        "Power analysis determines minimum sample size and test duration",
        "Rollback criteria and escalation path are documented",
      ],
      contextFit: [
        "Test duration accounts for weekly/monthly traffic patterns",
        "MDE is meaningful from a business perspective, not just statistically detectable",
        "Guardrail metrics prevent optimizing the primary metric at the expense of user experience",
      ],
      consequence: [
        "If the test runs 20% longer than planned, what's the cost?",
        "If we ship the winner without statistical significance, what's the false-positive risk?",
        "If the variation loses, is there a learning that informs the next test?",
      ],
    },
    goodExample: {
      scenario: "A/B test for a simplified checkout flow on an e-commerce site",
      whyItWorks: [
        "Hypothesis: 'Reducing checkout steps from 4 to 2 will increase completion rate by ≥3pp'",
        "Power: 'Baseline: 28% completion. MDE: 3pp. α=0.05, β=0.20 → n=3,400/variant → 14 days at current traffic'",
        "Guardrails: 'Average order value must not drop >2%. Support ticket rate must not increase >10%.'",
        "Decision: 'Ship if primary metric is significant AND no guardrail violated. Hold if borderline for 7 more days.'",
      ],
      patterns: [
        "Hypothesis is falsifiable and specific",
        "Duration is calculated, not arbitrary ('let's run it for 2 weeks')",
        "Success criteria include both 'what we want' and 'what we can't afford to break'",
      ],
    },
    mistakes: [
      {
        name: "Peeking and stopping early",
        desc: "Checking results daily and stopping when p<0.05 — massively inflates false positives",
        fix: "Pre-commit to test duration. If you must peek, use sequential testing methods.",
      },
      {
        name: "Testing too many changes at once",
        desc: "New layout + new copy + new colors — can't attribute the effect",
        fix: "One change per test. If testing multiple factors, use a proper factorial design.",
      },
      {
        name: "Ignoring guardrails",
        desc: "Conversion up 5% but support tickets up 40% — net negative experience",
        fix: "Define guardrail metrics upfront. A 'win' must not violate any guardrail.",
      },
    ],
  },

  "codexkit-campaign-brief-writer": {
    title: "Campaign Brief Writer",
    checklist: {
      correctness: [
        "Target audience is defined by demographic AND behavioral criteria",
        "KPIs are measurable with existing tracking infrastructure",
        "Budget allocation matches channel priority — not evenly split by default",
      ],
      completeness: [
        "Brief covers: objective, audience, messaging, channels, timeline, budget, KPIs",
        "Creative direction includes tone, visual style, and mandatory brand elements",
        "Approval workflow and stakeholder sign-off points are defined",
      ],
      contextFit: [
        "Campaign type (awareness vs conversion vs retention) drives the brief structure",
        "Timeline is realistic for creative production lead times",
        "Budget reflects actual market costs for chosen channels",
      ],
      consequence: [
        "If creative team starts from this brief alone, can they produce on-brand work?",
        "If the campaign underperforms at midpoint, is there a pivot plan?",
        "If a competitor launches a similar campaign, which elements differentiate us?",
      ],
    },
    goodExample: {
      scenario: "Q4 holiday campaign brief for a DTC skincare brand",
      whyItWorks: [
        "Audience: 'Women 28-45, have purchased in last 90 days, average order >$60, engaged with email'",
        "Messaging: 'Hero: Gift sets (AOV $85 vs $42 singles). Angle: self-care, not obligation.'",
        "Channels: 'Email (40% budget) → Instagram (30%) → Paid search (20%) → Influencer (10%)'",
        "KPIs: 'Revenue target: $280K. ROAS floor: 3.5x. Email click rate: >4.2%.'",
      ],
      patterns: [
        "Audience is specific enough to build a targeting list",
        "Creative direction shows what to do AND what to avoid",
        "Budget is channel-specific with expected CPM/CPC benchmarks",
      ],
    },
    mistakes: [
      {
        name: "Objective without metric",
        desc: "'Increase brand awareness' — unmeasurable, unfocusable",
        fix: "Attach numbers: 'Increase aided brand recall from 12% to 18% in target market.'",
      },
      {
        name: "All channels, same message",
        desc: "Same creative across email, social, and search — ignores channel context",
        fix: "Adapt messaging to channel: email (detail), social (visual/emotional), search (intent-based).",
      },
      {
        name: "No competitive context",
        desc: "Brief assumes we operate in a vacuum — ignores what competitors are doing",
        fix: "Include competitive landscape section: what competitors did last Q4, how to differentiate.",
      },
    ],
  },

  "codexkit-dashboard-kpi-designer": {
    title: "Dashboard KPI Designer",
    checklist: {
      correctness: [
        "KPI formulas match the business definition (e.g., 'active user' definition is consistent)",
        "Data sources for each metric are identified and confirmed accessible",
        "Aggregation levels (daily/weekly/monthly) match how the metric is used",
      ],
      completeness: [
        "Dashboard covers leading indicators (predict future) AND lagging (confirm past)",
        "Each KPI has: name, formula, data source, refresh frequency, owner",
        "Alert thresholds are defined for KPIs that require action when out of range",
      ],
      contextFit: [
        "Dashboard audience is identified: exec (strategic), manager (tactical), IC (operational)",
        "Number of KPIs is appropriate: 5-8 for exec, 10-15 for team-level",
        "Visualization types match the data type (trends = line chart, composition = pie/bar)",
      ],
      consequence: [
        "If a metric turns red, is the response clear (who does what)?",
        "If two KPIs conflict (growth up, margin down), how should the viewer interpret it?",
        "If this dashboard is the only thing reviewed in Monday meetings, is that sufficient?",
      ],
    },
    goodExample: {
      scenario: "Executive dashboard for a marketplace startup",
      whyItWorks: [
        "KPI hierarchy: 'North star: GMV. Supporting: Take rate, Active sellers, Order frequency'",
        "Each KPI: 'GMV = sum(order_total) | Source: orders table | Daily refresh | Owner: Data team'",
        "Alerts: 'GMV <$50K/day → Slack #exec-alerts. Seller churn >5%/month → email COO.'",
        "Layout: '4 big numbers top (GMV, orders, sellers, buyers) → trend charts below → drill-down tabs'",
      ],
      patterns: [
        "North star metric is prominent. Supporting metrics explain the 'why'",
        "Alert thresholds are calibrated from historical data, not arbitrary",
        "Dashboard answers: 'Are we winning? Where? What needs attention?'",
      ],
    },
    mistakes: [
      {
        name: "Vanity metrics",
        desc: "'Total signups: 50,000!' — impressive number, zero actionability",
        fix: "Show active rate, conversion, and retention alongside totals.",
      },
      {
        name: "Too many KPIs",
        desc: "25 metrics on one screen — nobody reads any of them",
        fix: "Exec: 5-8 KPIs. Team: 10-15. Use drill-down for detail.",
      },
      {
        name: "No alert thresholds",
        desc: "Dashboard shows data but never tells you when to worry",
        fix: "For every KPI: define green/yellow/red thresholds based on historical ranges.",
      },
    ],
  },

  "codexkit-process-mapper": {
    title: "Process Mapper",
    checklist: {
      correctness: [
        "Process steps match what people actually do, not what the manual says",
        "Decision points have binary outcomes — no ambiguous 'it depends' branching",
        "Swim lanes correctly assign steps to the right roles",
      ],
      completeness: [
        "Process has clear start trigger and end condition",
        "Exception paths (errors, rejections, escalations) are mapped",
        "Time estimates or SLAs are included for each step",
      ],
      contextFit: [
        "Detail level matches the audience: overview for execs, step-level for operators",
        "Format is appropriate: flowchart for simple, BPMN for complex processes",
        "Process is mapped as-is before proposing to-be improvements",
      ],
      consequence: [
        "If a new hire follows this map on their first day, can they complete the process?",
        "If a step fails, is the escalation path clear?",
        "If this process runs 100x per day, where is the bottleneck?",
      ],
    },
    goodExample: {
      scenario: "Mapping the customer refund process for a SaaS company",
      whyItWorks: [
        "Start: 'Customer submits refund request via support ticket'",
        "Decision: 'Within 30-day policy? → Yes: auto-approve if <$100 → No: escalate to Finance'",
        "Swim lanes: 'Customer | Support Agent | Finance | Payment System'",
        "Metrics: 'Avg time: 2.3 days. SLA: 5 business days. Current compliance: 94%.'",
      ],
      patterns: [
        "Process starts with a trigger event, not a vague beginning",
        "Decision points are yes/no, not multi-branch ambiguity",
        "Current metrics attached to identify improvement opportunities",
      ],
    },
    mistakes: [
      {
        name: "Happy path only",
        desc: "Map shows the ideal flow — ignores rejections, errors, and exceptions",
        fix: "Map exceptions first. They're where the real complexity lives.",
      },
      {
        name: "Mapping the desired state, not current state",
        desc: "Process map shows how it should work, not how it actually works",
        fix: "Always map as-is first. Then create a to-be map separately for comparison.",
      },
      {
        name: "Too much detail",
        desc: "Mapping every click and screen transition — unreadable",
        fix: "Match detail to audience. Executives need 5-10 steps. Operators might need 30.",
      },
    ],
  },

  "codexkit-customer-journey-mapper": {
    title: "Customer Journey Mapper",
    checklist: {
      correctness: [
        "Journey stages are named from the customer's perspective, not the company's",
        "Touchpoints are based on actual interaction data, not assumptions",
        "Pain points are validated by customer feedback (surveys, tickets, interviews)",
      ],
      completeness: [
        "Journey covers full lifecycle: awareness → consideration → purchase → onboarding → retention → advocacy",
        "Each stage includes: actions, thoughts, emotions, touchpoints, pain points, opportunities",
        "Both digital and offline touchpoints are mapped",
      ],
      contextFit: [
        "Persona is specific enough to produce differentiated insights (not 'all customers')",
        "Journey complexity matches the purchase type (B2B complex vs B2C impulse)",
        "Opportunities are prioritized by impact × feasibility",
      ],
      consequence: [
        "If Product and Marketing each act on this independently, will they conflict?",
        "If we fix the #1 pain point, what's the expected impact on retention/NPS?",
        "If a competitor sees this map, would it reveal our key advantage or vulnerability?",
      ],
    },
    goodExample: {
      scenario: "Journey map for a SaaS onboarding flow (Persona: Mid-market IT Director)",
      whyItWorks: [
        "Stage: 'Evaluation' — Action: 'Requests trial, loops in security team for review'",
        "Pain: 'SSO setup takes 3-5 days due to no self-serve config → 40% of trials drop off before SSO completes'",
        "Emotion: 'Frustrated → anxious about justifying the delay to their VP'",
        "Opportunity: 'Add temporary password auth during SSO setup → estimated 15% reduction in trial abandonment'",
      ],
      patterns: [
        "Pain points have data attached, not just anecdotes",
        "Opportunities are specific projects, not vague 'improve experience'",
        "Emotional journey is tracked — not just actions and touchpoints",
      ],
    },
    mistakes: [
      {
        name: "Inside-out perspective",
        desc: "Journey stages named by department: 'Marketing → Sales → CS' instead of customer experience",
        fix: "Name stages from the customer's POV: 'Research → Try → Buy → Set Up → Use → Grow'",
      },
      {
        name: "All persona, one journey",
        desc: "Mapping one journey for 'all customers' — misses segment-specific pain points",
        fix: "Create separate maps for each key persona. Insights come from the differences.",
      },
      {
        name: "No prioritization of opportunities",
        desc: "15 improvement ideas with no ranking — what to build first?",
        fix: "Score opportunities by: impact (NPS/revenue) × feasibility (effort/risk). Build top 3 first.",
      },
    ],
  },

  "codexkit-repo-onboarding": {
    title: "Repo Onboarding",
    checklist: {
      correctness: [
        "Architecture description matches the actual codebase structure",
        "Setup instructions work on a clean machine from scratch",
        "Listed dependencies are current and version-accurate",
      ],
      completeness: [
        "Covers: purpose, architecture, setup, key abstractions, conventions, where to start",
        "Environment requirements include OS, language versions, and required services",
        "Common gotchas and known issues are documented",
      ],
      contextFit: [
        "Depth matches the reader's expected role (contributor vs maintainer vs reviewer)",
        "Code examples reference actual files in the repo, not hypothetical patterns",
        "Complexity areas are identified: 'This module is tricky because...'",
      ],
      consequence: [
        "If a new dev follows this guide, can they make their first PR within 24 hours?",
        "If setup fails at step 3, is troubleshooting guidance provided?",
        "If the repo structure changes, how quickly will this guide become outdated?",
      ],
    },
    goodExample: {
      scenario: "Onboarding guide for a Node.js monorepo with 3 services",
      whyItWorks: [
        "Purpose: 'Handles user auth (auth-service), product catalog (catalog-api), and order processing (order-worker)'",
        "Setup: 'Step 1: Clone. Step 2: nvm use (reads .nvmrc). Step 3: pnpm install. Step 4: docker compose up -d (Postgres + Redis).'",
        "First task: 'Look at packages/catalog-api/src/routes/product.ts — add a new GET endpoint for /products/:id/reviews'",
        "Gotcha: 'order-worker uses Bull queues — if Redis isn't running, it fails silently. Check docker ps first.'",
      ],
      patterns: [
        "Setup is copy-paste-able — each step is a single command",
        "Architecture is visual: folder tree + data flow diagram",
        "First task is concrete, achievable, and teaches the key patterns",
      ],
    },
    mistakes: [
      {
        name: "Outdated setup instructions",
        desc: "Guide says 'npm install' but repo uses pnpm — new dev stuck for hours",
        fix: "Test setup instructions on a clean machine quarterly. Or better: use a devcontainer.",
      },
      {
        name: "Architecture by aspiration",
        desc: "Describing the ideal architecture, not the current messy reality",
        fix: "Document what IS, including tech debt. Mark aspirational sections as 'planned'.",
      },
      {
        name: "No suggested first task",
        desc: "New dev finishes setup, then stares at 500 files wondering where to start",
        fix: "Include 2-3 'good first issues' with file paths and expected outcome.",
      },
    ],
  },
};

// ── File generators ───────────────────────────────────────────────────

function generateChecklist(skill) {
  const { title, checklist } = skill;
  const lines = [
    `# 4C Verification Checklist — ${title}`,
    "",
    "> Use this checklist after generating output. Answer each question honestly.",
    "",
    "## Correctness — Is it right?",
    "",
  ];
  checklist.correctness.forEach((c) => lines.push(`- [ ] ${c}`));
  lines.push("", "## Completeness — Is it done?", "");
  checklist.completeness.forEach((c) => lines.push(`- [ ] ${c}`));
  lines.push("", "## Context-fit — Does it match?", "");
  checklist.contextFit.forEach((c) => lines.push(`- [ ] ${c}`));
  lines.push("", "## Consequence — Is it safe to use?", "");
  checklist.consequence.forEach((c) => lines.push(`- [ ] ${c}`));
  lines.push(
    "",
    "---",
    "",
    "**Final question:** _If this output were used immediately in production, what is the single biggest risk?_",
    "",
    "Write the answer here before considering the skill output complete.",
    ""
  );
  return lines.join("\n");
}

function generateGoodExample(skill) {
  const { title, goodExample } = skill;
  const lines = [
    `# Good Output Example — ${title}`,
    "",
    `> This example demonstrates what well-executed ${title.toLowerCase()} output looks like.`,
    "",
    "## Scenario",
    "",
    goodExample.scenario,
    "",
    "## Why It Works",
    "",
  ];
  goodExample.whyItWorks.forEach((w, i) => lines.push(`${i + 1}. ${w}`));
  lines.push("", "## Key Patterns to Replicate", "");
  goodExample.patterns.forEach((p) => lines.push(`- ${p}`));
  lines.push("");
  return lines.join("\n");
}

function generateMistakes(skill) {
  const { title, mistakes } = skill;
  const lines = [
    `# Common Mistakes — ${title}`,
    "",
    `> Anti-patterns to watch for when using the ${title} skill.`,
    "",
  ];
  mistakes.forEach((m, i) => {
    lines.push(`## ${i + 1}. ${m.name}`, "");
    lines.push(`**What goes wrong:** ${m.desc}`, "");
    lines.push(`**How to fix it:** ${m.fix}`, "");
  });
  return lines.join("\n");
}

// ── Main ──────────────────────────────────────────────────────────────

async function main() {
  const skillsDir = path.join(root, "skills");
  let created = 0;

  for (const [skillName, data] of Object.entries(tier2)) {
    const skillDir = path.join(skillsDir, skillName);

    // Ensure skill directory exists
    try {
      await fs.stat(skillDir);
    } catch {
      console.log(`  SKIP  ${skillName} — directory not found`);
      continue;
    }

    const verDir = path.join(skillDir, "verification");
    const exDir = path.join(skillDir, "examples");

    if (dryRun) {
      console.log(`  DRY   ${skillName} → verification/ + examples/`);
      created += 3;
      continue;
    }

    // Create directories
    await fs.mkdir(verDir, { recursive: true });
    await fs.mkdir(exDir, { recursive: true });

    // Write files
    await fs.writeFile(path.join(verDir, "checklist.md"), generateChecklist(data), "utf8");
    await fs.writeFile(path.join(exDir, "good-output.md"), generateGoodExample(data), "utf8");
    await fs.writeFile(path.join(exDir, "common-mistakes.md"), generateMistakes(data), "utf8");

    console.log(`  OK    ${skillName} → +3 files`);
    created += 3;
  }

  console.log(`\nDone. Created: ${created} files across ${Object.keys(tier2).length} skills`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
