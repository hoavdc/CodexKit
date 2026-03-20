import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf2e5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1415" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CodexKit",
    template: "%s | CodexKit",
  },
  description:
    "Open-source operating kit for OpenAI Codex and ChatGPT workflows: skills, playbooks, automations, and MCP onboarding.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CodexKit",
    title: "CodexKit",
    description:
      "Open-source operating kit for OpenAI Codex and ChatGPT workflows: skills, templates, workspaces, playbooks, automations, and MCP onboarding.",
    images: [
      {
        url: "/images/codexkit-logo.png",
        width: 1600,
        height: 467,
        alt: "CodexKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodexKit",
    description:
      "Open-source operating kit for OpenAI Codex and ChatGPT workflows: skills, templates, workspaces, playbooks, automations, and MCP onboarding.",
    images: ["/images/codexkit-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
