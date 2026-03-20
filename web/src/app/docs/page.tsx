import Link from "next/link";
import automations from "@/services/automations.json";
import modes from "@/services/modes.json";
import playbooks from "@/services/playbooks.json";
import skills from "@/services/skills.json";

export default function DocsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10 panel p-8 sm:p-10">
        <div className="eyebrow mb-5">Overview</div>
        <h1 className="section-title">CodexKit packages the parts of a strong Codex workflow that teams usually reinvent badly.</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          The kit focuses on the surfaces that matter in practice: discovery, implementation, review, delegation, recurring operational checks, and careful MCP adoption. It is meant to be installed, adapted, and published as a real open-source project.
        </p>
      </div>

      <section className="mb-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="panel p-6">
          <div className="text-3xl font-semibold">{modes.length}</div>
          <div className="mt-1 text-sm text-muted-foreground">Operating modes</div>
        </div>
        <div className="panel p-6">
          <div className="text-3xl font-semibold">{skills.length}</div>
          <div className="mt-1 text-sm text-muted-foreground">Installable skills</div>
        </div>
        <div className="panel p-6">
          <div className="text-3xl font-semibold">{playbooks.length}</div>
          <div className="mt-1 text-sm text-muted-foreground">Prompt playbooks</div>
        </div>
        <div className="panel p-6">
          <div className="text-3xl font-semibold">{automations.length}</div>
          <div className="mt-1 text-sm text-muted-foreground">Automation recipes</div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Start here</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <Link href="/docs/installation" className="panel p-6 transition-transform hover:-translate-y-0.5">
            <h3 className="text-lg font-semibold">Installation</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">Install the skills locally, validate the pack, and run the docs app.</p>
          </Link>
          <Link href="/docs/modes" className="panel p-6 transition-transform hover:-translate-y-0.5">
            <h3 className="text-lg font-semibold">Modes</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">See how Ask, Code, Review, delegation, and automations map to day-to-day work.</p>
          </Link>
          <Link href="/docs/skills" className="panel p-6 transition-transform hover:-translate-y-0.5">
            <h3 className="text-lg font-semibold">Skills</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">Browse the CodexKit skill set and understand what each one is for.</p>
          </Link>
        </div>
      </section>

      <section className="mb-12 panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Recommended rollout</h2>
        <ol className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
          <li>1. Install the local skills and make sure the pack validates cleanly.</li>
          <li>2. Standardize one planning playbook and one review playbook before adding more surface area.</li>
          <li>3. Introduce automations only after you can define the output owner and a low-noise success condition.</li>
        </ol>
      </section>

      <section className="mb-12 grid gap-4 sm:grid-cols-2">
        <Link href="/docs/playbooks" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">Playbooks</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Portable prompts for Ask, Code, Review, Debug, Delegate, and Release work.</p>
        </Link>
        <Link href="/docs/mcp" className="panel p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="text-lg font-semibold">MCP guidance</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">Add integrations in a way the team can actually operate and maintain.</p>
        </Link>
      </section>
    </div>
  );
}
