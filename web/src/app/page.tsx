import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Boxes,
  Clock3,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import automations from "@/services/automations.json";
import modes from "@/services/modes.json";
import playbooks from "@/services/playbooks.json";
import skills from "@/services/skills.json";

const pillars = [
  {
    icon: Bot,
    title: "Codex-native skills",
    body: "Install the pack into your local Codex setup and keep the behavior close to real software delivery work.",
  },
  {
    icon: Workflow,
    title: "High-signal playbooks",
    body: "Prompt patterns for Ask, Code, Review, and Delegate flows without generic assistant fluff.",
  },
  {
    icon: ShieldCheck,
    title: "Operational guardrails",
    body: "Automation recipes, release templates, and MCP guidance focused on control, not novelty.",
  },
];

const rollout = [
  "Install the skills into ~/.codex/skills and restart Codex.",
  "Adopt one playbook for planning and one for review.",
  "Introduce automations only after output shape and owners are clear.",
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-16 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="panel relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.18),transparent_38%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-7">
              <div className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" />
                Open-source operating kit for OpenAI Codex and ChatGPT
              </div>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                  CodexKit turns prompt chaos into a repeatable engineering workflow.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  A Codex-first starter repo with installable skills, review playbooks, automation recipes, and MCP onboarding guides for teams that want a sharper engineering operating model.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Read the docs
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/docs/installation"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  Install the skill pack
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-border/80 bg-card/70 p-5">
                  <div className="text-3xl font-semibold">{skills.length}</div>
                  <div className="mt-1 text-sm text-muted-foreground">Codex skills</div>
                </div>
                <div className="rounded-3xl border border-border/80 bg-card/70 p-5">
                  <div className="text-3xl font-semibold">{playbooks.length}</div>
                  <div className="mt-1 text-sm text-muted-foreground">Prompt playbooks</div>
                </div>
                <div className="rounded-3xl border border-border/80 bg-card/70 p-5">
                  <div className="text-3xl font-semibold">{automations.length}</div>
                  <div className="mt-1 text-sm text-muted-foreground">Automation recipes</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-border/80 bg-[#161617] p-6 text-[#f8f3ea] shadow-[0_25px_80px_-30px_rgba(15,23,42,0.7)]">
                <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#c5b89b]">
                  <Radar className="h-3.5 w-3.5" />
                  Starter commands
                </div>
                <pre className="overflow-x-auto text-sm leading-7 text-[#f8f3ea]">
                  <code>{`pwsh ./scripts/install-skills.ps1
node ./scripts/validate-pack.mjs
npm --prefix web run dev`}</code>
                </pre>
              </div>
              <div className="rounded-[28px] border border-border/80 bg-card/80 p-6">
                <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  <Clock3 className="h-3.5 w-3.5" />
                  Suggested rollout
                </div>
                <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                  {rollout.map((step) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0f766e]" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article key={pillar.title} className="panel p-7">
                <div className="mb-5 inline-flex rounded-2xl border border-border/70 bg-card/70 p-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.body}</p>
              </article>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel p-8">
            <div className="eyebrow mb-5">
              <Boxes className="h-3.5 w-3.5" />
              Codex operating model
            </div>
            <h2 className="section-title">CodexKit starts with how Codex actually gets used.</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Instead of inventing fantasy agent hierarchies, the kit centers the real working surfaces teams depend on: discovery, implementation, review, bounded delegation, and recurring background work.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {modes.map((mode) => (
              <article key={mode.name} className="panel p-6">
                <h3 className="text-xl font-semibold">{mode.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{mode.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#0f766e]">
                  Best for: {mode.when}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="panel p-8">
            <div className="eyebrow mb-5">What ships</div>
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-semibold">Installable assets for Codex users</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Skills live in plain folders with SKILL.md, references, and reusable guidance that can be installed into the local Codex environment.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Portable workflows for ChatGPT users</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Playbooks and templates work even when local skill installation is not available, which keeps the repo useful across the wider OpenAI workflow surface.
                </p>
              </div>
            </div>
          </div>
          <div className="panel p-8">
            <div className="eyebrow mb-5">Explore next</div>
            <div className="grid gap-4">
              <Link href="/docs/skills" className="rounded-3xl border border-border/80 bg-card/70 p-5 transition-transform hover:-translate-y-0.5">
                <div className="text-lg font-semibold">Skills</div>
                <p className="mt-2 text-sm text-muted-foreground">Browse the installable CodexKit skill pack.</p>
              </Link>
              <Link href="/docs/playbooks" className="rounded-3xl border border-border/80 bg-card/70 p-5 transition-transform hover:-translate-y-0.5">
                <div className="text-lg font-semibold">Playbooks</div>
                <p className="mt-2 text-sm text-muted-foreground">See how Ask, Code, Review, and Delegate prompts are structured.</p>
              </Link>
              <Link href="/docs/mcp" className="rounded-3xl border border-border/80 bg-card/70 p-5 transition-transform hover:-translate-y-0.5">
                <div className="text-lg font-semibold">MCP</div>
                <p className="mt-2 text-sm text-muted-foreground">Adopt integrations deliberately instead of bolting on every server.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
