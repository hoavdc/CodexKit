# Write Decision Memo

## Goal

Turn a messy business choice into a concise memo with recommendation, tradeoffs, risks, and decisions needed.

## Use when

- stakeholders need one recommendation, not a brainstorm
- multiple options exist and the team is stalling
- leadership needs a compact pre-read before a meeting

## Prompt

```text
Act as a business analyst writing a decision memo for senior leadership.

Situation: the context below describes a decision that needs to be made.

Required output:
1. decision statement (one sentence: what must be decided)
2. context and urgency (why now, max 3 sentences)
3. options considered (table: option, pros, cons, estimated cost/effort)
4. evaluation criteria (what matters most for this decision)
5. recommendation (one option, with 2–3 reasons why)
6. risks and mitigations (for the recommended option)
7. decision ask (who approves, by when)

Rules:
- keep the total memo under 1 page
- lead with the recommendation, not the analysis
- be explicit about what you are NOT recommending and why

Context:
[paste the situation, options, and any relevant data]
```

## Example

<details>
<summary>📋 Real-world prompt example</summary>

```text
Act as a business analyst writing a decision memo for senior leadership.

Situation: the context below describes a decision that needs to be made.

Required output:
1. decision statement
2. context and urgency
3. options considered (table)
4. evaluation criteria
5. recommendation with reasons
6. risks and mitigations
7. decision ask

Rules:
- keep the total memo under 1 page
- lead with the recommendation
- be explicit about what you are NOT recommending and why

Context:
We need to choose a cloud hosting provider for our new AI inference service.
Current setup: all on AWS (us-east-1). The new service needs GPU instances.

Options being discussed:
- Option A: Stay on AWS, use p5.48xlarge instances ($98/hr on-demand)
- Option B: Move inference to GCP, use A3 VMs ($65/hr, but team has no GCP experience)
- Option C: Use a managed inference platform like Replicate or Modal ($0.0025/request, variable)

Context: we process ~50K requests/day now, expecting 200K/day by Q4.
Budget: $30K/month approved for inference compute.
Timeline: must be production-ready by May 15.
Team: 2 ML engineers, 1 DevOps — all AWS-experienced.
```

</details>
