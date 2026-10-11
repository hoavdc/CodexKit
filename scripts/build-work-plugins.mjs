import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const groupsFile = path.join(root, "config", "chatgpt-work-groups.json");
const outRoot = path.join(root, "dist", "work");
const packageJson = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8"));
const groupConfig = JSON.parse(await fs.readFile(groupsFile, "utf8"));
const finder = await fs.readFile(path.join(root, "skill-finder.md"), "utf8");

function fail(message) {
  throw new Error(message);
}

function parseSkillFrontmatter(text, skillDirName) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) fail(`${skillDirName}/SKILL.md is missing a YAML frontmatter block.`);
  const lines = match[1].split(/\r?\n/);
  const values = new Map();
  for (const line of lines) {
    const field = line.match(/^([a-z][a-z0-9-]*):\s*(.*)$/);
    if (field) values.set(field[1], field[2]);
  }
  const name = unquote(values.get("name") ?? "");
  const description = unquote(values.get("description") ?? "");
  if (!name || !description) fail(`${skillDirName}/SKILL.md needs name and description fields.`);
  if (name !== skillDirName) fail(`${skillDirName}/SKILL.md name must match its directory (found ${name}).`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) || name.length > 64) fail(`${skillDirName} has a non-standard skill name.`);
  if (description.length > 1024 || /[<>]/.test(description)) fail(`${skillDirName} description must be <= 1024 characters and contain no angle brackets.`);
  if (values.has("metadata")) fail(`${skillDirName} already has a metadata field; merge custom fields before exporting.`);

  const custom = ["version", "category"].filter((key) => values.has(key));
  const allowed = new Set(["name", "description", "license", "compatibility", "allowed-tools", ...custom]);
  for (const key of values.keys()) if (!allowed.has(key)) fail(`${skillDirName} has unsupported top-level frontmatter field: ${key}`);

  const output = lines.filter((line) => !/^(version|category):\s*/.test(line));
  if (!values.has("license")) output.push("license: MIT");
  if (!values.has("compatibility")) output.push('compatibility: "ChatGPT Work and Codex plugin surfaces; availability varies by product and workspace."');
  if (custom.length) {
    output.push("metadata:");
    for (const key of custom) output.push(`  ${key}: ${JSON.stringify(unquote(values.get(key)))}`);
  }
  return { name, description, text: `---\n${output.join("\n")}\n---\n${text.slice(match[0].length)}` };
}

function unquote(value) {
  const v = value.trim();
  if (v.length >= 2 && ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))) return v.slice(1, -1);
  return v;
}

function getGroupedSkills(markdown) {
  const groups = new Map();
  let heading = null;
  for (const line of markdown.split(/\r?\n/)) {
    const h = line.match(/^## (.+)$/);
    if (h) heading = h[1];
    if (line.startsWith("|") && groupConfig[heading]) {
      const skillIds = [...line.matchAll(/`(codexkit-[a-z0-9-]+)`/g)].map((match) => match[1]);
      if (skillIds.length) {
        if (!groups.has(heading)) groups.set(heading, []);
        groups.get(heading).push(...skillIds);
      }
    }
  }
  return groups;
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date = new Date()) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const day = Math.max(1, date.getDate());
  const dosDate = ((Math.max(1980, date.getFullYear()) - 1980) << 9) | ((date.getMonth() + 1) << 5) | day;
  return { time, date: dosDate };
}

