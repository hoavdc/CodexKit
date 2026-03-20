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
    "Onboarding & Discovery",
    "Planning & Delivery",
    "Quality & Review",
    "Operations & Integrations",
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
        <h1 className="section-title">Installable knowledge for Codex, not just repo-local notes.</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          Each skill is a focused operating pattern with clear scope. The point is not to mimic every possible specialty, but to sharpen the flows that repeatedly matter in production software work.
        </p>
      </div>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">How CodexKit skills are meant to be used</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>Install them into ~/.codex/skills so Codex can discover them locally.</li>
          <li>Keep each skill narrow enough that the description clearly signals when it should apply.</li>
          <li>Pair local skills with repo templates and playbooks instead of burying every rule inside one giant prompt.</li>
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
└── codexkit-execution-planner/
    ├── SKILL.md
    └── references/
        └── plan-template.md`}</code>
        </pre>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/docs/modes" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Modes</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">See when a skill should support Ask, Code, Review, or delegated work.</p>
        </Link>
        <Link href="/docs/playbooks" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Playbooks</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Pair local skills with prompts that are easy for the whole team to reuse.</p>
        </Link>
      </section>
    </div>
  );
}
