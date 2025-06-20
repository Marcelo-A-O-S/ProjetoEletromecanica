import { Metadata } from "next";
import { suisse } from "@/fonts/font";

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
    return(
        <main className="container mx-auto py-12 px-4">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className={`${suisse.className} text-4xl sm:text-6xl font-bold mb-4`}>
            Quem somos?
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Somos alunos do curso técnico em Eletromecânica da Escola Estadual Professor Gastão Valle. Este projeto é fruto do nosso aprendizado, esforço em equipe e paixão por inovação tecnológica aplicada à prática.
          </p>
        </section>
  
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 mt-12">
          <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
            <h3 className="font-semibold text-lg">Marcelo Augusto</h3>
            <p className="text-sm text-muted-foreground">Coordenador do projeto</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
            <h3 className="font-semibold text-lg">[Nome do Integrante]</h3>
            <p className="text-sm text-muted-foreground">[Função / Cargo]</p>
          </div>
        </section>
  
        <section className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className={`${suisse.className} text-2xl sm:text-4xl font-semibold mb-4`}>
            Nossa missão
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Buscamos aplicar de forma prática os conhecimentos adquiridos ao longo do curso técnico de Eletromecânica, desenvolvendo um projeto que integre mecânica, elétrica e automação para resolver desafios reais com criatividade e eficiência.
          </p>
        </section>
      </main>
    )
}