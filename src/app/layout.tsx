import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English PBL Showcase | Section O1",
  description:
    "Showcasing the English Project Based Learning presentations from Section O1, Room 822. Faculty: Dr. B. Monika Nair.",
  keywords: ["english pbl", "presentations", "section o1"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex flex-col min-h-screen relative overflow-hidden bg-[var(--bg-base)]">
          {/* subtle background glow effects */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"></div>
          <main className="flex-1 min-w-0 z-10 w-full max-w-7xl mx-auto p-6 md:p-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
