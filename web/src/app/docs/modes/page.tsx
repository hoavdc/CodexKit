import Link from "next/link";
import modes from "@/services/modes.json";

export default function ModesPage() {
  return (
    <div className="max-w-4xl">
      <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">Modes</span>
      </nav>

      <div className="mb-10 panel p-8 sm:p-10">
        <div className="eyebrow mb-5">Modes</div>
        <h1 className="section-title">Choose the operating surface before choosing the prompt.</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          CodexKit is built around the idea that most work mistakes start from using the wrong mode: drafting before clarifying the decision, reviewing without a risk model, or delegating work that should have stayed on the critical path.
        </p>
      </div>

      <section className="mb-12 grid gap-4">
        {modes.map((mode) => (
          <article key={mode.name} className="panel p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{mode.name}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{mode.description}</p>
              </div>
              <div className="rounded-full border border-border/80 bg-card/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#0f766e]">
                {mode.when}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/docs/skills" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Install skills</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Attach reusable operating knowledge to the modes your team uses most.</p>
        </Link>
        <Link href="/docs/playbooks" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Use playbooks</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Bring the same structure to ChatGPT or other non-local workflows.</p>
        </Link>
      </section>
    </div>
  );
}
