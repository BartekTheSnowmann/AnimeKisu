import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "./embla.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/AuthProvider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AnimeKisu",
  description: "Find Something For Yourself",
  openGraph: {
    images: ["@/app/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "mx-auto min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Toaster richColors />
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
