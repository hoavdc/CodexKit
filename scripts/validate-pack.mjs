import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredDirectories = [
  "skills",
  "playbooks",
  "automations",
  "mcp",
  "templates",
  "web",
];

async function ensureDirectory(dir) {
  const fullPath = path.join(root, dir);
  const stat = await fs.stat(fullPath).catch(() => null);

  if (!stat || !stat.isDirectory()) {
    throw new Error(`Missing required directory: ${dir}`);
  }
}

async function listDirectories(dir) {
  const entries = await fs.readdir(path.join(root, dir), { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}

async function listMarkdownFiles(dir) {
  const entries = await fs.readdir(path.join(root, dir), { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name);
}

async function validateSkills() {
  const skillDirs = await listDirectories("skills");

  if (skillDirs.length === 0) {
    throw new Error("No skill directories found.");
  }

  for (const skill of skillDirs) {
    const skillFile = path.join(root, "skills", skill, "SKILL.md");
    const contents = await fs.readFile(skillFile, "utf8").catch(() => null);

    if (!contents) {
      throw new Error(`Missing SKILL.md for ${skill}`);
    }

    if (!contents.includes("description:")) {
      throw new Error(`Skill ${skill} is missing a description in frontmatter.`);
    }
  }

  return skillDirs.length;
}

async function validateMarkdownDirectory(dir) {
  const files = await listMarkdownFiles(dir);

  if (files.length === 0) {
    throw new Error(`No markdown files found in ${dir}`);
  }

  for (const file of files) {
    const contents = await fs.readFile(path.join(root, dir, file), "utf8");

    if (!contents.trim().startsWith("#")) {
      throw new Error(`${dir}/${file} should start with a level-1 heading.`);
    }
  }

  return files.length;
}

async function main() {
  for (const dir of requiredDirectories) {
    await ensureDirectory(dir);
  }

  const skillCount = await validateSkills();
  const playbookCount = await validateMarkdownDirectory("playbooks");
  const automationCount = await validateMarkdownDirectory("automations");
  const mcpGuideCount = await validateMarkdownDirectory("mcp");
  const templateCount = await validateMarkdownDirectory("templates");

  console.log("CodexKit pack validation passed.");
  console.log(`Skills: ${skillCount}`);
  console.log(`Playbooks: ${playbookCount}`);
  console.log(`Automation recipes: ${automationCount}`);
  console.log(`MCP guides: ${mcpGuideCount}`);
  console.log(`Templates: ${templateCount}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