function makeZip(entries) {
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const { time, date } = dosDateTime();
  for (const entry of entries) {
    const name = Buffer.from(entry.name.replaceAll(path.sep, "/"), "utf8");
    const data = Buffer.isBuffer(entry.data) ? entry.data : Buffer.from(entry.data);
    const crc = crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(0, 8);
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(date, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    localParts.push(local, name, data);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(0, 10);
    central.writeUInt16LE(time, 12);
    central.writeUInt16LE(date, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(data.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt16LE(0, 30);
    central.writeUInt16LE(0, 32);
    central.writeUInt16LE(0, 34);
    central.writeUInt16LE(0, 36);
    central.writeUInt32LE(0, 38);
    central.writeUInt32LE(offset, 42);
    centralParts.push(central, name);
    offset += local.length + name.length + data.length;
  }
  const centralDirectory = Buffer.concat(centralParts);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(offset, 16);
  end.writeUInt16LE(0, 20);
  return Buffer.concat([...localParts, centralDirectory, end]);
}

async function listFiles(directory) {
  const found = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) found.push(...await listFiles(full));
    else if (entry.isFile()) found.push(full);
  }
  return found.sort();
}

async function copySkill(skillId, destination) {
  const source = path.join(root, "skills", skillId);
  const files = await listFiles(source);
  if (!files.some((file) => path.basename(file).toLowerCase() === "skill.md")) fail(`No SKILL.md found for ${skillId}.`);
  for (const file of files) {
    const relative = path.relative(source, file);
    const target = path.join(destination, relative);
    await fs.mkdir(path.dirname(target), { recursive: true });
    if (path.basename(file).toLowerCase() === "skill.md") {
      const parsed = parseSkillFrontmatter(await fs.readFile(file, "utf8"), skillId);
      await fs.writeFile(target, parsed.text, "utf8");
    } else {
      await fs.copyFile(file, target);
    }
  }
  return files;
}

function readZipEntryNames(buffer) {
  let endOffset = -1;
  for (let i = buffer.length - 22; i >= Math.max(0, buffer.length - 65557); i--) {
    if (buffer.readUInt32LE(i) === 0x06054b50) { endOffset = i; break; }
  }
  if (endOffset < 0) fail("Generated ZIP is missing its end record.");
  const count = buffer.readUInt16LE(endOffset + 10);
  let cursor = buffer.readUInt32LE(endOffset + 16);
  const names = [];
  for (let i = 0; i < count; i++) {
    if (buffer.readUInt32LE(cursor) !== 0x02014b50) fail("Generated ZIP has a malformed central directory.");
    const nameLength = buffer.readUInt16LE(cursor + 28);
    const extraLength = buffer.readUInt16LE(cursor + 30);
    const commentLength = buffer.readUInt16LE(cursor + 32);
    names.push(buffer.subarray(cursor + 46, cursor + 46 + nameLength).toString("utf8"));
    cursor += 46 + nameLength + extraLength + commentLength;
  }
  return names;
}

await fs.rm(outRoot, { recursive: true, force: true });
await fs.mkdir(outRoot, { recursive: true });
const sourceDirs = (await fs.readdir(path.join(root, "skills"), { withFileTypes: true }))
  .filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
const grouped = getGroupedSkills(finder);
const assigned = [...grouped.values()].flat();
const duplicates = assigned.filter((id, i) => assigned.indexOf(id) !== i);
if (duplicates.length) fail(`Skills appear in multiple Work groups: ${[...new Set(duplicates)].join(", ")}`);
const missing = sourceDirs.filter((id) => !assigned.includes(id));
const unknown = assigned.filter((id) => !sourceDirs.includes(id));
if (missing.length || unknown.length) fail(`Group mismatch. Missing: ${missing.join(", ") || "none"}; unknown: ${unknown.join(", ") || "none"}`);
for (const heading of Object.keys(groupConfig)) if (!(grouped.get(heading)?.length)) fail(`No skills found under ${heading} in skill-finder.md.`);

const pluginsRoot = path.join(outRoot, "plugins");
const pluginZipRoot = path.join(outRoot, "plugin-zips");
const skillZipRoot = path.join(outRoot, "skill-zips");
await Promise.all([fs.mkdir(pluginsRoot, { recursive: true }), fs.mkdir(pluginZipRoot, { recursive: true }), fs.mkdir(skillZipRoot, { recursive: true })]);
const marketplacePlugins = [];
const pluginSummary = [];

for (const [heading, config] of Object.entries(groupConfig)) {
  const skillIds = grouped.get(heading);
  const pluginDir = path.join(pluginsRoot, config.slug);
  const skillsRoot = path.join(pluginDir, "skills");
  await fs.mkdir(skillsRoot, { recursive: true });
  const pluginManifest = {
    "$schema": "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
    name: `codexkit-${config.slug}`,
    version: packageJson.version,
    description: config.description,
    author: { name: "Hoa Dang", url: "https://github.com/hoavdc" },
    homepage: "https://codexkit.pages.dev",
    repository: "https://github.com/hoavdc/CodexKit",
    license: "MIT",
    keywords: ["codexkit", ...config.keywords],
    extensions: {
      "com.openai": {
        interface: {
          displayName: config.displayName,
          shortDescription: config.shortDescription,
          longDescription: `${config.description} Includes ${skillIds.length} focused CodexKit skills. This skills-only plugin does not connect to external services.`
        }
      }
    }
  };
  await fs.writeFile(path.join(pluginDir, "plugin.json"), `${JSON.stringify(pluginManifest, null, 2)}\n`, "utf8");
  for (const skillId of skillIds) {
    const skillDestination = path.join(skillsRoot, skillId);
    const files = await copySkill(skillId, skillDestination);
    const zipEntries = [];
    for (const file of files) {
      const relative = path.relative(path.join(root, "skills", skillId), file).split(path.sep).join("/");
      const data = path.basename(file).toLowerCase() === "skill.md"
        ? await fs.readFile(path.join(skillDestination, relative))
        : await fs.readFile(file);
      zipEntries.push({ name: `${skillId}/${relative}`, data });
    }
    const skillZip = makeZip(zipEntries);
    const skillZipPath = path.join(skillZipRoot, `${skillId}.zip`);
    await fs.writeFile(skillZipPath, skillZip);
    const skillNames = readZipEntryNames(skillZip);
    if (!skillNames.includes(`${skillId}/SKILL.md`)) fail(`Skill ZIP missing manifest: ${skillId}`);
  }
  const pluginFiles = await listFiles(pluginDir);
  const pluginEntries = [];
  for (const file of pluginFiles) {
    pluginEntries.push({ name: path.relative(pluginDir, file).split(path.sep).join("/"), data: await fs.readFile(file) });
  }
  const pluginZip = makeZip(pluginEntries);
  const pluginZipPath = path.join(pluginZipRoot, `${pluginManifest.name}.zip`);
  await fs.writeFile(pluginZipPath, pluginZip);
  const pluginNames = readZipEntryNames(pluginZip);
  if (!pluginNames.includes("plugin.json") || !pluginNames.includes(`skills/${skillIds[0]}/SKILL.md`)) fail(`Plugin ZIP structure invalid: ${config.slug}`);

  marketplacePlugins.push({
    name: pluginManifest.name,
    source: { source: "local", path: `./dist/work/plugins/${config.slug}` },
    policy: { installation: "AVAILABLE", authentication: "ON_INSTALL" },
    category: "Productivity"
  });
  pluginSummary.push({ name: pluginManifest.name, group: heading, skillCount: skillIds.length, skillIds, zip: `plugin-zips/${pluginManifest.name}.zip` });
}

const marketplace = {
  name: "codexkit-work",
  interface: { displayName: "CodexKit Work" },
  plugins: marketplacePlugins
};
const marketplacePath = path.join(root, ".agents", "plugins", "marketplace.json");
await fs.mkdir(path.dirname(marketplacePath), { recursive: true });
await fs.writeFile(marketplacePath, `${JSON.stringify(marketplace, null, 2)}\n`, "utf8");
const report = {
  sourceVersion: packageJson.version,
  pluginCount: pluginSummary.length,
  skillCount: sourceDirs.length,
  generatedAt: new Date().toISOString(),
  plugins: pluginSummary
};
await fs.writeFile(path.join(outRoot, "build-report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`Built ${pluginSummary.length} plugin packages and ${sourceDirs.length} individual skill ZIPs in dist/work.`);
console.log(`Generated repo marketplace: ${path.relative(root, marketplacePath)}`);
