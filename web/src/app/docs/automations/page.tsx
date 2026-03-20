import Link from "next/link";
import automations from "@/services/automations.json";

export default function AutomationsPage() {
  return (
    <div className="max-w-4xl">
      <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">Automations</span>
      </nav>

      <div className="mb-10 panel p-8 sm:p-10">
        <div className="eyebrow mb-5">Automations</div>
        <h1 className="section-title">Recurring Codex work should have output owners and skip logic.</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          CodexKit treats automations as operational tools, not novelty demos. Every recipe should define who reads the output, when the task should stay quiet, and how to keep repeated runs from becoming background noise whether the work is engineering, finance close, hiring ops, legal intake, or weekly operating reviews.
        </p>
      </div>

      <section className="mb-12 grid gap-4 sm:grid-cols-2">
        {automations.map((recipe) => (
          <article key={recipe.name} className="panel p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-[#0f766e]">{recipe.cadence}</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{recipe.name}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{recipe.description}</p>
          </article>
        ))}
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Automation design rules</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>Define the task separately from the schedule.</li>
          <li>Be explicit about output format and destination.</li>
          <li>Add skip conditions when no meaningful change happened.</li>
          <li>Prefer inbox-ready summaries over giant generated reports.</li>
        </ul>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/docs/templates" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Templates</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Use templates to keep recurring automation output readable and consistent.</p>
        </Link>
        <Link href="/docs/playbooks" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Playbooks</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Use playbooks to refine the human-readable version of the recurring task.</p>
        </Link>
        <Link href="/docs/mcp" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">MCP</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Some automations become useful only after the right integrations exist.</p>
        </Link>
      </section>
    </div>
  );
}
