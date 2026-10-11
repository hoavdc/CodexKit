import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const workRoot = path.join(root, "dist", "work");
const groups = JSON.parse(await fs.readFile(path.join(root, "tests", "skill-routing-evals.json"), "utf8"));
const marketplace = JSON.parse(await fs.readFile(path.join(root, ".agents", "plugins", "marketplace.json"), "utf8"));
const summary = JSON.parse(await fs.readFile(path.join(workRoot, "build-report.json"), "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function zipEntryNames(buffer) {
  let end = -1;
  for (let i = buffer.length - 22; i >= Math.max(0, buffer.length - 65_557); i -= 1) {
    if (buffer.readUInt32LE(i) === 0x06054b50) { end = i; break; }
  }
  assert(end >= 0, "ZIP end record missing.");
  const count = buffer.readUInt16LE(end + 10);
  let cursor = buffer.readUInt32LE(end + 16);
  const entries = [];
  for (let i = 0; i < count; i += 1) {
    assert(buffer.readUInt32LE(cursor) === 0x02014b50, "ZIP central directory is malformed.");
    const nameLength = buffer.readUInt16LE(cursor + 28);
    const extraLength = buffer.readUInt16LE(cursor + 30);
    const commentLength = buffer.readUInt16LE(cursor + 32);
    entries.push(buffer.subarray(cursor + 46, cursor + 46 + nameLength).toString("utf8"));
    cursor += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

function groupForSkill(plugins, skillId) {
  const entry = plugins.find((plugin) => plugin.skillIds.includes(skillId));
  assert(entry, `Skill ${skillId} is missing from the build report.`);
  return groups.groups.find((group) => group.slug === marketplace.plugins.find((plugin) => plugin.name === entry.name)?.source.path.split("/").at(-1))?.slug;
}

const evalSlugs = groups.groups.map((group) => group.slug);
assert(new Set(evalSlugs).size === evalSlugs.length, "Routing eval group slugs must be unique.");
assert(groups.groups.length === marketplace.plugins.length, "Each plugin group must have routing evals.");
assert(summary.pluginCount === marketplace.plugins.length, "Marketplace and build report plugin counts differ.");
assert(summary.skillCount > 0, "No source skills were exported.");

for (const group of groups.groups) {
  assert(group.positive.length > 0 && group.negative.length > 0, `${group.slug} needs positive and negative prompts.`);
  for (const prompt of [...group.positive, ...group.negative]) {
    assert(typeof prompt === "string" && prompt.trim().length >= 20, `${group.slug} has an empty or too-short prompt.`);
  }
  const plugin = marketplace.plugins.find((item) => item.source.path.endsWith(`/${group.slug}`));
  assert(plugin, `Marketplace is missing ${group.slug}.`);
  const pluginDir = path.join(root, "dist", "work", "plugins", group.slug);
  const manifest = JSON.parse(await fs.readFile(path.join(pluginDir, "plugin.json"), "utf8"));
  assert(manifest.name === plugin.name, `Plugin name mismatch for ${group.slug}.`);
  assert((await fs.stat(path.join(pluginDir, "skills"))).isDirectory(), `Plugin ${group.slug} has no skills directory.`);
  const zipPath = path.join(workRoot, "plugin-zips", `${manifest.name}.zip`);
  const names = zipEntryNames(await fs.readFile(zipPath));
  assert(names.includes("plugin.json"), `Plugin ZIP missing plugin.json for ${group.slug}.`);
  assert(names.some((name) => name.startsWith("skills/") && name.endsWith("/SKILL.md")), `Plugin ZIP has no skill for ${group.slug}.`);
}

for (const skillId of summary.plugins.flatMap((entry) => entry.skillIds)) {
  const pluginGroup = groupForSkill(summary.plugins, skillId);
  const exportedSkill = await fs.readFile(path.join(root, "dist", "work", "plugins", pluginGroup, "skills", skillId, "SKILL.md"), "utf8");
  const frontmatter = exportedSkill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  assert(Boolean(frontmatter), "Exported skill frontmatter is malformed for " + skillId + ".");
  assert(/^name:\s*\S+/m.test(frontmatter[1]) && /^description:\s*\S+/m.test(frontmatter[1]), "Exported skill requires name and description for " + skillId + ".");
  assert(!/^version:|^category:/m.test(frontmatter[1]), "CodexKit-only metadata was not normalized for " + skillId + ".");
  assert(frontmatter[1].includes("metadata:\n  version:") && frontmatter[1].includes("  category:"), "Standard metadata block missing for " + skillId + ".");
  const zipPath = path.join(workRoot, "skill-zips", `${skillId}.zip`);
  const names = zipEntryNames(await fs.readFile(zipPath));
  assert(names.includes(`${skillId}/SKILL.md`), `Missing single-skill ZIP for ${skillId}.`);
}

assert(groups.purpose.includes("model behavior is not"), "Routing evaluation must disclose that it does not measure model behavior.");
console.log(`Work plugin tests passed: ${marketplace.plugins.length} plugin groups, ${summary.skillCount} skills, and ${groups.groups.length} routing fixtures.`);
