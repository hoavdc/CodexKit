import Link from "next/link";
import workspaces from "@/services/workspaces.json";

export default function WorkspacesPage() {
  return (
    <div className="max-w-4xl">
      <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">Workspaces</span>
      </nav>

      <div className="mb-10 panel p-8 sm:p-10">
        <div className="eyebrow mb-5">Starter Workspaces</div>
        <h1 className="section-title">Department starter kits so teams do not begin with an empty folder and a vague prompt.</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          Each workspace gives a function-specific operating spine: the core files worth maintaining, the rhythm those files support, and the skill mix that makes the workspace sustainable instead of decorative.
        </p>
      </div>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Adoption rule of thumb</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>Copy the closest workspace, then delete the files your team will not maintain in the next 30 days.</li>
          <li>Anchor each workspace with one high-reasoning skill and one routine automation skill.</li>
          <li>Use templates for recurring outputs instead of packing every format rule into the prompt itself.</li>
        </ul>
      </section>

      <section className="mb-12 grid gap-4 sm:grid-cols-2">
        {workspaces.map((workspace) => (
          <article key={workspace.slug} className="panel p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{workspace.name}</h2>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#0f766e]">{workspace.audience}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{workspace.description}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Includes: {workspace.includes}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/docs/skills" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Skills</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Pair each workspace with the skills that actually power the work.</p>
        </Link>
        <Link href="/docs/templates" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Templates</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Keep recurring outputs stable so the workspace stays useful over time.</p>
        </Link>
      </section>
    </div>
  );
}
