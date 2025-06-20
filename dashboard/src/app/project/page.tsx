import { Metadata } from "next";
import { suisse } from "@/fonts/font";
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
export default function ProjectPage(){
    return(
        <main className="container mx-auto py-12 px-4">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className={`${suisse.className} text-4xl sm:text-6xl font-bold mb-4`}>
          O Projeto
        </h1>
        <p className="text-lg text-muted-foreground">
          Um projeto interdisciplinar desenvolvido pela turma de Eletromecânica, com o objetivo de unir teoria e prática através da criação de uma solução técnica real.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Objetivo Principal</h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          O principal objetivo do projeto é desenvolver uma solução funcional que envolva os três pilares do curso técnico de Eletromecânica: sistemas mecânicos, comandos elétricos e automação. A proposta foi idealizada com o intuito de resolver um problema prático simulado, utilizando conhecimento técnico adquirido ao longo do curso.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Descrição Técnica</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-4">
          O sistema desenvolvido envolve uma estrutura mecânica operada por servomotores e sensores, controlada por uma placa microcontroladora (como o ESP32). A comunicação entre o hardware e a aplicação web foi implementada via WebSocket, permitindo o monitoramento e o controle em tempo real.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground">
          A interface foi construída com React e TailwindCSS, e a autenticação dos usuários foi implementada com sistema de login seguro, permitindo que apenas usuários autorizados interajam com o sistema.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Desafios Encontrados</h2>
        <ul className="list-disc ml-6 text-muted-foreground space-y-2 text-base sm:text-lg">
          <li>Integração entre o front-end e a placa ESP32 utilizando WebSocket.</li>
          <li>Sincronização precisa dos componentes mecânicos e elétricos.</li>
          <li>Garantir segurança no acesso ao sistema.</li>
          <li>Desenvolver uma interface intuitiva e responsiva.</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Tecnologias Utilizadas</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-muted-foreground text-base sm:text-lg list-disc ml-6">
          <li>ESP32</li>
          <li>WebSocket</li>
          <li>React / Next.js</li>
          <li>TailwindCSS</li>
          <li>Node.js</li>
          <li>Controle de Servomotores</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto text-center mt-20">
        <h2 className={`${suisse.className} text-2xl sm:text-4xl font-semibold mb-4`}>
          Um projeto que une teoria, prática e inovação.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          Mais do que um simples trabalho de sala, este projeto representa nossa capacidade de transformar ideias em soluções reais.
        </p>
      </section>
    </main>
    )
}