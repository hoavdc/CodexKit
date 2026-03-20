import Link from "next/link";

export default function InstallationPage() {
  return (
    <div className="max-w-4xl">
      <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">Installation</span>
      </nav>

      <div className="mb-10 panel p-8 sm:p-10">
        <div className="eyebrow mb-5">Installation</div>
        <h1 className="section-title">Install CodexKit locally, then publish the docs when the pack matches your workflow.</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          CodexKit follows the official Codex Skills layout: each skill ships with <code>SKILL.md</code>, optional <code>agents/openai.yaml</code>, and standard <code>.agents/skills</code> discovery paths. The pack now covers engineering, high-reasoning work, low-reasoning office automation, department templates, and starter workspaces across project, finance, legal, operations, HR, strategy, analytics, marketing, and CX workflows.
        </p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Reference:{" "}
          <a
            href="https://developers.openai.com/codex/skills"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-50 dark:decoration-zinc-700"
          >
            OpenAI Codex Skills documentation
          </a>
        </p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          The docs app and local verification flow target Node <code>20.9+</code> and npm <code>10+</code>.
        </p>
      </div>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Fastest path for non-coders</h2>
        <ol className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
          <li>1. Open the GitHub Releases page and download <code>codexkit-starter-pack-v0.4.0.zip</code>.</li>
          <li>2. Unzip the package anywhere on your machine.</li>
          <li>3. On Windows, double-click <code>START-HERE-WINDOWS.cmd</code>. On macOS or Linux, run <code>bash ./START-HERE.sh</code>.</li>
          <li>4. Restart Codex and type <code>/skills</code> to confirm all 36 skills appear.</li>
          <li>5. Open <code>skill-finder.md</code> to browse skills by situation.</li>
          <li>6. Optional: create a starter workspace with <code>CREATE-WORKSPACE-WINDOWS.cmd</code> or <code>bash ./CREATE-WORKSPACE.sh</code>.</li>
        </ol>
        <p className="mt-5 text-sm leading-7 text-muted-foreground">
          <strong>Prerequisite:</strong> Codex CLI must be installed. If not, run <code>npm install -g @openai/codex</code> first. The START-HERE scripts will detect and notify you if Codex is missing.
        </p>
      </section>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="panel p-6">
          <h2 className="text-xl font-semibold">Windows PowerShell</h2>
          <pre className="mt-4 overflow-x-auto rounded-3xl bg-[#161617] p-5 text-sm leading-7 text-[#f8f3ea]">
            <code>{`.\\scripts\\install-skills.ps1
.\\scripts\\install-skills.ps1 -Destination .\\.agents\\skills
.\\scripts\\quick-start.ps1 -List
.\\scripts\\quick-start.ps1 -Starter project-management-office -Destination .\\acme-pmo
node ./scripts/validate-pack.mjs`}</code>
          </pre>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            The default command installs into <code>$HOME/.agents/skills</code>. The second command installs repo-local skills into <code>.agents/skills</code>.
          </p>
        </div>
        <div className="panel p-6">
          <h2 className="text-xl font-semibold">macOS / Linux</h2>
          <pre className="mt-4 overflow-x-auto rounded-3xl bg-[#161617] p-5 text-sm leading-7 text-[#f8f3ea]">
            <code>{`bash ./scripts/install-skills.sh
CODEXKIT_DESTINATION=./.agents/skills bash ./scripts/install-skills.sh
bash ./scripts/quick-start.sh --list
bash ./scripts/quick-start.sh --starter finance-performance-desk --destination ./acme-finance
node ./scripts/validate-pack.mjs`}</code>
          </pre>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Use <code>--force</code> or <code>CODEXKIT_FORCE=1</code> only when you want to overwrite an existing installed skill folder.
          </p>
        </div>
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Release packaging</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>GitHub tags matching <code>v*</code> trigger the release workflow.</li>
          <li>Each release publishes both a full source archive and a starter pack archive meant for end users.</li>
          <li>The starter pack now includes skills, templates, workspaces, playbooks, automations, MCP guides, scripts, and quick-start launcher files.</li>
        </ul>
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Discovery paths</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>Codex scans <code>.agents/skills</code> from your current working directory up to the repository root.</li>
          <li>Codex also scans <code>$HOME/.agents/skills</code> for user-wide skills that should follow you across repos.</li>
          <li>If a newly installed or updated skill does not appear, restart Codex.</li>
        </ul>
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Skill structure</h2>
        <pre className="mt-5 overflow-x-auto rounded-3xl bg-[#161617] p-5 text-sm leading-7 text-[#f8f3ea]">
          <code>{`my-skill/
|-- SKILL.md
|-- agents/
|   \`-- openai.yaml
|-- references/
|-- scripts/
\`-- assets/`}</code>
        </pre>
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Starter workspace adoption</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>Choose the closest starter in <code>workspaces/</code> instead of beginning from an empty folder.</li>
          <li>Keep the structure, but rename files and sections to match your team’s actual cadence and terminology.</li>
          <li>Pair the workspace with one high-reasoning skill and one routine automation skill before adding more assets.</li>
        </ul>
      </section>

      <section className="mb-12 grid gap-4 sm:grid-cols-2">
        <div className="panel p-6">
          <h3 className="text-lg font-semibold">For Codex users</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Use <code>$HOME/.agents/skills</code> for personal defaults and <code>.agents/skills</code> when a team wants repository-scoped skill discovery that travels with the codebase.
          </p>
        </div>
        <div className="panel p-6">
          <h3 className="text-lg font-semibold">For ChatGPT users</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Use playbooks, automations, templates, and starter workspaces as copy-ready assets. The project still adds value even when local skill installation is unavailable.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/docs/workspaces" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Workspaces</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Choose the starter kit that matches your department.</p>
        </Link>
        <Link href="/docs/modes" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Modes</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Choose the right operating surface before adding more process.</p>
        </Link>
        <Link href="/docs/skills" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Skills</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Inspect the skill pack you just installed.</p>
        </Link>
      </section>
    </div>
  );
}
