
import type { Metadata } from "next";
import {  HomeClient} from "@/components/pages/home-client";
export const metadata: Metadata = {
  title: {
    default: "Projeto Eletromecânica 2024",
    template: "%s | Projeto Eletromecânica 2024",
  },
  description: "Projeto desenvolvido para disciplina de projetos do colégio Escola Estadual Professor Gastão Valle.",
  authors: [{
    name: 'Marcelo Augusto de Oliveira Soares'
  }]
};
export default function Home() {
  return <HomeClient/>
}
