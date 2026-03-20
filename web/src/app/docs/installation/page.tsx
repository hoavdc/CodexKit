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
          Codex users get the most value by copying the skill folders into ~/.codex/skills. ChatGPT-heavy teams can still use the playbooks, templates, and automation recipes directly from the repo.
        </p>
      </div>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="panel p-6">
          <h2 className="text-xl font-semibold">Windows PowerShell</h2>
          <pre className="mt-4 overflow-x-auto rounded-3xl bg-[#161617] p-5 text-sm leading-7 text-[#f8f3ea]">
            <code>{`pwsh ./scripts/install-skills.ps1
node ./scripts/validate-pack.mjs`}</code>
          </pre>
        </div>
        <div className="panel p-6">
          <h2 className="text-xl font-semibold">macOS / Linux</h2>
          <pre className="mt-4 overflow-x-auto rounded-3xl bg-[#161617] p-5 text-sm leading-7 text-[#f8f3ea]">
            <code>{`bash ./scripts/install-skills.sh
node ./scripts/validate-pack.mjs`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Repo structure</h2>
        <pre className="mt-5 overflow-x-auto rounded-3xl bg-[#161617] p-5 text-sm leading-7 text-[#f8f3ea]">
          <code>{`CodexKit/
├── skills/
├── playbooks/
├── automations/
├── mcp/
├── templates/
├── scripts/
└── web/`}</code>
        </pre>
      </section>

      <section className="mb-12 grid gap-4 sm:grid-cols-2">
        <div className="panel p-6">
          <h3 className="text-lg font-semibold">For Codex users</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Install the skills directory into the local Codex home, then let the skill descriptions route naturally or invoke them when you need a specific workflow.
          </p>
        </div>
        <div className="panel p-6">
          <h3 className="text-lg font-semibold">For ChatGPT users</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Use playbooks, automations, and templates as copy-ready assets. The project still adds value even when local skill installation is unavailable.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
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
