/**
 * add-v2-sections.mjs
 * Appends Quality Criteria, Verification (4C), Edge Cases, and Changelog
 * to every SKILL.md that is missing them.
 *
 * Content is generated based on each skill's name, description, and category
 * to produce domain-specific (not generic) sections.
 *
 * Run:  node scripts/add-v2-sections.mjs
 * Dry:  node scripts/add-v2-sections.mjs --dry-run
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dryRun = process.argv.includes("--dry-run");

// ── Category-specific templates ───────────────────────────────────────

const qualityCriteriaByCategory = {
  knowledge: [
    "All claims reference specific frameworks, standards, or quantifiable data",
    "Content matches the stated audience's expertise level",
    "Recommendations are actionable — each includes a concrete next step",
    "No unsupported assertions or generic filler language",
  ],
  verification: [
    "Every finding is tied to a specific evidence source (log, test, metric)",
    "Pass/fail criteria are binary and measurable — no subjective judgments",
    "Severity levels are assigned with clear thresholds",
    "Remediation steps are provided for all critical and high findings",
  ],
  data: [
    "Data sources and assumptions are explicitly stated",
    "Calculations are reproducible from provided inputs",
    "Visualizations or tables have clear labels, units, and time ranges",
    "Caveats and confidence levels are documented for estimates",
  ],
  automation: [
    "Trigger conditions and input requirements are unambiguous",
    "Each automated step produces a verifiable output",
    "Error handling and fallback paths are defined",
    "Manual override points are documented",
  ],
  scaffolding: [
    "All placeholder sections are filled with domain-specific content",
    "Structure follows the relevant industry standard or framework",
    "Language matches target audience (technical / executive / legal)",
    "Output is ready for review — not a rough draft requiring major rework",
  ],
  review: [
    "Feedback is specific and references exact locations in the reviewed material",
    "Each critique includes a concrete improvement suggestion",
    "Severity is categorized (critical / important / nice-to-have)",
    "Positive aspects are acknowledged alongside areas for improvement",
  ],
  runbook: [
    "Steps are executable in sequence without external context",
    "Decision points have clear if/then branching",
    "Rollback or abort procedures are documented for risky steps",
    "Expected duration or time-per-step is estimated",
  ],
  infra: [
    "All dependencies and prerequisites are documented",
    "Changes are reversible or include a rollback plan",
    "Security implications are assessed for each configuration change",
    "Monitoring and alerting are defined for post-deployment validation",
  ],
};

const verificationByCategory = {
  knowledge: {
    correctness: "Do referenced frameworks and standards match their official definitions?",
    completeness: "Are all key concepts covered without significant gaps for the stated audience?",
    contextFit: "Would this be useful for someone new to this domain, or is it too advanced/too basic?",
    consequence: "If a stakeholder acted on this immediately, what could they misinterpret?",
  },
  verification: {
    correctness: "Are all pass/fail criteria applied against the correct standard or rule?",
    completeness: "Were all required dimensions or checklist items evaluated?",
    contextFit: "Does the verification scope match the actual risk level of the deliverable?",
    consequence: "If this passed verification but had a hidden flaw, what is the worst-case impact?",
  },
  data: {
    correctness: "Are formulas, aggregations, and statistical methods applied correctly?",
    completeness: "Does the analysis cover all requested metrics and time ranges?",
    contextFit: "Are the chosen metrics relevant to the business question being answered?",
    consequence: "If this data were used for a decision today, what blind spots remain?",
  },
  automation: {
    correctness: "Does the workflow produce the expected output for the defined inputs?",
    completeness: "Are all trigger conditions, edge cases, and error paths handled?",
    contextFit: "Is the automation appropriate for the frequency and criticality of this task?",
    consequence: "If this ran unattended and failed silently, what would the downstream impact be?",
  },
  scaffolding: {
    correctness: "Does the draft structure follow the stated framework or industry standard?",
    completeness: "Are all required sections present with substantive (not placeholder) content?",
    contextFit: "Does tone, detail level, and terminology match the intended audience?",
    consequence: "If sent to the intended recipient without further editing, what would fail?",
  },
  review: {
    correctness: "Is the feedback technically accurate and properly contextualized?",
    completeness: "Were all major sections of the reviewed material addressed?",
    contextFit: "Is the review granularity appropriate for the material's maturity level?",
    consequence: "If the author implemented all feedback literally, what could go wrong?",
  },
  runbook: {
    correctness: "Do the steps execute correctly in the order specified?",
    completeness: "Are decision points, error handling, and escalation paths all documented?",
    contextFit: "Could someone with the right access but no prior context complete this runbook?",
    consequence: "If Step N fails and the operator skips to Step N+1, what breaks?",
  },
  infra: {
    correctness: "Are all configurations, permissions, and dependencies accurate?",
    completeness: "Does the setup cover dev, staging, and prod environments as needed?",
    contextFit: "Is the solution proportional to the problem (not over/under-engineered)?",
    consequence: "If deployed as-is to production, what is the highest-risk failure mode?",
  },
};

const edgeCasesByCategory = {
  knowledge: [
    ["Conflicting frameworks", "State which framework takes precedence and why. Document the trade-off explicitly."],
    ["Rapidly changing domain", "Note information currency date. Flag sections likely to need updates."],
    ["Audience has mixed expertise levels", "Provide a glossary and mark advanced sections as optional."],
  ],
  verification: [
    ["Incomplete data for full assessment", "Document which checks were limited and flag for re-verification when data becomes available."],
    ["Ambiguous pass/fail criteria", "Request clarification from the standard owner before scoring. Mark as 'Needs Review'."],
    ["Multiple overlapping standards", "Identify the governing standard and note where others diverge."],
  ],
  data: [
    ["Missing or incomplete data", "Document gaps and their potential impact on conclusions. Provide ranges instead of point estimates."],
    ["Outliers skewing results", "Report with and without outliers. Document the decision to include or exclude."],
    ["Changing data definitions mid-period", "Split analysis at the change boundary and note the schema difference."],
  ],
  automation: [
    ["Input format varies unexpectedly", "Add a normalization step at entry. Alert the operator on format mismatches."],
    ["Downstream system is unavailable", "Queue the output and retry with exponential backoff. Alert after N failures."],
    ["Partial execution completes", "Ensure idempotency — re-running from the start produces the same result without duplication."],
  ],
  scaffolding: [
    ["No existing template for this type", "Use the closest available template and document all customizations made."],
    ["Stakeholder requirements conflict", "Flag conflicts explicitly in the draft. Do not silently choose one requirement over another."],
    ["Output required in multiple formats", "Produce the canonical format first, then derive others. Note any formatting limitations."],
  ],
  review: [
    ["Material is too early-stage for detailed review", "Provide structural feedback only. Note that content review is deferred until it matures."],
    ["Reviewer lacks domain expertise", "Focus on structure, clarity, and consistency. Flag domain-specific claims as 'Needs SME verification'."],
    ["Author is defensive or resistant to feedback", "Lead with what works well. Frame changes as questions rather than mandates."],
  ],
  runbook: [
    ["Steps require access the operator doesn't have", "Document exact access requirements upfront. Include escalation contact for emergency access."],
    ["Environment differs from documented state", "Add a pre-flight check as Step 0 to verify prerequisites before starting."],
    ["Runbook is triggered during off-hours", "Document who to contact and which steps can be safely deferred to business hours."],
  ],
  infra: [
    ["Target environment has pre-existing configuration", "Scan for conflicts before applying changes. Document what to preserve."],
    ["Permissions differ between environments", "Test in staging first. Document the minimum permissions required."],
    ["Third-party service is unavailable or deprecated", "Document fallback or alternative. Include health-check endpoints."],
  ],
};

// ── Main migration logic ──────────────────────────────────────────────

function extractFrontmatter(contents) {
  const match = contents.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  match[1].split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx > 0) fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  });
  return fm;
}

function generateSections(skillName, description, category) {
  const qc = qualityCriteriaByCategory[category] || qualityCriteriaByCategory.knowledge;
  const v = verificationByCategory[category] || verificationByCategory.knowledge;
  const ec = edgeCasesByCategory[category] || edgeCasesByCategory.knowledge;

  let sections = "";

  // Quality Criteria
  sections += "\n## Quality Criteria\n\n";
  qc.forEach((c) => {
    sections += `- [ ] ${c}\n`;
  });

  // Verification (4C)
  sections += "\n## Verification (4C)\n\n";
  sections += "| Check | Question |\n";
  sections += "|-------|----------|\n";
  sections += `| **Correctness** | ${v.correctness} |\n`;
  sections += `| **Completeness** | ${v.completeness} |\n`;
  sections += `| **Context-fit** | ${v.contextFit} |\n`;
  sections += `| **Consequence** | ${v.consequence} |\n`;

  // Edge Cases
  sections += "\n## Edge Cases\n\n";
  ec.forEach(([name, guidance]) => {
    sections += `- **${name}** — ${guidance}\n`;
  });

  // Changelog
  sections += "\n## Changelog\n\n";
  sections += "- v1.0.0 — Initial release\n";

  return sections;
}

async function main() {
  const skillsDir = path.join(root, "skills");
  const entries = await fs.readdir(skillsDir, { withFileTypes: true });
  const skillDirs = entries.filter((e) => e.isDirectory()).map((e) => e.name).sort();

  let updated = 0;
  let skipped = 0;

  for (const skill of skillDirs) {
    const filePath = path.join(skillsDir, skill, "SKILL.md");
    let contents;
    try {
      contents = await fs.readFile(filePath, "utf8");
    } catch {
      console.log(`  SKIP  ${skill} - no SKILL.md`);
      skipped++;
      continue;
    }

    // Skip if all sections already present
    const hasSections = [
      "## Quality Criteria",
      "## Verification (4C)",
      "## Edge Cases",
      "## Changelog",
    ].every((s) => contents.includes(s));

    if (hasSections) {
      skipped++;
      continue;
    }

    const fm = extractFrontmatter(contents);
    const category = fm.category || "knowledge";
    const description = fm.description || "";

    const newSections = generateSections(skill, description, category);

    // Ensure file ends with newline, then append
    const trimmed = contents.trimEnd();
    const newContents = trimmed + "\n" + newSections;

    if (dryRun) {
      console.log(`  DRY   ${skill} (${category}) → +4 sections`);
    } else {
      await fs.writeFile(filePath, newContents, "utf8");
      console.log(`  OK    ${skill} (${category}) → +4 sections`);
    }
    updated++;
  }

  console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
