import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEKONGO DOGAFOLO | AI Financial OS",
  description: "Système financier intelligent et portfolio de SEKONGO DOGAFOLO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-background text-foreground min-h-screen flex flex-col font-sans antialiased overflow-x-hidden selection:bg-[var(--color-neon-blue)]/30">
        {children}
      </body>
    </html>
  );
}
