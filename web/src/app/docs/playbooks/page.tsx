import Link from "next/link";
import playbooks from "@/services/playbooks.json";

export default function PlaybooksPage() {
  return (
    <div className="max-w-4xl">
      <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">Playbooks</span>
      </nav>

      <div className="mb-10 panel p-8 sm:p-10">
        <div className="eyebrow mb-5">Playbooks</div>
        <h1 className="section-title">Portable prompts for teams that need Codex discipline everywhere.</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          Playbooks are copy-ready prompt structures. They complement local skills and keep the operating model portable across ChatGPT, Code Review, and other places where you still need the same operating standard.
        </p>
      </div>

      <section className="mb-12 grid gap-4 sm:grid-cols-2">
        {playbooks.map((playbook) => (
          <article key={playbook.name} className="panel p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-[#0f766e]">{playbook.surface}</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{playbook.name}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{playbook.description}</p>
          </article>
        ))}
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">What a good playbook does</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>makes the expected output explicit</li>
          <li>defines the lens, such as review versus execution</li>
          <li>reduces back-and-forth by naming constraints up front</li>
          <li>stays short enough that contributors will actually use it</li>
        </ul>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/docs/automations" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Automations</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Turn repeated playbook patterns into low-noise recurring tasks.</p>
        </Link>
        <Link href="/docs/mcp" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">MCP</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Add integrations only after the playbook and ownership are clear.</p>
        </Link>
      </section>
    </div>
  );
}
