import "./globals.css";

import { Inter } from 'next/font/google';
import Container from "@/components/container";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: false
});



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
        <Analytics/>
        <Container>
        {children}
        </Container>
      </body>
    </html>
  );
}
