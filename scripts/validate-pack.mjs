import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredDirectories = [
  "skills",
  "playbooks",
  "automations",
  "mcp",
  "templates",
  "workspaces",
  "web",
];

const requiredSkillFrontmatterFields = ["name", "description"];

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
  let metadataCount = 0;

  if (skillDirs.length === 0) {
    throw new Error("No skill directories found.");
  }

  for (const skill of skillDirs) {
    const skillDir = path.join(root, "skills", skill);
    const skillFile = path.join(root, "skills", skill, "SKILL.md");
    const contents = await fs.readFile(skillFile, "utf8").catch(() => null);

    if (!contents) {
      throw new Error(`Missing SKILL.md for ${skill}`);
    }

    if (!contents.trimStart().startsWith("---")) {
      throw new Error(`Skill ${skill} must start with frontmatter.`);
    }

    for (const field of requiredSkillFrontmatterFields) {
      if (!new RegExp(`^${field}:\\s*.+$`, "m").test(contents)) {
        throw new Error(`Skill ${skill} is missing a ${field} field in frontmatter.`);
      }
    }

    const agentsDir = path.join(skillDir, "agents");
    const agentsStat = await fs.stat(agentsDir).catch(() => null);

    if (agentsStat?.isDirectory()) {
      const metadataFile = path.join(agentsDir, "openai.yaml");
      const metadata = await fs.readFile(metadataFile, "utf8").catch(() => null);

      if (!metadata) {
        throw new Error(`Skill ${skill} has an agents directory but is missing agents/openai.yaml.`);
      }

      if (!metadata.includes("interface:")) {
        throw new Error(`Skill ${skill} metadata should define an interface block.`);
      }

      metadataCount += 1;
    }
  }

  return { skillCount: skillDirs.length, metadataCount };
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

async function validateWorkspaces() {
  const workspaceRoot = path.join(root, "workspaces");
  const entries = await fs.readdir(workspaceRoot, { withFileTypes: true });
  const rootReadme = await fs.readFile(path.join(workspaceRoot, "README.md"), "utf8").catch(() => null);

  if (!rootReadme || !rootReadme.trim().startsWith("#")) {
    throw new Error("workspaces/README.md should exist and start with a level-1 heading.");
  }

  const workspaceDirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

  if (workspaceDirs.length === 0) {
    throw new Error("No starter workspace directories found.");
  }

  for (const workspace of workspaceDirs) {
    const workspaceDir = path.join(workspaceRoot, workspace);
    const markdownFiles = (await fs.readdir(workspaceDir, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => entry.name);

    if (!markdownFiles.includes("README.md")) {
      throw new Error(`Workspace ${workspace} is missing README.md.`);
    }

    if (markdownFiles.length < 3) {
      throw new Error(`Workspace ${workspace} should include at least 3 markdown files.`);
    }

    for (const file of markdownFiles) {
      const contents = await fs.readFile(path.join(workspaceDir, file), "utf8");

      if (!contents.trim().startsWith("#")) {
        throw new Error(`workspaces/${workspace}/${file} should start with a level-1 heading.`);
      }
    }
  }

  return workspaceDirs.length;
}

async function main() {
  for (const dir of requiredDirectories) {
    await ensureDirectory(dir);
  }

  const { skillCount, metadataCount } = await validateSkills();
  const playbookCount = await validateMarkdownDirectory("playbooks");
  const automationCount = await validateMarkdownDirectory("automations");
  const mcpGuideCount = await validateMarkdownDirectory("mcp");
  const templateCount = await validateMarkdownDirectory("templates");
  const workspaceCount = await validateWorkspaces();

  console.log("CodexKit pack validation passed.");
  console.log(`Skills: ${skillCount}`);
  console.log(`Skill metadata files: ${metadataCount}`);
  console.log(`Playbooks: ${playbookCount}`);
  console.log(`Automation recipes: ${automationCount}`);
  console.log(`MCP guides: ${mcpGuideCount}`);
  console.log(`Templates: ${templateCount}`);
  console.log(`Starter workspaces: ${workspaceCount}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
