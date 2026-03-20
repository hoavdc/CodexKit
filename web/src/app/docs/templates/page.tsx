import Link from "next/link";
import templates from "@/services/templates.json";

export default function TemplatesPage() {
  const templatesByDepartment = templates.reduce((acc, template) => {
    if (!acc[template.department]) {
      acc[template.department] = [];
    }
    acc[template.department].push(template);
    return acc;
  }, {} as Record<string, typeof templates>);

  const departmentOrder = [
    "Cross-functional",
    "Engineering",
    "Project Management",
    "Finance",
    "HR",
    "Legal",
    "Operations",
    "Marketing",
  ];

  return (
    <div className="max-w-4xl">
      <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">Templates</span>
      </nav>

      <div className="mb-10 panel p-8 sm:p-10">
        <div className="eyebrow mb-5">Templates</div>
        <h1 className="section-title">Reusable output structures for recurring work across departments.</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          Templates keep Codex outputs stable enough to reuse. Use them for steering updates, variance packs, intake summaries, KPI reviews, and campaign briefs so repeated work does not become prompt archaeology.
        </p>
      </div>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">How to use templates well</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>Start from the closest template, then remove sections your team will not maintain.</li>
          <li>Pair templates with one skill that creates the substance and one automation that handles the routine packaging.</li>
          <li>Keep the output short enough that a real operator will read it before the next meeting.</li>
        </ul>
      </section>

      <section className="mb-12 space-y-8">
        {departmentOrder.map((department) => {
          const departmentTemplates = templatesByDepartment[department];
          if (!departmentTemplates) return null;

          return (
            <div key={department}>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{department}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {departmentTemplates.map((template) => (
                  <article key={template.name} className="panel p-6">
                    <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{template.name}</code>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{template.description}</p>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/docs/workspaces" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Workspaces</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">See which starter workspace should own each template.</p>
        </Link>
        <Link href="/docs/automations" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Automations</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Wrap recurring templates in low-noise automation recipes.</p>
        </Link>
      </section>
    </div>
  );
}
