'use client'
import { suisse } from "@/fonts/font";
import { motion } from "motion/react"
export function HomeClient() {
    return (
        <main className="flex-1 mx-auto container py-6">
            <section className="h-screen flex flex-col justify-center ">
                <div className="flex flex-col p-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`${suisse.className} text-4xl sm:text-6xl lg:text-9xl font-bold`}
                    >
                        Projeto
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl lg:text-9xl font-bold text-primary"
                    >
                        Eletromecânica
                    </motion.h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="p-4">
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl ">Uma iniciativa prática e inovadora desenvolvida pela turma do curso técnico de Eletromecânica da Escola Estadual Professor Gastão Valle.</p>
                </motion.div>
            </section>

            <section className="h-screen flex flex-col justify-center p-4">
                <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className={`${suisse.className} text-2xl sm:text-6xl font-semibold mb-4`}>Nosso Objetivo</motion.h2>
                <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-base sm:text-lg text-muted-foreground max-w-3xl ">
                    Criar uma solução real, funcional e aplicada, unindo conhecimentos de mecânica, elétrica e automação para resolver um desafio técnico. O projeto foi idealizado como parte da disciplina de Projetos e reflete o aprendizado técnico adquirido ao longo do curso.
                </motion.p>
            </section>
        </main>
    )
}