import type { Metadata } from "next";
import DocsSidebar from "@/components/docs/sidebar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Documentation for CodexKit: skills, modes, playbooks, automations, and MCP onboarding.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="flex gap-8 lg:gap-12">
          <aside className="hidden lg:block w-64 shrink-0 sticky top-[57px] h-[calc(100vh-3.5rem)] overflow-y-auto py-8 scrollbar-thin">
            <DocsSidebar />
          </aside>

          <main className="flex-1 min-w-0 py-8 lg:py-10 max-w-4xl">
            {children}
          </main>

          <aside className="hidden xl:block w-64 shrink-0 sticky top-[57px] h-[calc(100vh-3.5rem)] overflow-y-auto py-8 scrollbar-thin">
            <div className="panel p-5 text-sm">
              <div className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                Toolkit Map
              </div>
              <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <p>Start with installation, then pick the mode your team uses most.</p>
                <p>Skills are for local Codex installs.</p>
                <p>Playbooks and templates stay portable for ChatGPT-heavy teams.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
