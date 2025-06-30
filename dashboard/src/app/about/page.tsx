import { Metadata } from "next";

import AboutClient from "@/components/pages/about-client";
export const metadata: Metadata = {
    title: {
      default: "Sobre nós",
      template: "%s | Sobre nós",
    },
    description: "Sobre a equipe responsavel pela construção do projeto.",
    authors: [{
      name: 'Marcelo Augusto de Oliveira Soares'
    }]
  };
export default function AboutPage(){
    return <AboutClient/>
}