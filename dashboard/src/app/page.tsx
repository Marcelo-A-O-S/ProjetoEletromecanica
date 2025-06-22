
import type { Metadata } from "next";
import { HomeClient } from "@/components/pages/home-client";
export const metadata: Metadata = {
  title: {
    default: "Projeto Eletromecânica 2024",
    template: "%s | Projeto Eletromecânica 2024",
  },
  description: "Projeto desenvolvido para disciplina de projetos do colégio Escola Estadual Professor Gastão Valle.",
  authors: [{
    name: 'Marcelo Augusto de Oliveira Soares', url: 'https://github.com/Marcelo-A-O-S'
  }],
  generator: 'Next.js',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  referrer: 'origin-when-cross-origin',
  keywords:
    [
      'escola estadual professor gastão valle',
      'noturno',
      'home',
    ],
  alternates: {
    canonical: "https://projeto-eletromecanica-2024.vercel.app/",
    languages: {
      pt: "https://projeto-eletromecanica-2024.vercel.app/",
    }
  },
  openGraph: {
    siteName: "Projeto Eletromecânica 2024",
    locale: 'pt_BR',
    title: "Projeto Eletromecânica 2024",
    url: "https://projeto-eletromecanica-2024.vercel.app/",
    description: "Projeto desenvolvido para disciplina de projetos do colégio Escola Estadual Professor Gastão Valle.",
    images: [
      {
        url: "https://projeto-eletromecanica-2024.vercel.app/1.png",
        width: 500,
        height: 500,
        alt: "Projeto de Eletromecânica",
      },
    ],
    type: 'website',
  },
  category: 'education',
  creator: "Marcelo Augusto",
};
export default function Home() {
  return <HomeClient />
}
