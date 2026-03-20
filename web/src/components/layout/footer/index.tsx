import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-8">
          <div>
            <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">Docs</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/docs" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Overview</Link></li>
              <li><Link href="/docs/installation" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Installation</Link></li>
              <li><Link href="/docs/modes" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Modes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">Toolkit</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/docs/skills" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Skills</Link></li>
              <li><Link href="/docs/playbooks" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Playbooks</Link></li>
              <li><Link href="/docs/automations" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Automations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">Operations</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/docs/mcp" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">MCP</Link></li>
              <li><Link href="/docs/installation" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Validate pack</Link></li>
              <li><Link href="/docs/playbooks" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Prompt patterns</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">Open source</h3>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>MIT licensed</li>
              <li>Contribution and security docs in repo root</li>
              <li>Publish-ready docs app</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} CodexKit. Built as a Codex-first open-source starter.
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Publish under your own organization and replace placeholder repository metadata before launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
