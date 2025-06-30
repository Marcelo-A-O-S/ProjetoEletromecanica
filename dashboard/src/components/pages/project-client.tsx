'use client'
import { suisse } from "@/fonts/font";
import { Code, Cpu, Database, MonitorSmartphone, Rocket, Settings2 } from "lucide-react";
import { motion } from "motion/react"
export default function ProjectClient(){
    return(
    <main className="container mx-auto py-12 px-4 space-y-20">
      
    <section className="text-center max-w-4xl h-screen flex flex-col justify-center mx-auto">
      <motion.h1 
      initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
      className={`${suisse.className} text-4xl sm:text-6xl font-bold mb-4`}>
        Carregadeira Automatizada
      </motion.h1>
      <motion.p 
      initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
      className="text-muted-foreground text-lg">
        Integração entre hardware e software utilizando <strong>ESP32, NestJS, Next.js e C++</strong>. Um projeto interdisciplinar desenvolvido pela turma de Eletromecânica, com o objetivo de unir teoria e prática através da criação de uma solução técnica real.
      </motion.p>
    </section>

    
    <section className="grid md:grid-cols-2 gap-8 max-w-5xl h-screen items-center mx-auto">
      <motion.div
      initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-2">📚 Sobre o Projeto</h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Esta carregadeira automatizada é controlada via ESP32 e oferece funções de movimentação frontal, traseira, rotação e acionamento da pá — tudo operado remotamente por uma aplicação web moderna e conectada a uma API própria.
        </p>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
      className="border rounded-xl p-6 bg-muted/30 shadow-sm">
        <h3 className="font-semibold text-lg mb-2">⚙️ Destaques Técnicos:</h3>
        <ul className="list-disc ml-5 text-muted-foreground space-y-1 text-base">
          <li>Movimentação da pá via MG996R</li>
          <li>Direção por MG90S</li>
          <li>Monitoramento via WebSocket</li>
          <li>Frontend reativo com Tailwind</li>
        </ul>
      </motion.div>
    </section>

   
    <section className="max-w-5xl mx-auto h-screen space-y-8">
      <motion.h2 initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-2xl font-semibold mb-4">🧰 Tecnologias Utilizadas</motion.h2>

      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TechCard icon={<Cpu className="w-6 h-6 text-primary" />} title="ESP32" description="Microcontrolador Wi-Fi/Bluetooth que comanda todos os atuadores e sensores." />
        <TechCard icon={<Code className="w-6 h-6 text-primary" />} title="C++ / PlatformIO" description="Firmware embarcado, desenvolvido com PlatformIO no VS Code." />
        <TechCard icon={<MonitorSmartphone className="w-6 h-6 text-primary" />} title="Next.js + TailwindCSS" description="Frontend moderno e responsivo para controle e visualização dos dados." />
        <TechCard icon={<Settings2 className="w-6 h-6 text-primary" />} title="NestJS + TypeScript" description="Backend robusto com endpoints REST e organização modular." />
        <TechCard icon={<Database className="w-6 h-6 text-primary" />} title="PostgreSQL" description="Banco de dados relacional para armazenamento de informações operacionais." />
        <TechCard icon={<Rocket className="w-6 h-6 text-primary" />} title="Integração Modular" description="Frontend, backend e firmware conectados via WebSocket e API REST." />
      </motion.div>
    </section>

    <section className="max-w-5xl mx-auto h-screen">
      <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-2xl font-semibold mb-4">🎯 Objetivos do Projeto</motion.h2>
      <motion.ul 
      initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
      className="list-disc ml-6 text-muted-foreground space-y-2 text-base sm:text-lg">
        <li>Aplicar conhecimentos teóricos de forma prática.</li>
        <li>Projetar um sistema embarcado completo e funcional.</li>
        <li>Desenvolver uma interface de automação e monitoramento.</li>
        <li>Integrar eletrônica, mecânica e programação.</li>
        <li>Fomentar o trabalho em equipe e gestão de projeto.</li>
      </motion.ul>
    </section>
    <section className="max-w-5xl mx-auto space-y-12">
      <SetupBlock
        title="🚀 Firmware (ESP32)"
        steps={[
          "Instale o VS Code e a extensão PlatformIO IDE",
          "Acesse a pasta iot/carregadeira/",
          "Conecte a placa ESP32 via USB",
          "Compile e envie o código: `pio run --target upload`",
          "Monitore com: `pio device monitor`",
        ]}
      />
      <SetupBlock
        title="🌐 Backend (NestJS)"
        steps={[
          "Acesse a pasta back/",
          "Instale as dependências: `npm install`",
          "Inicie a API: `npm run start:debug`",
          "API disponível em: http://localhost:3000",
        ]}
      />
      <SetupBlock
        title="🔠 Frontend (Next.js + TailwindCSS)"
        steps={[
          "Acesse a pasta dashboard/",
          "Instale as dependências: `npm install`",
          "Inicie a aplicação: `npm run dev`",
          "Interface disponível em: http://localhost:3001",
        ]}
      />
    </section>
  </main>
);
}

// Card de Tecnologia
function TechCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
return (
  <div className="border rounded-lg p-5 bg-card shadow hover:shadow-md transition">
    <div className="flex items-center space-x-3 mb-2">
      {icon}
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);
}

// Bloco de Setup
function SetupBlock({ title, steps }: { title: string; steps: string[] }) {
return (
  <motion.div
  initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="bg-muted rounded-md px-4 py-4 space-y-2 text-sm text-muted-foreground">
      {steps.map((step, i) => (
        <pre key={i} className="whitespace-pre-wrap">{step}</pre>
      ))}
    </div>
  </motion.div>
);
}