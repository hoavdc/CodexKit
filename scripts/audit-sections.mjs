/**
 * audit-sections.mjs
 * Reports which v2 sections are missing from each skill SKILL.md
 * Run: node scripts/audit-sections.mjs
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");

const v2Sections = [
  "## Quality Criteria",
  "## Verification (4C)",
  "## Edge Cases",
  "## Changelog",
];

async function audit() {
  const entries = await fs.readdir(skillsDir, { withFileTypes: true });
  const skillDirs = entries.filter((e) => e.isDirectory()).map((e) => e.name).sort();

  const counts = {};
  v2Sections.forEach((s) => (counts[s] = 0));

  let needsUpdate = 0;

  for (const skill of skillDirs) {
    const filePath = path.join(skillsDir, skill, "SKILL.md");
    const contents = await fs.readFile(filePath, "utf8");
    const missing = v2Sections.filter((sec) => !contents.includes(sec));

    if (missing.length > 0) {
      needsUpdate++;
      missing.forEach((m) => counts[m]++);
    }
  }

  console.log(`Total skills: ${skillDirs.length}`);
  console.log(`Skills needing v2 sections: ${needsUpdate}`);
  console.log(`\nMissing counts:`);
  for (const [sec, count] of Object.entries(counts)) {
    console.log(`  ${sec}: ${count} skills missing`);
  }
}

audit().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
