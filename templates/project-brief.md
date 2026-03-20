# Project Brief

> **How to use:** Fill in before starting any new project or initiative. Pair with `codexkit-execution-planner` skill to auto-generate implementation plans. Pair with `codexkit-project-governance-pilot` for governance setup.

## Objective

<!-- What are we building / delivering / changing? One to three sentences max. -->
<!-- ✅ Good: "Build a self-service password reset flow to reduce IT tickets by 40%" -->
<!-- ❌ Bad: "Improve the system" -->

## Users

<!-- Who benefits from this? Be specific about the primary and secondary audience. -->
<!-- e.g. Primary: Customer support agents. Secondary: End customers via faster resolution. -->

## Constraints

<!-- Hard limits on time, budget, technology, or team. These are non-negotiable. -->

- **Timeline:**  <!-- e.g. Must ship before Q2 close (Jun 30) -->
- **Budget:**  <!-- e.g. $50K approved, no additional headcount -->
- **Tech:**  <!-- e.g. Must integrate with existing SAP system -->
- **Team:**  <!-- e.g. 2 engineers, 1 designer, part-time PM -->

## Non-goals

<!-- What are we explicitly NOT doing? This prevents scope creep. -->
<!-- e.g. "Not building a mobile app in this phase" -->

- 

## First Delivery Slice

<!-- What is the smallest useful thing we can ship first? Think MVP. -->
<!-- e.g. "Password reset via email link — no SMS, no SSO, no admin dashboard" -->

## Acceptance Criteria

<!-- How do we know we're done? Be measurable. -->
<!-- e.g. "User can reset password within 2 minutes without contacting IT" -->

- [ ] 
- [ ] 
- [ ] 

---

<details>
<summary>📋 Worked Example</summary>

## Objective
Build a self-service password reset flow for the internal portal to reduce IT support tickets by 40%.

## Users
- **Primary:** 2,000 office employees who currently call IT for password resets
- **Secondary:** IT helpdesk team (freed from repetitive L1 tickets)

## Constraints
- **Timeline:** Ship to pilot group by April 15, full rollout by May 1
- **Budget:** $15K for tooling, no new headcount
- **Tech:** Must use Azure AD; cannot change SSO provider
- **Team:** 1 backend engineer, 1 frontend developer, part-time PM

## Non-goals
- No mobile app in this phase
- No SMS-based verification (email-only for v1)
- No admin self-service dashboard

## First Delivery Slice
Email-based password reset flow: user enters email → receives reset link → sets new password → auto-login.

## Acceptance Criteria
- [ ] User resets password in under 2 minutes without IT contact
- [ ] Reset link expires after 15 minutes
- [ ] Failed attempts are logged and alerted after 5 tries
- [ ] IT ticket volume for password resets drops ≥ 30% in pilot

</details>
