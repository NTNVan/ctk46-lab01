import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/footer";

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
      <body className="min-h-dvh flex flex-col bg-linear-to-br from-pink-100 via-blue-100 to-purple-100 text-zinc-900 antialiased transition-colors dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 dark:text-zinc-100">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 pb-24">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
