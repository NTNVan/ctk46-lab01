import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Vân Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="min-h-dvh bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 text-zinc-900 antialiased transition-colors dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 dark:text-zinc-100">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
