import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Container from "@/components/container";


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: "Painel de controle",
  description: "Painel de gerenciamento do projeto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${inter.className}` }
      >
        <Container>
        {children}
        </Container>
      </body>
    </html>
  );
}
