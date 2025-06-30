import { Metadata } from "next";
import { suisse } from "@/fonts/font";
import ProjectClient from "@/components/pages/project-client";
export const metadata: Metadata = {
  title: {
    default: "Projeto",
    template: "%s | Projeto",
  },
  description: "Detalhes sobre o projeto desenvolvido pelos alunos de Eletromecânica.",
  authors: [{
    name: 'Marcelo Augusto de Oliveira Soares'
  }]
};
export default function ProjectPage() {
  return <ProjectClient/>
}