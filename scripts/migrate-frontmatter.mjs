/**
 * migrate-frontmatter.mjs
 * Adds `version: 1.0.0` and `category: <value>` to every skill SKILL.md
 * that is missing them. Does NOT touch skills that already have the fields.
 *
 * Run:  node scripts/migrate-frontmatter.mjs
 * Dry:  node scripts/migrate-frontmatter.mjs --dry-run
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dryRun = process.argv.includes("--dry-run");

// Category mapping for every skill
const categoryMap = {
  // --- knowledge ---
  "codexkit-architecture-decision-writer": "knowledge",
  "codexkit-brand-positioning-canvas": "knowledge",
  "codexkit-business-case-writer": "knowledge",
  "codexkit-competitor-intelligence": "knowledge",
  "codexkit-customer-journey-mapper": "knowledge",
  "codexkit-data-story-builder": "knowledge",
  "codexkit-decision-log": "knowledge",
  "codexkit-executive-brief-writer": "knowledge",
  "codexkit-finance-variance-story": "knowledge",
  "codexkit-financial-statement-analyzer": "knowledge",
  "codexkit-go-to-market-planner": "knowledge",
  "codexkit-legal-memo-writer": "knowledge",
  "codexkit-presentation-outliner": "knowledge",
  "codexkit-report-summarizer": "knowledge",
  "codexkit-strategic-analysis-porter": "knowledge",
  "codexkit-strategy-scorecard-builder": "knowledge",

  // --- verification ---
  "codexkit-a-b-test-planner": "verification",
  "codexkit-audit-readiness-checker": "verification",
  "codexkit-compliance-gap-review": "verification",
  "codexkit-contract-risk-review": "verification",
  "codexkit-data-quality-auditor": "verification",
  "codexkit-high-signal-review": "verification",
  "codexkit-legal-due-diligence": "verification",
  "codexkit-test-hardening": "verification",
  "codexkit-bug-hunt": "verification",

  // --- data ---
  "codexkit-budget-variance-explainer": "data",
  "codexkit-churn-risk-analyzer": "data",
  "codexkit-cx-qbr-preparer": "data",
  "codexkit-dashboard-kpi-designer": "data",
  "codexkit-fpa-rolling-forecast": "data",
  "codexkit-fpa-scenario-modeling": "data",
  "codexkit-kanban-flow-analyzer": "data",
  "codexkit-ops-kpi-packager": "data",
  "codexkit-pmbok8-earned-value": "data",
  "codexkit-portfolio-risk-radar": "data",
  "codexkit-sql-query-builder": "data",
  "codexkit-survey-analyzer": "data",
  "codexkit-vendor-comparison-matrix": "data",
  "codexkit-supplier-evaluation": "data",

  // --- automation ---
  "codexkit-automation-designer": "automation",
  "codexkit-content-calendar-assembler": "automation",
  "codexkit-email-composer": "automation",
  "codexkit-follow-up-draft-builder": "automation",
  "codexkit-inbox-priority-triage": "automation",
  "codexkit-meeting-action-router": "automation",
  "codexkit-status-update-packager": "automation",
  "codexkit-contract-intake-router": "automation",

  // --- scaffolding ---
  "codexkit-campaign-brief-writer": "scaffolding",
  "codexkit-change-management-plan": "scaffolding",
  "codexkit-contract-drafter": "scaffolding",
  "codexkit-crisis-communication": "scaffolding",
  "codexkit-dmaic-improvement-charter": "scaffolding",
  "codexkit-execution-planner": "scaffolding",
  "codexkit-interview-guide-builder": "scaffolding",
  "codexkit-job-description-writer": "scaffolding",
  "codexkit-okr-writer": "scaffolding",
  "codexkit-onboarding-plan-creator": "scaffolding",
  "codexkit-policy-document-writer": "scaffolding",
  "codexkit-procurement-rfp-writer": "scaffolding",
  "codexkit-training-needs-analyzer": "scaffolding",
  "codexkit-workshop-facilitator": "scaffolding",
  "codexkit-skill-template": "scaffolding",

  // --- review ---
  "codexkit-api-design-reviewer": "review",
  "codexkit-backlog-refiner": "review",
  "codexkit-docs-shipper": "review",
  "codexkit-performance-review-writer": "review",
  "codexkit-scrum-retrospective": "review",
  "codexkit-talent-review-calibrator": "review",

  // --- runbook ---
  "codexkit-finance-close-coordinator": "runbook",
  "codexkit-hiring-ops-coordinator": "runbook",
  "codexkit-incident-postmortem": "runbook",
  "codexkit-mcp-onboarding": "runbook",
  "codexkit-process-mapper": "runbook",
  "codexkit-repo-onboarding": "runbook",
  "codexkit-root-cause-analyzer": "runbook",
  "codexkit-safe-pi-planning": "runbook",
  "codexkit-sandop-facilitator": "runbook",
  "codexkit-sprint-planning-assistant": "runbook",

  // --- infra ---
  "codexkit-cloud-delegation": "infra",
  "codexkit-project-governance-pilot": "infra",
  "codexkit-pmbok8-stakeholder-register": "infra",
  "codexkit-risk-register": "infra",
};

async function migrate() {
  const skillsDir = path.join(root, "skills");
  const entries = await fs.readdir(skillsDir, { withFileTypes: true });
  const skillDirs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  let updated = 0;
  let skipped = 0;
  const unmapped = [];

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

    if (!contents.trimStart().startsWith("---")) {
      console.log(`  SKIP  ${skill} - no frontmatter`);
      skipped++;
      continue;
    }

    const hasVersion = /^version:\s*.+$/m.test(contents);
    const hasCategory = /^category:\s*.+$/m.test(contents);

    if (hasVersion && hasCategory) {
      skipped++;
      continue;
    }

    // Find the end of frontmatter (second ---)
    const fmEnd = contents.indexOf("---", 3);
    if (fmEnd === -1) {
      console.log(`  SKIP  ${skill} - malformed frontmatter`);
      skipped++;
      continue;
    }

    const category = categoryMap[skill];
    if (!hasCategory && !category) {
      unmapped.push(skill);
      continue;
    }

    // Build insertion lines
    const insertions = [];
    if (!hasVersion) insertions.push("version: 1.0.0");
    if (!hasCategory) insertions.push(`category: ${category}`);

    const before = contents.slice(0, fmEnd);
    const after = contents.slice(fmEnd);
    const newContents = before + insertions.join("\n") + "\n" + after;

    if (dryRun) {
      console.log(`  DRY   ${skill} → +${insertions.join(", +")}`);
    } else {
      await fs.writeFile(filePath, newContents, "utf8");
      console.log(`  OK    ${skill} → +${insertions.join(", +")}`);
    }
    updated++;
  }

  console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
  if (unmapped.length > 0) {
    console.log(`\n⚠️  Unmapped skills (need category):`);
    for (const s of unmapped) console.log(`   - ${s}`);
  }
}

migrate().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
