---
name: codexkit-churn-risk-analyzer
description: Build customer health scores and churn risk models using leading indicators. Define health dimensions (Usage, Engagement, Support, Sentiment, Contract), weight and score customers, segment into Healthy / At-Risk / Red, and generate intervention playbooks. Use during QBR prep, customer success reviews, or when churn spikes.
---

# Churn Risk Analyzer

## When to Use

- During monthly or quarterly customer health reviews
- When churn rate increases and root causes are unclear
- When building a customer health scoring model for the first time
- When preparing retention plays for at-risk accounts

## Procedure

### Step 1 — Define Health Dimensions

| Dimension | Weight | Indicators |
|-----------|--------|-----------|
| **Usage** | 30% | Login frequency, feature adoption, DAU/MAU ratio |
| **Engagement** | 25% | Support ticket sentiment, NPS, event attendance |
| **Support** | 15% | Ticket volume, escalations, resolution time |
| **Sentiment** | 15% | NPS score, CSAT, qualitative feedback |
| **Contract** | 15% | Time to renewal, expansion signals, payment health |

Adjust weights by business model (self-serve vs enterprise).

### Step 2 — Score Each Dimension

| Score | Level | Criteria |
|-------|-------|----------|
| 5 | Healthy | Strong usage, positive sentiment, expanding |
| 4 | Good | Regular usage, neutral/positive feedback |
| 3 | Moderate | Declining trends, some concerns |
| 2 | At-Risk | Significant decline, negative signals |
| 1 | Critical | Minimal engagement, escalations, churn signals |

### Step 3 — Calculate Health Score

`Health Score = Σ (Dimension Score × Weight)`

### Step 4 — Segment Customers

| Health Score | Segment | Action |
|-------------|---------|--------|
| 4.0–5.0 | 🟢 Healthy | Expansion play, referral ask |
| 2.5–3.9 | 🟡 At-Risk | Proactive outreach, value reinforcement |
| 1.0–2.4 | 🔴 Red | Executive sponsor call, save plan |

### Step 5 — Intervention Playbooks

**🟢 Healthy:**
- Identify expansion opportunities (upsell, cross-sell)
- Request referral or case study
- Invite to advisory board or beta programs

**🟡 At-Risk:**
- Schedule CSM check-in within 48 hours
- Re-onboard on underused features
- Share success stories from similar companies
- Offer training session or office hours

**🔴 Red:**
- Executive sponsor call within 24 hours
- Create 30-day save plan with specific milestones
- Offer concessions if justified (credit, extended trial)
- Prepare for graceful offboarding if save fails

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Customer list | Yes | Account names with contract data |
| Usage data | Yes | Login counts, feature adoption metrics |
| Support data | Recommended | Ticket count, CSAT, escalations |
| NPS/sentiment data | Recommended | Scores or qualitative feedback |
| Contract details | Recommended | Renewal dates, ARR, payment status |

## Output

```markdown
## Churn Risk Report — [Period]

### Portfolio Health Summary

| Segment | Count | % of Base | ARR at Risk |
|---------|-------|-----------|-------------|
| 🟢 Healthy | 120 | 60% | — |
| 🟡 At-Risk | 55 | 27.5% | $820K |
| 🔴 Red | 25 | 12.5% | $450K |

### Top 10 At-Risk Accounts

| Account | Health Score | Top Risk Factor | ARR | Renewal | CSM Action |
|---------|-------------|-----------------|-----|---------|------------|
| Acme Corp | 2.8 | Usage ↓ 40% | $120K | 60 days | Re-onboarding |
| Beta Inc | 2.5 | NPS dropped to 4 | $85K | 90 days | Exec call |
| [etc.] | | | | | |

### Intervention Queue

| Priority | Account | Action | Owner | Deadline |
|----------|---------|--------|-------|----------|
| 1 | Acme Corp | Schedule exec sponsor call | VP CS | This week |
| 2 | Beta Inc | Feature re-onboarding | CSM | Next week |

### Churn Risk Drivers (Pareto)
1. Usage decline (40% of at-risk accounts)
2. Support escalation unresolved (25%)
3. Champion left the company (20%)
4. Contract/pricing dissatisfaction (15%)
```

## Definition of Done

- [ ] Health dimensions defined with weights
- [ ] Each customer scored per dimension
- [ ] Weighted health score calculated
- [ ] Customers segmented into 🟢/🟡/🔴
- [ ] Intervention playbook per segment
- [ ] Top at-risk accounts listed with actions and owners
- [ ] Churn risk drivers identified (Pareto)

## Examples

### Prompt

```text
We have 200 B2B customers. Churn rate spiked from 5% to 8% this quarter.
Here is our customer data: [paste usage, support, NPS data]
Build a churn risk model with health scores, segment our portfolio,
and create intervention playbooks for at-risk accounts.
```
