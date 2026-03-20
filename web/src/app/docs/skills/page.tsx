import Link from "next/link";
import skillsData from "@/services/skills.json";

export default function SkillsPage() {
  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);

  const categoryOrder = [
    "Engineering Delivery",
    "Knowledge Work & Communication",
    "Routine Automation & Office Ops",
    "Project & Portfolio Management",
    "Finance, Legal & Risk",
    "People, Operations & Supply Chain",
    "Strategy, Analytics & Growth",
    "Data & Analytics",
    "IT & Admin",
    "Training & Development",
    "Cross-Functional",
  ];

  return (
    <div className="max-w-4xl">
      <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">Skills</span>
      </nav>

      <div className="mb-10 panel p-8 sm:p-10">
        <div className="eyebrow mb-5">Skills</div>
        <h1 className="section-title">Installable knowledge for engineering, high-reasoning work, and routine office operations.</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          Each skill is a focused operating pattern with clear scope. The point is not to mimic every possible specialty, but to sharpen the work that repeatedly matters across delivery, project management, finance, legal, people, operations, analytics, marketing, customer outcomes, and everyday office routines.
        </p>
      </div>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">How CodexKit skills are meant to be used</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>Install them into <code>$HOME/.agents/skills</code> for personal use, or check selected skills into <code>.agents/skills</code> for repository scope.</li>
          <li>Each skill keeps required instructions in <code>SKILL.md</code> and ships optional <code>agents/openai.yaml</code> metadata for better Codex app presentation.</li>
          <li>Keep each skill narrow enough that the description clearly signals when it should apply, then pair it with playbooks and templates instead of one giant prompt.</li>
        </ul>
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Two skill lanes</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>High-reasoning skills are for framing, analysis, governance, risk, tradeoffs, and decision support.</li>
          <li>Low-reasoning skills are for repetitive packaging work such as triage, meeting actions, follow-ups, intake routing, and calendar or KPI assembly.</li>
          <li>The strongest workflow usually pairs one from each lane, then adds templates or automations around the output.</li>
        </ul>
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Invocation model</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>Use <code>/skills</code> or type <code>$</code> in Codex CLI and IDE flows when you want to invoke a specific skill directly.</li>
          <li>Implicit invocation depends on the skill <code>description</code>, so narrow descriptions matter more than clever naming.</li>
          <li><code>codexkit-cloud-delegation</code>, <code>codexkit-automation-designer</code>, <code>codexkit-contract-risk-review</code>, and <code>codexkit-compliance-gap-review</code> are configured as explicit-only to reduce accidental activation.</li>
        </ul>
      </section>

      <section className="mb-12 space-y-8">
        {categoryOrder.map((category) => {
          const categorySkills = skillsByCategory[category];
          if (!categorySkills) return null;

          return (
            <div key={category}>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{category}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {categorySkills.map((skill) => (
                  <article key={skill.name} className="panel p-6">
                    <code className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{skill.name}</code>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{skill.description}</p>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Skill structure</h2>
        <pre className="mt-5 overflow-x-auto rounded-3xl bg-[#161617] p-5 text-sm leading-7 text-[#f8f3ea]">
          <code>{`skills/
\`-- codexkit-project-governance-pilot/
    |-- SKILL.md
    \`-- agents/
        \`-- openai.yaml`}</code>
        </pre>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/docs/modes" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Modes</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">See when a skill should support clarify, execute, review, decision, or delegated work.</p>
        </Link>
        <Link href="/docs/playbooks" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Playbooks</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Pair local skills with prompts that are easy for the whole team to reuse.</p>
        </Link>
      </section>
    </div>
  );
}
