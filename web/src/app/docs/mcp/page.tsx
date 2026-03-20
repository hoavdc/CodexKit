import Link from "next/link";
import guides from "@/services/mcp.json";

export default function McpPage() {
  return (
    <div className="max-w-4xl">
      <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">MCP</span>
      </nav>

      <div className="mb-10 panel p-8 sm:p-10">
        <div className="eyebrow mb-5">MCP</div>
        <h1 className="section-title">Adopt integrations by workflow value, not by how many servers you can add.</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          CodexKit keeps MCP guidance lightweight on purpose. The repo gives you decision frameworks and rollout notes, while avoiding brittle public examples that depend on team-specific secrets or unstable configs.
        </p>
      </div>

      <section className="mb-12 grid gap-4 sm:grid-cols-2">
        {guides.map((guide) => (
          <article key={guide.name} className="panel p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{guide.name}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{guide.description}</p>
          </article>
        ))}
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Rollout checklist</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>Start from a repeated developer pain point.</li>
          <li>Prefer read-only scopes first.</li>
          <li>Document ownership, secrets, and failure handling.</li>
          <li>Remove unused servers instead of letting them accumulate.</li>
        </ul>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/docs/automations" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Automations</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Recurring tasks become better once the right data surfaces are available.</p>
        </Link>
        <Link href="/docs/installation" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Installation</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Install the skill pack first, then phase in integrations deliberately.</p>
        </Link>
      </section>
    </div>
  );
}
