import Link from "next/link";
import MobileMenu from "@/components/layout/header/components/mobile-menu";
import SearchDialog from "@/components/layout/header/components/search-dialog";
import ThemeToggle from "@/components/layout/header/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex h-14 items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <div className="lg:hidden">
              <MobileMenu />
            </div>

            <Link href="/" className="shrink-0 rounded-full border border-border/80 bg-card/75 px-3 py-1.5 text-sm font-semibold">
              CodexKit
            </Link>

            <nav className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/docs" className="rounded-full px-3 py-1.5 hover:bg-card/70 hover:text-foreground">
                Docs
              </Link>
              <Link href="/docs/skills" className="rounded-full px-3 py-1.5 hover:bg-card/70 hover:text-foreground">
                Skills
              </Link>
              <Link href="/docs/playbooks" className="rounded-full px-3 py-1.5 hover:bg-card/70 hover:text-foreground">
                Playbooks
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden md:block w-64">
              <SearchDialog />
            </div>
            <div className="md:hidden">
              <SearchDialog />
            </div>
            <Link href="/docs/installation" className="hidden sm:block">
              <Button className="rounded-full">
                Install
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
